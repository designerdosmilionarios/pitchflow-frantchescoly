# PitchFlow Movement — Briefing de UX/UI e desenvolvimento para Claude Code

> **Objetivo:** construir uma landing page institucional e de conversão para o PitchFlow Movement, inspirada no moodboard fornecido, com direção de arte premium, cinematográfica, editorial e tecnológica. A referência visual deve orientar o ritmo da composição, **não** ser inserida como uma imagem única nem copiada pixel a pixel.

## 1. Papel da página

Uma página que apresente o movimento nacional de 2027, fortaleça a autoridade do idealizador Frantchescoly Vilella, conecte a narrativa à plataforma PitchFlow e converta visitantes em convites para palestras, podcasts, congressos e eventos empresariais.

**Objetivo primário de conversão:** envio do formulário “Convidar para meu evento”.

**Objetivos secundários:** conhecer o movimento, conhecer a plataforma, explorar livros e eventos, solicitar proposta comercial.

**Tom de marca:** ambicioso, sofisticado, confiante, humano e orientado a conexões reais. Evitar clichês de startup e exagero comercial.

## 2. Arquitetura de navegação

Header fixo/translúcido com logo `PitchFlow Movement` à esquerda, menu central `Movimento | Idealizador | PitchFlow | Livros | Eventos | Contato` e CTA à direita `Quero convidar para meu evento`.

Cada item leva à seção correspondente por âncora com scroll suave e compensação da altura do header. Em mobile, menu acessível com abertura lateral ou dropdown, CTA visível e sem sobrepor o conteúdo.

Ordem das seções: `#inicio` → `#movimento` → `#idealizador` → `#plataforma` → `#livros` → `#eventos` → `#convite` → `#contratacoes` → `#contato`.

## 3. Wireframe editorial — seção por seção

### 01. HERO / Abertura (`#inicio`)

- Tela de impacto, idealmente 85–100svh no desktop. Fundo preto/azul profundo e fotografia real do idealizador ocupando os 45% direitos; contraste e gradiente **de legibilidade na própria foto** (não transformar a página em degradê colorido).
- Eyebrow azul com tracking generoso: `ONE MOVEMENT. INFINITE OPPORTUNITIES.`
- Headline enorme em duas linhas: `PITCHFLOW` (branco) / `MOVEMENT` (azul elétrico).
- Apoio: `DO BRASIL PARA O MUNDO.`
- Texto: `Uma jornada nacional em 2027 para conectar pessoas, ideias e oportunidades. Palestras, eventos e podcasts que aproximam startups, investidores e quem transforma negócios.`
- CTA primário azul: `Quero convidar para meu evento`; secundário outline: `Conhecer a PitchFlow`.
- Ação terciária discreta: `Assistir ao vídeo`, **somente se existir vídeo real**, abrindo modal acessível.
- Rodapé do hero com categorias de atuação: `Palestras · Podcasts · Congressos · Painéis · Eventos empresariais`, sem ícones decorativos em excesso.
- Fotografia com iluminação de palco e atmosfera cinematográfica, não fotografia genérica de banco de imagens.

### 02. Movimento / O Brasil conectado (`#movimento`)

- Cena full-width com paisagem brasileira panorâmica escura, overlay que preserve contraste.
- À esquerda, headline `27 ESTADOS. UM SÓ PROPÓSITO.` ou preferencialmente `27 UNIDADES FEDERATIVAS. UM SÓ PROPÓSITO.` para precisão institucional; confirmar redação final.
- Corpo editorial curto sobre percorrer o Brasil para conectar pessoas, eventos, conhecimento e oportunidades.
- Ao centro, **mapa vetorial do Brasil** com linhas discretas e pontos azuis animados. Deve ser SVG responsivo ou componente renderizado, jamais mapa falso com posicionamentos geográficos aleatórios.
- À direita, lista concisa: `27 unidades federativas`, `Eventos e podcasts`, `Startups e investidores`, `Conhecimento e networking`, `Impulso ao ecossistema`.
- CTA ghost `Acompanhar a jornada` → `#eventos`.
- Se o roteiro por todos os estados ainda não estiver confirmado, apresentar como **visão/objetivo para 2027**, não como realização concluída.

### 03. Idealizador / Autoridade (`#idealizador`)

- Bloco escuro com grid assimétrico: grande retrato P&B do idealizador à esquerda, biografia ao centro, estatísticas e mosaico de fotos reais de eventos à direita.
- Eyebrow: `O IDEALIZADOR`.
- Headline: `FRANTCHESCOLY VILELLA`.
- Biografia concisa, focando atuação como empresário, autor e idealizador do movimento. Deixar copy detalhada editável em arquivo de conteúdo.
- Métricas visuais no estilo `+50 eventos`, `+100 mil pessoas`, `27 UFs em 2027`, **apenas após validação**. Se não houver confirmação, substituir por mensagens qualitativas, nunca por números inventados.
- CTA `Conheça minha história` → link real ou bloco expandido com conteúdo real.
- Gallery com 1 foto panorâmica de palco e 2 menores de entrevistas/podcasts.

### 04. Plataforma PitchFlow (`#plataforma`)

- Seção dark/tech com título `PITCHFLOW` e subtítulo `CONECTANDO STARTUPS E INVESTIDORES`.
- Texto sobre a proposta de valor: facilitar encontros qualificados e estimular oportunidades.
- Mockup realista e discreto de notebook + celular, **com screenshots reais da plataforma**. Na ausência dos arquivos, criar containers de placeholder bem sinalizados no código, sem inventar telas e dados que pareçam reais.
- Benefícios: `Conexões qualificadas`, `Mais oportunidades`, `Processo simples e seguro`, `Foco em resultados`.
- CTA `Quero entrar na lista de espera`, com destino/formulário real a definir.
- Aviso/nota sobre status do produto somente quando necessário e confirmado.

### 05. Livros / Quebra de ritmo clara (`#livros`)

- Fundo off-white para contraste com as seções escuras.
- Headline `IDEIAS QUE TRANSFORMAM REALIDADES.` com tipografia preta contundente.
- Subcopy curta de posicionamento editorial.
- Grade com até 3 capas reais, sombras sutis e apresentação frontal; card adicional `Em breve / Novos projetos editoriais`.
- Cada livro: capa, título, sinopse em uma frase e CTA `Saiba mais`, apenas com links reais.
- Se títulos/capas não tiverem sido enviados, manter os dados parametrizados em `site-content.ts` e usar placeholders neutros identificados.

### 06. Eventos / Prova social (`#eventos`)

- Fundo quase preto com spotlight em fotografias reais.
- Eyebrow `PRESENÇA EM GRANDES PALCOS`.
- Headline `CONVERSAS REAIS. RESULTADOS REAIS.`.
- Carrossel editorial horizontal com fotos de palestras, podcasts, congressos e painéis; controles acessíveis, navegação por teclado, swipe no mobile.
- Faixa de logos de eventos/parceiros: **somente parceiros reais e autorização de uso**. Caso contrário, remover a faixa.
- CTA contextual `Convide para seu evento` → `#convite`.

### 07. Convite / Conversão principal (`#convite`)

- Fundo escuro com fotografia de auditório/palco e iluminação azul discreta.
- Esquerda: `VAMOS LEVAR ESSA CONVERSA PARA O SEU EVENTO OU PODCAST?` + explicação em 2–3 frases e três benefícios textuais: `Participações selecionadas`, `Avaliação individual`, `Possibilidade de apoio logístico` (confirmar condições comerciais).
- Direita: formulário em painel escuro legível, sem efeito glass exagerado.
- Campos: `Nome completo`, `Empresa ou canal`, `E-mail profissional`, `WhatsApp`, `Tipo de evento`, `Cidade e estado`, `Data prevista`, `Público estimado`, `Por que deseja convidá-lo?`.
- Obrigatórios claramente identificados; máscaras adequadas no Brasil, validação, acessibilidade e feedback real de envio.
- Checkbox de consentimento LGPD com link de Política de Privacidade real; texto de tratamento de dados sem promessas vagas.
- Botão grande `Enviar convite` com estado carregando/erro/sucesso somente de acordo com resposta real do backend. **Não simular sucesso**.
- Implementar endpoint/server action apenas se houver serviço de entrega configurado; caso contrário, componente pronto com integração isolada e TODO explícito.

### 08. Contratações / Oferta B2B (`#contratacoes`)

- Fundo cinza muito claro/off-white, estrutura editorial de 3 colunas: narrativa à esquerda e dois cards de serviço à direita.
- Título `PALESTRAS, MENTORIA E PROJETOS COMERCIAIS.`
- Card `PALESTRAS`: descrição, valor real **apenas se confirmado**; caso não, `Sob consulta`.
- Card `MENTORIA`: descrição, valor real **apenas se confirmado**; caso não, `Sob consulta`.
- CTA `Solicitar proposta` → `#convite`, eventualmente com tipo de interesse pré-selecionado.
- Nunca apresentar preços do moodboard como compromisso comercial sem confirmação explícita.

### 09. Footer / Encerramento (`#contato`)

- Fundo preto com logo, frase-manifesto, navegação reduzida, redes sociais reais, copyright dinâmico, termos e política de privacidade.
- CTA final `Quero convidar para meu evento`.
- Sem links fictícios, social media inexistentes nem ícones sem função.

## 4. Design system

### Cores

```css
:root {
  --bg-primary: #05070B;
  --bg-secondary: #0B111C;
  --bg-elevated: #111B2B;
  --light-surface: #F3F5F8;
  --brand-blue: #147BFF;
  --brand-cyan: #36B9FF;
  --text-primary: #F7F9FC;
  --text-muted: #ACB7C7;
  --text-dark: #101722;
  --border-dark: rgba(255, 255, 255, .12);
}
```

### Tipografia

- Display: `Barlow Condensed`, pesos 700/800/900, uppercase, tracking entre -0.02em e -0.035em. Alternativa: `Archivo Black` para palavras de impacto.
- Interface e parágrafos: `Inter`, 400/500/600.
- Escrita manual: `Caveat` ou SVG de assinatura **somente em um ou dois pontos**, se fizer sentido e houver asset legítimo.
- Hero: `clamp(4rem, 9vw, 9rem)`; H2: `clamp(2.7rem, 6vw, 6rem)`; parágrafo 16–19px.

### Grid e ritmo

- Container máximo 1280–1360px, padding horizontal 24px mobile / 40–64px desktop.
- Grid 12 colunas no desktop, composição assimétrica, bastante respiro entre blocos.
- Alternar **seções escuras fotográficas** com **duas seções claras** (Livros e Contratações).
- Botões azuis sólidos e secundários outline; border radius de 10–14px, sem sombras exageradas.
- Use imagens grandes e recortes cinematográficos; nunca transformar toda seção em cards.

### Movimento

- Microanimações de entrada com fade + translate 16–24px; 0.5–0.8s; stagger discreto.
- Navbar muda discretamente ao rolar; CTAs têm hover preciso; cards expandem levemente (1.01–1.02).
- Mapa SVG com pulso suave nos pontos; carrossel acionado pelo usuário.
- Respeitar `prefers-reduced-motion`, evitar parallax excessivo, vídeos pesados e cursor customizado.
- Contraste e legibilidade acima de efeitos especiais.

## 5. Responsividade

- Desktop >= 1200px: hero duas colunas, mapa 3 zonas, idealizador multi-colunas, formulário com editorial lateral.
- Tablet 768–1199px: ajustar proporções e colunas, reduzir display.
- Mobile < 768px: hero vertical com texto legível e retrato abaixo/ao fundo sem cobrir o texto; mapa abaixo do texto; todas as grids empilhadas; galeria por swipe; formulário largura 100% sem rolagem horizontal; footer simplificado.
- Auditar 360, 390, 768, 1024, 1440, 1920px. Evitar texto cortado.

## 6. Especificação técnica sugerida

- Se for projeto novo: Next.js App Router + TypeScript + Tailwind CSS + Motion para animações + Lucide apenas para ícones funcionais.
- Se for repositório existente, respeitar a stack instalada e explicar diferenças antes de trocar tecnologias.
- Componentização: `Header`, `HeroSection`, `MovementSection`, `FounderSection`, `PlatformSection`, `BooksSection`, `EventsSection`, `InvitationSection`, `ServicesSection`, `Footer`, `SectionHeading`, `Button`, `EventCarousel`, `BrazilMap`, `InvitationForm`.
- Centralizar textos, métricas, livros, eventos, parceiros, links e CTAs em `src/content/site-content.ts` ou estrutura equivalente.
- Imagens otimizadas e responsivas com `next/image` quando aplicável. Usar placeholders neutros enquanto assets reais não existirem; manter localização identificada no `public/assets/`.
- Form: React Hook Form + Zod; enviar a API real/serviço real somente após configuração; proteção simples contra spam; autorização/consentimento LGPD.
- Sem imports de imagens inexistentes que quebrem o build; componentes com fallback elegante.
- Sem bibliotecas pesadas de visualização/3D desnecessárias.
- SEO: title, description, Open Graph, headings semânticos, alt texts e links válidos.
- Acessibilidade: contraste WCAG AA, estados de foco, navegação por teclado, labels, `aria-expanded` no menu, redução de movimento.
- Performance: evitar imagens de fundo gigantescas sem compressão e excesso de blur/backdrop-filter, lazy-load fora do hero, CLS baixo.

## 7. Conteúdo, dados e assets necessários

**Solicitar ao responsável antes da publicação:**

1. Logo original em SVG/PNG transparente e variações para claro/escuro.
2. Retrato principal do idealizador em alta resolução e 3–6 fotos reais de palestras/podcasts.
3. Biografia revisada e números estatísticos comprovados.
4. Screenshots reais do PitchFlow (desktop e mobile), ou decisão para lançar sem mockup.
5. Capas dos livros, títulos, descrições e links de compra.
6. Fotos dos eventos, parceiros autorizados e links correspondentes.
7. Endereço de destino do formulário, e-mail comercial/CRM, WhatsApp e redes sociais oficiais.
8. Política de Privacidade, detalhes de consentimento e informações comerciais reais.
9. Vídeo de apresentação, se existir.

**Regra editorial:** conteúdo ainda não confirmado deve ser marcado como TODO ou apresentado como projeto/visão; nunca inventar prêmios, parceiros, estatísticas, depoimentos, valores ou eventos.

## 8. Sequência recomendada para o Claude Code

1. Inspecionar projeto e sugerir/confirmar stack.
2. Montar estrutura de componentes e arquivo central de conteúdo.
3. Implementar design system, navbar, hero e primeira dobra totalmente responsivos.
4. Criar as demais seções na ordem do wireframe usando assets reais ou placeholders sinalizados.
5. Implementar animações com acessibilidade e estados de interação.
6. Construir validação de formulário e indicar pontos de configuração de backend.
7. Validar com build/lint/typecheck e corrigir falhas; revisar desktop e mobile.
8. Entregar breve README com instalação, substituição de assets, configuração e publicação.

## 9. Critérios de aceite

- O resultado tem identidade premium/editorial/cinematográfica, não aparência de template SaaS genérico.
- O hero é visualmente forte, mas mantém headline e CTA totalmente legíveis.
- Todas as seções têm propósito único e hierarquia de conversão clara.
- A alternância dark/light e as fotografias conferem ritmo semelhante ao moodboard.
- A interface é totalmente responsiva em mobile e desktop.
- Formulário não finge envios e explica qualquer integração pendente.
- Dados reais e fictícios estão separados; placeholders identificáveis no código.
- Site acessível, rápido, SEO básico preparado e nenhuma rolagem horizontal indevida.

---

## Prompt de execução para colar no Claude Code

Você é um diretor de arte digital sênior, UX/UI designer e engenheiro front-end especializado em landing pages institucionais premium. Tenho como referência visual uma imagem de moodboard do **PitchFlow Movement**, anexada à conversa ou disponível no projeto. Leia o briefing inteiro deste documento e implemente uma página funcional.

**Sua missão:** transformar a referência em uma experiência web original, sofisticada e responsiva, com grande tipografia editorial, iluminação de palco, cores preto/azul elétrico, fotografias de impacto e duas quebras de ritmo em fundo off-white. Não copie a imagem como um screenshot nem monte uma página estática sem componentes. Traduza a referência em HTML semântico, CSS/Tailwind, componentes React e interações reais.

**Fluxo:** primeiro inspecione os arquivos do repositório; preserve a stack se ela já existir. Se o repositório for novo, use Next.js + TypeScript + Tailwind. Planeje rapidamente a arquitetura e depois implemente, sem parar após entregar somente um plano.

**Seções obrigatórias, nesta ordem:** Header, Hero, Movimento/27 UFs, Idealizador, Plataforma PitchFlow, Livros, Eventos, Formulário de convite, Contratações, Footer. Use os IDs e textos-base sugeridos no briefing. Centralize conteúdo em arquivo configurável. O CTA principal em toda a página deve levar a `#convite`.

**Design:** fidelidade à *direção de arte* do moodboard, não uma cópia literal. Display condensado bold, composição assimétrica, excelente spacing, imagens imersivas, microanimações de scroll moderadas, bordas discretas, botões refinados e controle rigoroso de contraste. Nada de visual genérico com 30 cards, excesso de neon, números inventados, gradientes chamativos ou ícones decorativos repetidos.

**Assets:** procure primeiro assets reais disponíveis no projeto. Nunca fabrique logos de parceiros, números, telas de produto, depoimentos ou preços. Se faltar foto, vídeo, capa ou screenshot, crie fallback elegante e indique exatamente quais arquivos o usuário deve colocar na pasta `public/assets`. Não use o próprio moodboard como background ou como o layout inteiro.

**Funcionalidade:** âncoras, menu mobile, carrossel acessível, botões com destino real, formulário validado (nome, empresa/canal, e-mail, WhatsApp, tipo de evento, cidade/estado, data, público e mensagem) e tratamento apropriado de estados. Se o envio precisar de configuração externa, deixe o formulário preparado sem exibir mensagem falsa de sucesso.

**Qualidade:** responsividade em 360px até 1920px, teclado, foco, acessibilidade, alt text, `prefers-reduced-motion`, otimização de imagens, metadata SEO e performance. Ao concluir, execute os testes disponíveis (lint/typecheck/build), conserte erros e entregue: arquivos prontos, instruções de inicialização, lista de assets e integrações pendentes.

**Prioridade:** qualidade visual e acabamento de produto publicado. Comece agora pela inspeção do projeto e prossiga para a implementação.
