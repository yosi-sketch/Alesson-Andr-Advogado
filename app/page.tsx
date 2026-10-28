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
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537998693626";
const PHONE_DISPLAY = "(37) 99869-3626";
const EMAIL_CONTACT = "contato@weslleysantos.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/weslley_santos_advocacia";
const INSTAGRAM_HANDLE = "@weslley_santos_advocacia";
const LAWYER_NAME = "Dr. Weslley Santos";
const LAWYER_TITLE = "Advogado · OAB/MG";
const FIRM_NAME = "Escritório de Advocacia Weslley Santos";
const FIRM_SUBTITLE = "Advocacia Especializada · Consultoria e Assessoria Jurídica";
const ADDRESS_TEXT = "R. Batista de Almeida, 240 - Sl 12 - Centro, Oliveira - MG, 35540-000";
const REGION_TEXT =
  "Oliveira · Carmópolis de Minas · Campo Belo · Santo Antônio do Amparo · Passa Tempo · Cláudio · Divinópolis · Toda MG & Atendimento Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Weslley+Santos+Advocacia%0AOliveira+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/weslley-santos-hero.jpg";
const FOTO_SOBRE_SRC = "/weslley-santos-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Weslley Santos! Gostaria de tirar dúvidas e agendar uma consultoria jurídica.";
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
    id: "direito-penal-juri",
    title: "Direito Criminal & Tribunal do Júri",
    icon: Gavel,
    tag: "Plantão 24h · Flagrantes · Audiência de Custódia · Júri · Habeas Corpus",
    summary:
      "Defesa técnica combativa e estratégica em todas as fases da persecução penal: de prisões em flagrante à tribuna do Tribunal do Júri.",
    details:
      "No processo penal, a liberdade exige resposta imediata e rigor técnico irretocável. O Dr. Weslley Santos atua com dedicação incansável em prisões em flagrante 24h, audiências de custódia, revogação de prisões preventivas, pedidos de liberdade provisória, impetração de Habeas Corpus e sustentação oral combativa perante o Tribunal do Júri, assegurando a defesa sagrada da vida e das garantias constitucionais.",
    topics: [
      "Plantão Criminal 24 Horas para flagrantes, mandados de busca e apreensão e prisões cautelares",
      "Acompanhamento presencial imediato em Delegacias de Polícia e lavratura de autos",
      "Atuação estratégica em Audiências de Custódia com pedido de relaxamento de prisão ou liberdade provisória",
      "Sustentação oral vibrante e combativa em Sessões Plenárias do Tribunal do Júri",
      "Impetração ágil de Habeas Corpus no Tribunal de Justiça (TJMG), STJ e Supremo Tribunal Federal",
      "Acompanhamento em Execução Penal, livramento condicional, remição e progressão de regime prisional",
    ],
    whatsAppText:
      "Olá, Dr. Weslley Santos! Preciso de atendimento criminal urgente (plantão 24h, prisão em flagrante ou custódia).",
  },
  {
    id: "lei-de-drogas",
    title: "Especialista em Lei de Drogas",
    icon: Shield,
    tag: "Lei 11.343/06 · Desclassificação para Uso · Tráfico Privilegiado · Nulidades",
    summary:
      "Expertise aprofundada na Lei de Drogas para combater abusos em apreensões, buscar a desclassificação para uso próprio ou aplicação de tráfico privilegiado.",
    details:
      "Processos envolvendo a Lei 11.343/06 demandam perícia técnica para apontar ilegalidades em abordagens e violações de domicílio. Como especialista em Lei de Drogas, o Dr. Weslley Santos constrói teses probatórias consistentes para demonstrar ausência de provas de traficância, pleitear desclassificação para consumo pessoal (art. 28), aplicação de tráfico privilegiado com redução de pena e substituição por medidas restritivas de direitos.",
    topics: [
      "Identificação e anulação de buscas domiciliares ilegais e invasões de domicílio sem mandado válido",
      "Teses sólidas de desclassificação de tráfico (art. 33) para porte para consumo pessoal (art. 28)",
      "Reconhecimento de Tráfico Privilegiado (§4º do art. 33) com redução máxima de pena e liberdade",
      "Impugnação técnica de laudos preliminares e definitivos de constatação de entorpecentes",
      "Combate a quebras da cadeia de custódia da prova e nulidade de apreensões arbitrárias",
      "Recursos aos Tribunais Superiores (STJ e STF) para fixação de regime aberto e penas alternativas",
    ],
    whatsAppText:
      "Olá, Dr. Weslley Santos! Gostaria de consultoria especializada sobre caso relacionado à Lei de Drogas.",
  },
  {
    id: "pericia-digital-grafotecnica",
    title: "Perícia Forense Digital & Grafotécnica",
    icon: Cpu,
    tag: "Validação de WhatsApp · Áudios & Mídias · Falsidade de Assinaturas · Fraudes",
    summary:
      "Diferencial científico e tecnológico exclusivo: formação técnica para desmascarar fraudes eletrônicas, metadados adulterados e assinaturas forjadas.",
    details:
      "Em tempos de processos digitais e golpes sofisticados, conversas de WhatsApp sem autenticidade técnica, arquivos adulterados ou contratos com assinaturas falsificadas podem causar prejuízos irreparáveis. Com formação especializada em Perícia Digital e Grafotécnica, o Dr. Weslley Santos analisa a autenticidade de documentos e provas eletrônicas, elaborando quesitos e pareceres assistenciais determinantes para o desfecho judicial.",
    topics: [
      "Exame grafotécnico de autenticidade e falsidade em assinaturas de contratos, cheques e procurações",
      "Análise forense de conversas de WhatsApp, extração de metadados e integridade de mídias",
      "Impugnação de provas digitais forjadas, print screens descontextualizados e violações da cadeia de custódia",
      "Elaboração de laudos e pareceres técnicos assistenciais para processos criminais, cíveis e trabalhistas",
      "Formulação de quesitos periciais estratégicos para questionar laudos oficiais frágeis ou contraditórios",
      "Defesa contra fraudes cibernéticas, contas clonadas, golpes do Pix e falsificação documental",
    ],
    whatsAppText:
      "Olá, Dr. Weslley Santos! Gostaria de uma avaliação sobre Perícia Digital ou Análise Grafotécnica para o meu caso.",
  },
  {
    id: "direito-civel",
    title: "Direito Cível & Responsabilidade Civil",
    icon: Scale,
    tag: "Ações Indenizatórias · Contratos · Defesa do Consumidor · Posse & Imóveis",
    summary:
      "Atuação resolutiva para reparação integral de danos morais e materiais, blindagem contratual, usucapião e cobrança estratégica de títulos.",
    details:
      "As relações civis e comerciais exigem assessoria técnica para prevenir perdas e recompor patrimônios lesados. O escritório do Dr. Weslley Santos promove ações indenizatórias consistentes contra atos ilícitos e descumprimentos de contratos, recuperação de créditos, combate a abusos bancários e regularização definitiva de imóveis.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e estéticos decorrentes de acidentes e ilícitos",
      "Elaboração, análise de riscos e revisão de Contratos Civis, Compra e Venda de Imóveis e Locações",
      "Combate a fraudes financeiras, golpes bancários e pedidos liminares para limpeza de nome no SPC/Serasa",
      "Cobrança judicial e extrajudicial de títulos de crédito, notas promissórias e contratos inadimplidos",
      "Ações de Usucapião judicial e extrajudicial para regularização documental definitiva de imóveis",
      "Ações possessórias (Reintegração, Manutenção de Posse e Interdito Proibitório) em defesa de propriedades",
    ],
    whatsAppText:
      "Olá, Dr. Weslley Santos! Gostaria de consultoria sobre Direito Cível (indenização, contratos ou litígio).",
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Divórcio · Pensão Alimentícia · Guarda · Partilha de Bens · Inventários",
    summary:
      "Condução sensível, humana e firme para resolver impasses familiares e patrimoniais com total discrição e celeridade.",
    details:
      "Conflitos familiares exigem equilíbrio psicológico aliado à precisão jurídica. O Dr. Weslley Santos atua na condução de divórcios rápidos em cartório ou contenciosos, fixação e execução de alimentos, guarda compartilhada dos filhos e inventários ágeis, preservando a harmonia familiar e resguardando os direitos patrimoniais de cada herdeiro.",
    topics: [
      "Divórcio consensual em cartório (ágil e menos oneroso) e divórcio judicial contencioso",
      "Fixação, revisão (aumento ou redução) e execução rigorosa de pensão alimentícia atrasada",
      "Regulamentação de guarda compartilhada, convivência familiar e plano parental protetivo",
      "Reconhecimento e dissolução de união estável com partilha justa do patrimônio amealhado",
      "Inventário judicial e inventário extrajudicial em cartório com regularização imobiliária célere",
      "Planejamento sucessório familiar, testamentos e doações com cláusulas protetivas",
    ],
    whatsAppText:
      "Olá, Dr. Weslley Santos! Gostaria de orientações sobre Direito de Família (divórcio, pensão, guarda ou inventário).",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário (INSS)",
    icon: HeartHandshake,
    tag: "Aposentadorias · BPC/LOAS · Auxílio-Doença · Reversão de Negativas Judiciais",
    summary:
      "Assessoria combativa para garantir benefícios previdenciários e assistenciais justos para trabalhadores rurais e urbanos em Oliveira e região.",
    details:
      "Conquistar o amparo do INSS exige documentação precisa e enfrentamento das negativas administrativas arbitrárias. O escritório atua na comprovação robusta da atividade de trabalhadores do campo e da cidade, concessão de BPC/LOAS para idosos e pessoas com deficiência e restabelecimento de auxílios e aposentadorias por incapacidade.",
    topics: [
      "Aposentadoria por Idade Rural com comprovação documental detalhada do trabalhador do campo",
      "Aposentadoria Urbana por Idade, Tempo de Contribuição e regras de transição vigentes",
      "BPC / LOAS (Benefício de Prestação Continuada para Idosos 65+ e Pessoas com Deficiência)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Invalidez",
      "Pensão por Morte, Auxílio-Reclusão e Salário-Maternidade para famílias amparadas",
      "Ações judiciais na Justiça Federal para reverter indeferimentos e receber parcelas retroativas",
    ],
    whatsAppText:
      "Olá, Dr. Weslley Santos! Gostaria de orientação sobre aposentadoria rural/urbana, BPC/LOAS ou benefício do INSS.",
  },
];

const clientReviews = [
  {
    name: "Diego Henrique",
    reviewerTag: "7 avaliações · 1 foto · Avaliação no Google",
    badge: "Advogado de Extrema Confiança e Atendimento Rápido",
    rating: 5,
    content:
      "Perfeito. Já é meu advogado há anos. Bem em conta os preços, atencioso, responde rápido no celular e atende. Aqui em Oliveira muitos conhecidos são clientes dele. Está de parabéns.",
    reply: "Obrigado pela preferência e confiança!",
  },
  {
    name: "Roney e Tamiris",
    reviewerTag: "2 avaliações · Avaliação no Google",
    badge: "Claro, Direto e com o Melhor Preço da Cidade",
    rating: 5,
    content:
      "Ótimo profissional! Me atendeu prontamente e me esclareceu todas as dúvidas. Sempre claro e direto. Recomendo a todos. Preço justo, o melhor da cidade.",
  },
  {
    name: "Valle O",
    reviewerTag: "Local Guide · 26 avaliações · 14 fotos · Google",
    badge: "Extrema Cordialidade, Equipe Qualificada e Transparente",
    rating: 5,
    content:
      "Desde o primeiro contato com o escritório de advocacia, fui atendido com extrema cordialidade, profissionalismo e atenção. A equipe se mostrou altamente qualificada, transparente e comprometida com a busca dos melhores resultados possíveis.",
    reply: "Obrigado pela preferência e confiança!",
  },
  {
    name: "Jaqueline Eduarda",
    reviewerTag: "5 avaliações · Avaliação no Google",
    badge: "Dedicação, Segurança e Atuação Eficiente em Todas as Etapas",
    rating: 5,
    content:
      "Gostaria de agradecer imensamente pelo atendimento prestado. Sua atuação foi extremamente profissional, clara e eficiente em todas as etapas. A dedicação, o conhecimento e a segurança que você transmite fazem toda a diferença.",
    reply: "Obrigado pela confiança em meu trabalho!",
  },
  {
    name: "Dra. Érika Oliveira",
    reviewerTag: "Local Guide · 16 avaliações · 1 foto · Google",
    badge: "Deslocou 70km para me Acolher e Defender Minha História",
    rating: 5,
    content:
      "Procurei por acidente um advogado no Google. Não posso mentir. Encontrei Weslley que me atendeu e me deu conforto imediato na minha causa. Ele foi atencioso a ponto de se deslocar 70km pra vir ouvir a minha história, acreditar em mim e me defender. Gratidão eterna.",
    reply: "Agradecido pela gratidão e confiança em meu trabalho!",
  },
  {
    name: "Danilo Garcia",
    reviewerTag: "Local Guide · 4 avaliações · 48 fotos · Google",
    badge: "Divórcio Resolvido com Suporte Mesmo em Outro Estado",
    rating: 5,
    content:
      "Advogado muito competente e de extrema confiança. Procurei sem conhecer para resolver o meu divorcio e mesmo sendo em outro estado tive todo o suporte e presteza, sem contar com a qualidade no serviço e a confiabilidade. Indico para todos!!",
  },
  {
    name: "Maria Alves",
    reviewerTag: "Avaliação no Google",
    badge: "Acolhimento Humano Inestimável em Momento Difícil",
    rating: 5,
    content:
      "Excelente profissional! Mesmo estando com o coração partido, não posso esquecer o quanto fui acolhida pelo Dr. Wesley. A gratidão será eterna.",
  },
  {
    name: "ROSIMARA NASCIMENTO",
    reviewerTag: "13 avaliações · Avaliação no Google",
    badge: "Muito Eficiente e Comprometido",
    rating: 5,
    content:
      "Recomendo o Dr. muito eficiente e comprometido. Ótimo profissional.",
  },
  {
    name: "Alinne Morais",
    reviewerTag: "Avaliação no Google",
    badge: "Comprometimento, Excelência Técnica e Ética Rigorosa",
    rating: 5,
    content:
      "Parabenizo o escritório pelo comprometimento, excelência técnica e pela ética com que conduz cada caso. É visível a seriedade e o cuidado com que atuam, refletindo a confiança que inspiram em seus clientes.",
  },
  {
    name: "Reginaldo Machado",
    reviewerTag: "2 avaliações · Avaliação no Google",
    badge: "O Melhor Doutor: Atencioso e Prestativo",
    rating: 5,
    content:
      "Ótimo Dr o melhor sempre recomendo muito atencioso e prestativo.",
    reply: "Obrigado pela confiança!",
  },
  {
    name: "Maria Eduarda",
    reviewerTag: "Avaliação no Google",
    badge: "Profissional Excepcional e Altamente Competente",
    rating: 5,
    content:
      "Profissional excepcional, comprometido e altamente competente! Sua dedicação e conhecimento jurídico fazem toda a diferença. Recomendo sem hesitar!",
  },
  {
    name: "Talita Santos",
    reviewerTag: "2 avaliações · Avaliação no Google",
    badge: "Resolveu Meus Problemas e Esclareceu Cada Dúvida",
    rating: 5,
    content:
      "Ótima, resolveu meus problemas e tirou todas as dúvidas! Parabéns pelo trabalho.",
  },
];

const faqs = [
  {
    q: "O escritório atende prisões em flagrante e plantão criminal 24 horas?",
    a: "Sim. O Escritório de Advocacia Weslley Santos mantém plantão criminal ininterrupto 24 horas por dia, 7 dias por semana, inclusive feriados e madrugadas. Realizamos atendimento imediato em Delegacias de Polícia, acompanhamento de prisões em flagrante, audiências de custódia e pedidos de liberdade de urgência em Oliveira e em todas as comarcas da região.",
  },
  {
    q: "O que é a especialização em Lei de Drogas e por que ela é decisiva no processo?",
    a: "A Lei 11.343/06 possui particularidades que exigem conhecimento técnico apurado. O Dr. Weslley Santos analisa a legalidade da abordagem policial, da busca domiciliar e da cadeia de custódia da substância. Essa atuação técnica permite combater excessos, demonstrar a ausência de intenção de tráfico, postular a desclassificação para uso (art. 28) ou a aplicação de tráfico privilegiado com redução substancial de pena e liberdade.",
  },
  {
    q: "Como a Perícia Forense Digital e Grafotécnica auxilia na defesa do cliente?",
    a: "Com formação em Perícia Digital e Grafotécnica, o Dr. Weslley Santos examina a autenticidade de mensagens eletrônicas (WhatsApp, áudios, metadados de fotos e vídeos) para comprovar ou afastar manipulações, bem como realiza análises de assinaturas forjadas em contratos, procurações e títulos de crédito. Essa prova pericial pode ser determinante para anular processos injustos ou recuperar prejuízos de fraudes.",
  },
  {
    q: "O Dr. Weslley Santos atende apenas presencialmente em Oliveira ou também online?",
    a: "Atendemos presencialmente em nosso escritório na R. Batista de Almeida, 240 - Sl 12 - Centro, Oliveira (MG), e também online para clientes de cidades vizinhas (Carmópolis, Campo Belo, Cláudio, Santo Antônio do Amparo, Divinópolis), toda Minas Gerais e qualquer estado do Brasil, com reuniões virtuais seguras e assinatura eletrônica de documentos.",
  },
  {
    q: "Como funciona o atendimento inicial para divórcio, pensão alimentícia ou inventário?",
    a: "O primeiro contato pode ser feito diretamente pelo nosso WhatsApp. Analisamos sua situação com discrição e sigilo, avaliando se o procedimento pode ser conduzido rapidamente pela via extrajudicial em cartório ou se demandará ação judicial, sempre priorizando a proteção dos filhos e a segurança patrimonial da família.",
  },
  {
    q: "Quem tem direito aos benefícios previdenciários do INSS (rural, urbano ou BPC/LOAS)?",
    a: "Trabalhadores rurais e urbanos possuem requisitos específicos de idade e tempo de contribuição ou comprovação de atividade camponesa. Além disso, idosos com mais de 65 anos e pessoas com deficiência em situação de vulnerabilidade têm direito ao BPC/LOAS sem necessidade de contribuição anterior. O escritório realiza a análise documental completa para viabilizar a concessão e cobrar atrasados.",
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
      <main className="relative min-h-screen selection:bg-[#c59b3f] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (Obsidian Navy Midnight - Alto Contraste) */}
        <div className="border-b border-slate-800 bg-[#050c18] px-4 py-2.5 text-center text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#dfb555]" />
              <strong>Sede em Oliveira - MG</strong>
              <span className="hidden md:inline text-slate-400">
                · R. Batista de Almeida, 240 - Sl 12 - Centro · Plantão 24 Horas & Atendimento Online em Todo o Brasil
              </span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f3db9d] transition-colors"
            >
              <span className="flex text-[#dfb555]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#dfb555]" />
                ))}
              </span>
              <span>5,0 ★ no Google (239 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Silk White - Clean, Imperial Navy & Metallic Gold WS) */}
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
              aria-label="Escritório de Advocacia Weslley Santos - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-10"
            >
              <div className="relative size-[54px] sm:size-[60px] lg:size-[66px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Brasão Real WS - Escritório de Advocacia Weslley Santos"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-[16px] sm:text-[18px] lg:text-[20px] font-bold tracking-[0.12em] text-[#0a172e] leading-tight">
                  WESLLEY SANTOS
                </span>
                <span className="text-[10px] sm:text-[11.5px] lg:text-[12px] font-bold tracking-[0.22em] text-[#b38a34] uppercase mt-0.5">
                  ADVOCACIA ESPECIALIZADA
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
                Avaliações (239)
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
                  "Olá, Dr. Weslley Santos! Gostaria de agendar uma consulta jurídica."
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
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-slate-200 bg-white px-6 text-slate-900 lg:hidden shadow-xl"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Advogado", "#sobre"],
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
                      className="py-3 text-sm font-medium text-slate-700 hover:text-[#b38a34]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#966f20] via-[#c59b3f] to-[#805b14] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dr. Weslley Santos! Gostaria de conversar com você sobre uma questão jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-800 transition-all hover:border-[#c59b3f]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (239 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (White Silk & Royal Navy & Gold Glow) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(223,181,85,0.14),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(15,43,92,0.08),transparent_65%)]" />

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
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c59b3f]/30 bg-[#fdfbf7] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#966f20] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dfb555] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#c59b3f]"></span>
                </span>
                <span>DR. WESLLEY SANTOS · ADVOCACIA · OLIVEIRA - MG · PLANTÃO 24H</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0a172e] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Advocacia estratégica, combate técnico &{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#966f20] via-[#c59b3f] to-[#0f2b5c]">
                  defesa intransigente dos seus direitos.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Liderado pelo <strong className="font-semibold text-slate-900">Dr. Weslley Santos</strong>, nosso escritório combina combatividade destemida, precisão científica e atendimento transparente na defesa das suas causas em <strong className="font-semibold text-slate-900">Direito Criminal, Tribunal do Júri, Lei de Drogas, Perícia Digital e Grafotécnica, Cível e Previdenciário (INSS)</strong>. Nota máxima 5,0 ★ no Google com 239 avaliações reais. Plantão 24 Horas em Oliveira e região.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Weslley Santos! Gostaria de agendar um atendimento para analisar meu caso."
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
                  <CheckCircle2 size={16} className="text-[#b38a34] shrink-0" />
                  <span>Plantão Criminal 24h & Flagrantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38a34] shrink-0" />
                  <span>Especialista em Lei de Drogas</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#b38a34] shrink-0" />
                  <span>Perícia Digital & Grafotécnica</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dr. Weslley Santos Office Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Weslley Santos em seu escritório de advocacia em Oliveira - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b38a34]">
                        Weslley Santos Advocacia
                      </p>
                      <p className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                        Dr. Weslley Santos
                      </p>
                    </div>
                    <span className="rounded-md border border-[#c59b3f]/30 bg-[#fdfbf7] px-2.5 py-1 text-[10px] font-bold text-[#966f20]">
                      OAB/MG · Plantão 24h
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    R. Batista de Almeida, 240 - Sl 12 - Centro · Oliveira - MG
                  </p>
                </div>
              </div>

              {/* Decorative subtle corner border */}
              <span className="absolute -left-3 -top-3 -z-10 size-20 border-l-2 border-t-2 border-[#c59b3f]/40 sm:-left-5 sm:-top-5 sm:size-28" />
              <span className="absolute -bottom-3 -right-3 -z-10 size-20 border-b-2 border-r-2 border-[#c59b3f]/40 sm:-bottom-5 sm:-right-5 sm:size-28" />

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
                    <span className="text-[10px] text-[#dfb555]">★★★★★</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-600">
                    239 avaliações no Google
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: FAIXA DE CREDENCIAIS (Obsidian Midnight - Alto Impacto e Autoridade) */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-slate-800 bg-[#050c18] text-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {[
                {
                  value: "5,0 ★ (239 Avaliações)",
                  label: "Avaliação máxima no Google atestando presteza, clareza, preço justo e resolutividade",
                },
                {
                  value: "Criminal & Júri 24h",
                  label: "Atendimento ininterrupto para flagrantes, custódia e defesa no Tribunal do Júri",
                },
                {
                  value: "Lei de Drogas & Perícia",
                  label: "Especialista em Lei 11.343/06 com formação em Perícia Digital e Grafotécnica",
                },
                {
                  value: "Sede em Oliveira · MG",
                  label: "Atendimento presencial no Centro (R. Batista de Almeida) e online para todo o Brasil",
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
                    <span className="size-2 shrink-0 rounded-full bg-[#dfb555]" />
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
          className="scroll-mt-24 border-b border-slate-200 bg-[#f8fafd] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dr. Weslley Santos Portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dr. Weslley Santos — Escritório de Advocacia Especializada em Oliveira"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#b38a34]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b38a34]">
                    Excelência Técnica & Combate Jurídico
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Weslley Santos Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#b38a34]">
                  OAB/MG · Especialista em Lei de Drogas & Perícia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  R. Batista de Almeida, 240 - Sl 12 - Centro · Oliveira - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c59b3f]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c59b3f]/25 bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#966f20] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#c59b3f]" />
                <span>SOBRE O PROFISSIONAL & COMPROMISSO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0a172e] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia pautada na estratégia incisiva, agilidade e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#966f20] via-[#c59b3f] to-[#0f2b5c]">
                  defesa destemida da sua liberdade e dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                No universo jurídico, especialmente nas áreas Criminal, de Família e Cível, cada decisão tomada nas primeiras horas define o futuro de uma vida inteira. <strong className="font-bold text-slate-900">O Dr. Weslley Santos consolidou sua atuação na advocacia combativa de resultados</strong>, aliando prontidão ininterrupta no atendimento à aplicação de teses técnicas avançadas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Com formação especializada em <strong className="font-bold text-slate-900">Perícia Digital e Grafotécnica</strong> e destacado reconhecimento como <strong className="font-bold text-slate-900">Especialista em Lei de Drogas</strong>, nosso escritório oferece um diferencial raro: a capacidade de desarticular acusações frágeis com rigor científico e atuar com eloquência na tribuna do Tribunal do Júri e nas cortes de justiça.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;Perfeito. Já é meu advogado há anos. Bem em conta os preços, atencioso, responde rápido no celular e atende. Aqui em Oliveira muitos conhecidos são clientes dele. Está de parabéns.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#b38a34]">
                  — Diego Henrique (Cliente · Avaliação verificada no Google)
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
                    239 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Plantão 24 Horas</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Emergências Criminais
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Perícia & Técnica</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Digital e Grafotécnica
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38a34] shrink-0" />
                  <span>Sede na R. Batista de Almeida, 240 - Sl 12 - Centro, Oliveira - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b38a34] shrink-0" />
                  <span>Atendimento rápido e direto no WhatsApp pelo Dr. Weslley Santos</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Weslley Santos! Gostaria de agendar uma consulta para conversar sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com o Dr. Weslley Santos
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: ÁREAS DE ATUAÇÃO (Obsidian Midnight - Alto Impacto) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-slate-800 bg-[#050c18] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILAREs DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossas áreas de atuação técnica. Clique em qualquer especialidade para ver detalhes, estratégias processuais e direcionamento imediato."
              >
                Soluções jurídicas estratégicas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3db9d] to-[#dfb555]">
                  Oliveira, região Centro-Oeste e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Weslley Santos! Tenho dúvidas sobre uma questão jurídica e gostaria de atendimento."
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
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0a172e] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b3f] hover:bg-[#0f2244] hover:shadow-[0_12px_36px_rgba(197,155,63,0.25)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-700 bg-[#142c56] text-[#dfb555] transition-colors group-hover:border-[#c59b3f] group-hover:bg-[#c59b3f] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#dfb555]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#faecd3]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f3db9d]">
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-[#dfb555] cursor-pointer"
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
              description="A união entre profundo domínio legislativo, resposta imediata 24 horas, técnica pericial e preço justo consolida a preferência de centenas de clientes."
            >
              O que diferencia a advocacia do{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#966f20] via-[#c59b3f] to-[#0f2b5c]">
                Dr. Weslley Santos?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f8fafd] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b3f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b3f]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#966f20]">
                      <Clock size={14} /> Plantão 24h & Resposta Imediata
                    </span>
                    <span className="text-xs font-semibold text-[#b38a34]">
                      5,0 ★ Google (239)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atendimento Ágil, Transparente & Sem Enrolação
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como destacam as mais de 230 avaliações no Google, o Dr. Weslley Santos se notabiliza por atender com rapidez, falar a verdade de forma clara e direta e cobrar honorários justos e transparentes. Você fala diretamente com o advogado no celular, a qualquer hora do dia ou da noite.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38a34]" />
                      <span>Plantão Criminal ininterrupto 24 horas por dia em Oliveira e região</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38a34]" />
                      <span>Respostas rápidas no WhatsApp, sem intermediários ou burocracia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38a34]" />
                      <span>Preço justo e condições transparentes de contratação</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Weslley Santos! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#c59b3f] hover:bg-[#c59b3f] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com o Dr. Weslley Santos
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
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f8fafd] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c59b3f] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c59b3f]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#966f20]">
                      <Cpu size={14} /> Lei de Drogas & Perícia Digital
                    </span>
                    <span className="text-xs font-semibold text-[#b38a34]">
                      Minas Gerais & Brasil
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Especialização Técnica Rara & Provas Incontestáveis
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Processos criminais complexos, acusações de tráfico e litígios cíveis não podem ser conduzidos com amadorismo. O domínio aprofundado da Lei 11.343/06 e a capacitação em Perícia Digital e Grafotécnica permitem ao Dr. Weslley identificar nulidades que outros deixam passar e construir teses vencedoras.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38a34]" />
                      <span>Análise técnica de laudos toxicológicos e nulidade de buscas ilegais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38a34]" />
                      <span>Perícia de conversas de WhatsApp, metadados e assinaturas fraudulentas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b38a34]" />
                      <span>Sustentação oral vibrante e destemida no Tribunal do Júri</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dr. Weslley Santos! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#c59b3f] hover:bg-[#c59b3f] hover:text-white"
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

        {/* DOBRA 6: MÉTODO EM 3 PASSOS (Obsidian Navy Midnight) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#071224] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, estratégico e focado em resultados práticos para garantir sua liberdade, patrimônio e a paz da sua família."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3db9d] to-[#dfb555]">
                  defender sua causa com segurança e firmeza absoluta.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-slate-800 bg-[#0a172e] p-6 font-serif text-base italic leading-7 text-slate-200 shadow-md">
                &ldquo;Cada causa exige dedicação leal, técnica afiada e prontidão. Seja em uma audiência de custódia na madrugada, no plenário do júri ou em uma disputa cível, meu compromisso é lutar incansavelmente pelos melhores resultados para quem confia em meu trabalho.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#dfb555]">
                  — Dr. Weslley Santos · Advogado
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
                  "Contato direto e sem intermediários pelo WhatsApp ou presencialmente em nosso escritório no centro de Oliveira. Avaliamos a urgência dos fatos, documentos e histórico com sigilo absoluto.",
                ],
                [
                  "02",
                  "Plano de Ação Combativo & Intervenção Ágil",
                  "Definição da melhor rota (pedido liminar de liberdade, habeas corpus, perícia grafotécnica/digital, ação cível ou previdenciária), ingressando com rapidez perante delegacias, juizados e tribunais.",
                ],
                [
                  "03",
                  "Acompanhamento Próximo & Atualização Contínua",
                  "Você não fica no escuro. O Dr. Weslley Santos mantém você informado sobre cada andamento, decisão e conquista do processo diretamente no seu celular em linguagem clara.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#dfb555]">
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

        {/* DOBRA 7: AVALIAÇÕES GOOGLE 5.0 (Silk Surface - 239 Avaliações Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-slate-200 bg-[#f8fafd] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos reais de clientes atendidos pelo Dr. Weslley Santos em Oliveira, comarcas vizinhas e em outros estados."
              >
                Avaliado com nota máxima 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#966f20] via-[#c59b3f] to-[#0f2b5c]">
                  239 avaliações no Google.
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
                    <div className="flex text-[#dfb555]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#dfb555]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Escritório de Advocacia Weslley Santos
                  </p>
                  <p className="text-[11px] text-slate-500">
                    239 avaliações 5 estrelas no Google
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
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#c59b3f] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#dfb555]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#dfb555]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c59b3f]/25 bg-[#fdfbf7] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#966f20]">
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
                      <div className="mt-3 rounded-lg border-l-2 border-[#c59b3f] bg-[#fdfbf7] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#966f20]">Resposta do Dr. Weslley Santos:</p>
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#c59b3f] hover:text-[#c59b3f]"
              >
                <GoogleIcon size={16} /> Ver todas as 239 avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 8: PERGUNTAS FREQUENTES / FAQ (Obsidian Midnight) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-slate-800 bg-[#050c18] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3db9d] to-[#dfb555]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Transparência total desde o primeiro contato. Se sua dúvida não estiver listada abaixo, clique no botão e fale diretamente com o Dr. Weslley Santos no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#0a172e] transition-colors hover:border-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#dfb555] transition-transform duration-200 ${
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
                Tem uma dúvida urgente ou necessita de plantão criminal?
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Weslley Santos! Gostaria de tirar uma dúvida sobre a minha situação jurídica."
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
                eyebrow="CONTATO & ATENDIMENTO 24H"
                description="Fale diretamente com o Dr. Weslley Santos pelo WhatsApp para orientação imediata, sigilo profissional absoluto e rigor técnico."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#966f20] via-[#c59b3f] to-[#0f2b5c]">
                  proteger sua liberdade e defender seus interesses.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Weslley Santos! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com o Dr. Weslley
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
                    className="mt-0.5 shrink-0 text-[#b38a34]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#966f20] font-bold">
                      Aberto 24 Horas · Plantão Jurídico e Criminal Ininterrupto
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento presencial em Oliveira - MG e suporte online contínuo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#b38a34]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#b38a34]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp 24h)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#b38a34]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#b38a34] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#b38a34]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#b38a34] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b38a34]"
                  />
                  <div>
                    <span className="text-slate-900 font-medium">{ADDRESS_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Oliveira - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[#f8fafd] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b38a34] via-[#dfb555] to-[#0f2b5c]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Brasão WS - Escritório de Advocacia Weslley Santos"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[13px] font-bold uppercase tracking-[0.14em] text-[#0a172e]">
                    WESLLEY SANTOS
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#b38a34] uppercase mt-0.5">
                    ADVOCACIA ESPECIALIZADA
                  </p>
                </div>
              </div>

              {/* Photo Presentation */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dr. Weslley Santos em seu escritório"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Estratégico, Destemido e Resolutivo</p>
                  <p className="text-[10px] text-slate-200">Oliveira · Centro-Oeste Mineiro & Atendimento Online</p>
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
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b38a34]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Plantão Criminal</span>
                  <span className="text-right font-bold text-[#966f20]">
                    Aberto 24 Horas
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-slate-600">
                    Sede em Oliveira - MG
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-slate-900 font-semibold">Todo o Brasil</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dr. Weslley Santos! Gostaria de agendar um atendimento."
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

        {/* DOBRA 10: PRÉ-FOOTER BANNER (Obsidian Navy Midnight) */}
        <section className="border-t border-slate-800 bg-[#071224] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#dfb555]" /> ESCRITÓRIO DE ADVOCACIA WESLLEY SANTOS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronto para analisar seu caso e defender seus direitos com técnica impecável e combatividade.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dr. Weslley Santos! Preciso de orientação jurídica para o meu caso."
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

        {/* DOBRA 11: RODAPÉ INSTITUCIONAL (Obsidian Navy Midnight) */}
        <footer className="border-t border-slate-800 bg-[#050c18] px-5 py-14 text-slate-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Escritório de Advocacia Weslley Santos"
                className="flex items-center gap-3.5"
              >
                <div className="relative size-14 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Brasão WS - Weslley Santos Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-lg font-bold tracking-[0.12em] text-white">
                    WESLLEY SANTOS
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#dfb555] uppercase mt-0.5">
                    ADVOCACIA ESPECIALIZADA
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Advocacia combativa e especializada em Direito Criminal, Tribunal do Júri, Lei de Drogas, Perícia Digital e Grafotécnica, Cível e Previdenciário (INSS), com sede no Centro de Oliveira - MG e atuação online em todo o Brasil.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0a172e] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfb555] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#dfb555]" /> Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0a172e] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#dfb555] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (239 avaliações)
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
                    O Advogado (Dr. Weslley Santos)
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
                    Avaliações no Google (239)
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
                    href={getWhatsAppUrl("Olá, Dr. Weslley! Gostaria de falar com seu escritório.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#dfb555] hover:underline"
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
                  Aberto 24 Horas · Plantão Jurídico e Criminal
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
                  Criminal · Tribunal do Júri · Lei de Drogas · Perícia Digital · Cível · INSS
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800/80 pt-6 text-center text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} ESCRITÓRIO DE ADVOCACIA WESLLEY SANTOS. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              R. Batista de Almeida, 240 - Sl 12 - Centro, Oliveira - MG, 35540-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dr. Weslley Santos! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com o Dr. Weslley Santos"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">Plantão WhatsApp 24h</span> · Dr. Weslley Santos
            </span>
            <span className="sm:hidden font-bold">WhatsApp 24h</span>
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-slate-700 bg-[#0a172e] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-white transition-colors hover:border-[#dfb555] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-[#050c18] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Brasão WS - Weslley Santos Advocacia"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ESCRITÓRIO DE ADVOCACIA WESLLEY SANTOS</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#dfb555] uppercase">
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfb555]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dfb555]" />
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
