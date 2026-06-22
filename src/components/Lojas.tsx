import { IconMapPinSolid, IconPinBold, IconWhatsApp } from "./Icons";

const ARC = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export";

type Loja = {
  bbox: string;
  alt: string;
  maps: string;
  title: string;
  addr: string;
};

const LOJAS: Loja[] = [
  {
    bbox: "-40.353,-20.3476,-40.341,-20.3356",
    alt: "Mapa de satélite — Vila Velha",
    maps: "Sudeste Atacado, Rua Dez, Aribiri, Vila Velha - ES, 29120-575",
    title: "Vila Velha · ES",
    addr: "R. Dez, Aribiri — Vila Velha, ES, 29120-575. Atrás da Orvel (Av. Carlos Lindenberg).",
  },
  {
    bbox: "-40.505,-20.6678,-40.493,-20.6558",
    alt: "Mapa de satélite — Guarapari",
    maps: "Sudeste Atacado, Rua José Piumbini, 582, Muquiçaba, Guarapari - ES, 29215-365",
    title: "Guarapari · ES",
    addr: "R. José Piumbini, 582 — Muquiçaba, Guarapari — ES, 29215-365.",
  },
  {
    bbox: "-41.3259,-21.766,-41.3139,-21.754",
    alt: "Mapa de satélite — Campos",
    maps: "Sudeste Atacado, Rua Doutor Oliveira Botelho, 53, Centro, Campos dos Goytacazes - RJ, 28010-320",
    title: "Campos · RJ",
    addr: "R. Dr. Oliveira Botelho, 53 — Centro, Campos dos Goytacazes — RJ, 28010-320.",
  },
  {
    bbox: "-42.38,-21.1456,-42.368,-21.1336",
    alt: "Mapa de satélite — Muriaé",
    maps: "Sudeste Atacado, Rua José Augusto de Abreu, 233, Safira, Muriaé - MG, 36883-031",
    title: "Muriaé · MG",
    addr: "R. José Augusto de Abreu, 233 — Safira, Muriaé — MG, 36883-031.",
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
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.maps)}`}
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
