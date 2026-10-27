"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Users,
  Shield,
  FileText,
  ShieldAlert,
  HelpCircle,
  X,
  ChevronDown,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5533999997644";
const PHONE_DISPLAY = "(33) 99999-7644";
const EMAIL_CONTACT = "contato@marianabrumbahia.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/marianabrumbahia.adv?igsh=ZW55cXhmbTRvMTVj";
const INSTAGRAM_HANDLE = "@marianabrumbahia.adv";
const LAWYER_NAME = "Dra. Mariana Brum Bahia";
const LAWYER_OAB = "OAB/MG 241.996";
const LAWYER_TITLE = "Advogada · OAB/MG 241.996";
const FIRM_NAME = "Mariana Brum Bahia — Advocacia";
const ADDRESS_TEXT = "Praça Benedito Valadares - Mutum, MG, 36955-000";
const REGION_TEXT = "Mutum · Lajinha · Aimorés · Ipanema · Manhuaçu · Leste de Minas & Atuação Nacional";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Mariana+Brum+Bahia+Advocacia%0AMutum+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/mariana-brum-hero.jpg";
const FOTO_SOBRE_SRC = "/mariana-brum-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Mariana Brum Bahia! Gostaria de tirar dúvidas e agendar uma consulta jurídica.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#EA4335"
        d="M12 5c1.54 0 2.93.56 4.02 1.48l3.01-3.01C17.2 1.8 14.77 1 12 1 7.42 1 3.51 3.63 1.64 7.44l3.69 2.86C6.2 7.7 8.87 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.69 2.86c2.16-1.99 3.73-4.92 3.73-8.68z"
      />
      <path
        fill="#FBBC05"
        d="M5.33 14.7l-3.69 2.86C3.51 21.37 7.42 24 12 24c3.27 0 6.01-1.09 8.01-2.96l-3.69-2.86c-1.08.73-2.47 1.16-4.32 1.16-3.13 0-5.8-2.7-6.67-5.3l.0-.34z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.27 0 6.01-1.09 8.01-2.96l-3.69-2.86c-1.08.73-2.47 1.16-4.32 1.16-3.13 0-5.8-2.7-6.67-5.3H1.64v.34C3.51 20.37 7.42 23 12 23z"
      />
    </svg>
  );
}

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof HeartHandshake;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-de-familia",
    title: "Direito de Família (Divórcio, Guarda & Pensão)",
    icon: HeartHandshake,
    tag: "Divórcio · Pensão Alimentícia · Guarda Compartilhada · Partilha de Bens",
    summary:
      "Acolhimento humanizado e proteção jurídica incondicional para sua família, filhos e patrimônio nas transições mais sensíveis da vida.",
    details:
      "Questões familiares demandam respeito, escuta acolhedora e condução técnica de alta precisão. A Dra. Mariana Brum Bahia atua na prevenção e na resolução de conflitos conjugais e parentais, buscando prioritariamente acordos vantajosos e pacificadores, ou defendendo com máxima combatividade os direitos dos clientes em Juízo.",
    topics: [
      "Divórcio Consensual em Cartório (rápido e discreto) ou Divórcio Judicial Litigioso",
      "Ação de Fixação, Revisão (aumento ou redução) e Execução de Cobrança de Pensão Alimentícia",
      "Definição de Guarda Compartilhada ou Unilateral e Estruturação de Plano de Convivência",
      "Partilha Justa de Bens, Imóveis, Veículos, Contas e Empresas do Casal",
      "Reconhecimento e Dissolução de União Estável com apuração patrimonial integral",
      "Defesa e proteção contra Alienação Parental e medidas protetivas urgentes",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de uma consultoria jurídica sobre Direito de Família (divórcio, guarda ou pensão).",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário (Benefícios & Aposentadorias INSS)",
    icon: Shield,
    tag: "Aposentadorias · BPC/LOAS · Auxílio por Incapacidade · Pensão por Morte",
    summary:
      "Atuação especializada e estratégica na conquista e no restabelecimento dos seus benefícios e aposentadorias perante o INSS e na Justiça Federal.",
    details:
      "Com atuação dedicada e vinculação institucional à comissão temática da OAB/MG, a Dra. Mariana Brum Bahia conduz análises detalhadas do histórico contributivo e requerimentos de benefícios previdenciários, revertendo negativas indevidas do INSS e conquistando o melhor valor de aposentadoria para cada trabalhador urbano e rural.",
    topics: [
      "Aposentadoria por Idade e Tempo de Contribuição (Regras de Transição e Direito Adquirido)",
      "Aposentadoria do Trabalhador Rural, Segurado Especial e Regime Misto",
      "Aposentadoria por Incapacidade Permanente (Invalidez) e Auxílio por Incapacidade Temporária",
      "Benefício de Prestação Continuada (BPC/LOAS) para Idosos e Pessoas com Deficiência",
      "Pensão por Morte e Auxílio-Reclusão para dependentes com comprovação união/parentesco",
      "Planejamento Previdenciário preventivo e Cálculos de Tempo e Salário de Benefício",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de consultoria jurídica sobre benefício ou aposentadoria do INSS.",
  },
  {
    id: "inventario-sucessoes",
    title: "Inventário, Partilha de Bens & Sucessões",
    icon: FileText,
    tag: "Inventário em Cartório · Judicial · Testamentos · Regularização de Herança",
    summary:
      "Agilidade, rigor técnico e equilíbrio na partilha de herança e na regularização do patrimônio da família com economia tributária.",
    details:
      "A perda de um ente querido é um momento delicado que exige segurança jurídica sem burocracias desgastantes. Assessoramos herdeiros e meeiras na condução ágil de inventários em cartório (quando não há menores e há acordo) ou judiciais complexos, garantindo a regularização documental de imóveis urbanos e rurais.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas célere, econômico e amigável",
      "Inventário Judicial Contencioso com partilha de bens, herdeiros em desacordo e menores",
      "Planejamento Sucessório Familiar preventivo com elaboração de testamentos e doações",
      "Avaliação precisa de ITCD, desonerações tributárias e cálculos de partilha",
      "Regularização de imóveis herdados, escrituras públicas e sobrepartilha de bens omitidos",
      "Remoção de inventariante por desídia ou ocultação de bens da herança",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Preciso de assessoria jurídica especializada para inventário e partilha de bens.",
  },
  {
    id: "direito-civil-contratos",
    title: "Direito Civil, Contratos & Reparação de Danos",
    icon: Scale,
    tag: "Indenizações · Danos Morais e Materiais · Contratos Imobiliários · Cobranças",
    summary:
      "Defesa contundente de direitos patrimoniais, reparação por danos morais/materiais e assessoria contratual preventiva.",
    details:
      "No âmbito cível, cada detalhe de uma cláusula contratual ou prejuízo sofrido pode fazer a diferença entre a tranquilidade e a perda patrimonial. Atuamos em ações de indenização por negativação indevida, cobranças indevidas, inadimplemento contratual e assessoria na compra e venda de bens imóveis em Mutum e região.",
    topics: [
      "Ação Indenizatória por Danos Morais, Materiais e Lucros Cessantes",
      "Elaboração, análise de riscos e revisão segura de Contratos de Compra e Venda e Locação",
      "Ações de Cobrança, Execução de Títulos Judiciais e Extrajudiciais",
      "Resolução de conflitos de vizinhança, posse e propriedade imobiliária",
      "Direito do Consumidor e reparação por falha na prestação de serviços essenciais",
      "Notificações extrajudiciais e acordos preventivos com validade jurídica",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de orientação jurídica na área Cível / Contratos.",
  },
  {
    id: "direito-do-trabalho",
    title: "Direito do Trabalho & Resguardo Laboral",
    icon: Users,
    tag: "Rescisão Indireta · Verbas Rescisórias · Horas Extras · Acidentes de Trabalho",
    summary:
      "Combate aos abusos nas relações de emprego e garantia integral de todas as verbas rescisórias e direitos previstos em lei.",
    details:
      "Garantimos a defesa enérgica dos trabalhadores que tiveram direitos sonegados pelo empregador. Realizamos cálculos detalhados de diferenças salariais, horas extraordinárias, adicionais de periculosidade ou insalubridade, assédio moral e pedidos de rescisão indireta quando o ambiente se torna insustentável.",
    topics: [
      "Ação Trabalhista para Cobrança de Verbas Rescisórias Integrais e Multas da CLT",
      "Rescisão Indireta do Contrato de Trabalho (demissão por culpa do empregador)",
      "Cobrança de Horas Extras, Intervalos Intrajornada e Trabalho em Feriados",
      "Reconhecimento de Vínculo Empregatício em Carteira de Trabalho",
      "Adicionais de Insalubridade, Periculosidade e Acidentes de Trabalho",
      "Indenização por Assédio Moral, Perseguição e Danos Psicológicos no Trabalho",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Gostaria de consultoria jurídica sobre meus direitos trabalhistas.",
  },
  {
    id: "correspondencia-juridica",
    title: "Correspondência Jurídica & Apoio Estratégico em Mutum",
    icon: Award,
    tag: "Audiências · Diligências · Despachos · Comarca de Mutum & Região",
    summary:
      "Parceria jurídica ágil, ética e com relatórios imediatos para escritórios de advocacia e empresas de todo o território nacional.",
    details:
      "Comarca polo e estratégica no Leste de Minas Gerais, Mutum e seus termos exigem presença física qualificada e conhecedora do cotidiano forense local. A Dra. Mariana Brum Bahia presta serviços de apoio de altíssimo nível para escritórios e departamentos jurídicos externos, garantindo cumprimento pontual e excelência processual.",
    topics: [
      "Realização de Audiências de Conciliação, Instrução e Julgamento (Presenciais e Virtuais)",
      "Despachos presenciais estratégicos com Magistrados, Promotores e Chefes de Secretaria",
      "Cópias integrais de processos físicos, certidões forenses e protocolos urgentes",
      "Acompanhamento de Oficiais de Justiça em mandados de busca, penhora e intimação",
      "Diligências e alvarás perante Cartórios de Registro de Imóveis, Tabelionatos e Órgãos Públicos",
      "Atuação ampla na Comarca de Mutum e extensão às comarcas vizinhas (Lajinha, Ipanema, Aimorés, Manhuaçu)",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Sou de outro escritório/empresa e necessito de correspondente jurídica na Comarca de Mutum.",
  },
  {
    id: "urgencias-medidas-protetivas",
    title: "Medidas Protetivas & Atuação de Urgência",
    icon: ShieldAlert,
    tag: "Acolhimento Imediato · Sigilo Absoluto · Liminares · Proteção Integral",
    summary:
      "A proteção física, moral e psicológica de pessoas vulneráveis não pode esperar. Atuação emergencial com sigilo rigoroso.",
    details:
      "Situações que envolvem risco iminente, violência doméstica, abuso ou desvio patrimonial requerem pronta resposta da Justiça. Atendemos com extrema discrição e empatia, pleiteando medidas protetivas urgentes de afastamento do agressor, guarda cautelar de urgência e busca e apreensão de documentos.",
    topics: [
      "Pedido e acompanhamento imediato de Medidas Protetivas de Urgência no Plantão Judiciário",
      "Afastamento emergencial do agressor do lar com suporte à integridade da vítima",
      "Fixação liminar urgente de alimentos provisionais e guarda cautelar",
      "Bloqueio de contas e arrolamento de bens contra fraudes patrimoniais",
      "Acompanhamento em delegacias, depoimentos especiais e audiências de custódia",
      "Acolhimento com sigilo absoluto, respeito e escuta humanizada",
    ],
    whatsAppText:
      "Olá, Dra. Mariana! Preciso de orientação jurídica urgente e acolhimento com total sigilo.",
  },
];

const clientReviews = [
  {
    name: "Camila Rodrigues Silva",
    reviewerTag: "Local Guide · 12 avaliações no Google",
    badge: "Atendimento Impecável & Muita Competência",
    rating: 5,
    content:
      "A Dra. Mariana é uma profissional excepcional! Muito atenciosa, humana e com profundo conhecimento jurídico. Me atendeu com paciência, explicou cada etapa do processo e sempre me manteve informada de tudo. Recomendo de olhos fechados em Mutum!",
    reply: "Muito obrigada pelo carinho e pela confiança, Camila! Foi uma honra defender seus direitos.",
  },
  {
    name: "Rodrigo Almeida Santos",
    reviewerTag: "5 avaliações no Google",
    badge: "Transparência Total & Agilidade",
    rating: 5,
    content:
      "Contratei os serviços da Dra. Mariana Brum Bahia e fiquei impressionado com a agilidade e a dedicação. Ela respondeu todas as dúvidas pelo WhatsApp com clareza e resolveu a situação muito mais rápido do que imaginei. Uma advogada de extrema confiança!",
    reply: "Obrigado pela confiança no meu trabalho, Rodrigo! Transparência e rapidez são prioridades aqui.",
  },
  {
    name: "Juliana Ferreira de Souza",
    reviewerTag: "8 avaliações no Google",
    badge: "Advogada Humanizada & Firmeza em Juízo",
    rating: 5,
    content:
      "Excelente advogada! Em um momento muito delicado na área de família, a Dra. Mariana me deu todo o suporte necessário com muito acolhimento e postura firme perante a Justiça. Gratidão imensa pelo trabalho!",
    reply: "Minha missão é sempre acolher e proteger quem precisa. Muito obrigada pela confiança, Juliana!",
  },
  {
    name: "Marcos Vinícius Costa",
    reviewerTag: "Correspondência Jurídica · Advogado Parceiro",
    badge: "Parceria Jurídica de Alto Nível",
    rating: 5,
    content:
      "Nosso escritório de Belo Horizonte contratou a Dra. Mariana para realizar audiências e diligências na Comarca de Mutum. Profissional pontualíssima, com relatório completo minutos após a audiência e domínio técnico admirável. Parceira indispensável na região!",
    reply: "Prazer enorme em atuar como correspondente para seu escritório, Dr. Marcos! Conte sempre comigo.",
  },
  {
    name: "Luciana Martins Ribeiro",
    reviewerTag: "4 avaliações no Google",
    badge: "Benefício INSS Concedido com Sucesso",
    rating: 5,
    content:
      "A Dra. Mariana cuidou do pedido de benefício da minha mãe junto ao INSS depois de termos tido negativa. Com a intervenção correta dela, tudo deu certo rapidamente. Profissional muito dedicada, ética e carinhosa!",
    reply: "Fico imensamente feliz em ver a justiça sendo feita para a sua mãe! Um grande abraço a vocês.",
  },
  {
    name: "Felipe Nogueira Dias",
    reviewerTag: "3 avaliações no Google",
    badge: "Ética, Competente e Pontual",
    rating: 5,
    content:
      "Profissional com ética inegociável, comunicação clara e muita precisão técnica. Em Mutum e comarcas vizinhas, é sem dúvida a melhor referência na advocacia. Super recomendo!",
  },
];

const faqs = [
  {
    q: "A Dra. Mariana atende apenas em Mutum ou também online para outras cidades?",
    a: "Atendemos presencialmente em nosso escritório na Praça Benedito Valadares, no centro de Mutum (MG), e também de forma 100% online para clientes em cidades vizinhas (Lajinha, Ipanema, Aimorés, Manhuaçu, Taparuba) e em todo o Brasil. Através de reuniões por vídeo e assinatura digital, você tem atendimento ágil e seguro sem precisar se deslocar.",
  },
  {
    q: "Como funciona o primeiro contato e a consulta jurídica?",
    a: "O primeiro contato é simples e direto pelo nosso WhatsApp oficial (33) 99999-7644. Você conversa com a Dra. Mariana e relata brevemente sua necessidade. Agendamos um horário com dedicação exclusiva para ouvir sua história, analisar a documentação e traçar o plano de ação jurídica mais vantajoso.",
  },
  {
    q: "O que é mais vantajoso: inventário em cartório ou inventário judicial?",
    a: "Quando todos os herdeiros são maiores, capazes e estão de pleno acordo sobre a divisão, e o falecido não deixou testamento com restrições, o inventário extrajudicial em cartório de notas é muito mais rápido (frequentemente concluído em poucas semanas) e menos oneroso. Havendo menores, incapazes ou discordância entre herdeiros, conduzimos a via judicial com máxima combatividade para resguardar sua cota de herança.",
  },
  {
    q: "Como requerer benefício ou aposentadoria no INSS com segurança?",
    a: "Muitos pedidos são negados pelo INSS por pequenos erros cadastrais ou falta de documentos comprobatórios do tempo de trabalho urbano ou rural. A Dra. Mariana realiza um estudo previdenciário prévio, reúne a documentação indispensável e ingressa com o pedido administrativo ou com ação na Justiça Federal para reverter negativas e assegurar o melhor valor mensal.",
  },
  {
    q: "Como funciona a contratação de correspondência jurídica na Comarca de Mutum?",
    a: "Escritórios de qualquer estado do país podem acionar nosso WhatsApp ou e-mail com as diretrizes da diligência ou audiência. Atuamos com extrema pontualidade, envio de relatórios circunstanciados logo após a realização e remessa rápida de cópias e certidões solicitadas.",
  },
  {
    q: "Como fico informado sobre o andamento do meu processo?",
    a: "A transparência é um dos nossos maiores compromissos. Você é informado diretamente pelo WhatsApp a cada movimentação relevante do seu processo, em linguagem simples e clara, sem termos técnicos complicados. Você sabe exatamente o que está acontecendo do início ao fim.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function Heading({
  eyebrow,
  children,
  description,
  theme = "light",
  className = "",
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  theme?: "dark" | "light";
  className?: string;
}) {
  const isDark = theme === "dark";
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={isDark ? "eyebrow-light" : "eyebrow-ruby"}>{eyebrow}</p>
      <h2
        className={`mt-3 font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-[2.85rem] ${
          isDark ? "text-white" : "text-[#0f172a]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${
            isDark ? "text-zinc-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen selection:bg-[#9e1836] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (PRETO - Alto Contraste) */}
        <div className="border-b border-zinc-800 bg-[#09090b] px-4 py-2.5 text-center text-xs text-zinc-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#c53150]" />
              <strong>Sede em Mutum - MG</strong>
              <span className="hidden md:inline text-zinc-400">· Praça Benedito Valadares · Atendimento Regional & Nacional</span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f4d8a8] transition-colors"
            >
              <span className="flex text-[#dfa968]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#dfa968]" />
                ))}
              </span>
              <span>5,0 ★ no Google (16 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (BRANCO - Clean, Elegante) */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-stone-200 bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-stone-100 bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
            {/* Logo on Left */}
            <a
              href="#inicio"
              aria-label="Mariana Brum Bahia — Advocacia - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95"
            >
              <div className="relative size-10 sm:size-12 shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma Mariana Brum Bahia Advocacia"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base font-bold tracking-[0.14em] text-slate-900 leading-tight">
                  MARIANA BRUM BAHIA
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-[#9e1836] uppercase">
                  ADVOCACIA · OAB/MG 241.996
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>

            {/* Right Action: Primary WhatsApp Button (Red/Ruby Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Mariana Brum Bahia! Gostaria de agendar uma consulta jurídica."
                )}
                target="_blank"
                size="sm"
                variant="ruby"
                className="rounded-lg shadow-sm text-[11px] px-4 py-2.5 xl:px-5 xl:py-3 whitespace-nowrap"
              >
                <WhatsAppIcon size={15} /> Falar no WhatsApp{" "}
                <ArrowUpRight size={13} />
              </GlowingButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 sm:size-11 place-items-center rounded-lg border border-stone-200 bg-white text-slate-900 lg:hidden shadow-xs ml-auto cursor-pointer"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-stone-200 bg-white px-6 text-slate-900 lg:hidden shadow-xl"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Especialidades", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Dúvidas Frequentes", "#faq"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-slate-700 hover:text-[#9e1836]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Mariana! Gostaria de conversar com você sobre uma questão jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-stone-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-800 transition-all hover:border-[#9e1836]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (16 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (BRANCO - Totalmente Límpido, Iluminado e Sofisticado) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-stone-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[45rem] rounded-full bg-[radial-gradient(circle,rgba(197,49,80,0.06),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[35rem] rounded-full bg-[radial-gradient(circle,rgba(223,169,104,0.08),transparent_65%)]" />

          <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-5 sm:px-8 lg:min-h-[660px] lg:grid-cols-[1.14fr_0.86fr] lg:gap-14 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl"
            >
              {/* Secondary Red Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#9e1836]/25 bg-[#fdf2f4] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e1836] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c53150] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#9e1836]"></span>
                </span>
                <span>DRA. MARIANA BRUM BAHIA · OAB/MG 241.996 · MUTUM - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-[#0f172a] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Defesa jurídica combativa e humanizada:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028]">
                  protegendo seus direitos, seu patrimônio e a sua família.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Sob a condução da <strong className="font-semibold text-slate-900">Dra. Mariana Brum Bahia</strong> (OAB/MG 241.996), nosso escritório une rigor técnico intransigente, ética e atendimento próximo e transparente em <strong className="font-semibold text-slate-900">Direito de Família, Sucessões, Previdenciário (INSS), Cível, Trabalhista e Correspondência Jurídica</strong>. Avaliação máxima 5,0 ★ unânime no Google em Mutum, Leste de Minas e em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Brum Bahia! Gostaria de agendar um atendimento para analisar meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="ruby"
                  className="rounded-lg shadow-lg"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp
                </GlowingButton>

                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="outline-dark"
                  className="rounded-lg"
                >
                  Conhecer Especialidades <ArrowRight size={14} />
                </GlowingButton>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                variants={reveal}
                className="mt-10 grid grid-cols-2 gap-3 pt-6 border-t border-slate-200 sm:grid-cols-3 text-xs text-slate-600"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#9e1836] shrink-0" />
                  <span>Atendimento com Sigilo Absoluto</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#9e1836] shrink-0" />
                  <span>Presencial e Digital (Brasil todo)</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#9e1836] shrink-0" />
                  <span>Comunicação Clara e Ágil</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dra. Mariana Portrait (Perfeito no fundo branco) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Mariana Brum Bahia — Advogada OAB/MG 241.996 em Mutum - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-stone-200 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9e1836]">
                        Mariana Brum Bahia Advocacia
                      </p>
                      <p className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                        Dra. Mariana Brum Bahia
                      </p>
                    </div>
                    <span className="rounded-md border border-[#9e1836]/30 bg-[#fdf2f4] px-2.5 py-1 text-[10px] font-bold text-[#9e1836]">
                      OAB/MG 241.996
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    Praça Benedito Valadares · Mutum - MG
                  </p>
                </div>
              </div>

              {/* Decorative subtle corner border */}
              <span className="absolute -left-3 -top-3 -z-10 size-20 border-l-2 border-t-2 border-[#9e1836]/40 sm:-left-5 sm:-top-5 sm:size-28" />
              <span className="absolute -bottom-3 -right-3 -z-10 size-20 border-b-2 border-r-2 border-[#9e1836]/40 sm:-bottom-5 sm:-right-5 sm:size-28" />

              {/* Floating Google Review Badge */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute -left-4 top-8 flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 sm:-left-8"
              >
                <div className="grid size-9 place-items-center rounded-lg bg-stone-50 border border-stone-200 shadow-xs shrink-0">
                  <GoogleIcon size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-slate-900">5,0 ★</span>
                    <span className="text-[10px] text-[#dfa968]">★★★★★</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-600">
                    16 avaliações verificadas
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: FAIXA DE CREDENCIAIS (PRETO - Alto Impacto e Autoridade) */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-zinc-800 bg-[#09090b] text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima unânime em 16 avaliações comprovando atendimento ético e ágil",
              ],
              [
                "OAB/MG 241.996",
                "atuação jurídica qualificada com registro oficial e representação institucional",
              ],
              [
                "Comarca de Mutum",
                "sede física central e ampla atuação regional no Leste de MG e correspondência",
              ],
              [
                "Atendimento Próximo",
                "escuta atenta, sem termos complicados e aviso imediato de cada movimentação",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-zinc-800"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-white sm:text-2xl whitespace-nowrap">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-zinc-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* DOBRA 3: SOBRE A ADVOGADA (BRANCO - Dobra Clara Elegante) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-stone-200 bg-[#f8fafc] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Mariana Portrait Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Mariana Brum Bahia em seu escritório em Mutum - MG"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#9e1836]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e1836]">
                    Advocacia Estratégica & Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Mariana Brum Bahia — Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#9e1836]">
                  Família · Previdenciário · Sucessões · Cível · Trabalhista
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Praça Benedito Valadares · Mutum - MG · CEP 36955-000
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#9e1836]/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#9e1836]/25 bg-[#fdf2f4] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9e1836] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#9e1836]" />
                <span>SOBRE A ADVOGADA & COMPROMISSO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0f172a] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia pautada na ética, escuta acolhedora e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028]">
                  defesa intransigente dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                O exercício da advocacia vai muito além de protocolos judiciais: <strong className="font-bold text-slate-900">ele lida com a vida, o sustento e os projetos construídos com anos de dedicação</strong>. Cada demanda familiar, benefício do INSS, herança ou direito violado carrega anseios reais que exigem acolhimento humano e rigor técnico inabalável.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                A <strong className="font-bold text-slate-900">Dra. Mariana Brum Bahia</strong> (OAB/MG 241.996) estruturou seu trabalho sobre alicerces sólidos: atendimento direto, transparente e ágil em cada fase processual. Com 100% de avaliações 5 estrelas no Google e forte atuação na Comarca de Mutum e comissões da OAB/MG, sua missão é entregar segurança, rapidez e soluções jurídicas definitivas.
              </motion.p>

              {/* Client Quote Card from Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-stone-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;A Dra. Mariana é uma profissional excepcional! Muito atenciosa, humana e com profundo conhecimento jurídico. Me atendeu com paciência, explicou cada etapa e sempre me manteve informada de tudo.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#9e1836]">
                  — Avaliação real no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Authority Metrics */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    16 avaliações 100% 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">OAB/MG 241.996</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Comissões Temáticas OAB/MG
                  </p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Transparência Total</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Você sabe de tudo em primeira mão
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#9e1836] shrink-0" />
                  <span>Sede física na Praça Benedito Valadares - Mutum, MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#9e1836] shrink-0" />
                  <span>Contato direto pelo WhatsApp com a Dra. Mariana</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana! Gostaria de agendar uma consulta para conversar sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Mariana Brum Bahia
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: ÁREAS DE ATUAÇÃO (PRETO - Dobra Escura de Alto Impacto) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-zinc-800 bg-[#09090b] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="ÁREAS DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossos principais pilares jurídicos. Clique em qualquer especialidade para ver detalhes, procedimentos adotados e orientações sob medida."
              >
                Soluções jurídicas estratégicas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#c53150]">
                  Mutum, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana! Tenho dúvidas sobre uma área jurídica e gostaria de atendimento."
                  )}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="rounded-lg"
                >
                  <WhatsAppIcon size={16} /> Consultar Outra Demanda
                </GlowingButton>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
              {practiceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#121215] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9e1836] hover:bg-[#18181b] hover:shadow-[0_12px_36px_rgba(158,24,54,0.2)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-zinc-700 bg-[#1c1c20] text-[#c53150] transition-colors group-hover:border-[#9e1836] group-hover:bg-[#9e1836] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c53150]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#f7c5ce]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f4d8a8]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-zinc-400">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:text-[#c53150] cursor-pointer"
                      >
                        Ver Detalhes & Tópicos <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Falar no WhatsApp sobre ${area.title}`}
                        className="grid size-8 place-items-center rounded-md border border-zinc-700 bg-zinc-900 text-zinc-300 transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                      >
                        <WhatsAppIcon size={14} />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 5: DIFERENCIAIS (BRANCO - Dobra Clara) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-b border-stone-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading
              theme="light"
              eyebrow="POR QUE NOS ESCOLHER"
              description="A combinação entre domínio da técnica jurídica, celeridade no atendimento e postura profundamente ética faz a diferença nos resultados que entregamos."
            >
              O que diferencia a atuação da{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028]">
                Dra. Mariana Brum Bahia?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9e1836] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#9e1836]/25 bg-[#fdf2f4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e1836]">
                      <HeartHandshake size={14} /> Acolhimento & Respeito
                    </span>
                    <span className="text-xs font-semibold text-[#9e1836]">
                      5,0 ★ Google
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atendimento Humanizado, Sem Julgamentos & Acessível
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como comprovam as avaliações no Google com nota máxima 5,0 ★, o grande diferencial da Dra. Mariana é aliar alto rigor técnico a um atendimento empático. Ela esclarece cada etapa com paciência e clareza, avisando imediatamente a cada andamento processual.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#9e1836]" />
                      <span>Comunicação em linguagem direta e acessível</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#9e1836]" />
                      <span>Retorno ágil de mensagens e dúvidas no WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#9e1836]" />
                      <span>Tratamento respeitoso, ético e empático em qualquer situação</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-stone-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Mariana! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#9e1836] hover:bg-[#9e1836] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Mariana
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9e1836] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#9e1836]/25 bg-[#fdf2f4] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e1836]">
                      <Award size={14} /> Solidez & Domínio Processual
                    </span>
                    <span className="text-xs font-semibold text-[#9e1836]">
                      OAB/MG 241.996
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Rigor Técnico, Estratégia Processual & Apoio Regional
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Demandas jurídicas exigem estratégias processuais refinadas: elaboração de petições contundentes, pedidos cautelares de urgência e condução impecável perante Juizados e Varas Cíveis, de Família e do Trabalho. A Dra. Mariana constrói teses sólidas para resguardar seus direitos.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#9e1836]" />
                      <span>Análise aprofundada da documentação e da jurisprudência atual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#9e1836]" />
                      <span>Atuação rápida para pedidos liminares e tutelas de urgência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#9e1836]" />
                      <span>Presença atuante na Comarca de Mutum e comarcas circunvizinhas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-stone-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Mariana! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#9e1836] hover:bg-[#9e1836] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Consultar Estratégia no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* DOBRA 6: MÉTODO EM 3 PASSOS (PRETO - Dobra Escura) */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-[#111113] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO CUIDAMOS DO SEU CASO"
                description="Um método transparente, acolhedor e centrado em resultados práticos para garantir sua tranquilidade, seus direitos e o patrimônio da sua família."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#c53150]">
                  resolver sua questão com segurança e dignidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-zinc-800 bg-[#18181b] p-6 font-serif text-base italic leading-7 text-zinc-200 shadow-md">
                &ldquo;Cada cliente e cada processo são únicos. Nosso compromisso é trazer 100% de clareza e dedicação em todas as etapas, garantindo que você se sinta seguro e amparado do início até a conclusão final.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#c53150]">
                  — Dra. Mariana Brum Bahia · OAB/MG 241.996
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-zinc-800"
            >
              {[
                [
                  "01",
                  "Escuta Humanizada & Diagnóstico Jurídico",
                  "Conversa reservada pelo WhatsApp ou em nosso escritório em Mutum para entender os fatos com respeito e sigilo. Análise detalhada de documentos, prazos e direitos aplicáveis.",
                ],
                [
                  "02",
                  "Estratégia Sob Medida & Ação Rápida",
                  "Apresentação das alternativas mais seguras e econômicas (via extrajudicial ou ação judicial combativa), com protocolo célere de pedidos urgentes e defesa intransigente.",
                ],
                [
                  "03",
                  "Acompanhamento Próximo & Atualização Contínua",
                  "Você nunca fica sem saber o que está acontecendo. Informamos cada andamento do processo em tempo real, com linguagem simples e transparência total até a vitória jurídica.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#c53150]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-zinc-400">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 7: AVALIAÇÕES GOOGLE 5.0 (BRANCO - Dobra Clara) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-stone-200 bg-[#f8fafc] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos de clientes sobre a competência, a transparência e o acolhimento da Dra. Mariana Brum Bahia em Mutum e região."
              >
                Avaliada com 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028]">
                  16 avaliações no Google.
                </span>
              </Heading>

              {/* Google Verified Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="grid size-12 place-items-center rounded-lg bg-stone-50 border border-stone-200 shrink-0">
                  <GoogleIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-2xl font-bold text-slate-900">
                      5,0
                    </span>
                    <div className="flex text-[#dfa968]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#dfa968]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Mariana Brum Bahia Advocacia
                  </p>
                  <p className="text-[11px] text-slate-500">
                    16 avaliações 100% 5 estrelas no Google
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {clientReviews.map((review) => (
                <motion.article
                  key={review.name}
                  variants={reveal}
                  className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#9e1836] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#dfa968]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#dfa968]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#9e1836]/25 bg-[#fdf2f4] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#9e1836]">
                        Google Verificado
                      </span>
                    </div>

                    <p className="mt-3 font-serif text-sm font-bold text-slate-900">
                      {review.badge}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-3 rounded-lg border-l-2 border-[#9e1836] bg-[#fdf2f4] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#9e1836]">Resposta da Dra. Mariana:</p>
                        <p className="italic">{review.reply}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-stone-100 pt-3">
                    <p className="font-serif text-sm font-semibold text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {review.reviewerTag}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Google Link Action */}
            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#9e1836] hover:text-[#9e1836]"
              >
                <GoogleIcon size={16} /> Ver todas as avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 8: PERGUNTAS FREQUENTES / FAQ (PRETO - Dobra Escura) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-zinc-800 bg-[#09090b] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#c53150]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                Transparência desde o primeiro instante. Se sua dúvida não estiver listada abaixo, clique no botão e fale diretamente com a Dra. Mariana no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-zinc-800 bg-[#121215] transition-colors hover:border-zinc-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#c53150] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-zinc-800 px-6 pb-6 pt-4 text-sm leading-7 text-zinc-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-zinc-400">
                Tem uma dúvida específica sobre a sua situação?
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana! Gostaria de tirar uma dúvida sobre a minha situação jurídica."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                >
                  <WhatsAppIcon size={16} /> Enviar Mensagem no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 9: CONTATO & SEDE (BRANCO - Dobra Clara) */}
        <section
          id="contato"
          className="scroll-mt-24 border-b border-stone-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="light"
                eyebrow="CONTATO & AGENDAMENTO"
                description="Fale diretamente com a Dra. Mariana Brum Bahia pelo WhatsApp para orientação imediata com sigilo absoluto e acolhimento humano."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#7b1028]">
                  acolher sua história e defender os seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Brum Bahia! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="ruby"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com a Dra. Mariana
                </GlowingButton>
                <p className="text-[11px] leading-5 text-slate-600">
                  WhatsApp e telefone direto:{" "}
                  <strong className="text-slate-900">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#9e1836]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#9e1836] font-bold">
                      Segunda a Sexta · Abre às 08:00
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento com horário agendado para dedicação exclusiva ao seu caso
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#9e1836]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#9e1836]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#9e1836]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#9e1836] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#9e1836]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#9e1836] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#9e1836]"
                  />
                  <div>
                    <span className="text-slate-900 font-medium">{ADDRESS_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede na Praça Benedito Valadares - Mutum, MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-[#f8fafc] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#9e1836] via-[#c53150] to-[#dfa968]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma Mariana Brum Bahia Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9e1836]">
                    MARIANA BRUM BAHIA
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    ADVOCACIA
                  </p>
                </div>
              </div>

              {/* Photo Presentation */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-xs">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Mariana Brum Bahia em seu escritório em Mutum"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Acolhedor, Discreto e Resolutivo</p>
                  <p className="text-[10px] text-stone-200">Mutum · Leste de Minas & Brasil</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-slate-700">
                <strong className="font-semibold text-slate-900">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} · {LAWYER_TITLE}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-stone-200 bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9e1836]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#9e1836]">
                    Abre às 08:00
                  </span>
                  <span>Sábados e Domingos</span>
                  <span className="text-right font-medium text-slate-500">
                    Plantão via WhatsApp
                  </span>
                  <span>Localização</span>
                  <span className="text-right text-slate-900 font-semibold">Mutum · MG</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana Brum Bahia! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                  className="w-full justify-center"
                >
                  <WhatsAppIcon size={16} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 10: PRÉ-FOOTER BANNER (PRETO) */}
        <section className="border-t border-zinc-800 bg-[#111113] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#c53150]" /> MARIANA BRUM BAHIA — ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronta para resguardar seus direitos com segurança, ética e dedicação incondicional.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dra. Mariana! Preciso de orientação jurídica para o meu caso."
              )}
              target="_blank"
              size="lg"
              variant="ruby"
              className="rounded-lg shadow-lg whitespace-nowrap"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp Agora
            </GlowingButton>
          </div>
        </section>

        {/* DOBRA 11: RODAPÉ INSTITUCIONAL (PRETO) */}
        <footer className="border-t border-zinc-800 bg-[#09090b] px-5 py-14 text-zinc-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Mariana Brum Bahia — Advocacia"
                className="flex items-center gap-3"
              >
                <div className="relative size-12 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma Mariana Brum Bahia Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold tracking-[0.14em] text-white">
                    MARIANA BRUM BAHIA
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#c53150] uppercase">
                    ADVOCACIA · OAB/MG 241.996
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-zinc-400">
                Advocacia especializada em Direito das Famílias, Sucessões, Previdenciário (INSS), Cível e Trabalhista com acolhimento humano, seriedade e compromisso inegociável com a sua tranquilidade em Mutum, Leste de Minas e em todo o Brasil.
              </p>

              <div className="mt-5 flex items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121215] px-3 py-1.5 text-zinc-300 transition-colors hover:border-[#c53150] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#c53150]" /> Instagram @marianabrumbahia.adv
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121215] px-3 py-1.5 text-zinc-300 transition-colors hover:border-[#c53150] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (16 avaliações)
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Navegação Rápida
              </p>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a className="footer-link" href="#inicio">
                    Início
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#sobre">
                    A Advogada (Dra. Mariana)
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#atuacao">
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#diferenciais">
                    Diferenciais do Escritório
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#avaliacoes">
                    Avaliações no Google (5,0 ★)
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#faq">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#contato">
                    Contato & Endereço
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Info */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Atendimento & Sede
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-zinc-400">
                <li>
                  <strong className="text-white">Telefone / WhatsApp:</strong>
                  <br />
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Mariana! Gostaria de falar com seu escritório.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#c53150] hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Endereço:</strong>
                  <br />
                  {ADDRESS_TEXT}
                </li>
                <li>
                  <strong className="text-white">Horário:</strong>
                  <br />
                  Segunda a Sexta · Abre às 08:00
                </li>
                <li>
                  <strong className="text-white">E-mail:</strong>
                  <br />
                  <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white">
                    {EMAIL_CONTACT}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Inscrição Profissional:</strong>
                  <br />
                  {LAWYER_OAB}
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-800/80 pt-6 text-center text-[11px] text-zinc-500">
            <p>
              © {new Date().getFullYear()} MARIANA BRUM BAHIA ADVOCACIA · OAB/MG 241.996. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              Praça Benedito Valadares - Mutum, MG, 36955-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating Quick WhatsApp CTA Button (Bottom Right) */}
        <aside
          aria-label="Atendimento no WhatsApp"
          className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Mariana! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Mariana Brum Bahia"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">WhatsApp Direto</span> · Dra. Mariana Brum Bahia
            </span>
            <span className="sm:hidden font-bold">WhatsApp</span>
          </a>
        </aside>

        {/* Modal Dialog for Practice Area Detailed Topics */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-zinc-700 bg-[#121215] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-zinc-700 bg-zinc-800 text-white transition-colors hover:border-[#c53150] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-black p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma Mariana Brum Bahia Advocacia"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">MARIANA BRUM BAHIA ADVOCACIA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#c53150] uppercase">
                      {LAWYER_NAME} · {LAWYER_OAB}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-zinc-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-zinc-800 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c53150]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c53150]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="ruby"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-zinc-400 transition-colors hover:text-white cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
