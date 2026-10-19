export interface StatItem {
  value: string;
  label: string;
  isConfirmed: boolean;
}

export interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: { desktop: string; mobile: string };
  status: "published" | "soon";
  purchaseUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  role: string;
  location: string;
  image: string;
  date?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  priceNote: string;
  priceExact?: string;
  description: string;
  deliverables: string[];
  ctaLabel: string;
  targetService: string;
}

export const SITE_CONTENT = {
  brand: {
    name: "PitchFlow Movement",
    tagline: "One Movement. Infinite Opportunities.",
    supportTagline: "DO BRASIL PARA O MUNDO.",
    founder: "Frantchescoly Vilella",
    founderRole: "EMPRESÁRIO, AUTOR E IDEALIZADOR DO PITCHFLOW",
    manifesto:
      "Uma jornada nacional em 2027 para conectar pessoas, ideias e oportunidades. Palestras, eventos e podcasts que aproximam startups, investidores e quem transforma negócios.",
  },

  navigation: [
    { label: "Movimento", href: "#movimento" },
    { label: "Idealizador", href: "#idealizador" },
    { label: "PitchFlow", href: "#plataforma" },
    { label: "O livro", href: "#livros" },
    { label: "Contato", href: "#convite" },
  ],

  hero: {
    eyebrow: "ONE MOVEMENT. INFINITE OPPORTUNITIES.",
    headlinePart1: "PITCHFLOW",
    headlinePart2: "MOVEMENT",
    subheadline: "DO BRASIL PARA O MUNDO.",
    description:
      "Uma jornada nacional em 2027 para conectar pessoas, ideias e oportunidades. Palestras, eventos e podcasts para apresentar o PitchFlow e fortalecer o ecossistema de startups e investimentos.",
    primaryCta: {
      label: "Quero convidar para meu evento",
      href: "#convite",
    },
    secondaryCta: {
      label: "Conhecer a PitchFlow",
      href: "#plataforma",
    },
    videoCta: {
      available: false, // apenas se houver vídeo real confirmado
      label: "ASSISTIR AO VÍDEO",
    },
    pills: [
      "Palestras",
      "Podcasts",
      "Congressos",
      "Painéis",
      "Eventos empresariais",
    ],
  },

  movement: {
    headline: "27 ESTADOS.",
    headlineAccent: "UM SÓ PROPÓSITO.",
    description:
      "Cada cidade, uma nova oportunidade de conexão, aprendizado e impacto. Vamos percorrer as 27 unidades federativas brasileiras para conversar com quem constrói o futuro dos negócios.",
    statusNote: "Visão e planejamento oficial para a jornada nacional de 2027.",
    highlights: [
      { id: "1", text: "27 unidades federativas brasileiras" },
      { id: "2", text: "Eventos, congressos e podcasts" },
      { id: "3", text: "Startups, fundadores e investidores" },
      { id: "4", text: "Conhecimento prático e networking qualificado" },
      { id: "5", text: "Impulso ao ecossistema nacional" },
    ],
    badgeRight: "MESMO PROPÓSITO. NOVOS HORIZONTES.",
    cta: {
      label: "Acompanhar a jornada",
      href: "#idealizador",
    },
  },

  founder: {
    eyebrow: "O IDEALIZADOR",
    name: "FRANTCHESCOLY VILELLA",
    bio: [
      "Empresário, autor e idealizador do PitchFlow. Apaixonado por negócios, tecnologia e pessoas, construiu sua trajetória conectando o mundo real ao potencial das novas gerações.",
      "Agora, com o PitchFlow Movement, ele leva essa experiência para todo o Brasil em palestras, painéis e encontros com líderes que moldam o mercado.",
    ],
    ctaHistory: {
      label: "Conheça minha história",
      href: "#convite",
    },
    // Estatísticas qualitativas e transparentes
    stats: [
      {
        value: "+50",
        label: "EVENTOS REALIZADOS",
        isConfirmed: true,
      },
      {
        value: "+100K",
        label: "PESSOAS IMPACTADAS",
        isConfirmed: true,
      },
      {
        value: "27",
        label: "ESTADOS EM 2027",
        isConfirmed: true,
      },
    ] as StatItem[],
    // Presença internacional — número de palestras por país/cidade
    lectures: [
      { count: "1x", city: "Belfast", country: "Irlanda do Norte" },
      { count: "4x", city: "Londres", country: "Reino Unido" },
      { count: "50x", city: "Lima", country: "Peru" },
      { count: "+200x", city: "Brasil", country: "Brasil" },
    ],
    photoDesktop: { path: "/assets/photos/founder-about.png", width: 1672, height: 941 },
    photoMobile: { path: "/assets/photos/founder-about-mobile.png", width: 1080, height: 1920 },
  },

  platform: {
    eyebrow: "A PLATAFORMA",
    name: "PITCHFLOW",
    subtitle: "CONECTANDO STARTUPS E INVESTIDORES",
    description:
      "O PitchFlow é uma plataforma que aproxima startups e investidores, facilitando conexões, oportunidades e negócios de alto potencial em um ambiente dinâmico e inteligente.",
    cta: {
      label: "Quero entrar na lista de espera",
      href: "#convite",
    },
    features: [
      {
        title: "Conexões qualificadas",
        description: "Matching assertivo entre teses de investimento e startups em tração.",
      },
      {
        title: "Mais oportunidades",
        description: "Visibilidade ampliada para soluções inovadoras de todas as regiões.",
      },
      {
        title: "Processo simples e seguro",
        description: "Fluxos otimizados para apresentação, análise e tomada de decisão.",
      },
      {
        title: "Foco em resultados",
        description: "Conversas com objetivo direto de geração de valor e rodadas reais.",
      },
    ],
    mockupNote: "A interface apresentada é ilustrativa da versão em desenvolvimento.",
  },

  books: {
    eyebrow: "LIVROS",
    headline: "IDEIAS QUE TRANSFORMAM REALIDADES.",
    description:
      "Conheça os livros publicados por Frantchescoly Vilella sobre negócios, marketing e os primeiros passos no empreendedorismo.",
    items: [
      {
        id: "livro-1",
        title: "50 NEGOCIOS QUE VOCE PODE MONTAR COM 50 MIL",
        subtitle: "Ideias para começar. Estratégia para avançar.",
        description:
          "50 ideias de negócios e um passo a passo estratégico para quem quer começar sua jornada no mundo empresarial.",
        coverImage: { desktop: "/assets/photos/book-1-desktop.png", mobile: "/assets/photos/book-1-mobile.png" },
        status: "published",
        purchaseUrl: "#convite",
      },
      {
        id: "livro-2",
        title: "EM BUSCA DO PRIMEIRO MILHAO",
        subtitle: "10 modelos de negocio em $1.000 a $3.000",
        description:
          "O caminho prático para gerar receita inicial validando ideias com baixo investimento e alta conversao.",
        coverImage: { desktop: "/assets/photos/book-2-desktop.jpg", mobile: "/assets/photos/book-2-mobile.png" },
        status: "published",
        purchaseUrl: "#convite",
      },
    ] as BookItem[],
    soonCard: {
      title: "EM BREVE",
      subtitle: "NOVOS PROJETOS EDITORIAIS",
      description: "Novos títulos em desenvolvimento com lançamento para a turnê de 2027.",
    },
  },

  events: {
    eyebrow: "PRESENÇA EM GRANDES PALCOS",
    headline: "CONVERSAS REAIS. RESULTADOS REAIS.",
    description:
      "Eventos, podcasts e encontros que geram conexões, compartilham experiências e abrem novas oportunidades pelo país.",
    gallery: [
      {
        id: "ev-1",
        title: "Conferência de Liderança e Negócios",
        role: "Palestrante Principal",
        location: "Auditório Central",
        image: "/assets/photos/IMG_0077.JPEG",
      },
      {
        id: "ev-2",
        title: "Painel Estratégico com Líderes de Mercado",
        role: "Painelista & Mediador",
        location: "Palco Business",
        image: "/assets/photos/Flavio1.JPG",
      },
      {
        id: "ev-3",
        title: "Imersão em Pitch & Captação",
        role: "Keynote Speaker",
        location: "Centro de Convenções",
        image: "/assets/photos/IMG_0094.JPEG",
      },
      {
        id: "ev-4",
        title: "Podcast & Entrevista Exclusiva",
        role: "Convidado Especial",
        location: "Estúdio de Gravação",
        image: "/assets/photos/623394487_18052237376465071_6017299835082379575_n.jpg",
      },
      {
        id: "ev-5",
        title: "Encontro com Empreendedores e Criadores",
        role: "Palestra Magna",
        location: "Arena Inovação",
        image: "/assets/photos/624706959_18348593962228640_5780900786266241798_n.jpg",
      },
    ] as EventItem[],
    cta: {
      label: "Convide para seu evento",
      href: "#convite",
    },
  },

  invitation: {
    headline: "VAMOS LEVAR ESSA CONVERSA PARA O SEU EVENTO OU PODCAST?",
    description:
      "Se você é organizador de eventos, produtor de conteúdo ou responsável por um podcast, preencha o formulário e nossa equipe avaliará a viabilidade de agenda para 2027.",
    benefits: [
      {
        title: "SEM CACHÊ",
        subtitle: "(conforme seleção)",
        description: "Opções de participação institucional sem cobrança de cachê para eventos alinhados ao propósito do movimento.",
      },
      {
        title: "AVALIAÇÃO INDIVIDUAL",
        subtitle: "Curadoria criteriosa",
        description: "Cada convite é analisado individualmente pela equipe de produção da turnê.",
      },
      {
        title: "POSSIBILIDADE DE APOIO",
        subtitle: "Logística integrada",
        description: "Alinhamento operacional transparente e direto para garantir excelência de entrega.",
      },
    ],
  },

  services: {
    headline: "PALESTRAS E PROJETOS COMERCIAIS.",
    description:
      "Para convidar Frantchescoly Vilella para o seu evento, preencha o formulário abaixo com os detalhes da sua proposta.",
    items: [
      {
        id: "palestras",
        title: "PALESTRAS",
        priceExact: "R$ 30.000,00",
        priceNote: "Valor de referência",
        description:
          "Conteúdo estratégico, experiências reais e uma nova visão sobre negócios, conexões e oportunidades para congressos e convenções.",
        deliverables: [
          "Keynote de 50 a 70 minutos",
          "Sessão de Q&A com o público",
          "Alinhamento prévio com os organizadores",
          "Divulgação nas redes do movimento",
        ],
        ctaLabel: "Solicitar proposta de palestra",
        targetService: "Palestra Comercial",
      },
    ] as ServiceItem[],
    cta: {
      label: "Falar com a produção",
      href: "#convite",
    },
  },

  footer: {
    manifesto: "One Movement. Infinite Opportunities.",
    legal: `© ${new Date().getFullYear()} PitchFlow Movement. Todos os direitos reservados.`,
    links: [
      { label: "Movimento", href: "#movimento" },
      { label: "Frantchescoly", href: "#idealizador" },
      { label: "PitchFlow", href: "#plataforma" },
      { label: "O livro", href: "#livros" },
      { label: "Contato", href: "#convite" },
    ],
    social: [
      { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
    ],
  },
};
