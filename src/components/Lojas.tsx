import { IconMapPinSolid, IconPinBold, IconWhatsApp } from "./Icons";

const ARC = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export";

type Loja = {
  bbox: string;
  alt: string;
  query: string;
  title: string;
  addr: string;
};

const LOJAS: Loja[] = [
  {
    bbox: "-40.353,-20.3476,-40.341,-20.3356",
    alt: "Mapa de satélite — Vila Velha",
    query: "-20.3416,-40.3470",
    title: "Vila Velha · ES",
    addr: "Aribiri, Vila Velha — ES, 29120-575. Atrás da Orvel, Av. Carlos Lindenberg.",
  },
  {
    bbox: "-40.522,-20.6746,-40.51,-20.6626",
    alt: "Mapa de satélite — Guarapari",
    query: "-20.6686,-40.5160",
    title: "Guarapari · ES",
    addr: "Muquiçaba, Guarapari — ES. Atendimento comercial e retirada de pedidos.",
  },
  {
    bbox: "-41.336,-21.7605,-41.324,-21.7485",
    alt: "Mapa de satélite — Campos",
    query: "-21.7545,-41.3300",
    title: "Campos · RJ",
    addr: "R. Ten.-Cel. Cardoso, 270 — Centro, Campos dos Goytacazes — RJ.",
  },
  {
    bbox: "-42.372,-21.1365,-42.36,-21.1245",
    alt: "Mapa de satélite — Muriaé",
    query: "-21.1305,-42.3660",
    title: "Muriaé · MG",
    addr: "R. José Augusto de Abreu, 233 — Safira, Muriaé — MG.",
  },
];

function satUrl(bbox: string) {
  return `${ARC}?bbox=${bbox}&bboxSR=4326&imageSR=4326&size=600,420&format=jpg&transparent=false&f=image`;
}

export default function Lojas() {
  return (
    <section
      className="section"
      id="lojas"
      style={{ background: "var(--bone)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow center">Onde estamos</span>
          <h2 className="section-title">
            Conheça <span className="em">Nossas Lojas</span>
          </h2>
          <p className="section-sub">
            Visite a unidade mais próxima ou fale agora com o time comercial.
          </p>
          <div className="tick" style={{ marginTop: 22 }} />
        </div>
        <div className="lojas-grid" style={{ marginTop: 48 }}>
          {LOJAS.map((l) => (
            <article className="loja reveal" key={l.title}>
              <div className="loja-map">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="loja-sat"
                  src={satUrl(l.bbox)}
                  alt={l.alt}
                  loading="lazy"
                />
                <span className="loja-pin">
                  <IconMapPinSolid />
                </span>
                <a
                  className="loja-mapchip"
                  href={`https://www.google.com/maps/search/?api=1&query=${l.query}`}
                  target="_blank"
                  rel="noopener"
                >
                  <IconPinBold />
                  Abrir no Maps
                </a>
              </div>
              <div className="loja-body">
                <h3>{l.title}</h3>
                <p className="addr">{l.addr}</p>
                <a href="#contato" className="btn btn-ghost">
                  <IconWhatsApp />
                  Falar com a unidade
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
