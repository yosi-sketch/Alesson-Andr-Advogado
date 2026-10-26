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
  Heart,
  FileText,
  ShieldAlert,
  Baby,
  Home as HomeIcon,
  HelpCircle,
  X,
  ChevronDown,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535984063030";
const PHONE_DISPLAY = "(35) 98406-3030";
const EMAIL_CONTACT = "contato@carolinavasconcelos.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/carolinav.advogada/";
const INSTAGRAM_HANDLE = "@carolinav.advogada";
const LAWYER_NAME = "Dra. Carolina Vasconcelos";
const LAWYER_TITLE = "Advogada Especialista em Direito das Famílias e Sucessões";
const FIRM_NAME = "Carolina Vasconcelos — Advocacia";
const ADDRESS_TEXT = "Av. Gonçalves Leite, 156 - Centro, Paraguaçu - MG, 37120-000";
const REGION_TEXT = "Paraguaçu · Alfenas · Varginha · Sul de Minas · MG & Atuação Nacional";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Carolina+Vasconcelos+%E2%80%94+Advocacia%0AParagua%C3%A7u+%C2%B7+MG";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/carolina-vasconcelos-hero.jpg";
const FOTO_SOBRE_SRC = "/carolina-vasconcelos-sobre.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Carolina Vasconcelos! Gostaria de tirar dúvidas e agendar um atendimento sobre Direito de Família.";
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
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

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
    id: "divorcio-partilha-bens",
    title: "Divórcio & Separação (Consensual ou Litigioso)",
    icon: Scale,
    tag: "Divórcio em Cartório · Partilha de Bens · Proteção Patrimonial",
    summary:
      "O término de um casamento exige acolhimento, estratégia e segurança patrimonial. Atuação para proteger seus direitos e conduzir o processo com rapidez e serenidade.",
    details:
      "O divórcio abrange muito além do encerramento do vínculo formal; envolve a partilha justa de imóveis, investimentos e empresas, além da fixação de pensão entre cônjuges e proteção contra fraudes financeiras. A Dra. Carolina Vasconcelos atua com excelência tanto na via extrajudicial (em cartório, rápida e amigável) quanto no contencioso judicial com firmeza inabalável.",
    topics: [
      "Divórcio extrajudicial em cartório com rapidez, discrição e sem desgaste emocional",
      "Divórcio judicial litigioso com defesa vigorosa do patrimônio e dos direitos da família",
      "Levantamento patrimonial minucioso contra ocultação, fraude ou sonegação de bens",
      "Partilha justa de imóveis, participações societárias, veículos, contas bancárias e investimentos",
      "Arbitramento de aluguel pelo uso exclusivo do imóvel do casal pelo ex-cônjuge",
      "Retorno imediato ao nome de solteiro(a) e regularização de todos os registros civis",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Gostaria de uma consultoria sobre divórcio e partilha de bens.",
  },
  {
    id: "pensao-alimenticia",
    title: "Pensão Alimentícia (Fixação, Revisão & Execução)",
    icon: Heart,
    tag: "Fixação Justa · Revisão de Valores · Cobrança de Atrasados · Prisão Civil",
    summary:
      "A pensão alimentícia é a garantia do sustento, da educação e da dignidade dos seus filhos. Apuração real de rendimentos e cobrança implacável de atrasos.",
    details:
      "Alimentos não cobrem apenas alimentação, mas educação escolar, saúde, vestuário, moradia e lazer. Conduzimos ações de fixação inicial com cálculo realista de despesas, ações revisionais para aumento ou diminuição quando as condições financeiras se transformam, e execuções rigorosas de débitos pelo rito de prisão civil ou penhora de contas e patrimônio.",
    topics: [
      "Fixação de alimentos provisórios emergenciais e definitivos com apuração da real capacidade",
      "Investigação aprofundada de rendimentos e sinais exteriores de riqueza de autônomos e empresários",
      "Ação revisional para aumento da pensão diante do crescimento e das necessidades dos filhos",
      "Ação revisional para redução em casos de alteração comprovada da condição financeira",
      "Execução e cobrança rápida de valores em atraso (sob pena de prisão civil ou bloqueio de bens)",
      "Pensão gravídica para cobertura das despesas médicas, nutricionais e do parto durante a gestação",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Preciso de orientação jurídica sobre pensão alimentícia.",
  },
  {
    id: "guarda-filhos-convivencia",
    title: "Guarda dos Filhos & Convivência Familiar",
    icon: Baby,
    tag: "Guarda Compartilhada · Convivência · Proteção aos Filhos · Combate à Alienação",
    summary:
      "O bem-estar e a estabilidade emocional dos seus filhos são prioridade absoluta. Defesa intransigente do melhor interesse da criança e do adolescente.",
    details:
      "Na dissolução da união, a definição da guarda e da convivência deve harmonizar o convívio saudável com ambos os genitores, resguardando a rotina e a paz dos filhos. A Dra. Carolina Vasconcelos estabelece planos de convivência detalhados e atua com pulso firme contra práticas nocivas de alienação parental, ameaças ou mudanças não autorizadas de domicílio.",
    topics: [
      "Definição estratégica entre guarda compartilhada ou unilateral no melhor interesse dos filhos",
      "Plano detalhado de convivência (rotina semanal, fins de semana, férias escolares e datas festivas)",
      "Ações judiciais de urgência para combater e punir práticas de alienação parental",
      "Autorização judicial para viagens nacionais, internacionais e mudança de cidade ou estado",
      "Garantia e regulamentação do direito de convivência com avós e familiares próximos",
      "Acolhimento com foco na preservação da saúde psicológica e bem-estar dos menores",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Gostaria de orientação sobre guarda dos filhos e regime de convivência.",
  },
  {
    id: "inventario-partilha-sucessoes",
    title: "Inventário & Planejamento Sucessório",
    icon: FileText,
    tag: "Inventário em Cartório & Judicial · Partilha de Herança · Economia Tributária",
    summary:
      "A preservação do patrimônio familiar e a transmissão segura de herança. Agilidade, economia tributária e prevenção de desavenças entre herdeiros.",
    details:
      "A perda de um familiar é um momento doloroso que não pode ser agravado por disputas patrimoniais desnecessárias ou processos travados por anos. Atuamos com celeridade máxima em inventários extrajudiciais em cartório (concluídos em poucos dias havendo consenso), inventários judiciais complexos e elaboração de planejamento sucessório preventivo com testamentos e doações.",
    topics: [
      "Inventário extrajudicial ágil em cartório de notas com redução drástica de prazos e custos",
      "Inventário judicial contencioso com representação rigorosa para preservação dos quinhões",
      "Planejamento sucessório estratégico para minimizar impostos (ITCMD) e custos cartorários",
      "Elaboração, registro, validação e cumprimento de testamentos públicos e particulares",
      "Remoção de inventariante omisso ou irregular e apuração rigorosa de bens sonegados",
      "Cessão de direitos hereditários, sobrepartilha e partilha amigável de bens imóveis e rurais",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Preciso de assessoria jurídica especializada para inventário e partilha.",
  },
  {
    id: "uniao-estavel",
    title: "União Estável (Contrato, Reconhecimento & Dissolução)",
    icon: HomeIcon,
    tag: "Contrato de Convivência · Regime de Bens · Partilha · Direitos Sucessórios",
    summary:
      "A vida a dois gera plenos direitos patrimoniais e sucessórios. Formalização preventiva ou dissolução segura com garantia da partilha justa.",
    details:
      "Muitos casais convivem em união estável sem documentação formal, criando insegurança sobre o regime patrimonial e direitos sucessórios em caso de separação ou morte. Redigimos pactos e contratos de convivência personalizados e ajuizamos ações de reconhecimento e dissolução com partilha dos bens adquiridos conjuntamente.",
    topics: [
      "Elaboração de Contrato de Convivência com escolha personalizada do regime de bens",
      "Ação judicial de reconhecimento e dissolução de união estável cumulada com partilha de bens",
      "Reconhecimento de união estável post mortem para fins de herança e pensão por morte do INSS",
      "Comprovação documental, testemunhal e fática da convivência pública, contínua e duradoura",
      "Blindagem contra alegações indevidas de união estável para resguardo de bens individuais",
      "Segurança jurídica plena e tranquilidade patrimonial para o casal e familiares",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Gostaria de consultoria sobre união estável e partilha de bens.",
  },
  {
    id: "investigacao-paternidade-adocao",
    title: "Investigação de Paternidade, Socioafetividade & Adoção",
    icon: Users,
    tag: "Exame de DNA · Paternidade Socioafetiva · Inclusão de Sobrenome · Adoção",
    summary:
      "O direito fundamental à identidade, ao amor e ao reconhecimento legal. Filiação biológica e socioafetiva com todos os efeitos jurídicos e patrimoniais.",
    details:
      "O reconhecimento de paternidade ou maternidade é um direito indeclinável da personalidade. Atuamos em ações de investigação de paternidade com exame de DNA, reconhecimento de filiação socioafetiva (reconhecendo o pai ou mãe de criação sem retirar o vínculo biológico) e suporte jurídico completo em processos de adoção.",
    topics: [
      "Ação de investigação de paternidade com exame pericial de DNA e fixação de alimentos provisórios",
      "Reconhecimento formal de filiação socioafetiva e multiparentalidade no registro civil",
      "Inclusão de sobrenomes paternos/maternos e garantia integral de direitos hereditários",
      "Retificação judicial de registro civil para adequação de nomes de família",
      "Assessoria jurídica humanizada e sensível em processos de adoção de crianças e adolescentes",
      "Ação negatória de paternidade em hipóteses comprovadas de erro ou vício de consentimento",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Gostaria de orientações sobre investigação de paternidade ou filiação.",
  },
  {
    id: "violencia-domestica-medidas-protetivas",
    title: "Violência Doméstica & Medidas Protetivas de Urgência",
    icon: ShieldAlert,
    tag: "Lei Maria da Penha · Medida Protetiva Imediata · Afastamento do Lar · Acolhimento",
    summary:
      "A segurança física e psicológica de mulheres e filhos não pode esperar. Atuação emergencial, confidencial e rigorosa para garantir proteção legal imediata.",
    details:
      "Situações de violência moral, psicológica, patrimonial ou física demandam pronta intervenção da Justiça. Prestamos acolhimento humano com sigilo absoluto, pleiteando medidas protetivas urgentes (afastamento do agressor do lar, proibição de aproximação) cumuladas com alimentos provisórios emergenciais e guarda cautelar.",
    topics: [
      "Pedido emergencial e acompanhamento diligente de Medidas Protetivas de Urgência no Judiciário",
      "Afastamento compulsório imediato do agressor da residência da família",
      "Fixação cautelar urgente de alimentos provisionais e guarda emergencial dos filhos",
      "Bloqueio judicial de contas e bens para evitar dissipação patrimonial pelo agressor",
      "Acompanhamento especializado e suporte contínuo em delegacias e audiências judiciais",
      "Acolhimento com profundo respeito, escuta humanizada e total confidencialidade",
    ],
    whatsAppText:
      "Olá, Dra. Carolina! Preciso de orientação jurídica urgente e acolhimento com total sigilo.",
  },
];

const clientReviews = [
  {
    name: "Yan Henrique",
    reviewerTag: "6 avaliações no Google · 2 meses atrás",
    badge: "Trabalho Impecável & Atendimento Excelente",
    rating: 5,
    content:
      "profissionais incríveis trabalho impecável. Recomendo pela qualidade do serviço e pelo atendimento excelente.",
  },
  {
    name: "Ana Cristina Maximo",
    reviewerTag: "5 avaliações no Google · 9 meses atrás",
    badge: "Disponível a Todo Tempo & Muito Atenciosa",
    rating: 5,
    content:
      "Pessoa maravilhosa profissional excelente atenciosa e disponível a todo tempo super indico.tem minha total gratidão e respeito",
    reply: "Obrigada por confiar em meu trabalho, conte sempre comigo!",
  },
  {
    name: "Ingrid Miranda Moura",
    reviewerTag: "1 avaliação no Google · 1 ano atrás",
    badge: "Advogada Humanizada & Indicação de Olhos Fechados",
    rating: 5,
    content:
      "Doutora Carolina é uma advogada humanizada meu processo foi acolhido por ela e em todo tempo me deu suporte,sempre me orientando e acompanhando a todo momento o movimento dele. Indicação minha é de olhos fechados !",
  },
  {
    name: "Bianca Borim",
    reviewerTag: "1 avaliação no Google · 1 ano atrás",
    badge: "Profundo Conhecimento & Muita Segurança",
    rating: 5,
    content:
      "Gostaria de expressar minha satisfação com o trabalho da Carolina. Sua atuação foi impecável, demonstrando grande competência, dedicação e profundo conhecimento jurídico. Ela foi sempre acessível, esclarecendo todas as dúvidas com paciência e clareza. Sua postura profissional e empática me trouxe muita segurança durante todo o processo. Recomendo fortemente seus serviços!",
    reply: "Muito obrigada pelo carinho! Esse é meu objetivo, trazer segurança e tranquilidade em todo processo!",
  },
  {
    name: "Sabrina Barbosa",
    reviewerTag: "3 avaliações no Google · 1 ano atrás",
    badge: "Excelência & Advocacia de Confiança",
    rating: 5,
    content:
      "Contratei os serviços da Dr. Carolina e fui surpreendida pela sua excelência. Sua abordagem personalizada, conhecimento jurídico e comunicação clara me garantiram tranquilidade durante todo o processo. Altamente recomendada para quem busca uma advocacia de confiança!",
    reply: "Muito obrigada Sabrina! Um prazer poder representar os seus interesses juridicamente.",
  },
  {
    name: "Matias Fonseca",
    reviewerTag: "Local Guide · 14 avaliações · 27 fotos no Google · 1 ano atrás",
    badge: "100% Transparência nos Trâmites Jurídicos",
    rating: 5,
    content:
      "Excelente profissional. Respeitosa com os clientes, muito atenciosa e sempre mantém informado dos trâmites jurídicos.",
    reply: "Muito obrigada! Meu compromisso com os meus clientes é 100% transparência em todas as etapas.",
  },
  {
    name: "Oscarina Aparecida",
    reviewerTag: "4 avaliações no Google · 1 ano atrás",
    badge: "Informa o Passo a Passo do Processo",
    rating: 5,
    content:
      "Eu gostei muito do trabalho dela sempre ela me informar como está o processo judicial e o passo a passo é uma ótima advogada",
    reply: "Muito obrigada Oscarina, estou sempre a disposição! Cada caso é único.",
  },
  {
    name: "Michele Michele",
    reviewerTag: "1 avaliação no Google · 1 ano atrás",
    badge: "Ética, Precisa, Competente e Humana",
    rating: 5,
    content:
      "Excelente profissional!!! Ética, precisa, competente e humana!",
    reply: "Muito obrigada, meu maior objetivo será sempre a tratativa humanizada para com meus clientes!",
  },
  {
    name: "Thais Aparecida",
    reviewerTag: "2 avaliações no Google · 1 ano atrás",
    badge: "Muita Competência & Dedicação",
    rating: 5,
    content:
      "Pessoa maravilhosa de muita competência e uma excelente advogada.",
  },
  {
    name: "Gisele Souza",
    reviewerTag: "2 avaliações no Google · 1 ano atrás",
    badge: "Clara e Objetiva a Solucionar Dúvidas",
    rating: 5,
    content:
      "Atenciosa, competente, clara e objetiva a solucionar dúvidas.",
  },
  {
    name: "Maria Cecília",
    reviewerTag: "3 avaliações no Google · 1 ano atrás",
    badge: "Atenciosa & Muito Competente",
    rating: 5,
    content:
      "Profissional muito competente e atenciosa com os seus clientes.",
    reply: "Muito obrigada! Estou sempre a disposição",
  },
  {
    name: "Valeria Isabel Pena Sepini",
    reviewerTag: "1 avaliação no Google · 5 meses atrás",
    badge: "Ótima Advogada & Excelente Profissional",
    rating: 5,
    content:
      "Ótima advogada,excelente profissional.",
  },
];

const faqs = [
  {
    q: "Como é calculado o valor da pensão alimentícia? Existe porcentagem fixa na lei?",
    a: "Não existe uma porcentagem fixa obrigatória de 30% como muitos acreditam. A legislação brasileira determina que o valor seja fixado com base no binômio necessidade do alimentado (gastos reais com escola, moradia, alimentação, vestuário, saúde e lazer) e possibilidade econômica do alimentante (seus rendimentos reais). Também é apurada a capacidade financeira de ambos os genitores para garantir uma divisão equilibrada.",
  },
  {
    q: "Quanto tempo demora um divórcio? É possível fazer direto em cartório?",
    a: "Quando o casal está em consenso sobre a separação e a partilha, e não há filhos menores ou incapazes (ou havendo, as questões de guarda e alimentos já estiverem judicializadas), o divórcio pode ser realizado diretamente em Cartório de Notas por escritura pública em poucos dias. Quando há litígio ou bens complexos, o divórcio corre na via judicial, com pedidos imediatos de decretação liminar da separação.",
  },
  {
    q: "O que é guarda compartilhada e como fica o regime de visitas?",
    a: "A guarda compartilhada é a regra no Direito de Família brasileiro e significa que ambos os pais tomam juntos as decisões importantes sobre a vida dos filhos (escola, saúde, viagens e religião). Isso não significa divisão matemática de metade dos dias para cada um: a criança mantém uma residência de referência e um plano estruturado de convivência que assegure rotina saudável e afeto contínuo.",
  },
  {
    q: "Qual é o prazo para abrir o inventário e o que acontece se atrasar?",
    a: "O prazo legal estipulado pelo Código de Processo Civil é de até 60 dias a contar da data do falecimento. Caso o inventário seja aberto após esse prazo, o Estado aplica multa tributária sobre o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação). Por isso, quanto mais ágil for a consulta jurídica, menor o custo tributário para a família.",
  },
  {
    q: "Moro em outra cidade ou fora de Minas Gerais. Posso ser atendido online?",
    a: "Sim, com total segurança e praticidade. Hoje a grande maioria dos processos de família e inventários tramita por meio digital (Processo Judicial Eletrônico - PJe). A Dra. Carolina atende clientes em todo o Brasil e no exterior por videoconferência e WhatsApp, com assinatura digital de procurações e sigilo absoluto.",
  },
  {
    q: "Como funciona a primeira conversa e o contato pelo WhatsApp?",
    a: "O primeiro contato é feito de forma simples e direta pelo WhatsApp oficial do escritório. A Dra. Carolina e sua equipe ouvem a sua situação com atenção e sigilo, esclarecem as principais dúvidas iniciais e informam a documentação necessária para o plano de ação jurídica mais vantajoso.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  theme = "dark",
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  return (
    <div>
      <p className={isLight ? "eyebrow-dark" : "eyebrow-light"}>{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] sm:text-4xl lg:text-[3.15rem] ${
          isLight ? "text-[#1e0a12]" : "text-[#fbfaf5]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            isLight ? "text-[#624738]" : "text-[#e3d3be]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArea(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#0f0508] text-[#fbfaf5] selection:bg-[#dca94e] selection:text-[#0f0508]">
        {/* Navigation Bar - Refined Metallic Imperial Gold & Velvet Bordeaux Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#dca94e]/25 bg-[#0f0508]/95 backdrop-blur-xl shadow-card">
          <div className="mx-auto flex h-[82px] sm:h-[88px] lg:h-[94px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Logo on Left */}
            <a
              href="#inicio"
              aria-label="Carolina Vasconcelos — Advocacia - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95"
            >
              <div className="relative size-10 sm:size-12 shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma CV Carolina Vasconcelos"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm sm:text-base font-bold tracking-[0.14em] text-[#fbfaf5] leading-tight">
                  CAROLINA VASCONCELOS
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] text-[#fdd984] uppercase">
                  ADVOCACIA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-3.5 xl:gap-6 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
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

            {/* Right Action: Primary Glowing WhatsApp Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Carolina Vasconcelos! Gostaria de agendar um atendimento de Direito de Família."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm text-[11px] px-4 py-2.5 xl:px-5 xl:py-3 whitespace-nowrap"
              >
                <WhatsAppIcon size={15} className="text-[#0f0508]" /> Falar no WhatsApp <ArrowUpRight size={13} className="text-[#0f0508]" />
              </GlowingButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 sm:size-11 place-items-center rounded-lg border border-[#dca94e]/40 bg-[#17090d] text-[#fbfaf5] lg:hidden shadow-xs ml-auto cursor-pointer"
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
                className="overflow-hidden border-t border-[#dca94e]/25 bg-[#17090d] px-6 text-[#fbfaf5] lg:hidden"
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
                      className="py-3 text-sm font-medium text-[#e3d3be] hover:text-[#fdd984]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#fbefb4]/90 bg-gradient-to-r from-[#c8953c] via-[#fdd984] to-[#a67528] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0f0508] shadow-[0_4px_16px_rgba(220,169,78,0.45),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Carolina! Gostaria de conversar com você sobre uma questão de família."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} className="text-[#0f0508]" /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dca94e]/40 bg-[#240e15] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#fbfaf5] transition-all hover:border-[#fdd984]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (21 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Imperial Gold Aura & Velvet Royal Burgundy */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#dca94e]/25 bg-gradient-to-b from-[#0f0508] via-[#17090d] to-[#0f0508]"
        >
          {/* Subtle gold and wine ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[38rem] rounded-full bg-[#dca94e]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[30rem] rounded-full bg-[#a4332b]/14 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.14fr_0.86fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#dca94e]/50 bg-[#240e15]/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fdd984] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dca94e] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#fbefb4]"></span>
                </span>
                <span>DRA. CAROLINA VASCONCELOS · DIREITO DAS FAMÍLIAS & SUCESSÕES</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#fbfaf5] sm:text-[2.65rem] sm:leading-[1.12] lg:text-[3.35rem] xl:text-[3.55rem]"
              >
                Protegendo o que mais importa:{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbefb4] via-[#fdd984] to-[#dca94e]">
                  sua família, seus filhos e o seu patrimônio.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#e3d3be] sm:text-base sm:leading-8"
              >
                Sob a condução da <strong className="font-semibold text-white">Dra. Carolina Vasconcelos</strong>, nosso escritório é referência em atuação humanizada, estratégica e combativa em <strong className="font-semibold text-white">Divórcio, Pensão Alimentícia, Guarda de Filhos, Inventário e Partilha de Bens</strong>. Mais de 300 processos em 2 anos com nota máxima 5,0 ★ unânime no Google em Paraguaçu, Sul de Minas e em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carolina Vasconcelos! Gostaria de conversar para analisar uma questão de Direito de Família."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0f0508]" /> Falar no WhatsApp com a Dra. Carolina
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#dca94e]/45 bg-[#17090d]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#fbfaf5] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#fbefb4] hover:bg-[#240e15] hover:text-white"
                >
                  Conhecer Especialidades{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#fdd984]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#dca94e]/25 pt-5 text-xs text-[#b8a594]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf5] transition-colors hover:text-[#fdd984]"
                >
                  <Star size={14} className="fill-[#dca94e] text-[#dca94e]" /> 5,0 ★ no Google (21 avaliações 100% 5 estrelas)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf5]">
                  <Clock size={14} className="text-[#dca94e]" /> Atendimento Segunda a Sexta a partir das 08h
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#fbfaf5]">
                  <MapPin size={14} className="text-[#dca94e]" /> Sede em Paraguaçu · MG & Atuação Nacional
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Carolina Vasconcelos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[480px] xl:max-w-[500px] lg:ml-auto lg:mr-0"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#dca94e]/50 bg-[#17090d] shadow-2xl ring-1 ring-[#fdd984]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Carolina Vasconcelos — Advogada de Família e Sucessões"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0f0508] via-[#0f0508]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Carolina Vasconcelos
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#fdd984]">
                      Direito das Famílias & Sucessões
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      PENSÃO · GUARDA · DIVÓRCIO · INVENTÁRIO
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#dca94e]/60 bg-[#0f0508]/85 text-[#fdd984] backdrop-blur-sm shadow-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#dca94e]/50 bg-[#0f0508]/90 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#fdd984] shadow-md backdrop-blur-md sm:-left-4">
                PARAGUAÇU · MG & ATUAÇÃO DIGITAL
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#dca94e]/60 bg-[#17090d]/95 p-3 shadow-xl backdrop-blur-md transition-all hover:border-[#fdd984] hover:bg-[#240e15] sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#dca94e]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={12} className="fill-[#dca94e] text-[#dca94e]" />
                      ))}
                    </div>
                    <span className="font-serif text-sm font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#fdd984]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#e3d3be]">
                  21 Avaliações no Google (100% 5 Estrelas)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#dca94e]/25 bg-[#17090d]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima unânime em 21 avaliações comprovando atendimento impecável e humanizado",
              ],
              [
                "+300 Processos",
                "em dois anos dedicados exclusivamente ao Direito das Famílias e Sucessões",
              ],
              [
                "6.000+ Seguidores",
                "acompanhando orientações jurídicas diárias no Instagram @carolinav.advogada",
              ],
              [
                "Atendimento Próximo",
                "escuta atenta, sem julgamentos e aviso rápido a cada movimentação processual",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#dca94e]/25"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#fdd984] sm:text-2xl whitespace-nowrap">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#e3d3be]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Carolina Vasconcelos - Dobra Clara (Alabastro, Marfim & Toques Rubi) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#dca94e]/30 bg-[#fbf8f5] py-20 text-[#1e0a12] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Carolina Vasconcelos Portrait Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#dca94e]/45 bg-white shadow-2xl ring-1 ring-[#dca94e]/20">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Carolina Vasconcelos — Especialista em Direito das Famílias e Sucessões"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#1e0a12]/80 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#dca94e]/40 bg-white/95 backdrop-blur-md px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#911e24]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#911e24]">
                    Advocacia Familiarista Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#1e0a12]">
                  Carolina Vasconcelos — Advocacia
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#911e24]">
                  Pensão · Guarda · Divórcio · Inventário
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#7d6b5e]">
                  Av. Gonçalves Leite, 156 - Centro · Paraguaçu - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#dca94e]/45 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#dca94e]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#911e24] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#911e24]" />
                <span>SOBRE A ADVOGADA & MISSÃO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#1e0a12] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia construída sobre empatia verdadeira, rigor técnico e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#911e24] via-[#c8953c] to-[#671b25]">
                  proteção incondicional da sua família.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#624738]"
              >
                O Direito de Família e Sucessões não lida com papéis frios: <strong className="font-bold text-[#1e0a12]">ele lida com a vida de mães, pais, filhos e o patrimônio construído com anos de esforço</strong>. Cada divórcio, disputa de guarda ou inventário traz incertezas e angústias que demandam acolhimento humano e segurança jurídica inabalável.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#624738]"
              >
                A <strong className="font-bold text-[#1e0a12]">Dra. Carolina Vasconcelos</strong> consolidou sua carreira através de uma postura diferenciada: aliar profundo domínio da legislação e jurisprudência dos tribunais a uma escuta atenta, acessível e sem julgamentos. Com mais de 300 processos em 2 anos e 100% de avaliações 5 estrelas no Google, seu compromisso é trazer clareza em cada passo e defender os seus interesses com vigor inabalável.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#dca94e]/35 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2c151c]">
                  &ldquo;Doutora Carolina é uma advogada humanizada meu processo foi acolhido por ela e em todo tempo me deu suporte, sempre me orientando e acompanhando a todo momento o movimento dele. Indicação minha é de olhos fechados!&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#911e24]">
                  — Ingrid Miranda Moura · Avaliação real no Google Meu Negócio (5,0 ★)
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#dca94e]/30 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#1e0a12]">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-[#7d6b5e]">
                    21 avaliações 100% 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-[#dca94e]/30 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#1e0a12]">+300 Processos</p>
                  <p className="mt-0.5 text-[11px] text-[#7d6b5e]">
                    Especialização em Família e Sucessões
                  </p>
                </div>
                <div className="rounded-lg border border-[#dca94e]/30 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#1e0a12]">Transparência Total</p>
                  <p className="mt-0.5 text-[11px] text-[#7d6b5e]">
                    Você sabe tudo em primeira mão
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#1e0a12] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                  <span>Sede física em Paraguaçu e atendimento em todo o Sul de Minas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                  <span>Especialista em Divórcio, Pensão, Guarda e Inventário</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                  <span>Contato direto pelo WhatsApp com a Dra. Carolina</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                  <span>Atendimento online seguro para clientes de todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carolina! Gostaria de agendar um atendimento para conversar sobre a minha família."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0f0508]" /> Falar com a Dra. Carolina Vasconcelos
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#624738] transition-colors hover:text-[#911e24]"
                >
                  <Phone size={15} /> {PHONE_DISPLAY}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pilares de Atuação / Especialidades */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-t border-[#dca94e]/25 bg-[#17090d] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO EM DIREITO DE FAMÍLIA E SUCESSÕES"
                description="Soluções jurídicas preventivas e contenciosas conduzidas com sensibilidade, agilidade e extremo rigor técnico para resguardar a sua tranquilidade."
              >
                Especialidades dedicadas a proteger você e seus filhos em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbefb4] via-[#fdd984] to-[#dca94e]">
                  Paraguaçu, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#b8a594]">
                Clique em qualquer especialidade abaixo para conferir os procedimentos detalhados e solicitar orientação direta via WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#dca94e]/30 bg-[#1c0b11] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#fdd984] hover:shadow-gold sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#dca94e]/40 bg-[#0f0508] text-[#fdd984] shadow-xs transition-colors group-hover:bg-[#dca94e] group-hover:text-[#0f0508] group-hover:border-[#fbefb4]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#dca94e]/40 group-hover:text-[#fdd984]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#dca94e]/30 bg-[#0f0508] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#fdd984] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white group-hover:text-[#fdd984] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#e3d3be]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#fdd984] hover:text-white cursor-pointer"
                    >
                      Ver detalhes e procedimentos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Por Que Escolher a Dra. Carolina Vasconcelos - Dobra Clara */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#dca94e]/30 bg-[#f5ebd4]/35 py-20 text-[#1e0a12] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="ACOLHIMENTO HUMANO, COMBATE TÉCNICO & AGILIDADE"
                description="Quando o futuro dos seus filhos e a sua tranquilidade estão em jogo, você merece uma advogada humanizada, acessível e que realmente resolve."
              >
                Por que confiar seus direitos à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#911e24] via-[#c8953c] to-[#671b25]">
                  Dra. Carolina Vasconcelos?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Carolina! Gostaria de conversar para entender os passos do meu processo de família."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#0f0508]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Comunicação Clara e Acolhimento */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dca94e]/30 bg-white p-7 shadow-[0_8px_30px_rgba(26,20,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8953c] hover:shadow-[0_12px_36px_rgba(220,169,78,0.2)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dca94e]/40 bg-[#fbf8f5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#911e24]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Próximo
                    </span>
                    <span className="text-xs font-semibold text-[#911e24]">
                      Sempre ao Seu Lado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e0a12] sm:text-[1.75rem]">
                    Comunicação Transparente, Sem Juridiquês e Respostas Rápidas
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#624738]">
                    Como comprovam as avaliações no Google com nota máxima 5,0 ★, o grande diferencial da Dra. Carolina é aliar alto rigor técnico a um atendimento empático. Ela esclarece cada etapa com paciência e clareza, avisando imediatamente a cada andamento processual.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2c151c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                      <span>Contato direto pelo WhatsApp para sanar dúvidas sempre que você precisar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                      <span>Retorno imediato: você é mantido ciente de todos os trâmites do processo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                      <span>Acolhimento sincero e seguro em momentos delicados de separação ou luto</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dca94e]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Carolina! Gostaria de tirar dúvidas com você sobre o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dca94e]/40 bg-[#fbf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e0a12] transition-all hover:border-[#911e24] hover:bg-[#dca94e] hover:text-[#0f0508]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Carolina
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Firmeza Técnica e Especialização */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-[#dca94e]/30 bg-white p-7 shadow-[0_8px_30px_rgba(26,20,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c8953c] hover:shadow-[0_12px_36px_rgba(220,169,78,0.2)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#dca94e]/40 bg-[#fbf8f5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#911e24]">
                      <Award size={14} /> Solidez & Domínio Processual
                    </span>
                    <span className="text-xs font-semibold text-[#911e24]">
                      +300 Processos Conduzidos
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e0a12] sm:text-[1.75rem]">
                    Especialização em Famílias, Pensão, Guarda & Sucessões
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#624738]">
                    Demandas familiares exigem estratégias processuais refinadas: investigação de ocultação de bens, pedidos cautelares de urgência e defesa dos direitos dos filhos. A Dra. Carolina constrói teses contundentes para garantir acordos justos ou vitórias expressivas em Juízo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2c151c]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                      <span>Estratégia pericial para comprovação de rendimentos reais e patrimônio oculto</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                      <span>Atuação rápida para obtenção de alimentos provisionais e medidas de urgência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#911e24]" />
                      <span>Experiência comprovada com mais de 300 processos em apenas dois anos</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#dca94e]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Carolina! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#dca94e]/40 bg-[#fbf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e0a12] transition-all hover:border-[#911e24] hover:bg-[#dca94e] hover:text-[#0f0508]"
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

        {/* Método de Trabalho em 3 Passos */}
        <section className="relative overflow-hidden border-t border-[#dca94e]/25 bg-[#17090d] py-20 text-[#fbfaf5] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#dca94e]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#a4332b]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="COMO CUIDAMOS DO SEU CASO"
                description="Um método transparente, acolhedor e centrado em resultados práticos para garantir sua tranquilidade, seu patrimônio e a proteção dos seus filhos."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbefb4] via-[#fdd984] to-[#dca94e]">
                  resolver sua questão familiar com dignidade e segurança.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#dca94e]/35 bg-[#1c0b11] p-6 font-serif text-base italic leading-7 text-[#fbfaf5] shadow-card">
                &ldquo;Cada caso de família é único. Nosso compromisso é trazer 100% de transparência em todas as etapas, garantindo que você se sinta seguro e respaldado do início até a conclusão final.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#fdd984]">
                  — Dra. Carolina Vasconcelos · Advogada Familiarista
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#dca94e]/25"
            >
              {[
                [
                  "01",
                  "Escuta Humanizada & Diagnóstico Jurídico",
                  "Conversa reservada pelo WhatsApp ou em nosso escritório para entender os fatos com respeito e sigilo. Análise da documentação, bens, despesas e necessidades da família.",
                ],
                [
                  "02",
                  "Estratégia Sob Medida & Ação Rápida",
                  "Apresentação das alternativas mais seguras e econômicas (acordo extrajudicial em cartório ou ação judicial firme) com protocolo célere de pedidos urgentes de alimentos e medidas protetivas.",
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
                  <span className="font-serif text-2xl font-semibold text-[#fdd984]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#e3d3be]">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações / Depoimentos Reais no Google Meu Negócio - Dobra Clara (Alabastro & Marfim) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-t border-[#dca94e]/30 bg-[#fbf8f5] py-20 text-[#1e0a12] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos autênticos e públicos de clientes sobre a competência, a transparência e o acolhimento da Dra. Carolina Vasconcelos em Paraguaçu e região."
              >
                Avaliada com 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#911e24] via-[#c8953c] to-[#671b25]">
                  21 avaliações no Google pela dedicação e atendimento humanizado.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#dca94e]/35 bg-white p-5 shadow-[0_8px_30px_rgba(26,20,18,0.08)] sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#dca94e]/30 bg-[#fbf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1e0a12]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#dca94e]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#dca94e] text-[#dca94e]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#624738]">
                    Carolina Vasconcelos — Advocacia
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#911e24] transition-colors hover:text-[#1e0a12]"
                  >
                    21 avaliações no Google (100% 5 Estrelas) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#dca94e]/30 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c8953c] hover:shadow-[0_12px_36px_rgba(220,169,78,0.22)] shadow-[0_4px_20px_rgba(26,20,18,0.05)] sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#dca94e]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#dca94e] text-[#dca94e]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#dca94e]/35 bg-[#fbf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#911e24] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#2c151c]">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-4 rounded-lg border-l-2 border-[#911e24] bg-[#fbf8f5] p-3 text-[12px] text-[#624738]">
                        <p className="font-semibold text-[#911e24]">Resposta da Dra. Carolina:</p>
                        <p className="mt-0.5 italic">{review.reply}</p>
                      </div>
                    )}
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#dca94e]/25 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#dca94e]/40 bg-[#fbf8f5] font-serif text-sm font-semibold text-[#911e24] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#1e0a12]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#7d6b5e]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#dca94e]/25 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada Familiarista em Paraguaçu - MG",
                  "Direito de Família & Sucessões",
                  "Especialista em Divórcio & Partilha",
                  "Pensão Alimentícia & Execução de Atrasados",
                  "Guarda dos Filhos & Convivência",
                  "Nota 5,0 ★ no Google (21 avaliações)",
                  "Atendimento Humanizado & Sigiloso",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#dca94e]/30 bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#1e0a12] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#911e24]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#911e24] transition-colors hover:text-[#1e0a12]"
              >
                Ver Todas as Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ - Perguntas Frequentes */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-[#dca94e]/25 bg-[#17090d] py-20 text-[#fbfaf5] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="eyebrow-light justify-center">TIRE SUAS DÚVIDAS</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#fbfaf5] sm:text-4xl lg:text-[3.15rem]">
                Perguntas Frequentes sobre{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbefb4] via-[#fdd984] to-[#dca94e]">
                  Direito de Família e Sucessões
                </span>
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#e3d3be]">
                Respostas diretas e esclarecedoras para as principais dúvidas de quem busca orientação jurídica.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-[#dca94e]/30 bg-[#1c0b11] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-6 text-left font-serif text-lg font-semibold text-white transition-colors hover:text-[#fdd984]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#dca94e] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#dca94e]/20 px-6 pb-6 pt-4 text-sm leading-7 text-[#e3d3be]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-[#b8a594]">
                Tem uma dúvida específica sobre a sua situação?
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carolina! Gostaria de tirar uma dúvida sobre a minha situação de família."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                >
                  <WhatsAppIcon size={16} className="text-[#0f0508]" /> Enviar Mensagem no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* Contato & Sede */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#dca94e]/25 bg-[#0f0508] py-20 text-[#fbfaf5] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & AGENDAMENTO"
                description="Fale diretamente com a Dra. Carolina Vasconcelos pelo WhatsApp para orientação imediata com sigilo absoluto e acolhimento humano."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#fbefb4] via-[#fdd984] to-[#dca94e]">
                  acolher sua história e defender a sua família.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carolina Vasconcelos! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#0f0508]" /> Falar no WhatsApp com a Dra. Carolina
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#e3d3be]">
                  WhatsApp e telefone direto:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#e3d3be]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dca94e]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#fdd984] font-bold">
                      Segunda a Sexta · Abre às 08:00
                    </p>
                    <p className="text-[11px] text-[#b8a594]">
                      Atendimento com horário agendado para dedicação exclusiva ao seu caso
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#dca94e]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#fdd984]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#dca94e]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#fdd984] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial com 6.000+ seguidores)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#dca94e]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#fdd984] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#dca94e]"
                  />
                  <div>
                    <span className="text-white font-medium">{ADDRESS_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-[#b8a594]">
                      Sede no Centro de Paraguaçu - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#dca94e]/35 bg-[#1c0b11] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#911e24] via-[#dca94e] to-[#fdd984]" />

              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma CV Carolina Vasconcelos"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#fdd984]">
                    CAROLINA VASCONCELOS
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                    ADVOCACIA
                  </p>
                </div>
              </div>

              {/* Photo Presentation */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#dca94e]/30 bg-[#0f0508] shadow-xs">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Carolina Vasconcelos em seu escritório"
                  fill
                  unoptimized
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Acolhedor, Discreto e Resolutivo</p>
                  <p className="text-[10px] text-stone-300">Paraguaçu · Sul de Minas & Brasil</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#e3d3be]">
                <strong className="font-semibold text-white">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} · {LAWYER_TITLE}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#dca94e]/25 bg-[#0f0508] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#fdd984]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#e3d3be]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#fdd984]">
                    Abre às 08:00
                  </span>
                  <span>Sábados e Domingos</span>
                  <span className="text-right font-medium text-[#b8a594]">
                    Plantão via WhatsApp
                  </span>
                  <span>Sede Física</span>
                  <span className="text-right text-white">Paraguaçu · MG</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#fdd984]">5,0 ★ (21 avaliações)</span>
                  <span>Especialidade</span>
                  <span className="text-right text-white">Família & Sucessões</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#dca94e]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#b8a594]">
                  Atendimento sob estrito sigilo profissional e conformidade com o Código de Ética da OAB
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carolina Vasconcelos! Gostaria de agendar um atendimento."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dca94e]/50 bg-[#240e15] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#fdd984] hover:bg-[#dca94e] hover:text-[#0f0508]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#dca94e]/25 bg-gradient-to-r from-[#0f0508] via-[#1c0b11] to-[#0f0508] px-5 py-14 text-[#fbfaf5] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdd984]">
                <Sparkles size={13} /> CAROLINA VASCONCELOS — ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Precisa de segurança jurídica para proteger sua família, seus filhos ou seus bens?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Carolina! Preciso de orientação jurídica sobre a minha família."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#fbefb4]/90 bg-gradient-to-r from-[#c8953c] via-[#fdd984] to-[#a67528] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#0f0508] shadow-[0_8px_24px_-4px_rgba(220,169,78,0.5),inset_0_1px_1.5px_rgba(255,255,255,0.9)] transition-all hover:-translate-y-0.5 hover:from-[#dca94e] hover:via-[#fbfaf3] hover:to-[#c8953c] hover:shadow-[0_12px_32px_rgba(220,169,78,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#0f0508]" /> Iniciar Atendimento Agora{" "}
              <ArrowUpRight size={15} className="text-[#0f0508]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Noir */}
        <footer className="border-t border-[#dca94e]/25 bg-[#0f0508] px-5 py-14 text-[#fbfaf5] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Carolina Vasconcelos — Advocacia"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative size-14 shrink-0">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma CV Carolina Vasconcelos"
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold tracking-wider text-[#fbfaf5] leading-tight">
                      CAROLINA VASCONCELOS
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.22em] text-[#fdd984] uppercase">
                      ADVOCACIA
                    </span>
                  </div>
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#b8a594]">
                ⚖️ PENSÃO | GUARDA | DIVÓRCIO | INVENTÁRIO. Advocacia especializada em Direito das Famílias e Sucessões com acolhimento humano, seriedade e compromisso inegociável com a sua tranquilidade em Paraguaçu e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#fdd984]">
                {LAWYER_NAME} — {LAWYER_TITLE}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdd984]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#e3d3be]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Especialidades
                </a>
                <a className="footer-link" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (5,0 ★)
                </a>
                <a className="footer-link" href="#faq">
                  Dúvidas Frequentes
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdd984]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#e3d3be]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Carolina! Gostaria de falar com seu escritório."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 font-medium text-white"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Phone size={15} className="shrink-0" /> Telefone: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> Instagram: {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <div className="footer-link inline-flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{ADDRESS_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#fdd984] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#dca94e]" /> Segunda a Sexta a partir das 08:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#dca94e]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} CAROLINA VASCONCELOS ADVOCACIA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo de caráter exclusivamente informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button - Luxury Concierge Jewel */}
        <aside
          aria-label="Acesso rápido WhatsApp"
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Carolina! Gostaria de um atendimento sobre Direito de Família pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Carolina Vasconcelos"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#dca94e]/80 bg-gradient-to-b from-[#240e15] via-[#1c0b11] to-[#0f0508] text-[#fdd984] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(220,169,78,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#fbefb4] hover:shadow-[0_10px_35px_rgba(220,169,78,0.6)] focus:outline-none focus:ring-4 focus:ring-[#dca94e]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dca94e] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#0f0508] bg-[#fbefb4]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#fbefb4] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#dca94e]/60 bg-[#0f0508]/95 px-3.5 py-1.5 text-xs font-semibold text-[#fbfaf5] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#fdd984]">WhatsApp Direto</span> · Dra. Carolina Vasconcelos
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Especialidade */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#dca94e]/40 bg-[#17090d] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#fbfaf5]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#dca94e]/30 bg-[#240e15] text-[#fbfaf5] transition-colors hover:border-[#fdd984] hover:text-[#fbefb4] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-[#dca94e]/40 bg-[#0f0508] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma CV Carolina Vasconcelos"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">CAROLINA VASCONCELOS ADVOCACIA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#fdd984] uppercase">
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

                <p className="mt-5 text-sm leading-7 text-[#e3d3be]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#dca94e]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#fdd984]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#e3d3be]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#dca94e]" />
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
                    <WhatsAppIcon size={16} className="text-[#0f0508]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#b8a594] transition-colors hover:text-white cursor-pointer"
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
