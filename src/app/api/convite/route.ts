import { NextResponse } from "next/server";

export interface ConvitePayload {
  nome: string;
  empresaCanal: string;
  email: string;
  whatsapp: string;
  tipoEvento: string;
  cidadeEstado: string;
  dataPrevista?: string;
  publicoEstimado: string;
  motivoConvite: string;
  consentimentoLgpd: boolean;
  honeypot?: string; // proteção anti-bot invisível
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConvitePayload;

    // 1. Verificação Honeypot (se o bot preencheu o campo invisível, rejeita silenciosamente)
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: "Recebido com sucesso." });
    }

    // 2. Validação de campos obrigatórios
    if (!body.nome || !body.email || !body.whatsapp || !body.tipoEvento || !body.cidadeEstado || !body.consentimentoLgpd) {
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos obrigatórios e aceite a política de privacidade." },
        { status: 400 }
      );
    }

    // 3. Validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    // 4. Integração com Google Sheets (Google Apps Script Webhook)
    // A URL da planilha é configurada em GOOGLE_SHEETS_WEBHOOK_URL nas variáveis de ambiente da Vercel
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { error: "O recebimento de convites está temporariamente indisponível. Tente novamente mais tarde." },
        { status: 503 }
      );
    }

    {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(10000),
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            nome: body.nome,
            empresaCanal: body.empresaCanal,
            email: body.email,
            whatsapp: body.whatsapp,
            tipoEvento: body.tipoEvento,
            cidadeEstado: body.cidadeEstado,
            dataPrevista: body.dataPrevista || "Não especificada",
            publicoEstimado: body.publicoEstimado,
            motivoConvite: body.motivoConvite,
            origem: "PitchFlow Movement Site Oficial",
          }),
        });

        if (!response.ok) {
          console.error("Erro na resposta do Google Sheets Webhook:", response.status);
          return NextResponse.json(
            { error: "Não foi possível salvar seu convite. Tente novamente em alguns instantes." },
            { status: 502 }
          );
        }
      } catch (err) {
        console.error("Falha ao conectar ao Google Sheets Webhook:", err);
        return NextResponse.json(
          { error: "Não foi possível salvar seu convite. Tente novamente em alguns instantes." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Convite enviado com sucesso! Nossa equipe analisará e retornará em breve.",
      sheetsConnected: Boolean(webhookUrl),
    });
  } catch (error) {
    console.error("Erro interno no processamento do convite:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno ao processar seu convite. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
