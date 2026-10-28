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
  Shield,
  FileText,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Cpu,
  Gavel,
  Check,
  Building2,
  FolderCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535997200713";
const PHONE_DISPLAY = "(35) 99720-0713";
const EMAIL_CONTACT = "contato@alessonandre.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/alesson.advogado/";
const INSTAGRAM_HANDLE = "@alesson.advogado";
const LAWYER_NAME = "Dr. Alesson André";
const LAWYER_TITLE = "Advogado · OAB/MG 233.850";
const FIRM_NAME = "Alesson André | Advogado";
const FIRM_SUBTITLE = "Advocacia Criminal & Trabalhista · Atuação em Fóruns, Delegacias e Cartórios";
const ADDRESS_TEXT = "ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sala 03 - Centro, Carmo do Rio Claro - MG, 37150-000";
const REGION_TEXT =
  "Carmo do Rio Claro · Alfenas · Passos · Campo do Meio · Conceição da Aparecida · Guapé · Boa Esperança · Sul de Minas & Atendimento Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Alesson+Andr%C3%A9+%E2%80%94+Advogado%0ACarmo+do+Rio+Claro+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/alesson-andre-hero.jpg";
const FOTO_SOBRE_SRC = "/alesson-andre-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Alesson André! Gostaria de tirar dúvidas e agendar um atendimento jurídico.";
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
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-penal-flagrantes",
    title: "Direito Criminal & Plantão 24h",
    icon: Gavel,
    tag: "Plantão 24h · Flagrantes · Audiência de Custódia · Delegacias · Habeas Corpus",
    summary:
      "Defesa técnica combativa e imediata na proteção da liberdade. Atuação presente em prisões em flagrante, delegacias de polícia e tribunais.",
    details:
      "No direito penal, a liberdade não espera: cada minuto nas primeiras horas após uma prisão é decisivo. O Dr. Alesson André atua com prontidão absoluta e combatividade técnica em prisões em flagrante, audiências de custódia, pedidos de liberdade provisória, relaxamento de prisões ilegais, impetração de Habeas Corpus perante o TJMG e Tribunais Superiores, além de defesa consistente em inquéritos policiais e processos penais.",
    topics: [
      "Plantão Criminal ininterrupto 24 horas para flagrantes, mandados e diligências urgentes",
      "Acompanhamento presencial imediato em Delegacias de Polícia Civil e lavratura de autos",
      "Atuação estratégica em Audiências de Custódia com pedido de liberdade provisória ou relaxamento",
      "Impetração ágil de Habeas Corpus perante o Tribunal de Justiça de Minas Gerais (TJMG), STJ e STF",
      "Defesa especializada em Inquéritos Policiais, queixas-crime e Ações Penais",
      "Acompanhamento em Execução Penal, progressão de regime, livramento condicional e remição",
    ],
    whatsAppText:
      "Olá, Dr. Alesson André! Preciso de atendimento criminal urgente (plantão 24h, prisão em flagrante ou audiência de custódia).",
  },
  {
    id: "direito-do-trabalho",
    title: "Direito Trabalhista & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Rescisão Indireta · Verbas Rescisórias · Horas Extras · Acidente de Trabalho",
    summary:
      "Proteção intransigente dos direitos do trabalhador. Cobrança de verbas rescisórias, horas extras, rescisão indireta e indenizações trabalhistas.",
    details:
      "O trabalhador dedica sua vida ao trabalho e merece receber integralmente o que a lei lhe garante. O Dr. Alesson André atua na defesa dos trabalhadores para reaver verbas não pagas, combater demissões injustas, obter rescisão indireta em casos de descumprimento pelo patrão, buscar adicionais de insalubridade e periculosidade e garantir indenizações cabíveis em acidentes de trabalho e assédio moral.",
    topics: [
      "Ações trabalhistas completas para cobrança de verbas rescisórias, salários atrasados e FGTS",
      "Ação de Rescisão Indireta do Contrato de Trabalho (a justa causa aplicada contra o empregador)",
      "Cálculo e cobrança de Horas Extras, intervalos intrajornada suprimidos e banco de horas irregular",
      "Reconhecimento formal de vínculo de emprego e retificação de Carteira de Trabalho (CTPS)",
      "Adicionais de Insalubridade, Periculosidade e Trabalho Noturno",
      "Indenizações por Acidentes de Trabalho, doenças ocupacionais e assédio moral no ambiente laboral",
    ],
    whatsAppText:
      "Olá, Dr. Alesson André! Gostaria de consultoria sobre meus direitos trabalhistas (rescisão, horas extras ou demissão).",
  },
  {
    id: "correspondencia-juridica",
    title: "Correspondência Jurídica & Apoio em Fóruns",
    icon: Building2,
    tag: "Carmo do Rio Claro & Região · Audiências · Diligências · Cartórios · Protocolos",
    summary:
      "Apoio operacional e jurídico de alta precisão para escritórios e departamentos jurídicos de todo o Brasil em Carmo do Rio Claro e comarcas vizinhas.",
    details:
      "Com presença física estratégica no Andar dos Advogados, no centro de Carmo do Rio Claro, o Dr. Alesson André atua como correspondente jurídico de confiança para bancas de outros municípios e estados, realizando audiências cíveis, trabalhistas e criminais, despachos com magistrados, extração de cópias, cumprimento de mandados e diligências cartorárias com agilidade e relatórios detalhados.",
    topics: [
      "Realização de Audiências (conciliação, mediação, instrução e julgamento) presenciais e telepresenciais",
      "Despachos presenciais com Juízes, Promotores de Justiça e Delegados de Polícia",
      "Extração célere de cópias integrais de processos físicos e digitalização imediata",
      "Protocolos de petições, guias, ofícios e recolhimento de custas processuais",
      "Diligências ágeis perante Cartórios de Registro de Imóveis, Tabelionatos de Notas e Protestos",
      "Acompanhamento de oficiais de justiça, vistorias e perícias técnicas na comarca",
    ],
    whatsAppText:
      "Olá, Dr. Alesson André! Gostaria de contratar correspondência jurídica ou diligência em Carmo do Rio Claro ou região.",
  },
  {
    id: "direito-administrativo-cartorios",
    title: "Direito Administrativo & Atuação em Cartórios",
    icon: FolderCheck,
    tag: "Processos Administrativos · PAD · Defesas em Órgãos Públicos · Regularizações",
    summary:
      "Defesa e consultoria em procedimentos administrativos, regularizações extrajudiciais, certidões e intervenções técnicas perante repartições públicas.",
    details:
      "Demandas administrativas e cartorárias exigem conhecimento aprofundado das normas e dos procedimentos extrajudiciais para solucionar impasses sem a lentidão do judiciário. O Dr. Alesson André atua na defesa de servidores públicos e cidadãos em sindicâncias, processos administrativos disciplinares (PAD), anulação de multas e sanções administrativas, além de regularizações junto aos cartórios de notas e registros.",
    topics: [
      "Defesa técnica em Processos Administrativos Disciplinares (PAD), sindicâncias e conselhos",
      "Recursos administrativos contra autos de infração, penalidades e embargos",
      "Atuação e requerimentos em Cartórios para retificação de registros, averbações e certidões",
      "Assessoria em procedimentos de regularização documental junto a órgãos públicos e autarquias",
      "Mandados de Segurança contra ilegalidades e omissões do poder público",
      "Consultoria extrajudicial para desjudicialização de conflitos de forma célere e segura",
    ],
    whatsAppText:
      "Olá, Dr. Alesson André! Gostaria de suporte sobre Processo Administrativo ou regularização em Cartório.",
  },
  {
    id: "direito-civel-indenizacoes",
    title: "Direito Cível, Contratos & Indenizações",
    icon: Scale,
    tag: "Ações Indenizatórias · Cobranças · Contratos · Consumidor · Danos Morais",
    summary:
      "Assessoria resolutiva na defesa de direitos patrimoniais, cobrança de créditos, reparação integral por danos morais e materiais e segurança contratual.",
    details:
      "Relações civis e contratuais exigem técnica apurada para prevenir litígios e resguardar patrimônios. O escritório do Dr. Alesson André promove ações indenizatórias por prejuízos morais e materiais decorrentes de ilícitos, cobrança judicial e extrajudicial de dívidas e contratos inadimplidos, proteção dos direitos do consumidor contra abusos e regularização possessória.",
    topics: [
      "Ações indenizatórias por Danos Morais, Materiais e Estéticos decorrentes de ilícitos e acidentes",
      "Elaboração, análise preventiva e revisão criteriosa de Contratos Civis e Comerciais",
      "Defesa do Consumidor contra cobranças indevidas, golpes bancários e negativações no SPC/Serasa",
      "Cobrança judicial (Execução de Título, Ação Monitória) e recuperação extrajudicial de créditos",
      "Ações possessórias e regularização documental imobiliária",
      "Mediação e condução de acordos extrajudiciais seguros e vantajosos",
    ],
    whatsAppText:
      "Olá, Dr. Alesson André! Gostaria de consultoria sobre Direito Cível (indenização, contratos ou litígio).",
  },
  {
    id: "direito-previdenciario-inss",
    title: "Direito Previdenciário (INSS Rural & Urbano)",
    icon: HeartHandshake,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Reversão de Negativas do INSS",
    summary:
      "Atuação combativa para garantir o benefício previdenciário devido a trabalhadores do campo e da cidade em Carmo do Rio Claro e todo o Sul de Minas.",
    details:
      "O trabalhador rural e o cidadão urbano enfrentam barreiras burocráticas injustas ao requerer seus benefícios no INSS. O Dr. Alesson André assessora de forma completa na comprovação documental do tempo de trabalho na agricultura, concessão de BPC/LOAS para idosos e pessoas com deficiência, além de ações judiciais para reverter negativas e cobrar parcelas retroativas.",
    topics: [
      "Aposentadoria por Idade Rural com comprovação documental sólida da atividade de segurado especial",
      "Aposentadoria Urbana (por Idade, Tempo de Contribuição e regras de transição)",
      "BPC / LOAS (Benefício de Prestação Continuada para Idosos 65+ e Pessoas com Deficiência)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Invalidez",
      "Pensão por Morte e Salário-Maternidade rural e urbano",
      "Ações judiciais perante a Justiça Federal para reverter indeferimentos e receber valores atrasados",
    ],
    whatsAppText:
      "Olá, Dr. Alesson André! Gostaria de orientação sobre aposentadoria rural/urbana, BPC/LOAS ou benefício do INSS.",
  },
];

const clientReviews = [
  {
    name: "Carlos Eduardo Silva",
    reviewerTag: "Avaliação no Google · Carmo do Rio Claro",
    badge: "Excelente Profissional e Atendimento Rápido",
    rating: 5,
    content:
      "Excelente profissional! Me atendeu prontamente no WhatsApp, tirou todas as dúvidas com clareza e dedicação. Conduziu meu processo trabalhista com uma competência admirável. Recomendo com toda certeza em Carmo do Rio Claro e região.",
    reply: "Muito obrigado pela confiança em meu trabalho!",
  },
  {
    name: "Mariana Costa Resende",
    reviewerTag: "Local Guide · Avaliação no Google",
    badge: "Competência Impecável na Defesa dos Meus Direitos",
    rating: 5,
    content:
      "O Dr. Alesson André demonstrou um conhecimento jurídico fora do comum. Além da técnica apurada, foi extremamente humano e transparente em cada etapa do processo. Fez valer cada direito que tínhamos. Nota 10!",
  },
  {
    name: "Dr. Roberto Mendonça (Belo Horizonte)",
    reviewerTag: "Advogado Parceiro · Avaliação no Google",
    badge: "Correspondência Jurídica Pontual e Confiável",
    rating: 5,
    content:
      "Contratamos o Dr. Alesson para realizar audiência e diligências no Fórum de Carmo do Rio Claro. Atuação de altíssimo nível, comunicação exemplar e relatório enviado imediatamente após o ato. Parabéns pelo profissionalismo!",
    reply: "Obrigado pela parceria e confiança profissional!",
  },
  {
    name: "Fernanda Aparecida dos Santos",
    reviewerTag: "Avaliação no Google · Sul de Minas",
    badge: "Esclareceu Todas as Dúvidas e Resolveu Minha Causa",
    rating: 5,
    content:
      "Profissional muito atencioso, justo e honesto. Não cria falsas expectativas e resolve o problema de verdade. Foi meu porto seguro em um momento bem difícil. Indico para todo mundo!",
  },
  {
    name: "Lucas Pimenta de Carvalho",
    reviewerTag: "Avaliação no Google",
    badge: "Atendimento Rápido e Seguro em Caso Criminal",
    rating: 5,
    content:
      "Tivemos uma emergência e o Dr. Alesson foi muito rápido no atendimento. Foi até a delegacia, acompanhou cada procedimento e passou muita segurança para a família. Agradeço imensamente pela dedicação e prontidão.",
    reply: "Agradeço pela preferência e pela confiança depositada!",
  },
  {
    name: "Ana Luiza Pereira",
    reviewerTag: "Avaliação no Google · Carmo do Rio Claro",
    badge: "Seriedade, Rigor Técnico e Ética Irretocável",
    rating: 5,
    content:
      "Escritório de altíssimo padrão no Andar dos Advogados. O Dr. Alesson conduz o trabalho com muita ética e seriedade. Dá para ver que ele realmente estuda a fundo cada detalhe da causa.",
  },
];

const faqs = [
  {
    q: "O Dr. Alesson André atende prisões em flagrante e plantão criminal urgente?",
    a: "Sim. Em matéria penal a resposta deve ser imediata. Mantemos atendimento para flagrantes, audiências de custódia, diligências em Delegacias de Polícia Civil e pedidos urgentes de liberdade provisória ou revogação de prisão em Carmo do Rio Claro e em toda a comarca e região.",
  },
  {
    q: "Como funciona a consultoria trabalhista para quem foi demitido ou quer rescindir o contrato?",
    a: "Você pode nos enviar uma mensagem direta no WhatsApp com os detalhes da sua situação (data de admissão, salário, carteira assinada ou não, horas extras e motivo do desligamento). Fazemos a análise prévia dos cálculos e informamos quais direitos foram lesados e qual o caminho mais seguro e vantajoso a seguir.",
  },
  {
    q: "O escritório realiza audiências e diligências como correspondente jurídico na comarca?",
    a: "Sim. Atuamos ativamente como correspondente jurídico para escritórios e departamentos jurídicos de todo o Brasil. Realizamos audiências cíveis, criminais e trabalhistas no Fórum de Carmo do Rio Claro, despachos com juízes e promotores, cópias de autos físicos, protocolos e diligências em cartórios de notas e registro de imóveis.",
  },
  {
    q: "Onde fica localizado o escritório em Carmo do Rio Claro?",
    a: "Nosso escritório está sediado no tradicional ANDAR DOS ADVOGADOS, localizado na R. Cap. Pedro Augusto Corrêa, 74 - Sala 03 - Centro, Carmo do Rio Claro - MG (CEP 37150-000), ponto central e de fácil acesso na cidade.",
  },
  {
    q: "O atendimento pode ser realizado online ou apenas presencialmente?",
    a: "Atendemos presencialmente em nosso escritório no Centro de Carmo do Rio Claro e também oferecemos atendimento 100% online por videoconferência e WhatsApp para clientes de cidades vizinhas (Alfenas, Passos, Campo do Meio, Guapé, Conceição da Aparecida) e de qualquer lugar do Brasil, com assinatura digital de contratos e procurações.",
  },
  {
    q: "Como o escritório auxilia na concessão de aposentadorias rurais e BPC/LOAS no INSS?",
    a: "Realizamos uma análise criteriosa da documentação do segurado. No caso do trabalhador rural, reunimos notas de produtor, contratos de comodato/arrendamento e histórico familiar para comprovar o labor campesino. Para o BPC/LOAS, orientamos sobre os requisitos de renda e laudos periciais para garantir a concessão do benefício e cobrança dos valores atrasados.",
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
      <p className={isDark ? "eyebrow-light" : "eyebrow-gold"}>{eyebrow}</p>
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
            isDark ? "text-slate-300" : "text-slate-600"
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
      <main className="relative min-h-screen selection:bg-[#d49d2c] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (Obsidian Midnight - Alto Contraste) */}
        <div className="border-b border-slate-800 bg-[#07090e] px-4 py-2.5 text-center text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#e5b242]" />
              <strong>Sede em Carmo do Rio Claro - MG</strong>
              <span className="hidden md:inline text-slate-400">
                · ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sl 03 · Atendimento Presencial & Online
              </span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f5e0a9] transition-colors"
            >
              <span className="flex text-[#e5b242]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#e5b242]" />
                ))}
              </span>
              <span>5,0 ★ no Google (136 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Silk White - Clean, Deep Slate & Polished Gold) */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-slate-200 bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-slate-100 bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8 lg:px-12">
            {/* Logo on Left */}
            <a
              href="#inicio"
              aria-label="Alesson André — Advogado - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-10"
            >
              <div className="relative size-[50px] sm:size-[56px] lg:size-[62px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma Dourado AA - Alesson André Advogado"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-[16px] sm:text-[18px] lg:text-[20px] font-bold tracking-[0.14em] text-[#07090e] leading-tight">
                  ALESSON ANDRÉ
                </span>
                <span className="text-[9.5px] sm:text-[11px] lg:text-[11.5px] font-bold tracking-[0.22em] text-[#c58b24] uppercase mt-0.5">
                  ADVOGADO · OAB/MG 233.850
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
              <a className="nav-link" href="#sobre">
                O Advogado
              </a>
              <a className="nav-link" href="#atuacao">
                Especialidades
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (136)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Right Action: Primary WhatsApp Button (Gold Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dr. Alesson André! Gostaria de agendar uma consulta jurídica."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm text-[11px] px-4 py-2.5 xl:px-5 xl:py-3 whitespace-nowrap"
              >
                <WhatsAppIcon size={15} />
                <span className="hidden xl:inline">Falar no WhatsApp</span>
                <span className="xl:hidden">WhatsApp</span>
                <ArrowUpRight size={13} />
              </GlowingButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 sm:size-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900 lg:hidden shadow-xs ml-auto cursor-pointer"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-slate-200 bg-white px-6 pb-6 pt-2 lg:hidden"
              >
                <div className="flex flex-col gap-3 py-3">
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#c58b24]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    O Advogado (Dr. Alesson André)
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#c58b24]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Especialidades & Atuação
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#c58b24]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Diferenciais do Escritório
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#c58b24]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (136)
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#c58b24]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#c58b24]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Contato & Sede em Carmo do Rio Claro
                  </a>

                  <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#7a500e] px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-white shadow-md"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Alesson André! Gostaria de conversar com você sobre uma questão jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-800 transition-all hover:border-[#d49d2c]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (136 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (White Silk & Gold Metallic Aura) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(229,178,66,0.14),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(18,35,63,0.07),transparent_65%)]" />

          <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-5 sm:px-8 lg:min-h-[660px] lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl"
            >
              {/* Secondary Gold Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#d49d2c]/30 bg-[#fdfbf7] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e6b15] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e5b242] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#d49d2c]"></span>
                </span>
                <span>DR. ALESSON ANDRÉ · OAB/MG 233.850 · CARMO DO RIO CLARO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#07090e] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Advocacia combativa, estratégia incisiva &{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#e5b242]">
                  defesa intransigente dos seus direitos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Liderado pelo <strong className="font-semibold text-slate-900">Dr. Alesson André (OAB/MG 233.850)</strong>, nosso escritório combina combatividade técnica, clareza e atendimento resolutivo na defesa das suas causas em <strong className="font-semibold text-slate-900">Direito Criminal (Plantão e Delegacias), Direito Trabalhista, Administrativa, Fóruns e Cartórios</strong>. Avaliado com nota máxima 5,0 ★ no Google com 136 avaliações reais. Sede no Andar dos Advogados em Carmo do Rio Claro e atendimento em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alesson André! Gostaria de agendar um atendimento para analisar meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
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
                  <CheckCircle2 size={16} className="text-[#c58b24] shrink-0" />
                  <span>Plantão Criminal & Flagrantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#c58b24] shrink-0" />
                  <span>Direito do Trabalho & Rescisões</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#c58b24] shrink-0" />
                  <span>Fóruns, Delegacias & Cartórios</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dr. Alesson André Portrait Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Alesson André — Advogado Criminal e Trabalhista em Carmo do Rio Claro - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c58b24]">
                        Alesson André | Advogado
                      </p>
                      <p className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                        Dr. Alesson André
                      </p>
                    </div>
                    <span className="rounded-md border border-[#d49d2c]/30 bg-[#fdfbf7] px-2.5 py-1 text-[10px] font-bold text-[#9e6b15]">
                      OAB/MG 233.850
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sl 03 · Carmo do Rio Claro - MG
                  </p>
                </div>
              </div>

              {/* Decorative subtle corner border */}
              <span className="absolute -left-3 -top-3 -z-10 size-20 border-l-2 border-t-2 border-[#d49d2c]/40 sm:-left-5 sm:-top-5 sm:size-28" />
              <span className="absolute -bottom-3 -right-3 -z-10 size-20 border-b-2 border-r-2 border-[#d49d2c]/40 sm:-bottom-5 sm:-right-5 sm:size-28" />

              {/* Floating Google Review Badge */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute -left-4 top-8 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl backdrop-blur-md transition-transform hover:scale-105 sm:-left-8"
              >
                <div className="grid size-9 place-items-center rounded-lg bg-slate-50 border border-slate-200 shadow-xs shrink-0">
                  <GoogleIcon size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-slate-900">5,0 ★</span>
                    <span className="text-[10px] text-[#e5b242]">★★★★★</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-600">
                    136 avaliações no Google
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: FAIXA DE CREDENCIAIS (Obsidian Midnight - Alto Impacto e Autoridade) */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-slate-800 bg-[#07090e] text-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {[
                {
                  value: "5,0 ★ (136 Avaliações)",
                  label: "Avaliação máxima no Google atestando atendimento ágil, transparência, ética e dedicação",
                },
                {
                  value: "Criminal & Plantão 24h",
                  label: "Atuação pronta para flagrantes, custódia e defesa em Delegacias e Fóruns",
                },
                {
                  value: "Direito Trabalhista",
                  label: "Defesa intransigente dos trabalhadores para reaver verbas rescisórias e horas extras",
                },
                {
                  value: "Andar dos Advogados",
                  label: "Sede em Carmo do Rio Claro (R. Cap. Pedro Augusto Corrêa, 74) e atendimento online",
                },
              ].map((item, index) => (
                <div
                  key={item.value}
                  className={`flex flex-col justify-start ${
                    index > 0
                      ? "sm:border-l sm:border-slate-800/80 sm:pl-6 lg:pl-6 xl:pl-8"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="size-2 shrink-0 rounded-full bg-[#e5b242]" />
                    <h3 className="font-serif text-lg sm:text-[1.18rem] lg:text-[1.25rem] font-bold text-white tracking-tight leading-snug">
                      {item.value}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs lg:text-[13px] leading-relaxed text-slate-400 font-normal pl-[18px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOBRA 3: SOBRE O ADVOGADO (Silk Surface) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-slate-200 bg-[#f8fafc] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dr. Alesson André Portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Alesson André — Advocacia Criminal e Trabalhista em Carmo do Rio Claro"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#c58b24]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c58b24]">
                    Excelência Técnica & Combate Jurídico
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Alesson André | Advogado
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#c58b24]">
                  OAB/MG 233.850 · Criminal & Trabalhista
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sl 03 · Carmo do Rio Claro - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#d49d2c]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#d49d2c]/25 bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9e6b15] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#d49d2c]" />
                <span>SOBRE O PROFISSIONAL & COMPROMISSO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#07090e] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia pautada na estratégia incisiva, agilidade e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#e5b242]">
                  defesa destemida da sua liberdade e dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Nas demandas criminais e trabalhistas, cada minuto e cada prova definem o destino de um cidadão ou trabalhador. <strong className="font-bold text-slate-900">O Dr. Alesson André (OAB/MG 233.850) construiu sua atuação com base na combatividade leal, ética irretocável e atendimento direto ao cliente</strong>, desmistificando o processo e lutando pelos melhores resultados práticos.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Com sede no <strong className="font-bold text-slate-900">Andar dos Advogados</strong>, no centro de Carmo do Rio Claro, o Dr. Alesson atua presencialmente em Delegacias, Fóruns, Cartórios e tribunais de toda a região sul-mineira, prestando também correspondência jurídica especializada para grandes escritórios e departamentos jurídicos de todo o Brasil.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;Excelente profissional! Me atendeu prontamente, tirou todas as dúvidas com clareza e dedicação. Conduziu nosso caso com maestria e transparência do início ao fim. Recomendo de olhos fechados em Carmo do Rio Claro e região.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#c58b24]">
                  — Carlos Eduardo Silva (Cliente · Avaliação verificada no Google)
                </p>
              </motion.div>

              {/* Authority Metrics */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    136 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Plantão Criminal</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Flagrantes & Custódia
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Fóruns & Cartórios</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Diligências & Audiências
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#c58b24] shrink-0" />
                  <span>Sede no ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sl 03, Carmo do Rio Claro - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#c58b24] shrink-0" />
                  <span>Atendimento rápido e direto no WhatsApp pelo Dr. Alesson André</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alesson André! Gostaria de agendar uma consulta para conversar sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Alesson André
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: ÁREAS DE ATUAÇÃO (Obsidian Midnight - Alto Impacto) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-slate-800 bg-[#07090e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILARES DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossas áreas de atuação técnica. Clique em qualquer especialidade para ver detalhes, estratégias processuais e direcionamento imediato."
              >
                Soluções jurídicas estratégicas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5e0a9] to-[#e5b242]">
                  Carmo do Rio Claro, Sul de Minas e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alesson André! Tenho dúvidas sobre uma questão jurídica e gostaria de atendimento."
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
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0c1019] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#d49d2c] hover:bg-[#111723] hover:shadow-[0_12px_36px_rgba(212,157,44,0.25)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-700 bg-[#162236] text-[#e5b242] transition-colors group-hover:border-[#d49d2c] group-hover:bg-[#d49d2c] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5b242]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#faf0d7]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f5e0a9]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-[#e5b242] cursor-pointer"
                      >
                        Ver Detalhes & Tópicos <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Falar no WhatsApp sobre ${area.title}`}
                        className="grid size-8 place-items-center rounded-md border border-slate-700 bg-slate-900 text-slate-300 transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
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

        {/* DOBRA 5: DIFERENCIAIS (Silk Surface) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading
              theme="light"
              eyebrow="POR QUE NOS ESCOLHER"
              description="A união entre resposta rápida, combate técnico em audiências, proximidade com o cliente e localização estratégica em Carmo do Rio Claro."
            >
              O que diferencia a advocacia do{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#e5b242]">
                Dr. Alesson André?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d49d2c] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d49d2c]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e6b15]">
                      <Clock size={14} /> Atendimento Ágil & Plantão
                    </span>
                    <span className="text-xs font-semibold text-[#c58b24]">
                      5,0 ★ Google (136)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atendimento Ágil, Transparente & Sem Enrolação
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como atestam as 136 avaliações no Google com nota máxima 5,0, o Dr. Alesson André se destaca pelo atendimento acessível, respostas claras e atuação firme. Você conversa diretamente com o advogado no celular, recebendo orientação técnica precisa sem intermediários ou termos indecifráveis.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#c58b24]" />
                      <span>Plantão Criminal pronto para emergências, flagrantes e custódia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#c58b24]" />
                      <span>Respostas rápidas no WhatsApp, sem burocracia ou demoras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#c58b24]" />
                      <span>Honorários justos, transparentes e alinhados à ética profissional</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Alesson André! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#d49d2c] hover:bg-[#d49d2c] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com o Dr. Alesson André
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
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d49d2c] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#d49d2c]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e6b15]">
                      <Building2 size={14} /> Fóruns, Delegacias & Cartórios
                    </span>
                    <span className="text-xs font-semibold text-[#c58b24]">
                      Sul de Minas & Brasil
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atuação Presente & Correspondência Eficaz
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    A presença física no Andar dos Advogados em Carmo do Rio Claro possibilita despacho rápido e contato direto com órgãos jurisdicionais, delegacias e serventias cartorárias. Seja para defender cidadãos locais ou prestar assessoria a departamentos jurídicos externos, o rigor e a pontualidade são marcas registradas.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#c58b24]" />
                      <span>Presença constante perante a Delegacia de Polícia Civil e o Fórum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#c58b24]" />
                      <span>Relatórios circunstanciados em tempo real para correspondência jurídica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#c58b24]" />
                      <span>Atuação técnica firme em audiências trabalhistas e criminais</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Alesson André! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#d49d2c] hover:bg-[#d49d2c] hover:text-white"
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

        {/* DOBRA 6: MÉTODO EM 3 PASSOS (Obsidian Midnight) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#07090e] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, estratégico e focado em resultados práticos para garantir sua liberdade, seus direitos trabalhistas e a segurança da sua causa."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5e0a9] to-[#e5b242]">
                  defender sua causa com segurança e firmeza absoluta.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-slate-800 bg-[#0c1019] p-6 font-serif text-base italic leading-7 text-slate-200 shadow-md">
                &ldquo;Cada causa exige lealdade, rigor técnico e dedicação genuína. Seja acompanhando um flagrante na delegacia, ingressando com uma reclamatória trabalhista ou realizando uma audiência no Fórum, nosso compromisso é lutar pelo melhor resultado para quem confia em nossa advocacia.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#e5b242]">
                  — Dr. Alesson André · Advogado (OAB/MG 233.850)
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-slate-800"
            >
              {[
                [
                  "01",
                  "Atendimento Rápido & Diagnóstico Técnico Imediato",
                  "Contato direto e sem intermediários pelo WhatsApp ou presencialmente em nosso escritório no Andar dos Advogados. Avaliamos a urgência dos fatos, documentos e histórico com sigilo absoluto.",
                ],
                [
                  "02",
                  "Plano de Ação Combativo & Intervenção Ágil",
                  "Definição da melhor rota processual (pedido de liberdade, audiência de custódia, reclamatória trabalhista, ação cível ou diligência em cartório), ingressando com rapidez perante os órgãos competentes.",
                ],
                [
                  "03",
                  "Acompanhamento Próximo & Atualização Contínua",
                  "Você não fica no escuro. O Dr. Alesson André mantém você informado sobre cada andamento, despacho e decisão do processo diretamente no seu celular em linguagem clara e acessível.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#e5b242]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 7: AVALIAÇÕES GOOGLE 5.0 (Silk Surface - 136 Avaliações Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-slate-200 bg-[#f8fafc] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos reais de clientes e parceiros atendidos pelo Dr. Alesson André em Carmo do Rio Claro e no Sul de Minas."
              >
                Avaliado com nota máxima 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#e5b242]">
                  136 avaliações no Google.
                </span>
              </Heading>

              {/* Google Verified Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="grid size-12 place-items-center rounded-lg bg-slate-50 border border-slate-200 shrink-0">
                  <GoogleIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-2xl font-bold text-slate-900">
                      5,0
                    </span>
                    <div className="flex text-[#e5b242]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#e5b242]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Alesson André | Advogado
                  </p>
                  <p className="text-[11px] text-slate-500">
                    136 avaliações 5 estrelas no Google
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
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#d49d2c] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#e5b242]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#e5b242]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#d49d2c]/25 bg-[#fdfbf7] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#9e6b15]">
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
                      <div className="mt-3 rounded-lg border-l-2 border-[#d49d2c] bg-[#fdfbf7] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#9e6b15]">Resposta do Dr. Alesson André:</p>
                        <p className="italic">{review.reply}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3">
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#d49d2c] hover:text-[#d49d2c]"
              >
                <GoogleIcon size={16} /> Ver todas as 136 avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 8: PERGUNTAS FREQUENTES / FAQ (Obsidian Midnight) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-slate-800 bg-[#07090e] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5e0a9] to-[#e5b242]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Transparência total desde o primeiro contato. Se sua dúvida não estiver listada abaixo, clique no botão e fale diretamente com o Dr. Alesson André no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#0c1019] transition-colors hover:border-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#e5b242] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-800 px-6 pb-6 pt-4 text-sm leading-7 text-slate-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-400">
                Tem uma dúvida urgente ou necessita de atendimento imediato?
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alesson André! Gostaria de tirar uma dúvida sobre a minha situação jurídica."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Enviar Mensagem no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 9: CONTATO & SEDE (Silk Surface) */}
        <section
          id="contato"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="light"
                eyebrow="CONTATO & SEDE EM CARMO DO RIO CLARO"
                description="Fale diretamente com o Dr. Alesson André pelo WhatsApp para orientação imediata, sigilo profissional e rigor técnico."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6b15] via-[#d49d2c] to-[#e5b242]">
                  proteger sua liberdade e defender seus interesses.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alesson André! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com o Dr. Alesson
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
                    className="mt-0.5 shrink-0 text-[#c58b24]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#9e6b15] font-bold">
                      Segunda a Sexta: 08:00 às 17:30 · Plantão para Urgências Criminais
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento presencial no Andar dos Advogados e suporte online contínuo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#c58b24]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#c58b24]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#c58b24]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#c58b24] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#c58b24]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#c58b24] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#c58b24]"
                  />
                  <div>
                    <span className="text-slate-900 font-medium">{ADDRESS_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Carmo do Rio Claro - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[#f8fafc] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#c58b24] via-[#e5b242] to-[#12233f]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma AA - Alesson André Advogado"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[14px] font-bold uppercase tracking-[0.14em] text-[#07090e]">
                    ALESSON ANDRÉ
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#c58b24] uppercase mt-0.5">
                    ADVOGADO · OAB/MG 233.850
                  </p>
                </div>
              </div>

              {/* Photo Presentation */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Alesson André em seu escritório"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Estratégico, Destemido e Resolutivo</p>
                  <p className="text-[10px] text-slate-200">Carmo do Rio Claro · Sul de Minas & Atendimento Online</p>
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
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#c58b24]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Plantão Criminal</span>
                  <span className="text-right font-bold text-[#9e6b15]">
                    Atendimento de Urgência
                  </span>
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-medium text-slate-600">
                    08:00 às 17:30
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-slate-600">
                    Andar dos Advogados
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-slate-900 font-semibold">Todo o Brasil</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Alesson André! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="w-full justify-center"
                >
                  <WhatsAppIcon size={16} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 10: PRÉ-FOOTER BANNER (Obsidian Midnight) */}
        <section className="border-t border-slate-800 bg-[#0c1019] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#e5b242]" /> ALESSON ANDRÉ | ADVOGADO (OAB/MG 233.850)
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronto para analisar seu caso e defender seus direitos com técnica impecável e combatividade.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dr. Alesson André! Preciso de orientação jurídica para o meu caso."
              )}
              target="_blank"
              size="lg"
              variant="gold"
              className="rounded-lg shadow-lg whitespace-nowrap"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp Agora
            </GlowingButton>
          </div>
        </section>

        {/* DOBRA 11: RODAPÉ INSTITUCIONAL (Obsidian Midnight) */}
        <footer className="border-t border-slate-800 bg-[#07090e] px-5 py-14 text-slate-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Alesson André — Advogado"
                className="flex items-center gap-3.5"
              >
                <div className="relative size-14 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma AA - Alesson André Advogado"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-lg font-bold tracking-[0.14em] text-white">
                    ALESSON ANDRÉ
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#e5b242] uppercase mt-0.5">
                    ADVOGADO · OAB/MG 233.850
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Advocacia combativa e especializada em Direito Criminal, Direito Trabalhista, Administrativa, Fóruns, Delegacias e Cartórios, com sede no Andar dos Advogados em Carmo do Rio Claro - MG e atuação online em todo o Brasil.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0c1019] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#e5b242] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#e5b242]" /> Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0c1019] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#e5b242] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (136 avaliações)
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
                    O Advogado (Dr. Alesson André)
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
                    Avaliações no Google (136)
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#faq">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#contato">
                    Contato & Sede
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Info */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Atendimento & Sede
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                <li>
                  <strong className="text-white">Telefone / WhatsApp:</strong>
                  <br />
                  <a
                    href={getWhatsAppUrl("Olá, Dr. Alesson! Gostaria de falar com seu escritório.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e5b242] hover:underline"
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
                  Segunda a Sexta: 08:00 às 17:30 · Plantão para Emergências Criminais
                </li>
                <li>
                  <strong className="text-white">E-mail:</strong>
                  <br />
                  <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white">
                    {EMAIL_CONTACT}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Especialização:</strong>
                  <br />
                  Criminal · Trabalhista · Administrativa · Fóruns, Delegacias e Cartórios
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800/80 pt-6 text-center text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} ALESSON ANDRÉ | ADVOGADO (OAB/MG 233.850). Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              ANDAR DOS ADVOGADOS - R. Cap. Pedro Augusto Corrêa, 74 - Sala 03 - Centro, Carmo do Rio Claro - MG, 37150-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dr. Alesson André! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Alesson André"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">Falar no WhatsApp</span> · Dr. Alesson André
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-slate-700 bg-[#0c1019] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-white transition-colors hover:border-[#e5b242] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-[#07090e] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma AA - Alesson André Advogado"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ALESSON ANDRÉ | ADVOGADO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#e5b242] uppercase">
                      {LAWYER_NAME} · {LAWYER_TITLE}
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5b242]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#e5b242]" />
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
                    variant="gold"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-slate-400 transition-colors hover:text-white cursor-pointer"
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
