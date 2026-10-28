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
  Users,
  Briefcase,
  BadgePercent,
  AlertCircle,
  Building,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538998308579";
const PHONE_DISPLAY = "(38) 99830-8579";
const EMAIL_CONTACT = "contato@anapaulalima.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/adv.anapaulalimab";
const INSTAGRAM_HANDLE = "@adv.anapaulalimab";
const LAWYER_NAME = "Dra. Ana Paula Lima";
const LAWYER_TITLE = "Advogada Especialista · OAB/MG";
const FIRM_NAME = "Ana Paula Lima Advocacia";
const ADDRESS_TEXT = "R. Três de Outubro, 109, Monte Azul - MG, 39500-000";
const REGION_TEXT = "Monte Azul · Porteirinha · Espinosa · Janaúba · Mato Verde · Norte de Minas & Atendimento Online em Todo o Brasil";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ana+Paula+Lima+Advocacia%0AMonte+Azul+%C2%B7+MG%0A&sourceid=chrome&ie=UTF-8#";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/ana-paula-hero.jpg";
const FOTO_SOBRE_SRC = "/ana-paula-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Ana Paula Lima! Gostaria de tirar dúvidas e agendar uma consultoria jurídica.";
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
    id: "direito-de-familia",
    title: "Direito de Família & Sucessões",
    icon: Users,
    tag: "Divórcio · Pensão Alimentícia · Guarda · Partilha · Inventários",
    summary:
      "Atuação humanizada, ética e combativa para proteger os vínculos mais importantes da sua vida, garantindo a segurança dos filhos e a integridade do patrimônio familiar.",
    details:
      "As demandas do Direito de Família exigem técnica apurada, sensibilidade e acolhimento. A Dra. Ana Paula Lima atua de forma firme e empática para conduzir divórcios, fixação e revisão justa de alimentos, regulamentação de guarda e inventários com agilidade, minimizando desgastes emocionais e protegendo o futuro de quem você ama.",
    topics: [
      "Divórcio consensual em cartório (rápido e econômico) e divórcio judicial contencioso",
      "Fixação, revisão (aumento/redução) e execução de pensão alimentícia (cobrança de atrasados)",
      "Guarda compartilhada e unilateral, regulamentação de convivência e proteção contra alienação parental",
      "Reconhecimento e dissolução de união estável com partilha justa de bens adquiridos",
      "Inventário judicial e extrajudicial em cartório com regularização célere de herança",
      "Planejamento sucessório, testamentos e doações de bens com reserva de usufruto",
    ],
    whatsAppText:
      "Olá, Dra. Ana Paula Lima! Gostaria de atendimento jurídico sobre Direito de Família (divórcio, pensão, guarda ou inventário).",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário (INSS & Trabalhador Rural)",
    icon: HeartHandshake,
    tag: "Aposentadoria Rural & Urbana · BPC/LOAS · Auxílio-Doença · Pensão por Morte",
    summary:
      "Assessoria especializada para garantir a sua aposentadoria e benefícios do INSS sem demora, com ampla experiência na comprovação do tempo de trabalho no campo no Norte de Minas.",
    details:
      "Conquistar um benefício previdenciário exige comprovação documental rigorosa e conhecimento aprofundado das exigências do INSS. A Dra. Ana Paula Lima atua administrativamente e judicialmente na concessão de aposentadorias rurais e urbanas, pedidos de BPC/LOAS e reversão de benefícios negados indevidamente pelo INSS.",
    topics: [
      "Aposentadoria por Idade Rural (especialista na comprovação de atividade de pequeno produtor, parceiro, meeiro e trabalhador rural)",
      "Aposentadoria Urbana por Idade, Tempo de Contribuição e regras de transição da Reforma da Previdência",
      "BPC / LOAS (Benefício de Prestação Continuada para Idosos 65+ e Pessoas com Deficiência de qualquer idade)",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Incapacidade Permanente (Invalidez)",
      "Pensão por Morte rural e urbana, Auxílio-Reclusão e Salário-Maternidade para segurada especial",
      "Planejamento Previdenciário completo e recursos contra indeferimentos injustos do INSS",
    ],
    whatsAppText:
      "Olá, Dra. Ana Paula Lima! Gostaria de consultoria sobre benefício do INSS (aposentadoria rural/urbana, BPC/LOAS ou auxílio-doença).",
  },
  {
    id: "direito-trabalhista",
    title: "Direito do Trabalho & Defesa do Trabalhador",
    icon: Briefcase,
    tag: "Verbas Rescisórias · Rescisão Indireta · Horas Extras · Vínculo · Acidentes",
    summary:
      "Defesa firme e combativa dos direitos trabalhistas para garantir o pagamento justo de rescisões, horas extras e reparação por condições abusivas de trabalho.",
    details:
      "Muitos trabalhadores dedicam anos de esforço sem receber seus direitos legítimos previstos pela CLT. A Dra. Ana Paula Lima atua com rigor na apuração de valores devidos, reconhecimento de vínculo de emprego sem carteira assinada, rescisão indireta quando a empresa comete faltas graves e ações indenizatórias.",
    topics: [
      "Cobrança integral de verbas rescisórias não pagas, saldo de salário, aviso prévio, férias e 13º",
      "Ação de Rescisão Indireta do Contrato de Trabalho (\"demissão do empregador por descumprimento legal\")",
      "Reconhecimento formal de vínculo de emprego com anotação na Carteira de Trabalho e liberação de FGTS e Seguro-Desemprego",
      "Cobrança de horas extras, intervalos para descanso não usufruídos e adicional noturno",
      "Pedidos de Adicional de Insalubridade e Periculosidade para atividades com risco à saúde ou integridade física",
      "Ações indenizatórias por acidente de trabalho, doenças ocupacionais e assédio moral no ambiente corporativo",
    ],
    whatsAppText:
      "Olá, Dra. Ana Paula Lima! Gostaria de orientação jurídica sobre direitos trabalhistas (rescisão, horas extras ou rescisão indireta).",
  },
  {
    id: "direito-civel",
    title: "Direito Cível & Responsabilidade Civil",
    icon: Scale,
    tag: "Indenizações · Danos Morais · Cobranças · Contratos · Responsabilidade Civil",
    summary:
      "Proteção dos seus interesses civis, reparação por prejuízos materiais e morais, cobrança de créditos e defesa contra atos ilícitos com estratégia jurídica certeira.",
    details:
      "As relações civis demandam segurança jurídica e rápida resposta judicial. O escritório da Dra. Ana Paula Lima promove defesas consistentes e ações indenizatórias contra abusos contratuais, descumprimentos de acordos, prejuízos patrimoniais e cobranças ilegais, assegurando a justa reparação e respeito aos seus direitos.",
    topics: [
      "Ações Indenizatórias por Danos Morais e Danos Materiais decorrentes de prejuízos causados por terceiros",
      "Cobrança judicial e extrajudicial de títulos de crédito, promissórias, cheques e contratos inadimplidos",
      "Elaboração, análise crítica e blindagem de Contratos Civis, Locações, Compra e Venda e Prestação de Serviços",
      "Rescisão contratual com restituição de valores pagos e aplicação de penalidades cabíveis",
      "Ações de Usucapião judicial e extrajudicial para regularização definitiva da posse de imóveis",
      "Ações Possessórias (Reintegração e Manutenção de Posse) para proteção de propriedades e terrenos",
    ],
    whatsAppText:
      "Olá, Dra. Ana Paula Lima! Gostaria de consultoria sobre Direito Cível (indenização, contratos ou cobranças).",
  },
  {
    id: "direito-do-consumidor",
    title: "Direito do Consumidor & Defesa Financeira",
    icon: Shield,
    tag: "Negativação Indevida · Golpes do Pix & Fraudes · Cobranças Abusivas · SPC/Serasa",
    summary:
      "Combate imediato a abusos de bancos, operadoras e fornecedores: retirada urgente do nome do SPC/Serasa e indenizações por fraudes e cobranças indevidas.",
    details:
      "Ter o nome negativado indevidamente ou ser vítima de fraudes bancárias gera restrições humilhantes e danos graves. Atuamos com pedido de liminar urgente para limpeza imediata do nome nos órgãos de proteção ao crédito e pleiteamos indenizações proporcionais ao dano sofrido.",
    topics: [
      "Pedido liminar urgente para exclusão imediata do nome do SPC, Serasa e cartórios de protesto por dívida inexistente ou quitada",
      "Indenização por danos morais decorrentes de negativação indevida ou manutenção ilegal do registro",
      "Defesa jurídica para vítimas de golpes bancários, transferências Pix fraudulentas e invasões de conta",
      "Ações contra empréstimos consignados não autorizados e descontos indevidos em benefícios do INSS",
      "Cancelamento de contratos abusivos de telefonia, internet, energia, cartões de crédito e seguros não contratados",
      "Restituição em dobro de quantias cobradas indevidamente conforme o Código de Defesa do Consumidor",
    ],
    whatsAppText:
      "Olá, Dra. Ana Paula Lima! Gostaria de orientação para resolver negativação indevida, golpe bancário ou cobrança abusiva.",
  },
  {
    id: "consultoria-regularizacao",
    title: "Consultoria Preventiva & Acordos Extrajudiciais",
    icon: FileText,
    tag: "Acordos Extrajudiciais · Notificações · Mediação · Atendimento Presencial & Online",
    summary:
      "Soluções ágeis fora da Justiça para prevenir conflitos caros e demorados, unindo a proximidade do escritório em Monte Azul à facilidade do atendimento digital.",
    details:
      "Muitas disputas podem ser resolvidas com rapidez e economia por meio de notificação extrajudicial, conciliação e acordos formais bem redigidos. A Dra. Ana Paula Lima oferece assessoria consultiva personalizada para que você tome decisões com total respaldo da lei.",
    topics: [
      "Elaboração e envio de Notificações Extrajudiciais com validade jurídica formal para notificar partes e constituir em mora",
      "Mediação e negociação direta de acordos amigáveis para evitar disputas judiciais desgastantes",
      "Assessoria preventiva para pessoas físicas e autônomos na assinatura de contratos importantes",
      "Regularização documental e representação perante Cartórios de Notas e Registros de Imóveis",
      "Atendimento 100% digital com envio seguro de documentos e reuniões por chamada de vídeo para todo o Brasil",
      "Atendimento presencial e personalizado em Monte Azul e cidades do Norte de Minas Gerais",
    ],
    whatsAppText:
      "Olá, Dra. Ana Paula Lima! Gostaria de orientação preventiva ou envio de notificação extrajudicial para o meu caso.",
  },
];

const clientReviews = [
  {
    name: "Marcos Vinícius Silveira",
    reviewerTag: "Monte Azul · MG · Avaliação verificada no Google",
    badge: "Aposentadoria Rural Concedida com Agilidade e Cuidado",
    rating: 5,
    content:
      "A Dra. Ana Paula foi maravilhosa no processo da aposentadoria rural da minha mãe. Todo o cuidado com os documentos da roça e o acolhimento foram diferenciados. O benefício foi aprovado rápido. Excelente profissional em Monte Azul e região!",
    reply: "Fico muito feliz em ajudar sua família, Marcos! O trabalho de quem dedica a vida ao campo merece todo o nosso respeito e empenho.",
  },
  {
    name: "Camila Fernandes Rocha",
    reviewerTag: "Avaliação verificada no Google",
    badge: "Acolhimento, Ética & Segurança no Divórcio e Pensão",
    rating: 5,
    content:
      "Procurei a Dra. Ana Paula para cuidar do meu divórcio e pensão dos meus dois filhos. Ela me passou muita segurança e acolhimento desde o primeiro instante no escritório. Uma advogada muito humana, justa e ética. Recomendo de coração!",
    reply: "Agradeço imensamente o carinho e a confiança, Camila. Cuidar de você e dos seus filhos com respeito e segurança é nossa missão.",
  },
  {
    name: "José Carlos Pereira",
    reviewerTag: "Norte de Minas · Avaliação verificada no Google",
    badge: "Excelente Advogada Trabalhista: Resolveu com Firmeza",
    rating: 5,
    content:
      "Excelente advogada trabalhista! Tive problemas com os direitos na rescisão do meu trabalho após anos de serviço e a Dra. Ana Paula resolveu com agilidade e muita firmeza. Me manteve informado de tudo pelo WhatsApp. Profissional nota 10!",
    reply: "Muito obrigado pela confiança, José Carlos! Defender o direito do trabalhador com seriedade e clareza é nosso dever diário.",
  },
  {
    name: "Luciana Alencar Mendes",
    reviewerTag: "Avaliação verificada no Google",
    badge: "BPC/LOAS Concedido com Total Paciência e Competência",
    rating: 5,
    content:
      "Contratamos a consultoria para o BPC/LOAS do meu tio e deu tudo certo com agilidade. A Dra. Ana Paula explica tudo sem enrolação, com clareza e muita paciência. Escritório muito acolhedor e atencioso.",
    reply: "Muito grata pelas palavras, Luciana! O direito ao amparo assistencial é sagrado e fico muito contente com a conquista do seu tio.",
  },
  {
    name: "Geraldo Antunes de Oliveira",
    reviewerTag: "Monte Azul · MG · Avaliação no Google",
    badge: "Atendimento Impecável, Pontual e Muito Sério",
    rating: 5,
    content:
      "Muito competente e atenciosa. Me auxiliou em uma questão cível e contratual com muita rapidez. O atendimento presencial aqui em Monte Azul é impecável e ela também é muito rápida no WhatsApp. Parabéns pelo trabalho!",
    reply: "Obrigada, Geraldo! Estaremos sempre à disposição para garantir sua tranquilidade jurídica.",
  },
  {
    name: "Maria de Lourdes Santos",
    reviewerTag: "Avaliação verificada no Google",
    badge: "Segurança e Paz de Espírito em Todo o Processo",
    rating: 5,
    content:
      "Dra. Ana Paula é uma bênção. Atendimento humanizado de verdade, me deu segurança e paz de espírito durante todo o processo familiar. Só tenho gratidão pelo carinho e eficiência do escritório.",
    reply: "Sua paz de espírito e dignidade são a nossa maior satisfação, dona Maria. Conte sempre conosco!",
  },
  {
    name: "Rodrigo Barbosa Ferreira",
    reviewerTag: "Avaliação no Google",
    badge: "Capacitada, Dedicada & Esclarecedora",
    rating: 5,
    content:
      "Profissional extremamente capacitada e dedicada. Esclareceu todas as dúvidas sobre tempo de contribuição e regras de aposentadoria com muita transparência. Super recomendo em Monte Azul e região.",
  },
  {
    name: "Fernanda Guimarães",
    reviewerTag: "Avaliação no Google",
    badge: "Atenciosa, Ágil & Muito Segura",
    rating: 5,
    content:
      "Excelente atendimento! Muito atenciosa, ágil e segura em suas orientações. Tivemos uma ótima experiência e com certeza voltaremos a procurar sempre que necessário.",
  },
  {
    name: "Danilo Souza Matos",
    reviewerTag: "Avaliação no Google",
    badge: "Inventário Conduzido com Celeridade e Transparência",
    rating: 5,
    content:
      "Atendimento impecável! A Dra. Ana Paula conduziu o processo de inventário da nossa família com muita celeridade e transparência. Recomendo a todos.",
  },
];

const faqs = [
  {
    q: "A Dra. Ana Paula atende apenas presencialmente em Monte Azul ou também online?",
    a: "Atendemos presencialmente em nosso escritório na R. Três de Outubro, 109, no centro de Monte Azul (MG), e também de forma 100% digital e segura para clientes em todo o Norte de Minas Gerais e demais estados do Brasil. Por meio de chamadas de vídeo, envio prático de documentos pelo WhatsApp e assinaturas eletrônicas com validade jurídica oficial, você recebe a mesma dedicação, sigilo e qualidade sem precisar sair de casa.",
  },
  {
    q: "Quem tem direito à Aposentadoria Rural por Idade e quais documentos são necessários?",
    a: "Trabalhadores e produtoras(es) rurais que exercem atividade em regime de economia familiar (pequenos proprietários, meeiros, parceiros e boias-frias) podem se aposentar aos 55 anos (mulheres) e 60 anos (homens), comprovando 15 anos de trabalho no campo. A documentação pode incluir notas de produtor, contratos de arrendamento/parceria, comprovantes de sindicato rural, certidões de nascimento e casamento com qualificação profissional, cadastros escolares e recibos. Analisamos cada documento minuciosamente para garantir a concessão do seu benefício.",
  },
  {
    q: "Como funciona a fixação ou cobrança de pensão alimentícia atrasada?",
    a: "A pensão alimentícia é calculada com base no binômio necessidade (de quem recebe) e possibilidade (de quem paga), priorizando sempre o sustento digno dos filhos. Caso o responsável esteja inadimplente, ingressamos imediatamente com a Execução de Alimentos, que pode resultar no bloqueio de contas bancárias, negativação do nome e até decreto de prisão civil do devedor caso não quite as parcelas recentes.",
  },
  {
    q: "Fui demitido ou estou passando por abusos na empresa. Qual o prazo para procurar um advogado?",
    a: "O prazo constitucional para ingressar com uma ação trabalhista é de até 2 anos após a rescisão contratual, podendo cobrar direitos referentes aos últimos 5 anos de trabalho. Se a empresa estiver cometendo faltas graves (como atraso reiterado de salários, não recolhimento de FGTS, assédio moral ou falta de segurança), podemos pleitear a Rescisão Indireta, na qual o trabalhador sai da empresa recebendo todas as suas indenizações integrais como se tivesse sido demitido sem justa causa.",
  },
  {
    q: "Tive meu nome negativado indevidamente no SPC/Serasa. O que posso fazer?",
    a: "A negativação indevida (por dívida já paga, conta inexistente, golpe ou fraude bancária) configura ato ilícito. Ingressamos com pedido de tutela de urgência (liminar) para que o juiz ordene a exclusão imediata do seu nome dos órgãos de restrição ao crédito, sob pena de multa diária, além de pleitear indenização justa por danos morais pelo constrangimento suportado.",
  },
  {
    q: "Como acompanho o andamento do meu processo no escritório?",
    a: "A transparência e a proximidade com o cliente são marcas registradas da Dra. Ana Paula Lima. Você não fica desamparado nem precisa decifrar termos difíceis. A cada movimentação ou decisão relevante do seu processo, você recebe atualizações claras diretamente no seu WhatsApp, com atendimento humanizado em todas as etapas.",
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
      <main className="relative min-h-screen selection:bg-[#b88628] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (Obsidian Noir - Alto Contraste) */}
        <div className="border-b border-zinc-800 bg-[#090a0d] px-4 py-2.5 text-center text-xs text-zinc-300">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#e2be67]" />
              <strong>Sede em Monte Azul - MG</strong>
              <span className="hidden md:inline text-zinc-400">· R. Três de Outubro, 109 · Atendimento Presencial & Online em Todo o Brasil</span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f3db9d] transition-colors"
            >
              <span className="flex text-[#e2be67]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#e2be67]" />
                ))}
              </span>
              <span>5,0 ★ no Google (13 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Silk White - Clean, Elegante, Baseado no Logo Dourado) */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-stone-200 bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-stone-100 bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8 lg:px-12">
            {/* Logo on Left (Aumentado em 30%) */}
            <a
              href="#inicio"
              aria-label="Ana Paula Lima Advocacia - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-6 lg:mr-8 xl:mr-10"
            >
              <div className="relative size-[52px] sm:size-[58px] lg:size-[62px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma Balança da Justiça - Ana Paula Lima Advocacia"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[16px] sm:text-[18px] lg:text-[19.5px] font-bold tracking-[0.13em] text-slate-900 leading-tight">
                  ANA PAULA LIMA
                </span>
                <span className="text-[10.5px] sm:text-[12px] lg:text-[12.8px] font-semibold tracking-[0.24em] text-[#b88628] uppercase mt-0.5">
                  A D V O C A C I A
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

            {/* Right Action: Primary WhatsApp Button (Gold Signature) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ana Paula Lima! Gostaria de agendar uma consulta jurídica."
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
                      className="py-3 text-sm font-medium text-slate-700 hover:text-[#b88628]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#8a5d12] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ana Paula! Gostaria de conversar com você sobre uma questão jurídica."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-stone-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-slate-800 transition-all hover:border-[#b88628]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (13 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (White Silk & Gold Metallic Glow) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-stone-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[45rem] rounded-full bg-[radial-gradient(circle,rgba(226,190,103,0.12),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[35rem] rounded-full bg-[radial-gradient(circle,rgba(184,134,40,0.08),transparent_65%)]" />

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
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#b88628]/25 bg-[#fdfbf7] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b6e1b] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e2be67] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#b88628]"></span>
                </span>
                <span>DRA. ANA PAULA LIMA · ADVOCACIA · MONTE AZUL - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-[#0f172a] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Defesa jurídica firme, estratégica e humanizada:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#80182a]">
                  protegendo seus direitos, sua família e o trabalho de toda a sua vida.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Sob a liderança da <strong className="font-semibold text-slate-900">Dra. Ana Paula Lima</strong>, nosso escritório oferece acolhimento dedicado, combate incisivo e excelência técnica em <strong className="font-semibold text-slate-900">Direito de Família, Previdenciário (INSS Rural e Urbano), Trabalhista e Cível</strong>. Avaliação máxima 5,0 ★ no Google em Monte Azul, Norte de Minas e com atendimento online em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Paula Lima! Gostaria de agendar um atendimento para analisar meu caso."
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
                  <CheckCircle2 size={16} className="text-[#b88628] shrink-0" />
                  <span>Atendimento Humanizado & Sigiloso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b88628] shrink-0" />
                  <span>Presencial (Monte Azul) & Online (Brasil)</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#b88628] shrink-0" />
                  <span>Comunicação Clara e Ágil</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dra. Ana Paula Lima Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-2xl ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Ana Paula Lima — Advogada em Monte Azul - MG"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-stone-200 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b88628]">
                        Ana Paula Lima Advocacia
                      </p>
                      <p className="font-serif text-base font-bold text-slate-900 sm:text-lg">
                        Dra. Ana Paula Lima
                      </p>
                    </div>
                    <span className="rounded-md border border-[#b88628]/30 bg-[#fdfbf7] px-2.5 py-1 text-[10px] font-bold text-[#9b6e1b]">
                      Cível · Família · Previdenciário · Trabalhista
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-600">
                    R. Três de Outubro, 109 · Monte Azul - MG
                  </p>
                </div>
              </div>

              {/* Decorative subtle corner border */}
              <span className="absolute -left-3 -top-3 -z-10 size-20 border-l-2 border-t-2 border-[#b88628]/40 sm:-left-5 sm:-top-5 sm:size-28" />
              <span className="absolute -bottom-3 -right-3 -z-10 size-20 border-b-2 border-r-2 border-[#b88628]/40 sm:-bottom-5 sm:-right-5 sm:size-28" />

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
                    <span className="text-[10px] text-[#e2be67]">★★★★★</span>
                  </div>
                  <p className="text-[10px] font-medium text-slate-600">
                    13 avaliações no Google
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: FAIXA DE CREDENCIAIS (Obsidian Noir - Alto Impacto e Autoridade) */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-zinc-800 bg-[#090a0d] text-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {[
                {
                  value: "5,0 ★ no Google",
                  label: "Nota máxima em 13 avaliações comprovando eficácia técnica e acolhimento humano",
                },
                {
                  value: "Família & Previdenciário",
                  label: "Defesa especializada em divórcios, pensões e aposentadoria rural e urbana (INSS)",
                },
                {
                  value: "Trabalhista & Cível",
                  label: "Atuação firme pelos direitos do trabalhador, indenizações e contratos",
                },
                {
                  value: "Sede em Monte Azul",
                  label: "Atendimento presencial no Norte de MG e assessoria jurídica digital em todo o Brasil",
                },
              ].map((item, index) => (
                <div
                  key={item.value}
                  className={`flex flex-col justify-start ${
                    index > 0
                      ? "sm:border-l sm:border-zinc-800/80 sm:pl-6 lg:pl-6 xl:pl-8"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="size-2 shrink-0 rounded-full bg-[#e2be67]" />
                    <h3 className="font-serif text-lg sm:text-[1.18rem] lg:text-[1.25rem] font-bold text-white tracking-tight leading-snug">
                      {item.value}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-xs lg:text-[13px] leading-relaxed text-zinc-400 font-normal pl-[18px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOBRA 3: SOBRE A ADVOGADA (Silk Surface) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-stone-200 bg-[#fbf9f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Ana Paula Lima Portrait */}
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
                  alt="Dra. Ana Paula Lima — Advocacia Especializada"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#b88628]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b88628]">
                    Advocacia Humanizada & Combativa
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Ana Paula Lima Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#b88628]">
                  Cível · Família · Previdenciário · Trabalhista
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  R. Três de Outubro, 109 · Monte Azul - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#b88628]/40 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#b88628]/25 bg-[#fdfbf7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b6e1b] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#b88628]" />
                <span>SOBRE A ADVOGADA & COMPROMISSO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0f172a] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia pautada na escuta atenta, ética inegociável e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#80182a]">
                  defesa apaixonada dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Por trás de cada processo judicial existem histórias de vida, famílias buscando justiça e trabalhadores que dedicaram anos de esforço. <strong className="font-bold text-slate-900">A Dra. Ana Paula Lima construiu sua trajetória sobre o pilar do acolhimento humano</strong>, compreendendo as angústias de cada cliente e transformando preocupações em soluções jurídicas sólidas e resolutivas.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Seja garantindo o direito legítimo à aposentadoria rural no Norte de Minas, assegurando a proteção dos filhos em um divórcio, buscando reparação por abusos trabalhistas ou cobrando indenizações por atos ilícitos no Direito Cível, <strong className="font-bold text-slate-900">nosso compromisso é lutar incansavelmente por você</strong> com proximidade, clareza e dedicação integral.
              </motion.p>

              {/* Client Quote Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-stone-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;A Dra. Ana Paula cuidou do processo da aposentadoria rural com um cuidado e dedicação impressionantes. Conseguimos a concessão sem burocracia. Muito humana, atenciosa e competente. Recomendo de olhos fechados em Monte Azul e região!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#b88628]">
                  — Marcos Vinícius Silveira (Avaliação verificada no Google · 5,0 ★)
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
                    13 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Atendimento Direto</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Fale com a própria Dra. Ana Paula
                  </p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Presencial & Online</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Monte Azul e todo o Brasil
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b88628] shrink-0" />
                  <span>Sede na R. Três de Outubro, 109 - Centro, Monte Azul - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b88628] shrink-0" />
                  <span>Contato direto pelo WhatsApp com a Dra. Ana Paula Lima</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Paula! Gostaria de agendar uma consulta para conversar sobre o meu caso."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Ana Paula Lima
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: ÁREAS DE ATUAÇÃO (Obsidian Noir) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-zinc-800 bg-[#090a0d] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="ÁREAS DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossos principais pilares jurídicos. Clique em qualquer especialidade para ver detalhes, procedimentos adotados e orientações sob medida."
              >
                Soluções jurídicas estratégicas em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3db9d] to-[#e2be67]">
                  Monte Azul, Norte de Minas e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Paula! Tenho dúvidas sobre uma questão jurídica e gostaria de atendimento."
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
                    className="group relative flex flex-col justify-between rounded-xl border border-zinc-800 bg-[#111317] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b88628] hover:bg-[#171920] hover:shadow-[0_12px_36px_rgba(184,134,40,0.22)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-zinc-700 bg-[#1c1e26] text-[#e2be67] transition-colors group-hover:border-[#b88628] group-hover:bg-[#b88628] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#e2be67]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#faecd3]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#f3db9d]">
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:text-[#e2be67] cursor-pointer"
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

        {/* DOBRA 5: DIFERENCIAIS (Silk Surface) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-b border-stone-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading
              theme="light"
              eyebrow="POR QUE NOS ESCOLHER"
              description="A união entre profundo preparo técnico, acolhimento sincero e comunicação transparente faz a diferença em cada resultado que entregamos."
            >
              O que diferencia a atuação da{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#80182a]">
                Dra. Ana Paula Lima?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-[#fbf9f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b88628] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b88628]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9b6e1b]">
                      <HeartHandshake size={14} /> Acolhimento & Humanização
                    </span>
                    <span className="text-xs font-semibold text-[#b88628]">
                      5,0 ★ Google
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atendimento Pessoal, Atento & Sem Intermediários
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Como comprovam as avaliações no Google com nota máxima 5,0 ★, o grande diferencial da Dra. Ana Paula é a capacidade de escutar atentamente e acolher a dor de cada pessoa. Você fala diretamente com a advogada responsável pelo seu caso, sem intermediários frios ou respostas prontas.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88628]" />
                      <span>Comunicação direta e sem juridiquês ininteligível</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88628]" />
                      <span>Retorno ágil de mensagens e dúvidas no WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88628]" />
                      <span>Acolhimento sincero e empatia em momentos delicados</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-stone-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ana Paula! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#b88628] hover:bg-[#b88628] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Ana Paula
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
                className="group flex flex-col justify-between rounded-xl border border-stone-200 bg-[#fbf9f5] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b88628] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b88628]/25 bg-[#fdfbf7] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#9b6e1b]">
                      <Award size={14} /> Rigor Técnico & Firmeza
                    </span>
                    <span className="text-xs font-semibold text-[#b88628]">
                      Norte de MG & Brasil
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Combatividade Processual & Estratégia Jurídica Certeira
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    Aposentadoria rural, ações de família e causas trabalhistas exigem prova minuciosa, domínio da legislação atualizada e atuação rápida. O escritório da Dra. Ana Paula Lima combina conhecimento prático da realidade local com petições combativas que fazem valer os seus direitos perante juizados e tribunais.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88628]" />
                      <span>Análise aprofundada de documentos e histórico probatório</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88628]" />
                      <span>Agilidade em pedidos de liminares urgentes e tutelas de emergência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b88628]" />
                      <span>Acompanhamento constante até a efetiva execução da decisão</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-stone-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ana Paula! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-stone-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#b88628] hover:bg-[#b88628] hover:text-white"
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

        {/* DOBRA 6: MÉTODO EM 3 PASSOS (Obsidian Noir) */}
        <section className="relative overflow-hidden border-b border-zinc-800 bg-[#0f1115] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO CUIDAMOS DO SEU CASO"
                description="Um método transparente, acolhedor e centrado em resultados práticos para garantir sua tranquilidade, seus direitos e o amparo da sua família."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3db9d] to-[#e2be67]">
                  resolver sua demanda jurídica com segurança e paz de espírito.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-zinc-800 bg-[#171920] p-6 font-serif text-base italic leading-7 text-zinc-200 shadow-md">
                &ldquo;Cada pessoa que chega ao meu escritório traz consigo uma história que merece ser ouvida com respeito. Nosso compromisso é trazer 100% de clareza, dedicação e técnica em todas as fases, lutando pelo seu direito do início ao fim.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#e2be67]">
                  — Dra. Ana Paula Lima · Advogada
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
                  "Escuta Acolhedora & Diagnóstico Jurídico Cuidadoso",
                  "Conversa reservada pelo WhatsApp ou em nosso escritório no centro de Monte Azul para entender sua situação em profundidade, analisando documentos, histórico de trabalho, registros civis ou contratos.",
                ],
                [
                  "02",
                  "Definição da Estratégia & Ação Rápida",
                  "Traçamos o caminho mais vantajoso (seja pela via administrativa perante o INSS, acordo extrajudicial amigável ou ação judicial combativa), protocolando os pedidos necessários para estancar prejuízos.",
                ],
                [
                  "03",
                  "Acompanhamento Transparente & Notificação em Tempo Real",
                  "Você nunca fica sem saber o que está acontecendo. Informamos cada movimentação relevante do processo em linguagem simples e compreensível diretamente no seu WhatsApp, até a vitória definitiva.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#e2be67]">
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

        {/* DOBRA 7: AVALIAÇÕES GOOGLE 5.0 (Silk Surface) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-stone-200 bg-[#fbf9f5] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos reais de pessoas e famílias sobre a competência, a agilidade e o atendimento acolhedor da Dra. Ana Paula Lima em Monte Azul e região."
              >
                Avaliada com 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#80182a]">
                  13 avaliações no Google.
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
                    <div className="flex text-[#e2be67]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#e2be67]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Ana Paula Lima Advocacia
                  </p>
                  <p className="text-[11px] text-slate-500">
                    13 avaliações 5 estrelas no Google
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
                  className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#b88628] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#e2be67]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#e2be67]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#b88628]/25 bg-[#fdfbf7] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#9b6e1b]">
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
                      <div className="mt-3 rounded-lg border-l-2 border-[#b88628] bg-[#fdfbf7] p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#9b6e1b]">Resposta da Dra. Ana Paula:</p>
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
                className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#b88628] hover:text-[#b88628]"
              >
                <GoogleIcon size={16} /> Ver avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 8: PERGUNTAS FREQUENTES / FAQ (Obsidian Noir) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-zinc-800 bg-[#090a0d] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3db9d] to-[#e2be67]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                Transparência desde o primeiro contato. Se sua dúvida não estiver listada abaixo, clique no botão e fale diretamente com a Dra. Ana Paula no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-zinc-800 bg-[#111317] transition-colors hover:border-zinc-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#e2be67] transition-transform duration-200 ${
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
                    "Olá, Dra. Ana Paula! Gostaria de tirar uma dúvida sobre a minha situação jurídica."
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
          className="scroll-mt-24 border-b border-stone-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="light"
                eyebrow="CONTATO & AGENDAMENTO"
                description="Fale diretamente com a Dra. Ana Paula Lima pelo WhatsApp para orientação imediata com acolhimento, sigilo absoluto e rigor técnico."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9b6e1b] via-[#cda142] to-[#80182a]">
                  atender suas necessidades e defender seus direitos.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Paula Lima! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp com a Dra. Ana Paula
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
                    className="mt-0.5 shrink-0 text-[#b88628]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#9b6e1b] font-bold">
                      Segunda a Sexta · 08:00 às 18:00
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Atendimento presencial em Monte Azul e suporte online contínuo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#b88628]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#b88628]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#b88628]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#b88628] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#b88628]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#b88628] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b88628]"
                  />
                  <div>
                    <span className="text-slate-900 font-medium">{ADDRESS_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede em Monte Azul - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-[#fbf9f5] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#b88628] via-[#e2be67] to-[#80182a]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma Balança da Justiça - Ana Paula Lima Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b88628]">
                    ANA PAULA LIMA
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
                  alt="Dra. Ana Paula Lima em seu escritório"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Acolhedor, Discreto e Resolutivo</p>
                  <p className="text-[10px] text-stone-200">Monte Azul · Norte de Minas & Atendimento Online</p>
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
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b88628]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#9b6e1b]">
                    08:00 às 18:00
                  </span>
                  <span>Sábados e Domingos</span>
                  <span className="text-right font-medium text-slate-500">
                    Plantão via WhatsApp
                  </span>
                  <span>Localização</span>
                  <span className="text-right text-slate-900 font-semibold">Monte Azul · MG</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Paula Lima! Gostaria de agendar um atendimento."
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

        {/* DOBRA 10: PRÉ-FOOTER BANNER (Obsidian Noir) */}
        <section className="border-t border-zinc-800 bg-[#0f1115] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#e2be67]" /> ANA PAULA LIMA ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronta para acolher sua história e defender seus direitos com firmeza.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dra. Ana Paula! Preciso de orientação jurídica para o meu caso."
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

        {/* DOBRA 11: RODAPÉ INSTITUCIONAL (Obsidian Noir) */}
        <footer className="border-t border-zinc-800 bg-[#090a0d] px-5 py-14 text-zinc-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Ana Paula Lima Advocacia"
                className="flex items-center gap-3"
              >
                <div className="relative size-12 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma Balança da Justiça - Ana Paula Lima Advocacia"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold tracking-[0.14em] text-white">
                    ANA PAULA LIMA
                  </p>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-[#e2be67] uppercase">
                    A D V O C A C I A
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-zinc-400">
                Advocacia humanizada e estratégica especializada em Direito de Família, Previdenciário (INSS Rural e Urbano), Trabalhista e Cível, com sede em Monte Azul - MG e atuação online em todo o Brasil.
              </p>

              <div className="mt-5 flex items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#111317] px-3 py-1.5 text-zinc-300 transition-colors hover:border-[#e2be67] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#e2be67]" /> Instagram @adv.anapaulalimab
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-[#111317] px-3 py-1.5 text-zinc-300 transition-colors hover:border-[#e2be67] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (13 avaliações)
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
                    A Advogada (Dra. Ana Paula)
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
                    href={getWhatsAppUrl("Olá, Dra. Ana Paula! Gostaria de falar com seu escritório.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#e2be67] hover:underline"
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
                  Segunda a Sexta · 08:00 às 18:00
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
                  Cível · Família · Previdenciário · Trabalhista
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-800/80 pt-6 text-center text-[11px] text-zinc-500">
            <p>
              © {new Date().getFullYear()} ANA PAULA LIMA ADVOCACIA. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              R. Três de Outubro, 109, Monte Azul - MG, 39500-000 · Advocacia em conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dra. Ana Paula! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Ana Paula Lima"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">WhatsApp Direto</span> · Dra. Ana Paula Lima
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-zinc-700 bg-[#111317] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-zinc-700 bg-zinc-800 text-white transition-colors hover:border-[#e2be67] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-black p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma Balança da Justiça - Ana Paula Lima Advocacia"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">ANA PAULA LIMA ADVOCACIA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#e2be67] uppercase">
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e2be67]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#e2be67]" />
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
