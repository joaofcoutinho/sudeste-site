export type Group = { id: string; label: string };

export const GROUPS: Group[] = [
  { id: "all", label: "Todos" },
  { id: "cftv", label: "CFTV & Monitoramento" },
  { id: "acesso", label: "Controle de Acesso & Smart Locks" },
  { id: "redes", label: "Redes & Conectividade" },
  { id: "iot", label: "Soluções IoT & Automação" },
  { id: "energia", label: "Energia & No-breaks" },
];

export const GLABEL: Record<string, string> = {
  cftv: "CFTV",
  acesso: "Acesso",
  redes: "Redes",
  iot: "IoT",
  energia: "Energia",
};

export type Category = {
  t: string;
  g: string;
  ic: string;
  img: string;
  d: string;
};

export const CATS: Category[] = [
  { t: "Câmeras IP Bullet", g: "cftv", ic: "bullet", img: "/produtos/cameras-ip-bullet.png", d: "Câmeras de alta resolução e fácil instalação, garantindo segurança a qualquer hora." },
  { t: "NVR / DVR", g: "cftv", ic: "recorder", img: "/produtos/nvr-dvr.png", d: "Sistema de gravação confiável para armazenar e acessar imagens." },
  { t: "Câmera de Vídeo", g: "cftv", ic: "camera", img: "/produtos/camera-video.png", d: "Desenvolvida para proteger ambientes internos e externos." },
  { t: "Leitores", g: "acesso", ic: "reader", img: "/produtos/leitores.png", d: "Acesso remoto e personalizável com máxima segurança e praticidade." },
  { t: "Fechaduras Inteligentes", g: "acesso", ic: "smartlock", img: "/produtos/fechaduras-inteligentes.png", d: "Acesso remoto e personalizável com máxima segurança e praticidade." },
  { t: "Fechaduras Elétricas", g: "acesso", ic: "lock", img: "/produtos/fechaduras-eletricas.png", d: "Ideal para residências: abertura rápida, trava reforçada e instalação simples." },
  { t: "Fechaduras Digitais", g: "acesso", ic: "keypad", img: "/produtos/fechaduras-digitais.png", d: "Controle de entrada via dispositivos móveis, com segurança e conveniência." },
  { t: "Roteadores", g: "redes", ic: "router", img: "/produtos/roteadores.png", d: "Roteadores potentes para sinal estável e cobertura eficiente em toda a área." },
  { t: "Switches", g: "redes", ic: "switch", img: "/produtos/switches.png", d: "Expanda sua rede com switches de alta performance e sem interrupções." },
  { t: "Cabos de Rede", g: "redes", ic: "cable", img: "/produtos/cabos-rede.jpg", d: "Excelentes para ambientes que exigem estabilidade máxima e longa durabilidade." },
  { t: "Campainhas", g: "iot", ic: "bell", img: "/produtos/campainhas.png", d: "Campainhas conectadas para interatividade e segurança na entrada." },
  { t: "Sensores", g: "iot", ic: "sensor", img: "/produtos/sensores.png", d: "Sensores para monitoramento constante e segurança inteligente." },
  { t: "Videoporteiro", g: "iot", ic: "intercom", img: "/produtos/videoporteiro.png", d: "Controle visual de entradas para mais segurança e comodidade." },
  { t: "Baterias", g: "energia", ic: "battery", img: "/produtos/baterias.png", d: "Autonomia extra para seus dispositivos em momentos críticos." },
  { t: "Fontes", g: "energia", ic: "plug", img: "/produtos/fontes.png", d: "Fontes de alimentação estáveis para manter seus dispositivos funcionando." },
  { t: "Nobreaks", g: "energia", ic: "nobreak", img: "/produtos/nobreaks.webp", d: "Proteção contra quedas de energia, garantindo continuidade dos sistemas." },
];

export type Review = {
  n: string;
  av: string;
  img?: string;
  when: string;
  q: string;
};

const AVBASE = "https://www.sudesteatacado.com.br/wp-content/uploads/2026/05/";

export const REVIEWS: Review[] = [
  { n: "GVD SEG TEC", av: "#E85D17", img: AVBASE + "unnamed-1.png", when: "5 meses atrás", q: "Um excelente lugar para se comprar de tudo que tem tecnologia em segurança. Um bom atendimento e preço!!!" },
  { n: "Emerson G. Gurgel", av: "#2A2A30", img: AVBASE + "eeee.png", when: "5 anos atrás", q: "Soluções em CFTV, segurança patrimonial, eletrônica, sensores. Super bem acolhido pela Srta. Priscila nessa empresa. Recomendo com empenho." },
  { n: "Paulo Lima", av: "#1FA463", img: AVBASE + "unnamed.png", when: "2 anos atrás", q: "Atendimento muito bom, entrega rápida, preço justo. Virou meu fornecedor de referência aqui na região." },
  { n: "David Arrigoni", av: "#C9500F", img: AVBASE + "unnamed-2.png", when: "2 anos atrás", q: "Bom atendimento e zelo pelo parceiro, uma menção honrosa para a Luciene, sempre atenciosa." },
  { n: "Marcos Vinícius", av: "#3C3C44", when: "8 meses atrás", q: "Variedade enorme de produtos e suporte técnico que realmente entende do assunto. Recomendo para qualquer revenda." },
];

export const WHATSAPP_NUMBER = "5527992328081";
