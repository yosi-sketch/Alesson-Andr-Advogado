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
  Briefcase,
  ShieldAlert,
  Brain,
  Activity,
  UserX,
  Hourglass,
  Flame,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531988281637";
const PHONE_DISPLAY = "(31) 98828-1637";
const EMAIL_CONTACT = "contato@ionebarcelos.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/ionebarcelos.adv";
const INSTAGRAM_HANDLE = "@ionebarcelos.adv";
const LAWYER_NAME = "Dra. Ione Barcelos";
const LAWYER_TITLE = "Advogada Trabalhista · Saúde Mental & Relações de Trabalho";
const FIRM_NAME = "Ione Barcelos — Advogada";

const REGION_TEXT = "Vale do Aço · Coronel Fabriciano, Ipatinga, Timóteo e região · MG";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Ione+Barcelos+%E2%80%94+Advogada%0AVale+do+A%C3%A7o+(regi%C3%A3o)+%C2%B7+MG";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/ione-barcelos-hero.jpg";
const FOTO_SOBRE_SRC = "/ione-barcelos.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Ione Barcelos! Gostaria de tirar dúvidas e agendar um atendimento trabalhista.";
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
    id: "saude-mental-burnout",
    title: "Saúde Mental no Trabalho & Burnout",
    icon: Brain,
    tag: "Burnout · Depressão Ocupacional · Pânico · Ansiedade Extrema",
    summary:
      "Trabalhar faz parte da vida; adoecer por causa do trabalho não deveria fazer. Resguarde sua saúde mental e exija a reparação e a proteção que a legislação garante.",
    details:
      "A pressão desmedida, metas inalcançáveis, cobranças abusivas e jornadas extenuantes geram adoecimento psíquico grave como a Síndrome de Burnout, depressão e crises de ansiedade generalizada. A Dra. Ione Barcelos atua com profundo conhecimento técnico e sensibilidade para comprovar o nexo de causalidade com o ambiente laboral, assegurando indenizações por danos morais e materiais, afastamentos remunerados, estabilidade no emprego e rescisão indireta com recebimento integral de todos os direitos.",
    topics: [
      "Comprovação técnica do nexo de causalidade entre as condições de trabalho e o transtorno mental",
      "Ações indenizatórias por danos morais e ressarcimento integral de remédios e psicoterapia",
      "Emissão e acompanhamento de CAT (Comunicação de Acidente de Trabalho) por adoecimento psíquico",
      "Proteção legal contra demissões discriminatórias durante ou após o tratamento da saúde mental",
      "Ajuizamento de Rescisão Indireta (saída imediata da empresa recebendo todas as verbas)",
      "Atendimento sigiloso, acolhedor e com total respeito ao momento delicado do trabalhador",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Gostaria de conversar com você sobre adoecimento psíquico/Burnout relacionado ao trabalho.",
  },
  {
    id: "assedio-moral-perseguicao",
    title: "Assédio Moral & Perseguição Laboral",
    icon: ShieldAlert,
    tag: "Humilhações · Metas Abusivas · Isolamento · Constrangimento",
    summary:
      "Nenhum trabalhador deve ser submetido a humilhações, isolamento ou perseguição no expediente. Atuação jurídica contundente para restabelecer sua dignidade.",
    details:
      "O assédio moral se manifesta através de ofensas veladas ou explícitas, apelidos depreciativos, desqualificação pública perante colegas, esvaziamento arbitrário de funções e imposição de metas vexatórias. Conduzimos ações judiciais contundentes para cessar os abusos patronais, garantir indenizações proporcionais à gravidade dos fatos e possibilitar a saída digna da empresa com todos os direitos preservados.",
    topics: [
      "Orientação estratégica e segura para preservação de provas válidas (mensagens, áudios e e-mails)",
      "Ações de indenização por danos morais em virtude de tratamento degradante ou humilhações",
      "Rescisão indireta imediata para afastar o trabalhador do ambiente tóxico sem abrir mão de nada",
      "Blindagem do empregado contra represálias ou ameaças de demissão por justa causa infundada",
      "Representação fundamentada perante os órgãos de fiscalização do trabalho e Justiça Trabalhista",
      "Preservação integral da honra e da reputação profissional do empregado perante o mercado",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Estou sofrendo assédio moral ou cobranças abusivas no trabalho e preciso de orientação.",
  },
  {
    id: "acidentes-doencas-ocupacionais",
    title: "Acidentes de Trabalho & Doenças Físicas (LER/DORT)",
    icon: Activity,
    tag: "Lesões Físicas · LER/DORT · Coluna · Estabilidade Provisória de 12 Meses",
    summary:
      "Defesa integral do trabalhador que sofreu lesões físicas ou sequelas decorrentes de acidentes e condições inadequadas na indústria, comércio ou serviços.",
    details:
      "No Vale do Aço, polo industrial com forte atividade metalúrgica, siderúrgica e de suporte operacional, os riscos físicos são uma realidade frequente. A Dra. Ione Barcelos assessora trabalhadores vítimas de acidentes típicos, amputações, lesões na coluna, tendinites, bursites e perdas auditivas, buscando pensão vitalícia, estabilidade acidentária de no mínimo 12 meses, indenizações e cobertura previdenciária justa.",
    topics: [
      "Ações indenizatórias por danos materiais, danos morais e danos estéticos por acidentes laborais",
      "Pedido de pensão mensal vitalícia correspondente à redução da capacidade laboral do trabalhador",
      "Reconhecimento e garantia da estabilidade provisória de 12 meses no emprego após alta do INSS",
      "Cobrança de indenizações decorrentes de ausência de EPIs ou descumprimento de normas de segurança",
      "Acompanhamento especializado em perícias médicas judiciais de engenharia e medicina do trabalho",
      "Resguardo aos familiares e dependentes em casos de acidentes fatais com pedido de pensionamento",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Gostaria de consultoria jurídica sobre acidente de trabalho ou doença física ocupacional.",
  },
  {
    id: "rescisao-indireta-contrato",
    title: "Rescisão Indireta do Contrato de Trabalho",
    icon: UserX,
    tag: "Falta Grave da Empresa · FGTS Atrasado · Ambiente Tóxico · Saída Digna",
    summary:
      "Quando o empregador descumpre a lei, o trabalhador tem o direito de 'demitir a empresa' e receber todas as indenizações como se demitido sem justa causa.",
    details:
      "A rescisão indireta (Artigo 483 da CLT) é o instrumento legal que liberta o trabalhador de um contrato abusivo. Se a empresa não deposita o FGTS, atrasa salários reiteradamente, não cumpre obrigações contratuais, exige serviços superiores às suas forças ou impõe perigo manifesto de mal considerável, a Dra. Ione pleiteia a liberação imediata do vínculo com levantamento do FGTS + 40%, seguro-desemprego e todas as verbas rescisórias.",
    topics: [
      "Ajuizamento célere com pedido de afastamento imediato das atividades sem perda dos direitos",
      "Cobrança integral do saldo de salário, aviso prévio indenizado, férias vencidas/proporcionais e 13º",
      "Liberação imediata das guias para saque de todo o FGTS acumulado somado à multa de 40%",
      "Emissão de certidão para habilitação emergencial no benefício do Seguro-Desemprego",
      "Levantamento de extratos analíticos do FGTS e verificação minuciosa de anos sem depósitos",
      "Segurança jurídica plena para que não ocorra a falsa acusação de abandono de emprego",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Quero saber se o meu caso dá direito à rescisão indireta do contrato de trabalho.",
  },
  {
    id: "horas-extras-jornadas",
    title: "Horas Extras Não Pagas & Jornadas Exaustivas",
    icon: Hourglass,
    tag: "Horas Extras · Intervalo de Almoço Suprimido · Sobreaviso · Banco Ilegal",
    summary:
      "Seu tempo e sua dedicação têm valor. Apuração contábil rigorosa de jornadas suplementares, intervalos violados, escalas abusivas e reflexos salariais.",
    details:
      "Muitas empresas manipulam controles de ponto, instituem bancos de horas informais e exigem disponibilidade via WhatsApp e ligações fora do expediente sem pagar sobreaviso. Analisamos detalhadamente cartões de ponto, relatórios de login, mensagens e testemunhos para calcular centavo a centavo todas as horas extras devidas e seus reflexos no FGTS, repouso semanal remunerado, férias e 13º salário.",
    topics: [
      "Cálculo exato de horas extras excedentes à 8ª diária e à 44ª semanal com adicionais devidos",
      "Cobrança de horas decorrentes de supressão de intervalo intrajornada para descanso e almoço",
      "Reconhecimento do tempo à disposição do empregador e horas em regime de sobreaviso e prontidão",
      "Nulidade de acordos de compensação e bancos de horas fraudulentos ou irregulares",
      "Adicional noturno e hora noturna reduzida para trabalhadores em turnos ininterruptos",
      "Reflexos das horas habituais em aviso prévio, DSR, férias + 1/3, 13º salário e FGTS + 40%",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Gostaria de fazer o cálculo e cobrar horas extras que a empresa não pagou.",
  },
  {
    id: "insalubridade-periculosidade-desvio",
    title: "Adicionais de Insalubridade & Periculosidade",
    icon: Flame,
    tag: "Grau Máximo 40% · Periculosidade 30% · Químicos · Ruído · Desvio de Função",
    summary:
      "Compensação legal para quem expõe sua integridade física ou executa responsabilidades além daquelas contratadas. Defesa pericial técnica apurada.",
    details:
      "A exposição contínua a ruído excessivo, calor, agentes biológicos, poeiras minerais ou substâncias químicas dá direito ao adicional de insalubridade (10%, 20% ou 40%). Da mesma forma, o contato com energia elétrica, inflamáveis, explosivos ou segurança pessoal confere 30% de periculosidade. Exigimos o pagamento retroativo dos últimos 5 anos e as devidas retificações do PPP para fins de aposentadoria especial.",
    topics: [
      "Perícia técnica judicial para constatação in loco das condições nocivas e perigosas de trabalho",
      "Cobrança de adicional de insalubridade em grau máximo (40%), médio (20%) ou mínimo (10%)",
      "Adicional de periculosidade de 30% sobre o salário base para áreas de risco e eletricidade",
      "Pedido de diferenças salariais por desvio de função ou acúmulo desproporcional de atribuições",
      "Retificação judicial do Perfil Profissiográfico Previdenciário (PPP) e Laudo Técnico (LTCAT)",
      "Equiparação salarial com paradigmas que realizam trabalho de igual valor na mesma empresa",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Trabalho em ambiente insalubre/perigoso e quero verificar se tenho direito aos adicionais.",
  },
  {
    id: "reversao-justa-causa-verbas",
    title: "Reversão de Justa Causa Abusiva & Verbas Rescisórias",
    icon: Scale,
    tag: "Reversão Judicial · Justa Causa Injusta · Liberação FGTS + 40% · Multas",
    summary:
      "Não aceite punições desmedidas ou demissões arbitrárias. Reversão judicial da justa causa para reaver sua honra profissional e receber todas as indenizações.",
    details:
      "A demissão por justa causa é a penalidade máxima da CLT e exige prova cabal, imediatidade e proporcionalidade por parte da empresa. Quando aplicada indevidamente por retaliação ou sem comprovação, revertemos a demissão em Juízo, garantindo ao trabalhador a liberação do seguro-desemprego, levantamento do FGTS com multa rescisória e pagamento de todas as verbas rescisórias devidas.",
    topics: [
      "Análise urgente do termo de rescisão e verificação de inconsistências nos cálculos rescisórios",
      "Reversão judicial de justa causa aplicada arbitrariamente por falta grave inexistente",
      "Liberação de alvarás judiciais rápidos para saque do FGTS e habilitação ao seguro-desemprego",
      "Cobrança das multas dos Artigos 467 e 477 da CLT por atraso ou controvérsia no pagamento",
      "Danos morais pelo constrangimento ilegal decorrente de imputação falsa de falta grave",
      "Atuação conciliatória e combativa em audiências perante a Justiça do Trabalho de Minas Gerais",
    ],
    whatsAppText:
      "Olá, Dra. Ione Barcelos! Fui demitido por justa causa injustamente ou não recebi minhas verbas rescisórias.",
  },
];

const clientReviews = [
  {
    name: "Ariane Cristina Urils Oliveira Reis",
    reviewerTag: "2 avaliações no Google · 3 meses atrás",
    badge: "Acolhimento & Paciência Excepcional",
    rating: 5,
    content:
      "Sou grata a Deus por ter me dado a oportunidade de conhecer uma pessoa maravilhosa, uma profissional diferenciada!! Uma advogada dedicada, me explicou tudo sobre o processo do meu esposo, com paciência e muito profissionalismo; sempre se colocou à disposição p dúvidas e sempre nos deixou ciente de todo processo!! Hj, tenho orgulho de dizer q tbm é minha advogada!!! Uma profissional q super indico a todos! Q Deus continue abençoando muito!",
  },
  {
    name: "Sthefany Lima",
    reviewerTag: "14 avaliações no Google · 7 meses atrás",
    badge: "Empatia & Dedicação Incomparável",
    rating: 5,
    content:
      "Dra Ione Barcelos, advogada maravilhosa empática e dedicada no que faz. Abraçou minha causa e acreditou em mim em um momento de fragilidade onde muitos desacreditaram da minha causa. Sou grata por Deus ter colocado essa advogada em minha vida! Ela é uma pessoa confiável e atenciosa. Com toda certeza uma das melhores do Vale do aço 💘",
  },
  {
    name: "Wemerson Manoel",
    reviewerTag: "2 avaliações no Google · 7 meses atrás",
    badge: "Como Se o Processo Fosse Dela",
    rating: 5,
    content:
      "DR Ione é uma advogada incrível. Extremamente atenciosa e competente, responde mensagem sempre que a gente tem dúvidas, e na mesma hora que o processo movimenta ela já liga toda feliz para da a notícia como se o processo fosse dela. Recomendo totalmente a Dr Ione.",
  },
  {
    name: "itallo barcelos",
    reviewerTag: "1 avaliação no Google · 7 meses atrás",
    badge: "Melhor Advogada do Vale do Aço",
    rating: 5,
    content:
      "Nossa senhora topzera demais, melhor advogada do vale do aço, aliás, melhor advogada de Minas Gerais, profissionalismo nato, super simpática no atendimento, preço justo, só elogios, só gratidão. Se eu fizesse algo fora da lei, teria medo de andar nas ruas de Coronel Fabriciano e Ipatinga com essa advogada à solta. Se estiverem com qualquer problema na justiça, parabens, vc acaba de encontrar a solução. A justiça será feita!",
  },
  {
    name: "Robson Santos",
    reviewerTag: "4 avaliações no Google · 7 meses atrás",
    badge: "Transmite Confiança & Clareza",
    rating: 5,
    content:
      "Advogada muito profissional, atenciosa e clara nas orientações. Transmite confiança e demonstra grande conhecimento na área. Recomendo!",
  },
  {
    name: "Marcelo",
    reviewerTag: "1 avaliação no Google · 7 meses atrás",
    badge: "Transparência & Muita Segurança",
    rating: 5,
    content:
      "Excelente atendimento! A advogada foi extremamente atenciosa e transparente em todas as etapas do processo, explicando de forma clara cada passo e me passando muita segurança. Recomendo muito!",
  },
  {
    name: "Kathiane Andrade",
    reviewerTag: "2 avaliações no Google · 7 meses atrás",
    badge: "Domínio Total da Causa",
    rating: 5,
    content:
      "Excelente profissional... Demonstra total domínio da causa e uma segurança que nos deixa muito tranquilos durante todo o processo. Nota 10",
  },
  {
    name: "Anael Gomes",
    reviewerTag: "11 avaliações no Google · 7 meses atrás",
    badge: "Defesa dos Direitos do Trabalhador",
    rating: 5,
    content:
      "Atendimento nota 1000, Defendendo os direitos do trabalhador com seriedade, experiência e compromisso com a justiça. ⚖️",
  },
  {
    name: "David Celso",
    reviewerTag: "1 avaliação no Google · 7 meses atrás",
    badge: "Paciência para Tirar Dúvidas",
    rating: 5,
    content:
      "Ótima advogada e atende bem ajudar tirar dúvidas sobre o processo e te falar pra vc se alcamar",
  },
  {
    name: "João Vitor Moura",
    reviewerTag: "1 avaliação no Google · 4 meses atrás",
    badge: "Trabalho Rápido, Eficaz & Simpática",
    rating: 5,
    content:
      "Muito boa, fui atendido muito bem, equipe bem eficaz, trabalho rápido e eficiente. Doutora é muito simpática e educada, gostei bastei do processo",
  },
  {
    name: "MARCIA BARCELOS",
    reviewerTag: "1 avaliação no Google · 7 meses atrás",
    badge: "Competência & Empatia",
    rating: 5,
    content:
      "Advogada excepcional! Além de competente, é atenciosa e empática.",
  },
  {
    name: "Maria Luiza Luz",
    reviewerTag: "11 avaliações · 1 foto no Google · 4 meses atrás",
    badge: "Atuação Impecável",
    rating: 5,
    content:
      "IMPECÁVEL. Um atendimento que supera qualquer expectativa pela dedicação e pelo respeito com o cliente.",
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
          isLight ? "text-[#1e1815]" : "text-[#faf6f2]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 ${
            isLight ? "text-[#54463d]" : "text-[#d4c2b5]"
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
      <main className="overflow-hidden bg-[#0d0b0a] text-[#faf6f2] selection:bg-[#c5987f] selection:text-[#0d0b0a]">
        {/* Navigation Bar - Refined Metallic Rose Gold & Obsidian Luxury */}
        <header className="sticky top-0 z-40 border-b border-[#c5987f]/25 bg-[#0d0b0a]/95 backdrop-blur-xl shadow-card">
          <div className="mx-auto flex h-[86px] sm:h-[94px] lg:h-[100px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Left Group: Logo + Navigation Links */}
            <div className="flex items-center gap-5 xl:gap-8 min-w-0">
              <a
                href="#inicio"
                aria-label="Ione Barcelos — Advogada - Início"
                onClick={closeMenu}
                className="flex shrink-0 items-center transition-opacity hover:opacity-95"
              >
                <Image
                  src={LOGO_SRC}
                  alt="Ione Barcelos — Advogada"
                  width={220}
                  height={92}
                  priority
                  unoptimized
                  className="h-[46px] sm:h-[54px] lg:h-[58px] xl:h-[64px] w-auto object-contain"
                />
              </a>

              <nav
                aria-label="Navegação principal"
                className="hidden items-center gap-3 xl:gap-5 lg:flex whitespace-nowrap text-[11px] xl:text-xs"
              >
                <a className="nav-link" href="#inicio">
                  Início
                </a>
                <a className="nav-link" href="#sobre">
                  A Advogada
                </a>
                <a className="nav-link" href="#atuacao">
                  Atuação
                </a>
                <a className="nav-link" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="nav-link" href="#avaliacoes">
                  Avaliações
                </a>
                <a className="nav-link" href="#contato">
                  Contato
                </a>
              </nav>
            </div>

            {/* Right Group: Social icons + WhatsApp CTA */}
            <div className="hidden items-center gap-2 xl:gap-2.5 lg:flex shrink-0">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Avaliações da Dra. Ione Barcelos no Google"
                className="grid size-9 xl:size-10 place-items-center rounded-lg border border-[#c5987f]/30 bg-[#141110] text-[#d4c2b5] transition-all hover:border-[#e8c8b5] hover:bg-[#221c1a] hover:text-white shadow-xs"
                title="5,0 ★ no Google (22 avaliações)"
              >
                <GoogleIcon size={15} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Ione Barcelos"
                className="grid size-9 xl:size-10 place-items-center rounded-lg border border-[#c5987f]/30 bg-[#141110] text-[#d4c2b5] transition-all hover:border-[#e8c8b5] hover:bg-[#221c1a] hover:text-white shadow-xs"
                title={`Instagram ${INSTAGRAM_HANDLE}`}
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                aria-label="Ligar para a Dra. Ione Barcelos"
                className="hidden xl:grid size-10 place-items-center rounded-lg border border-[#c5987f]/30 bg-[#141110] text-[#d4c2b5] transition-all hover:border-[#e8c8b5] hover:bg-[#221c1a] hover:text-white shadow-xs"
                title={`Ligar: ${PHONE_DISPLAY}`}
              >
                <Phone size={15} />
              </a>

              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ione Barcelos! Gostaria de agendar um atendimento trabalhista com seu escritório."
                )}
                target="_blank"
                size="sm"
                variant="gold"
                className="rounded-lg shadow-sm text-[11px] px-4 py-2.5 xl:px-5 xl:py-3 whitespace-nowrap"
              >
                <WhatsAppIcon size={15} className="text-[#0d0b0a]" /> Falar no WhatsApp <ArrowUpRight size={13} className="text-[#0d0b0a]" />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-lg border border-[#c5987f]/40 bg-[#141110] text-[#faf6f2] lg:hidden shadow-xs ml-auto"
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
                className="overflow-hidden border-t border-[#c5987f]/25 bg-[#141110] px-6 text-[#faf6f2] lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Diferenciais", "#diferenciais"],
                    ["Avaliações (5,0 ★)", "#avaliacoes"],
                    ["Contato & Atendimento", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-[#d4c2b5] hover:text-[#e8c8b5]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#fcebdd]/85 bg-gradient-to-r from-[#a56f54] via-[#e8c8b5] to-[#a56f54] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#0d0b0a] shadow-[0_4px_16px_rgba(197,152,127,0.4),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all hover:brightness-105 active:translate-y-0"
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ione Barcelos! Gostaria de conversar com você sobre uma questão trabalhista."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} className="text-[#0d0b0a]" /> WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#c5987f]/40 bg-[#221c1a] px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#faf6f2] transition-all hover:border-[#e8c8b5]"
                      href={GOOGLE_SEARCH_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <GoogleIcon size={15} /> 5,0 ★ no Google (22 avaliações)
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section - Rose Gold Aura & Warm Obsidian Luxury */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-[#c5987f]/25 bg-gradient-to-b from-[#0d0b0a] via-[#141110] to-[#0d0b0a]"
        >
          {/* Subtle rose gold and copper ambient lighting aura */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-[#c5987f]/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-[#e8c8b5]/8 blur-3xl" />

          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[700px] lg:grid-cols-[1.14fr_0.86fr] lg:gap-12 lg:px-12 lg:py-18 xl:min-h-[740px] xl:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#c5987f]/50 bg-[#221c1a]/85 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8c8b5] shadow-xs backdrop-blur-md"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5987f] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#fcebdd]"></span>
                </span>
                <span>DRA. IONE BARCELOS · DIREITO TRABALHISTA · VALE DO AÇO - MG</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-[#faf6f2] sm:text-[2.6rem] sm:leading-[1.12] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Trabalhar faz parte da vida. Adoecer por causa do trabalho{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8c8b5] via-[#c5987f] to-[#fff5ea]">
                  não deveria fazer.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-[#d4c2b5] sm:text-base sm:leading-8"
              >
                Sob a liderança da <strong className="font-semibold text-white">Dra. Ione Barcelos</strong>, nosso escritório é referência em atuação combativa e acolhedora em <strong className="font-semibold text-white">Direito Trabalhista, Saúde Mental no Trabalho (Burnout, Depressão e Ansiedade), Doenças Ocupacionais, Acidentes de Trabalho, Rescisão Indireta e Verbas Rescisórias</strong>. Atendimento humanizado, transparente e dedicado com nota máxima 5,0 ★ no Google e presença em todo o Vale do Aço e Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ione Barcelos! Gostaria de conversar para analisar uma questão trabalhista."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0d0b0a]" /> Iniciar Atendimento no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[#c5987f]/45 bg-[#141110]/90 backdrop-blur-md px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#faf6f2] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-[#fcebdd] hover:bg-[#221c1a] hover:text-white"
                >
                  Conhecer Especialidades{" "}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 text-[#e8c8b5]"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#c5a882]/25 pt-5 text-xs text-[#a49184]"
              >
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#faf6f2] transition-colors hover:text-[#e8c8b5]"
                >
                  <Star size={14} className="fill-[#c5987f] text-[#c5987f]" /> 5,0 ★ no Google (22 avaliações 100% 5 estrelas)
                </a>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#faf6f2]">
                  <Clock size={14} className="text-[#c5987f]" /> Aberto · Fecha 22:00
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#faf6f2]">
                  <MapPin size={14} className="text-[#c5987f]" /> Vale do Aço · MG & Atuação em todo o Brasil
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Visual Presentation - Dra. Ione Barcelos */}
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
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#c5987f]/50 bg-[#141110] shadow-2xl ring-1 ring-[#e8c8b5]/35">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Ione Barcelos — Advogada Trabalhista no Vale do Aço"
                  fill
                  priority
                  loading="eager"
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d0b0a] via-[#0d0b0a]/85 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white">
                      Dra. Ione Barcelos
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[#e8c8b5]">
                      Advogada Trabalhista · Saúde Mental & Relações de Trabalho
                    </p>
                    <p className="mt-0.5 text-[11px] text-stone-300">
                      Vale do Aço (Coronel Fabriciano · Ipatinga · Timóteo) & MG
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#c5987f]/60 bg-[#0d0b0a]/85 text-[#e8c8b5] backdrop-blur-sm shadow-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -left-3 top-4 z-10 rounded-lg border border-[#c5987f]/50 bg-[#0d0b0a]/90 px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] text-[#e8c8b5] shadow-md backdrop-blur-md sm:-left-4">
                VALE DO AÇO · ADVOCACIA HUMANIZADA
              </div>

              {/* Floating Google 5.0 Star Rating */}
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group absolute -bottom-4 -right-2 z-10 rounded-xl border border-[#c5987f]/60 bg-[#141110]/95 p-3 shadow-xl backdrop-blur-md transition-all hover:border-[#e8c8b5] hover:bg-[#221c1a] sm:-right-4"
              >
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-[#c5987f]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={12} className="fill-[#c5987f] text-[#c5987f]" />
                      ))}
                    </div>
                    <span className="font-serif text-sm font-bold text-white">
                      5,0
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#e8c8b5]">
                      / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#d4c2b5]">
                  22 Avaliações no Google (100% 5 Estrelas)
                </p>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner - Authority Metrics */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-[#c5987f]/25 bg-[#141110]"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              [
                "5,0 ★ no Google",
                "nota máxima impecável com 22 avaliações comprovando acolhimento e dedicação",
              ],
              [
                "Saúde Mental & Trabalho",
                "especialização em Burnout, depressão ocupacional, assédio moral e perseguição",
              ],
              [
                "Atendimento Humanizado",
                "escuta paciente, acolhimento sincero e dedicação como se a causa fosse dela",
              ],
              [
                "Vale do Aço • MG • Brasil",
                "atuação presente em Coronel Fabriciano, Ipatinga, Timóteo e tribunais do país",
              ],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-[#c5987f]/25"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-xl font-semibold text-[#e8c8b5] sm:text-2xl">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-[#d4c2b5]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Ione Barcelos - Dobra Clara (Alabastro & Rosé Nobre) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-y border-[#c5987f]/30 bg-[#fbf8f5] py-20 text-[#1e1815] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Ione Barcelos Portrait Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[490px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden rounded-2xl border-2 border-[#c5987f]/45 bg-white shadow-2xl ring-1 ring-[#c5987f]/20">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Ione Barcelos — Advogada Trabalhista e Defensora da Saúde Mental"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#1e1815]/80 to-transparent" />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[340px] rounded-xl border border-[#c5987f]/40 bg-white/95 backdrop-blur-md px-5 py-4 shadow-xl sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-[#85523b]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#85523b]">
                    Advocacia Trabalhista Humanizada
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-[#1e1815]">
                  Ione Barcelos — Advogada
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#85523b]">
                  Saúde Mental & Relações de Trabalho
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#78665a]">
                  Vale do Aço (Coronel Fabriciano · Ipatinga · Timóteo) · MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#c5987f]/45 sm:-left-7 sm:-top-7 sm:size-32" />
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
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#c5987f]/40 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#85523b] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#85523b]" />
                <span>SOBRE A ADVOGADA & MISSÃO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#1e1815] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia trabalhista construída sobre empatia profunda, rigor técnico e{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#85523b] via-[#b88368] to-[#5e3522]">
                  compromisso com quem trabalha.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-[#54463d]"
              >
                Quem vive e trabalha no <strong className="font-bold text-[#1e1815]">Vale do Aço</strong> — seja nas indústrias siderúrgicas e metalúrgicas, no comércio, na área hospitalar ou na prestação de serviços — sabe a dedicação exigida no dia a dia. Porém, <strong className="font-bold text-[#1e1815]">trabalhar faz parte da vida; adoecer por causa do trabalho não deveria fazer</strong>.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-[#54463d]"
              >
                A <strong className="font-bold text-[#1e1815]">Dra. Ione Barcelos</strong> consolidou sua atuação na advocacia trabalhista por uma convicção inegociável: colocar a pessoa humana em primeiro lugar. Em momentos de extrema fragilidade — quando o empregado enfrenta <strong className="font-bold text-[#1e1815]">Burnout, depressão ocupacional, assédio moral, jornadas desumanas ou acidentes</strong> —, a Dra. Ione oferece não apenas rigor técnico e combate perante os tribunais, mas acolhimento genuíno e paciência para ouvir cada detalhe.
              </motion.p>

              {/* Client Quote Card from real Google Reviews */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-[#c5987f]/35 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-[#2a221d]">
                  &ldquo;Dra Ione Barcelos, advogada maravilhosa empática e dedicada no que faz. Abraçou minha causa e acreditou em mim em um momento de fragilidade onde muitos desacreditaram da minha causa. Sou grata por Deus ter colocado essa advogada em minha vida! Ela é uma pessoa confiável e atenciosa. Com toda certeza uma das melhores do Vale do aço 💘&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#85523b]">
                  — Sthefany Lima · Avaliação real verificada no Google Meu Negócio
                </p>
              </motion.div>

              {/* Personality & Profile Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-[#c5987f]/30 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#1e1815]">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-[#78665a]">
                    22 avaliações 100% 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-[#c5987f]/30 bg-white p-3 shadow-xs">
                  <p className="font-bold text-[#1e1815]">Acolhimento Real</p>
                  <p className="mt-0.5 text-[11px] text-[#78665a]">
                    Escuta atenta e sem julgamentos
                  </p>
                </div>
                <div className="rounded-lg border border-[#c5987f]/30 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-[#1e1815]">Clareza & Agilidade</p>
                  <p className="mt-0.5 text-[11px] text-[#78665a]">
                    Avisos rápidos a cada movimento
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-[#1e1815] sm:grid-cols-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                  <span>Atuação em Coronel Fabriciano, Ipatinga, Timóteo e Vale do Aço</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                  <span>Especialista em Burnout, Doenças Ocupacionais e Rescisão Indireta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                  <span>Contato direto pelo WhatsApp com a Dra. Ione Barcelos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                  <span>Atuação perante a Justiça do Trabalho de MG (TRT-3) e Tribunais</span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ione Barcelos! Gostaria de agendar um atendimento para conversar sobre a minha situação no trabalho."
                  )}
                  target="_blank"
                  size="md"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={16} className="text-[#0d0b0a]" /> Falar com a Dra. Ione Barcelos
                </GlowingButton>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#54463d] transition-colors hover:text-[#85523b]"
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
          className="scroll-mt-24 border-t border-[#c5987f]/25 bg-[#141110] py-20 sm:py-28 lg:py-32"
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
                eyebrow="ÁREAS DE ATUAÇÃO TRABALHISTA ESPECIALIZADA"
                description="Soluções jurídicas técnicas, modernas e humanizadas para resguardar sua saúde, defender seus direitos e restabelecer sua dignidade profissional."
              >
                Especialidades completas para atender você no{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8c8b5] via-[#c5987f] to-[#fff5ea]">
                  Vale do Aço, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-[#a49184]">
                Clique em qualquer área de atuação abaixo para conferir os procedimentos detalhados e solicitar atendimento direto via WhatsApp.
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
                    className="group flex min-h-[350px] flex-col rounded-xl border border-[#c5987f]/30 bg-[#181413] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#e8c8b5] hover:shadow-gold sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-lg border border-[#c5987f]/40 bg-[#0d0b0a] text-[#e8c8b5] shadow-xs transition-colors group-hover:bg-[#c5987f] group-hover:text-[#0d0b0a] group-hover:border-[#fcebdd]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-[#c5987f]/40 group-hover:text-[#e8c8b5]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-md border border-[#c5987f]/30 bg-[#0d0b0a] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#e8c8b5] shadow-xs">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.45rem] leading-tight text-white group-hover:text-[#e8c8b5] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-[#d4c2b5]">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8c8b5] hover:text-white"
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

        {/* Por Que Escolher a Dra. Ione Barcelos - Dobra Clara */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-t border-[#c5987f]/30 bg-[#f5efeb] py-20 text-[#1e1815] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="EMPATIA, COMBATE TÉCNICO & ATENDIMENTO HUMANO"
                description="Quando a sua saúde, seu sustento e sua dignidade estão em jogo, você merece uma advogada acessível, empática e que realmente resolve."
              >
                Por que confiar seus direitos à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#85523b] via-[#b88368] to-[#5e3522]">
                  Dra. Ione Barcelos?
                </span>
              </Heading>
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ione Barcelos! Gostaria de conversar para entender os passos do meu processo trabalhista."
                )}
                target="_blank"
                size="md"
                variant="gold"
                className="rounded-lg shadow-sm"
              >
                <WhatsAppIcon size={16} className="text-[#0d0b0a]" /> Falar no WhatsApp
              </GlowingButton>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Card 1: Comunicação Clara e Acolhimento */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-[#c5987f]/30 bg-white p-7 shadow-[0_8px_30px_rgba(26,20,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b88368] hover:shadow-[0_12px_36px_rgba(197,152,127,0.18)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5987f]/40 bg-[#fbf8f5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#85523b]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Direto
                    </span>
                    <span className="text-xs font-semibold text-[#85523b]">
                      Sempre ao Seu Lado
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e1815] sm:text-[1.75rem]">
                    Comunicação Sem Juridiquês, Paciência e Respostas Claras
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#54463d]">
                    Como comprovam as avaliações no Google com nota máxima 5,0 ★, o grande diferencial da Dra. Ione Barcelos é aliar alto preparo técnico a uma escuta atenta e paciente. Ela explica cada etapa sem palavras difíceis, tranquiliza quem está angustiado e mantém você ciente de todo o processo.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2a221d]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                      <span>Contato direto pelo WhatsApp para sanar dúvidas sempre que precisar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                      <span>Retorno imediato: na hora que o processo movimenta ela já avisa com alegria</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                      <span>Transparência total e acolhimento em momentos de fragilidade física ou mental</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c5987f]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ione Barcelos! Gostaria de tirar dúvidas com você sobre o meu caso trabalhista."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c5987f]/40 bg-[#fbf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e1815] transition-all hover:border-[#85523b] hover:bg-[#c5987f] hover:text-[#0d0b0a]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar com a Dra. Ione Barcelos
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
                className="group flex flex-col justify-between rounded-xl border border-[#c5987f]/30 bg-white p-7 shadow-[0_8px_30px_rgba(26,20,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b88368] hover:shadow-[0_12px_36px_rgba(197,152,127,0.18)] sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#c5987f]/40 bg-[#fbf8f5] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#85523b]">
                      <Award size={14} /> Solidez & Domínio Processual
                    </span>
                    <span className="text-xs font-semibold text-[#85523b]">
                      Justiça Para Quem Trabalha
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1e1815] sm:text-[1.75rem]">
                    Especialização em Saúde Mental, Acidentes e Rescisão Indireta
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#54463d]">
                    Causas envolvendo Burnout, acidentes de trabalho e assédio moral demandam fundamentação médica e pericial minuciosa. A Dra. Ione constrói teses robustas e combativas, garantindo reparações justas e a libertação de ambientes de trabalho nocivos com todas as indenizações.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-[#2a221d]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                      <span>Estratégia pericial sólida para demonstrar o nexo de causalidade ocupacional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                      <span>Cálculo minucioso de horas extras, adicionais de insalubridade e FGTS sonegados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#85523b]" />
                      <span>Atuação firme em audiências e perante o Tribunal Regional do Trabalho (TRT-3)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-[#c5987f]/25 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ione Barcelos! Gostaria de consultar sobre a melhor estratégia jurídica para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-[#c5987f]/40 bg-[#fbf8f5] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1e1815] transition-all hover:border-[#85523b] hover:bg-[#c5987f] hover:text-[#0d0b0a]"
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
        <section className="relative overflow-hidden border-t border-[#c5987f]/25 bg-[#141110] py-20 text-[#faf6f2] sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-[#c5987f]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-[#e8c8b5]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="COMO CONDUZIMOS O SEU CASO"
                description="Um método transparente, acolhedor e centrado em resultados práticos para garantir sua tranquilidade, sua saúde e a segurança de sua família."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8c8b5] via-[#c5987f] to-[#fff5ea]">
                  fazer valer seus direitos e restabelecer sua dignidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-[#c5987f]/35 bg-[#181413] p-6 font-serif text-base italic leading-7 text-[#faf6f2] shadow-card">
                &ldquo;Trabalhar faz parte da vida; adoecer por causa do trabalho não deveria fazer. Nossa missão é acolher o trabalhador com empatia, escutar sua dor e aplicar a técnica jurídica com vigor para alcançar a solução mais justa.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#e8c8b5]">
                  — Dra. Ione Barcelos · Advogada Trabalhista
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-[#c5987f]/25"
            >
              {[
                [
                  "01",
                  "Escuta Atenta & Diagnóstico Trabalhista",
                  "Conversa reservada e sem julgamentos via WhatsApp, ligação ou atendimento direto. Análise detalhada do ambiente laboral, laudos médicos, ponto e contracheques.",
                ],
                [
                  "02",
                  "Definição Estratégica & Execução Rápida",
                  "Apresentação clara dos seus direitos, rotas cabíveis (rescisão indireta, indenização por dano moral, perícia de insalubridade) e ajuizamento célere da ação.",
                ],
                [
                  "03",
                  "Acompanhamento Próximo & Notícias em Primeira Mão",
                  "Atuação combativa em audiências e perícias judiciais, mantendo você informado a cada andamento com alegria e total transparência até a vitória final.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#e8c8b5]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#d4c2b5]">
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
          className="scroll-mt-24 border-t border-[#c5987f]/30 bg-[#fbf8f5] py-20 text-[#1e1815] sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja depoimentos autênticos e públicos de clientes sobre a competência, a transparência e o acolhimento da Dra. Ione Barcelos no Vale do Aço - MG."
              >
                Avaliada com 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#85523b] via-[#b88368] to-[#5e3522]">
                  22 avaliações no Google pela dedicação e atendimento humanizado.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-[#c5987f]/35 bg-white p-5 shadow-[0_8px_30px_rgba(26,20,18,0.08)] sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg border border-[#c5987f]/30 bg-[#fbf8f5] shadow-xs">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-[#1e1815]">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-[#c5987f]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#c5987f] text-[#c5987f]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#54463d]">
                    Ione Barcelos — Advogada
                  </p>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[#85523b] transition-colors hover:text-[#1e1815]"
                  >
                    22 avaliações no Google (100% 5 Estrelas) <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Client Reviews Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#c5987f]/30 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b88368] hover:shadow-[0_12px_36px_rgba(197,152,127,0.18)] shadow-[0_4px_20px_rgba(26,20,18,0.05)] sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-[#c5987f]">
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-[#c5987f] text-[#c5987f]"
                          />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#c5987f]/35 bg-[#fbf8f5] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#85523b] shadow-xs">
                        {review.badge}
                      </span>
                    </div>

                    {/* Review content */}
                    <p className="mt-5 text-[14px] italic leading-relaxed text-[#2a221d]">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-[#c5987f]/25 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-[#c5987f]/40 bg-[#fcebdd] font-serif text-sm font-semibold text-[#85523b] shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base font-semibold text-[#1e1815]">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#78665a]">
                        {review.reviewerTag}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#c5987f]/25 pt-8 sm:flex-row">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Advogada Trabalhista no Vale do Aço",
                  "Especialista em Burnout & Saúde Mental",
                  "Doenças Ocupacionais & Acidentes",
                  "Rescisão Indireta do Contrato",
                  "Nota 5,0 ★ no Google (22 avaliações)",
                  "Atendimento Humanizado & Ágil",
                  "Atuação em Todo o Brasil",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#c5987f]/30 bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#1e1815] shadow-xs"
                  >
                    <CheckCircle2 size={13} className="text-[#85523b]" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#85523b] transition-colors hover:text-[#1e1815]"
              >
                Ver Todas as 22 Avaliações no Google{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Atendimento */}
        <section
          id="contato"
          className="scroll-mt-24 border-t border-[#c5987f]/25 bg-[#141110] py-20 text-[#faf6f2] sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & AGENDAMENTO DE ATENDIMENTO"
                description="Fale diretamente com a Dra. Ione Barcelos pelo WhatsApp para orientação imediata com sigilo absoluto e acolhimento humano."
              >
                Prontidão para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8c8b5] via-[#c5987f] to-[#fff5ea]">
                  defender sua saúde e fazer valer seus direitos trabalhistas.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ione Barcelos! Gostaria de agendar um atendimento trabalhista."
                  )}
                  target="_blank"
                  size="lg"
                  variant="gold"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} className="text-[#0d0b0a]" /> Falar no WhatsApp com a Dra. Ione
                </GlowingButton>
                <p className="text-[11px] leading-5 text-[#d4c2b5]">
                  WhatsApp e telefone direto:{" "}
                  <strong className="text-white">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-[#d4c2b5]">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#c5987f]"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#e8c8b5] font-bold">
                      Aberto · Atendimento até 22:00
                    </p>
                    <p className="text-[11px] text-[#a49184]">
                      Segunda a Sexta das 08h às 22h · Sábados das 08h às 18h · Plantão trabalhista ágil
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#c5987f]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-white transition-colors hover:text-[#e8c8b5]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#c5987f]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#e8c8b5] text-white"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#c5987f]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#e8c8b5] text-white"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#c5987f]"
                  />
                  <div>
                    <span className="text-white">{REGION_TEXT}</span>
                    <br />
                    <span className="text-[11px] text-[#a49184]">
                      Atendimento presencial no Vale do Aço e assessoria trabalhista online em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-[#c5987f]/35 bg-[#181413] p-7 shadow-card sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#85523b] via-[#c5987f] to-[#e8c8b5]" />

              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e8c8b5]">
                  Ione Barcelos — Advogada
                </p>
                <div className="relative h-[68px] w-[280px] sm:h-[78px] sm:w-[340px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Ione Barcelos — Advogada"
                    fill
                    unoptimized
                    sizes="340px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Photo Presentation */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#c5987f]/30 bg-[#0d0b0a] shadow-xs">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Ione Barcelos — Atendimento Humanizado no Vale do Aço"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Atendimento Acolhedor, Discreto e Resolutivo</p>
                  <p className="text-[10px] text-stone-300">Vale do Aço · MG & Brasil</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-[#d4c2b5]">
                <strong className="font-semibold text-white">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} · {LAWYER_TITLE}
                <br />
                Atendimento no Vale do Aço (Coronel Fabriciano, Ipatinga, Timóteo) e perante a Justiça do Trabalho
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-[#c5987f]/25 bg-[#0d0b0a] p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e8c8b5]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-[#d4c2b5]">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-semibold text-[#e8c8b5]">
                    08:00 às 22:00
                  </span>
                  <span>Sábados</span>
                  <span className="text-right font-medium text-[#c5987f]">
                    08:00 às 18:00
                  </span>
                  <span>Região Base</span>
                  <span className="text-right text-white">Vale do Aço · MG</span>
                  <span>Avaliações Google</span>
                  <span className="text-right font-semibold text-[#e8c8b5]">5,0 ★ (22 avaliações)</span>
                  <span>Justiça Trabalhista</span>
                  <span className="text-right text-white">TRT da 3ª Região & TST</span>
                </div>
              </div>

              <div className="my-7 h-px bg-[#c5987f]/25" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#a49184]">
                  Atendimento sob estrito sigilo profissional e conformidade ética com a OAB
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ione Barcelos! Gostaria de agendar um atendimento trabalhista."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#c5987f]/50 bg-[#221c1a] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#e8c8b5] hover:bg-[#c5987f] hover:text-[#0d0b0a]"
                >
                  <WhatsAppIcon size={14} /> Falar no WhatsApp <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="border-t border-[#c5987f]/25 bg-gradient-to-r from-[#0d0b0a] via-[#181413] to-[#0d0b0a] px-5 py-14 text-[#faf6f2] shadow-card sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8c8b5]">
                <Sparkles size={13} /> IONE BARCELOS — ADVOGADA TRABALHISTA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Sentindo-se esgotado, injustiçado ou adoecendo por causa do trabalho?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Ione Barcelos! Preciso de orientação trabalhista sobre a minha situação na empresa."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-[#fcebdd]/85 bg-gradient-to-r from-[#a56f54] via-[#e8c8b5] to-[#a56f54] px-8 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#0d0b0a] shadow-[0_8px_24px_-4px_rgba(197,152,127,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85)] transition-all hover:-translate-y-0.5 hover:from-[#c5987f] hover:via-[#fff5ea] hover:to-[#c5987f] hover:shadow-[0_12px_32px_rgba(197,152,127,0.7)]"
            >
              <WhatsAppIcon size={17} className="text-[#0d0b0a]" /> Iniciar Atendimento Agora{" "}
              <ArrowUpRight size={15} className="text-[#0d0b0a]" />
            </a>
          </div>
        </section>

        {/* Footer - Elegant Luxury Noir */}
        <footer className="border-t border-[#c5987f]/25 bg-[#0d0b0a] px-5 py-14 text-[#faf6f2] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label="Ione Barcelos — Advogada"
                className="inline-block transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-[78px] w-[300px] sm:h-[95px] sm:w-[360px]">
                  <Image
                    src={LOGO_SRC}
                    alt="Ione Barcelos — Advogada"
                    fill
                    unoptimized
                    sizes="360px"
                    className="object-contain object-left"
                  />
                </div>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-[#a49184]">
                ⚖️ Trabalhar faz parte da vida. Adoecer por causa do trabalho não deveria fazer. Advocacia Trabalhista com acolhimento humano, seriedade e compromisso inabalável com a justiça no Vale do Aço e em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-[#e8c8b5]">
                {LAWYER_NAME} — {LAWYER_TITLE}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8c8b5]">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-[#d4c2b5]">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#diferenciais">
                  Diferenciais
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações de Clientes (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Atendimento
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8c8b5]">
                Contato & Atendimento
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-[#d4c2b5]">
                <a
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ione Barcelos! Gostaria de falar com seu escritório."
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
                  <span>{REGION_TEXT}</span>
                </div>
                <p className="inline-flex items-center gap-2 pt-1 text-[11px] text-[#e8c8b5] font-semibold">
                  <Clock size={14} className="shrink-0 text-[#c5987f]" /> Aberto · Atendimento até 22:00
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-[#c5987f]/25 pt-6 text-[10px] text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} IONE BARCELOS ADVOGADA. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo informativo, em estrita conformidade com o Código de Ética e Disciplina da OAB.
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
              "Olá, Dra. Ione Barcelos! Gostaria de um atendimento trabalhista pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Ione Barcelos"
            className="group relative flex size-14 items-center justify-center rounded-full border-2 border-[#c5987f]/80 bg-gradient-to-b from-[#261f1c] via-[#181413] to-[#0d0b0a] text-[#e8c8b5] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(197,152,127,0.35)] transition-all duration-300 hover:scale-110 hover:border-[#fcebdd] hover:shadow-[0_10px_35px_rgba(197,152,127,0.6)] focus:outline-none focus:ring-4 focus:ring-[#c5987f]/40"
          >
            {/* Live pulsating status beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c5987f] opacity-75"></span>
              <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#0d0b0a] bg-[#fcebdd]"></span>
            </span>
            <WhatsAppIcon size={26} className="text-[#fcebdd] transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-[#c5987f]/60 bg-[#0d0b0a]/95 px-3.5 py-1.5 text-xs font-semibold text-[#faf6f2] shadow-2xl backdrop-blur-md transition-opacity group-hover:block">
              <span className="text-[#e8c8b5]">WhatsApp Direto</span> · Dra. Ione Barcelos
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
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-[#c5987f]/40 bg-[#141110] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-[#faf6f2]"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-[#c5987f]/30 bg-[#221c1a] text-[#faf6f2] transition-colors hover:border-[#e8c8b5] hover:text-[#fcebdd]"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg border border-[#c5987f]/40 bg-[#0d0b0a] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma IB Ione Barcelos Advogada"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">IONE BARCELOS ADVOGADA</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#e8c8b5] uppercase">
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

                <p className="mt-5 text-sm leading-7 text-[#d4c2b5]">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-[#c5987f]/25 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8c8b5]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-[#d4c2b5]"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#c5987f]" />
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
                    <WhatsAppIcon size={16} className="text-[#0d0b0a]" /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-[#a49184] transition-colors hover:text-white"
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
