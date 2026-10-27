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
  HelpCircle,
  X,
  ChevronDown,
  Building2,
  Landmark,
  Wheat,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537999720495";
const PHONE_DISPLAY = "(37) 99972-0495";
const EMAIL_CONTACT = "contato@mariaeduardanoronha.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/adv.marianoronha";
const INSTAGRAM_HANDLE = "@adv.marianoronha";
const LAWYER_NAME = "Dra. Maria Eduarda Noronha";
const LAWYER_TITLE = "Advogada Bancária e do Agronegócio · Procuradora do INPI";
const FIRM_NAME = "Maria Eduarda Noronha — Advocacia e Consultoria Jurídica";
const ADDRESS_TEXT = "R. Monsenhor Geraldo Mendes Vasconcelos, 280 - Dom Belchior, Luz - MG, 35595-000";
const REGION_TEXT = "Luz · Bom Despacho · Lagoa da Prata · Dores do Indaiá · Centro-Oeste Mineiro & Atuação Nacional";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Maria+Eduarda+Noronha+%E2%80%94+Advocacia%0ALuz+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/maria-eduarda-hero.jpg";
const FOTO_SOBRE_SRC = "/maria-eduarda-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Maria Eduarda Noronha! Gostaria de tirar dúvidas e agendar uma consultoria jurídica.";
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
  icon: typeof Landmark;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-bancario",
    title: "Direito Bancário & Defesa Financeira",
    icon: Landmark,
    tag: "Revisão Contratual · Juros Abusivos · Execuções · Suspensão de Leilões",
    summary:
      "Defesa contundente contra abusos de instituições financeiras, revisão de cláusulas ilegais, proteção do patrimônio e blindagem contra execuções.",
    details:
      "As relações bancárias frequentemente impõem juros extorsivos, capitalização indevida e garantias desproporcionais que sufocam a saúde financeira de empresas, famílias e produtores rurais. A Dra. Maria Eduarda Noronha atua de forma firme e especializada na análise minuciosa de contratos de financiamento, empréstimos com garantia e cédulas de crédito, desconstituindo abusividades e suspendendo atos expropriatórios.",
    topics: [
      "Ação Revisional de Contratos de Financiamento, Cédulas Bancárias e Cartões com exclusão de juros abusivos",
      "Defesa técnica e embargos contra Ações de Execução de Título Extrajudicial movidas por instituições financeiras",
      "Pedido liminar urgente para suspensão e anulação de leilão judicial e extrajudicial de imóveis e veículos",
      "Renegociação global de passivos bancários com deságio e alongamento sustentável do fluxo de pagamento",
      "Ações indenizatórias por fraudes bancárias, golpes do Pix, boletos falsos e empréstimos consignados fraudulentos",
      "Desbloqueio cautelar imediato de contas correntes, contas-salário e investimentos bloqueados indevidamente",
    ],
    whatsAppText:
      "Olá, Dra. Maria Eduarda! Gostaria de consultoria jurídica especializada sobre Direito Bancário (revisão de contrato, execução ou leilão).",
  },
  {
    id: "direito-do-agronegocio",
    title: "Direito do Agronegócio & Crédito Rural",
    icon: Wheat,
    tag: "Prorrogação de Dívidas Rurais (MCR) · CPR & CCR · Contratos Agrários",
    summary:
      "Segurança jurídica e proteção incondicional para o produtor rural perante bancos, tradings e fornecedores, assegurando a continuidade da safra.",
    details:
      "O agronegócio opera sob riscos climáticos, flutuações severas de mercado e custos elevados de insumos. Conhecedora profunda da realidade do campo e do Manual de Crédito Rural (MCR), a Dra. Maria Eduarda Noronha garante o direito legítimo do produtor ao alongamento de suas dívidas de custeio e investimento, impedindo que adversidades momentâneas ameacem suas terras e maquinários.",
    topics: [
      "Prorrogação e alongamento de parcelas de Crédito Rural com fundamento na Súmula 298 do STJ e Manual de Crédito Rural (MCR)",
      "Defesa e renegociação de Cédula de Produto Rural (CPR física e financeira), CCR e Cédula Imobiliária Rural",
      "Elaboração, análise preventiva e repactuação de Contratos de Arrendamento Rural, Parceria Agrícola e Pastoreio",
      "Defesa patrimonial da propriedade rural, benfeitorias, rebanhos e safras contra penhoras e busca e apreensão",
      "Assessoria jurídica em aquisições de insumos agrícolas, fertilizantes, defensivos e maquinários pesados",
      "Estruturação societária da atividade agropecuária e assessoria preventiva para produtores e cooperativas",
    ],
    whatsAppText:
      "Olá, Dra. Maria Eduarda! Gostaria de atendimento sobre Direito do Agronegócio (crédito rural, prorrogação de dívida ou contratos agrários).",
  },
  {
    id: "direito-imobiliario",
    title: "Direito Imobiliário & Regularização Fundiária",
    icon: Building2,
    tag: "Regularização de Imóveis e Fazendas · Usucapião · Contratos · Posse",
    summary:
      "Garantia documental e segurança jurídica absoluta para propriedades rurais e urbanas, evitando litígios e valorizando o patrimônio.",
    details:
      "A posse sem a regularização jurídica formal gera vulnerabilidade, dificulta o acesso ao crédito rural ou bancário e prejudica a valorização do bem. Atuamos com rigor em procedimentos de regularização de terras rurais e imóveis urbanos, ações de usucapião administrativa ou judicial e na estruturação de contratos imobiliários seguros.",
    topics: [
      "Regularização fundiária completa de propriedades rurais (fazendas, glebas e sítios) e imóveis urbanos",
      "Processamento de Usucapião Extrajudicial em Cartório de Notas e Usucapião Judicial contenciosa",
      "Auditoria jurídica e análise de riscos (Due Diligence Imobiliária) para compra e venda segura de imóveis",
      "Ações Possessórias: Reintegração de Posse, Manutenção e Interdito Proibitório em defesa da terra",
      "Desmembramento, unificação de matrículas, retificação de área e averbações junto aos Cartórios de Registro",
      "Distrato de contratos imobiliários, devolução de parcelas retidas e reparação por atraso em entregas",
    ],
    whatsAppText:
      "Olá, Dra. Maria Eduarda! Gostaria de consultoria sobre Direito Imobiliário (regularização de imóvel, usucapião ou contrato).",
  },
  {
    id: "registro-de-marcas",
    title: "Registro de Marcas no INPI (Procuradora do INPI)",
    icon: BadgeCheck,
    tag: "Exclusividade de Marca · Agro & Comércio · Combate a Plágio · Notificações",
    summary:
      "Como Procuradora habilitada no INPI, blindamos sua marca em todo o Brasil, garantindo exclusividade comercial e valor patrimonial inestimável.",
    details:
      "A marca é um dos ativos mais valiosos de qualquer negócio ou produtor agropecuário. Sem o registro oficial no Instituto Nacional da Propriedade Industrial (INPI), você corre o risco de perder o nome construído com anos de dedicação ou ser processado por uso indevido. Realizamos busca prévia criteriosa, protocolo e defesa contínua da sua propriedade intelectual.",
    topics: [
      "Registro de marcas comerciais, industriais, serviços e produtos agropecuários perante o INPI em âmbito nacional",
      "Busca prévia aprofundada de anterioridade e viabilidade jurídica para minimizar riscos de indeferimento",
      "Monitoramento permanente da Revista da Propriedade Industrial (RPI) para detectar marcas conflitantes",
      "Apresentação de Oposição técnica contra pedidos de terceiros que tentem imitar ou diluir sua marca",
      "Envio de notificações extrajudiciais e ações cíveis imediatas contra contrafação, pirataria e uso indevido",
      "Gestão de renovação decenal de registros, transferências societárias e contratos de licenciamento de uso",
    ],
    whatsAppText:
      "Olá, Dra. Maria Eduarda! Gostaria de orientação para registrar minha marca no INPI e garantir exclusividade.",
  },
  {
    id: "planejamento-patrimonial-sucessorio",
    title: "Planejamento Patrimonial, Sucessório & Holding",
    icon: Shield,
    tag: "Holding Familiar · Sucessão no Campo e na Cidade · Inventário · Herança",
    summary:
      "Proteção legal dos bens conquistados por gerações, garantindo transmissão pacífica aos herdeiros com expressiva economia tributária.",
    details:
      "A preservação do patrimônio familiar exige antecipação estratégica. Estruturamos holdings familiares e instrumentos sucessórios personalizados que protegem o patrimônio contra contingências futuras, evitam brigas familiares desgastantes e reduzem significativamente os custos com impostos de transmissão (ITCD) e cartórios.",
    topics: [
      "Estruturação de Holding Familiar para produtores rurais e famílias empresárias com planejamento fiscal",
      "Doação de bens em vida com reserva de usufruto, cláusulas de incomunicabilidade e inalienabilidade",
      "Inventário Extrajudicial em Cartório ágil e econômico ou Inventário Judicial com partilha equilibrada",
      "Elaboração técnica de testamentos, pactos antenupciais e acordos de sócios para governança familiar",
      "Estratégia de redução lícita da carga tributária sobre a herança e custos judiciais e cartorários",
      "Blindagem preventiva de bens familiares contra riscos operacionais e contingências mercadológicas",
    ],
    whatsAppText:
      "Olá, Dra. Maria Eduarda! Gostaria de consultoria sobre Planejamento Patrimonial, Holding Familiar ou Inventário.",
  },
  {
    id: "contratos-consultoria-empresarial",
    title: "Contratos Estratégicos & Consultoria Empresarial",
    icon: FileText,
    tag: "Contratos Comerciais · Cobrança de Títulos · Notificações · Gestão de Passivos",
    summary:
      "Assessoria jurídica consultiva e contenciosa de alto impacto para empresas, cooperativas e empreendedores em Minas Gerais e no Brasil.",
    details:
      "Contratos mal redigidos são o maior foco de perdas financeiras nos negócios. Prestamos assessoria preventiva e contenciosa com rigor inegociável, redigindo instrumentos blindados e executando títulos de crédito para garantir liquidez e estabilidade às operações corporativas e comerciais.",
    topics: [
      "Elaboração, revisão minuciosa e blindagem de Contratos Comerciais, Fornecimento e Prestação de Serviços",
      "Cobrança jurídica extrajudicial e Ações de Execução de Títulos de Crédito (duplicatas, cheques e notas promissórias)",
      "Emissão de Notificações Extrajudiciais com validade jurídica para formalização de mora e cobrança",
      "Assessoria em resolução de conflitos entre sócios, apuração de haveres e dissoluções societárias",
      "Auditoria jurídica preventiva (Due Diligence) de passivos trabalhistas, cíveis e fiscais em empresas",
      "Consultoria jurídica mensal (advocacia de partido) para suporte jurídico integral às decisões empresariais",
    ],
    whatsAppText:
      "Olá, Dra. Maria Eduarda! Gostaria de consultoria jurídica sobre contratos ou assessoria para a minha empresa.",
  },
];

const clientReviews = [
  {
    name: "DIVISA AGRÍCOLA",
    reviewerTag: "Cliente Corporativo · Agronegócio · 5 estrelas no Google",
    badge: "Atendimento Sério, Eficiente & Altíssimo Conhecimento Técnico",
    rating: 5,
    content:
      "Contratamos os serviços jurídicos do escritório e ficamos extremamente satisfeitos com o atendimento. Comunicação clara, excelente conhecimento técnico e muita dedicação em cada detalhe da demanda. Atendimento sério, eficiente e muito profissional. Certamente indicamos.",
    reply: "É uma enorme honra assessorar a Divisa Agrícola! Agradeço a confiança na nossa atuação técnica e dedicada.",
  },
  {
    name: "Samuel Duarte Carvalho",
    reviewerTag: "Avaliação verificada no Google",
    badge: "Atendimento Extremamente Profissional e Humano",
    rating: 5,
    content:
      "Atendimento extremamente profissional e humano. Fui muito bem orientado durante todo o processo, sempre com clareza, atenção e agilidade. Dá pra perceber o comprometimento e a competência no que faz. Recomendo sem dúvidas.",
    reply: "Muito obrigada pelas palavras e pela confiança em nosso trabalho, Samuel! Nosso compromisso é sempre com a sua clareza e segurança.",
  },
  {
    name: "Euler CP",
    reviewerTag: "1 avaliação · 3 fotos no Google",
    badge: "Conseguiu Resolver o Problema! Super Indico",
    rating: 5,
    content:
      "Doutora muito eficiente, gostei do serviço que prestou para um cliente que eu atendia. Conseguiu resolver o problema! Super indico.",
    reply: "Obrigada pela recomendação, Euler! A busca pela solução mais célere e eficaz é sempre nossa prioridade.",
  },
  {
    name: "Paula Araújo",
    reviewerTag: "Avaliação verificada no Google",
    badge: "Inteligente, Competente & Empática",
    rating: 5,
    content:
      "Excelente profissional, inteligente, competente e empática! Com uma excelente assistência jurídica, compreende a dor do cliente e busca a melhor forma de ajudá-lo. Recomendo!",
    reply: "Acolhimento e empatia são a base do nosso escritório, Paula. Muito grata pela confiança e carinho!",
  },
  {
    name: "Ana Couto",
    reviewerTag: "3 avaliações no Google",
    badge: "Confio de Olhos Fechados!",
    rating: 5,
    content:
      "Advogada muito competente e excelente profissional, com ótimo atendimento e assistência jurídica. Confio de olhos fechados!",
    reply: "Sua confiança é a maior recompensa, Ana. Conte sempre com nossa dedicação!",
  },
  {
    name: "Allan Gonçalves",
    reviewerTag: "2 avaliações no Google",
    badge: "Atenciosa, Ágil & Excelente Profissional",
    rating: 5,
    content:
      "Excelente profissional, atenciosa e ágil. Indico sempre.",
  },
  {
    name: "Gabriela Monique",
    reviewerTag: "5 avaliações no Google",
    badge: "Me Auxiliou de Forma Rápida!",
    rating: 5,
    content:
      "Ótima profissional. Me auxiliou com meu caso de forma rápida!",
  },
  {
    name: "Ana Luisa Alves",
    reviewerTag: "2 avaliações · 2 fotos no Google",
    badge: "Ágil, Proativa & Muito Dedicada",
    rating: 5,
    content:
      "Excelente profissional, ela é ágil, proativa e muito dedicada ❤️",
  },
  {
    name: "Luis Felipe Bonifácio",
    reviewerTag: "Avaliação verificada no Google",
    badge: "Dedicada & Amplo Conhecimento",
    rating: 5,
    content:
      "Ótima profissional, dedicada, atenciosa e com amplo conhecimento.",
  },
  {
    name: "Tales Caetano",
    reviewerTag: "4 avaliações · 1 foto no Google",
    badge: "Confio Muito no Profissionalismo",
    rating: 5,
    content:
      "Excelente advogada, confio muito em seu profissionalismo!",
  },
  {
    name: "Bianca Lino",
    reviewerTag: "4 avaliações no Google",
    badge: "Muito Competente, Indico Sempre",
    rating: 5,
    content:
      "Ótima profissional, muito competente. Indico sempre.",
  },
  {
    name: "Jéssica Bernardes",
    reviewerTag: "5 avaliações · 20 fotos no Google",
    badge: "Profissional Competente e Dedicada!",
    rating: 5,
    content:
      "Profissional competente e dedicada!",
  },
  {
    name: "Vanessa Figueiredo Santos",
    reviewerTag: "2 avaliações no Google",
    badge: "Excelente Profissional",
    rating: 5,
    content:
      "Excelente profissional.",
  },
];

const faqs = [
  {
    q: "A Dra. Maria Eduarda atende apenas presencialmente em Luz ou também online?",
    a: "Atendemos presencialmente em nosso escritório na R. Monsenhor Geraldo Mendes Vasconcelos, 280, no bairro Dom Belchior em Luz (MG), e também de forma 100% digital e segura para produtores rurais, empresas e clientes particulares em todo o estado de Minas Gerais e demais regiões do Brasil. Reuniões por videoconferência, envio digital de documentos e assinaturas eletrônicas com validade jurídica garantem a mesma eficácia e agilidade sem você precisar sair de casa ou da fazenda.",
  },
  {
    q: "O que fazer se recebi uma cobrança judicial ou notificação de execução bancária?",
    a: "O tempo é crucial em execuções bancárias. Os prazos para apresentação de embargos à execução ou impugnações costumam ser exíguos (muitas vezes de apenas 15 dias). É indispensável acionar imediatamente a Dra. Maria Eduarda para que os contratos sejam periciados e as medidas cabíveis sejam protocoladas para resguardar seus bens, evitar penhora de faturamento, bloqueio de contas e leilão de propriedades.",
  },
  {
    q: "Como funciona o direito de prorrogação e alongamento de dívidas rurais?",
    a: "A prorrogação do vencimento de operações de crédito rural não é um favor do banco, mas sim um direito subjetivo garantido por lei ao produtor rural (Súmula 298 do STJ e Manual de Crédito Rural - MCR) quando comprovada a quebra de safra por intempéries climáticas, frustração de receitas ou dificuldade de comercialização. Realizamos todo o requerimento administrativo e a condução judicial para impedir a inadimplência forçada e a cobrança de juros moratórios abusivos.",
  },
  {
    q: "Por que o registro de marca no INPI é indispensável para o meu negócio ou propriedade?",
    a: "O registro no INPI é a única garantia legal que concede a você a propriedade exclusiva do nome ou logotipo do seu negócio em todo o território nacional. Ter apenas CNPJ ou inscrição na Junta Comercial não protege sua marca. Sem o registro no INPI, qualquer concorrente pode registrar o seu nome antes e exigir que você deixe de utilizá-lo, além de cobrar indenizações pesadas. Como Procuradora perante o INPI, a Dra. Maria Eduarda conduz todo o processo com máxima segurança técnica.",
  },
  {
    q: "Como iniciar uma regularização de imóvel rural ou usucapião?",
    a: "O primeiro passo é uma análise detalhada da cadeia dominial, certidões de matrícula, contratos de gaveta e histórico da posse. Sempre que preenchidos os requisitos legais e havendo anuência dos confrontantes, priorizamos a via extrajudicial em Cartório de Registro de Imóveis, que é muito mais rápida e econômica do que uma ação judicial tradicional.",
  },
  {
    q: "Como fico informado sobre cada andamento do meu caso?",
    a: "A transparência e a agilidade na comunicação são os pilares mais elogiados pelos nossos clientes. Você é informado diretamente pelo WhatsApp a cada movimentação relevante do seu processo, em linguagem simples e compreensível, sem jargões jurídicos confusos. Você acompanha cada vitória em tempo real.",
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
      <main className="relative min-h-screen selection:bg-[#b8783e] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (PRETO - Alto Contraste) */}
        <div className="border-b border-zinc-800 bg-[#09090b] px-4 py-2.5 text-center text-xs text-zinc-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#dfa968]" />
              <strong>Sede em Luz - MG</strong>
              <span className="hidden md:inline text-zinc-400">· R. Monsenhor Geraldo Mendes Vasconcelos, 280 · Atendimento Presencial & Nacional</span>
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
              <span>5,0 ★ no Google (14 avaliações unânimes)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (BRANCO - Clean, Elegante, Baseado no Logo) */}
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
              aria-label="Maria Eduarda Noronha — Advocacia e Consultoria Jurídica - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-12"
            >
              <div className="relative size-10 sm:size-11 shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma MN - Maria Eduarda Noronha Advocacia"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[13px] sm:text-[14.5px] font-bold tracking-[0.12em] text-slate-900 leading-tight">
                  MARIA EDUARDA NORONHA
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.2em] text-[#b8783e] uppercase">
                  ADVOCACIA E CONSULTORIA JURÍDICA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
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

            {/* Right Action: Primary WhatsApp Button (Gold / Bronze Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Maria Eduarda Noronha! Gostaria de agendar uma consulta jurídica."
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
                      className="py-3 text-sm font-medium text-slate-700 hover:text-[#b8783e]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#9e6231] via-[#d4944d] to-[#8d4d20] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Maria Eduarda! Gostaria de conversar com você sobre uma questão jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-stone-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-800 transition-all hover:border-[#b8783e]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (14 avaliações)
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
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[45rem] rounded-full bg-[radial-gradient(circle,rgba(223,169,104,0.09),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[35rem] rounded-full bg-[radial-gradient(circle,rgba(128,24,42,0.06),transparent_65%)]" />

          <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-5 sm:px-8 lg:min-h-[660px] lg:grid-cols-[1.14fr_0.86fr] lg:gap-14 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl"
            >
              {/* Secondary Gold Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#b8783e]/25 bg-[#fdfaf5] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9e6231] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfa968] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#b8783e]"></span>
                </span>
                <span>DRA. MARIA EDUARDA NORONHA · ADVOGADA BANCÁRIA E DO AGRO · LUZ - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-[#0f172a] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Defesa patrimonial intransigente e estratégia jurídica de alto nível:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6231] via-[#d4944d] to-[#80182a]">
                  protegendo o produtor rural, seu patrimônio bancário e os negócios da sua vida.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Sob a liderança da <strong className="font-semibold text-slate-900">Dra. Maria Eduarda Noronha</strong>, nosso escritório une profundo rigor técnico, combatividade processual e atendimento humanizado em <strong className="font-semibold text-slate-900">Direito Bancário, Direito do Agronegócio, Direito Imobiliário e Registro de Marcas no INPI</strong>. Avaliação máxima 5,0 ★ unânime no Google em Luz, Centro-Oeste de Minas e em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Maria Eduarda Noronha! Gostaria de agendar um atendimento para analisar meu caso."
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
                  <CheckCircle2 size={16} className="text-[#b8783e] shrink-0" />
                  <span>Sigilo Absoluto e Rigor Técnico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b8783e] shrink-0" />
                  <span>Presencial em Luz e Online (Brasil todo)</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#b8783e] shrink-0" />
                  <span>Comunicação Clara e Ágil</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dra. Maria Eduarda Portrait (Perfeito no fundo branco) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Maria Eduarda Noronha — Advogada Bancária e do Agronegócio em Luz - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-stone-200 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8783e]">
                        Maria Eduarda Noronha Advocacia
                      </p>
                      <p className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                        Dra. Maria Eduarda Noronha
                      </p>
                    </div>
                    <span className="rounded-md border border-[#b8783e]/30 bg-[#fdfaf5] px-2.5 py-1 text-[10px] font-bold text-[#9e6231]">
                      Bancário & Agro
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    R. Monsenhor Geraldo Mendes Vasconcelos, 280 · Luz - MG
                  </p>
                </div>
              </div>

              {/* Decorative subtle corner border */}
              <span className="absolute -left-3 -top-3 -z-10 size-20 border-l-2 border-t-2 border-[#b8783e]/40 sm:-left-5 sm:-top-5 sm:size-28" />
              <span className="absolute -bottom-3 -right-3 -z-10 size-20 border-b-2 border-r-2 border-[#b8783e]/40 sm:-bottom-5 sm:-right-5 sm:size-28" />

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
                    14 avaliações unânimes
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
                "nota máxima unânime em 14 avaliações comprovando eficácia técnica e agilidade",
              ],
              [
                "Bancário & Agro",
                "foco estratégico em defesa contra juros abusivos, prorrogação de dívidas e CPR",
              ],
              [
                "Procuradora INPI",
                "registro exclusivo de marcas para proteção comercial e no agronegócio",
              ],
              [
                "Sede em Luz - MG",
                "atendimento presencial acolhedor no Centro-Oeste mineiro e digital para todo o país",
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
            {/* Visual presentation - Dra. Maria Eduarda Portrait Photo */}
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
                  alt="Dra. Maria Eduarda Noronha — Advocacia e Consultoria Jurídica"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#b8783e]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b8783e]">
                    Advocacia Estratégica & Resolutiva
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Maria Eduarda Noronha — Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#b8783e]">
                  Bancário · Agronegócio · Imobiliário · Registro de Marcas
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  R. Monsenhor Geraldo Mendes Vasconcelos, 280 · Luz - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#b8783e]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#b8783e]/25 bg-[#fdfaf5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9e6231] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#b8783e]" />
                <span>SOBRE A ADVOGADA & COMPROMISSO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0f172a] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia pautada na precisão técnica, escuta atenta e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6231] via-[#d4944d] to-[#80182a]">
                  defesa intransigente dos seus direitos patrimoniais.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                O exercício da advocacia estratégica vai além de meras petições judiciais: <strong className="font-bold text-slate-900">ele resguarda o patrimônio, a produção e os negócios construídos com anos de suor</strong>. Seja combatendo a imposição de juros ilegais por instituições financeiras, assegurando a prorrogação de financiamentos agrícolas ou registrando a marca da sua empresa perante o INPI, cada demanda exige dedicação absoluta e estratégia personalizada.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                A <strong className="font-bold text-slate-900">Dra. Maria Eduarda Noronha</strong> consolidou uma atuação de referência no Centro-Oeste de Minas Gerais e em âmbito nacional pela sua capacidade de encontrar soluções jurídicas resolutivas para questões complexas. Com 100% de avaliações 5 estrelas no Google e reconhecimento expressivo de produtores rurais e clientes corporativos, o escritório é sinônimo de segurança, clareza e combate a injustiças.
              </motion.p>

              {/* Client Quote Card from Google Reviews (Divisa Agrícola) */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-stone-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;Contratamos os serviços jurídicos do escritório e ficamos extremamente satisfeitos com o atendimento. Comunicação clara, excelente conhecimento técnico e muita dedicação em cada detalhe da demanda. Atendimento sério, eficiente e muito profissional. Certamente indicamos.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#b8783e]">
                  — DIVISA AGRÍCOLA (Avaliação verificada no Google Meu Negócio · 5,0 ★)
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
                    14 avaliações 100% 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Procuradora do INPI</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Registro & Proteção de Marcas
                  </p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Transparência Total</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Você sabe de tudo em tempo real
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b8783e] shrink-0" />
                  <span>Sede própria na R. Monsenhor Geraldo Mendes Vasconcelos, 280 - Luz, MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b8783e] shrink-0" />
                  <span>Contato direto pelo WhatsApp com a Dra. Maria Eduarda Noronha</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Maria Eduarda! Gostaria de agendar uma consulta para conversar sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Maria Eduarda Noronha
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
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4d8a8] to-[#dfa968]">
                  Luz, Minas Gerais e em todo o território nacional.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Maria Eduarda! Tenho dúvidas sobre uma questão jurídica e gostaria de atendimento."
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
                    className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#121215] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8783e] hover:bg-[#18181b] hover:shadow-[0_12px_36px_rgba(184,120,62,0.22)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-zinc-700 bg-[#1c1c20] text-[#dfa968] transition-colors group-hover:border-[#b8783e] group-hover:bg-[#b8783e] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfa968]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#fae6c8]">
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:text-[#dfa968] cursor-pointer"
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
              description="A combinação entre especialização em Direito Bancário e do Agro, celeridade no atendimento e postura profundamente ética faz a diferença nos resultados que entregamos."
            >
              O que diferencia a atuação da{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6231] via-[#d4944d] to-[#80182a]">
                Dra. Maria Eduarda Noronha?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b8783e] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b8783e]/25 bg-[#fdfaf5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e6231]">
                      <HeartHandshake size={14} /> Acolhimento & Agilidade
                    </span>
                    <span className="text-xs font-semibold text-[#b8783e]">
                      5,0 ★ Google
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atendimento Humanizado, Claro & Focado em Soluções
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como comprovam as avaliações no Google com nota máxima 5,0 ★, o grande diferencial da Dra. Maria Eduarda é aliar sólido conhecimento técnico a uma escuta verdadeiramente atenta. Ela esclarece cada etapa com paciência e clareza, avisando imediatamente a cada andamento processual.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b8783e]" />
                      <span>Comunicação direta sem juridiquês ininteligível</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b8783e]" />
                      <span>Retorno ágil de mensagens e dúvidas no WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b8783e]" />
                      <span>Comprometimento integral com a segurança do cliente</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-stone-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Maria Eduarda! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#b8783e] hover:bg-[#b8783e] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Maria Eduarda
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
                className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-[#f8fafc] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b8783e] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b8783e]/25 bg-[#fdfaf5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9e6231]">
                      <Award size={14} /> Especialização Bancária & Agro
                    </span>
                    <span className="text-xs font-semibold text-[#b8783e]">
                      Procuradora INPI
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Rigor Técnico, Estratégia Processual & Visão de Negócio
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Demandas bancárias e do agronegócio exigem estratégias refinadas: elaboração de perícias de juros, pedidos liminares para suspensão de leilões, prorrogação de créditos rurais e registro exclusivo de marcas no INPI. O escritório atua com combatividade técnica para proteger o patrimônio e a atividade do produtor.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b8783e]" />
                      <span>Análise aprofundada de contratos bancários e jurisprudência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b8783e]" />
                      <span>Atuação rápida para tutelas de urgência e suspensão de atos expropriatórios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b8783e]" />
                      <span>Assessoria jurídica integral para produtores rurais e empresas</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-stone-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Maria Eduarda! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#b8783e] hover:bg-[#b8783e] hover:text-white"
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
                description="Um método transparente, acolhedor e centrado em resultados práticos para garantir sua tranquilidade, seus direitos e o patrimônio da sua família e negócio."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4d8a8] to-[#dfa968]">
                  proteger seu patrimônio e resolver sua demanda com segurança.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-zinc-800 bg-[#18181b] p-6 font-serif text-base italic leading-7 text-zinc-200 shadow-md">
                &ldquo;Cada cliente e cada demanda patrimonial são únicos. Nosso compromisso é trazer 100% de clareza, dedicação e técnica em todas as fases, assegurando que você tenha amparo irrestrito e uma defesa combativa do início ao fim.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfa968]">
                  — Dra. Maria Eduarda Noronha · Advogada Bancária e do Agro
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
                  "Escuta Acolhedora & Diagnóstico Jurídico Pericial",
                  "Conversa reservada pelo WhatsApp ou em nosso escritório em Luz para entender sua situação em profundidade. Análise minuciosa de contratos bancários, certidões fundiárias ou registros de marcas.",
                ],
                [
                  "02",
                  "Estratégia Sob Medida & Ação Rápida",
                  "Definição da linha de ação mais vantajosa (via extrajudicial resolutiva ou ação judicial combativa), com protocolo imediato de tutelas de urgência para estancar prejuízos e suspender leilões ou cobranças indevidas.",
                ],
                [
                  "03",
                  "Acompanhamento Transparente & Informação Contínua",
                  "Você nunca fica sem saber o que está acontecendo. Informamos cada andamento do processo em tempo real, com linguagem simples e transparência total até a vitória jurídica definitiva.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfa968]">
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
                description="Veja depoimentos reais de clientes e empresas sobre a competência, a agilidade e o atendimento acolhedor da Dra. Maria Eduarda Noronha em Luz e região."
              >
                Avaliada com 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6231] via-[#d4944d] to-[#80182a]">
                  14 avaliações unânimes no Google.
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
                    Maria Eduarda Noronha — Advocacia
                  </p>
                  <p className="text-[11px] text-slate-500">
                    14 avaliações 100% 5 estrelas no Google
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
              {clientReviews.slice(0, 9).map((review) => (
                <motion.article
                  key={review.name}
                  variants={reveal}
                  className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#b8783e] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#dfa968]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#dfa968]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#b8783e]/25 bg-[#fdfaf5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#9e6231]">
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
                      <div className="mt-3 rounded-lg border-l-2 border-[#b8783e] bg-[#fdfaf5] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#9e6231]">Resposta da Dra. Maria Eduarda:</p>
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
                className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#b8783e] hover:text-[#b8783e]"
              >
                <GoogleIcon size={16} /> Ver todas as 14 avaliações no Google <ArrowUpRight size={14} />
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
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4d8a8] to-[#dfa968]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                Transparência desde o primeiro contato. Se sua dúvida não estiver listada abaixo, clique no botão e fale diretamente com a Dra. Maria Eduarda no WhatsApp.
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
                        className={`shrink-0 text-[#dfa968] transition-transform duration-200 ${
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
                    "Olá, Dra. Maria Eduarda! Gostaria de tirar uma dúvida sobre a minha situação jurídica."
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
                description="Fale diretamente com a Dra. Maria Eduarda Noronha pelo WhatsApp para orientação imediata com sigilo absoluto e rigor técnico."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9e6231] via-[#d4944d] to-[#80182a]">
                  atender suas necessidades e defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Maria Eduarda Noronha! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com a Dra. Maria Eduarda
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
                    className="mt-0.5 shrink-0 text-[#b8783e]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#9e6231] font-bold">
                      Segunda a Sexta · 08:00 às 17:00
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento com horário agendado para dedicação exclusiva à sua demanda
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#b8783e]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#b8783e]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#b8783e]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#b8783e] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#b8783e]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#b8783e] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b8783e]"
                  />
                  <div>
                    <span className="text-slate-900 font-medium">{ADDRESS_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Luz - MG e assessoria jurídica digital em todo o território nacional
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-[#f8fafc] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b8783e] via-[#dfa968] to-[#80182a]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma MN - Maria Eduarda Noronha Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8783e]">
                    MARIA EDUARDA NORONHA
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    ADVOCACIA E CONSULTORIA
                  </p>
                </div>
              </div>

              {/* Photo Presentation */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-xs">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Maria Eduarda Noronha em seu escritório em Luz - MG"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Acolhedor, Discreto e Resolutivo</p>
                  <p className="text-[10px] text-stone-200">Luz · Centro-Oeste de Minas & Brasil</p>
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
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b8783e]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#9e6231]">
                    08:00 às 17:00
                  </span>
                  <span>Sábados e Domingos</span>
                  <span className="text-right font-medium text-slate-500">
                    Plantão via WhatsApp
                  </span>
                  <span>Localização</span>
                  <span className="text-right text-slate-900 font-semibold">Luz · MG</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Maria Eduarda Noronha! Gostaria de agendar um atendimento."
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

        {/* DOBRA 10: PRÉ-FOOTER BANNER (PRETO) */}
        <section className="border-t border-zinc-800 bg-[#111113] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#dfa968]" /> MARIA EDUARDA NORONHA — ADVOCACIA E CONSULTORIA JURÍDICA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronta para blindar seu patrimônio e garantir segurança jurídica aos seus negócios.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dra. Maria Eduarda! Preciso de orientação jurídica para o meu caso."
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

        {/* DOBRA 11: RODAPÉ INSTITUCIONAL (PRETO) */}
        <footer className="border-t border-zinc-800 bg-[#09090b] px-5 py-14 text-zinc-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Maria Eduarda Noronha — Advocacia e Consultoria Jurídica"
                className="flex items-center gap-3"
              >
                <div className="relative size-12 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma MN - Maria Eduarda Noronha Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold tracking-[0.14em] text-white">
                    MARIA EDUARDA NORONHA
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#dfa968] uppercase">
                    ADVOCACIA E CONSULTORIA JURÍDICA
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-zinc-400">
                Advocacia especializada em Direito Bancário, Direito do Agronegócio, Direito Imobiliário e Registro de Marcas no INPI com atuação séria, estratégica e humanizada em Luz, Centro-Oeste mineiro e em todo o Brasil.
              </p>

              <div className="mt-5 flex items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121215] px-3 py-1.5 text-zinc-300 transition-colors hover:border-[#dfa968] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#dfa968]" /> Instagram @adv.marianoronha
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121215] px-3 py-1.5 text-zinc-300 transition-colors hover:border-[#dfa968] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (14 avaliações)
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
                    A Advogada (Dra. Maria Eduarda)
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
                    href={getWhatsAppUrl("Olá, Dra. Maria Eduarda! Gostaria de falar com seu escritório.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#dfa968] hover:underline"
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
                  Segunda a Sexta · 08:00 às 17:00
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
                  Direito Bancário & Agro · INPI
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-800/80 pt-6 text-center text-[11px] text-zinc-500">
            <p>
              © {new Date().getFullYear()} MARIA EDUARDA NORONHA — ADVOCACIA E CONSULTORIA JURÍDICA. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              R. Monsenhor Geraldo Mendes Vasconcelos, 280 - Dom Belchior, Luz - MG, 35595-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dra. Maria Eduarda! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Maria Eduarda Noronha"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">WhatsApp Direto</span> · Dra. Maria Eduarda Noronha
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
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-zinc-700 bg-zinc-800 text-white transition-colors hover:border-[#dfa968] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-black p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma MN - Maria Eduarda Noronha Advocacia"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">MARIA EDUARDA NORONHA ADVOCACIA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfa968] uppercase">
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

                <p className="mt-5 text-sm leading-7 text-zinc-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-zinc-800 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfa968]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfa968]" />
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
