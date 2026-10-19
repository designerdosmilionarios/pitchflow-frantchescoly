# PitchFlow Movement

Site institucional de Frantchescoly Vilella e do PitchFlow Movement, com Next.js, React, Tailwind CSS e Framer Motion.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Abra http://localhost:3000.

## Publicação na Vercel via GitHub

1. Publique este repositório no GitHub. Ele pode ser privado.
2. Na Vercel, abra **Add New → Project** e importe o repositório.
3. Use **Next.js** como framework e mantenha **Root Directory** na raiz (`./`).
4. Mantenha os comandos padrão: instalação `npm ci`, build `npm run build` e saída automática do Next.js.
5. Configure `GOOGLE_SHEETS_WEBHOOK_URL` em **Environment Variables**, nos ambientes que receberão convites.
6. Clique em **Deploy**. Os próximos envios à branch de produção serão publicados automaticamente.

Não é necessário `vercel.json`. A rota `/api/convite` é executada no servidor; não use exportação estática.

## Formulário de convites

O endpoint envia os contatos para um webhook do Google Apps Script. O endereço de exemplo em `.env.example` deve ser substituído pela URL real da implantação do script.

- A variável é privada e usada apenas no servidor; não use o prefixo `NEXT_PUBLIC_`.
- Nunca envie arquivos `.env` com credenciais ao GitHub.
- Sem a variável, o site abre normalmente, mas o formulário informa indisponibilidade em vez de confirmar um envio que não foi salvo.
- Em falhas HTTP ou de conexão com o webhook, o formulário mostra erro e mantém os dados para nova tentativa.

Antes de divulgar o site, faça um envio real e confira se uma nova linha apareceu na planilha. Após alterar variáveis na Vercel, faça um novo deploy.

## Verificação

```sh
npm run build
```

As imagens usadas pela página ficam em `public/assets/photos`. Referências locais, fotos originais, dependências, caches e capturas de revisão não fazem parte do repositório de publicação.
