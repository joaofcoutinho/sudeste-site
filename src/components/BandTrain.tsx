import { IconCheckCircle } from "./Icons";

const BADGES = ["CFTV & Monitoramento", "Redes & Wi-Fi", "Controle de Acesso"];

export default function BandTrain() {
  return (
    <section className="band band-train band-right reveal">
      <div className="band-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ph-img"
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=2000&q=80&auto=format&fit=crop"
          alt="Treinamento técnico"
        />
      </div>
      <div className="band-scrim" />
      <div className="band-glow" />
      <div className="band-edge" />
      <div className="wrap band-inner">
        <div className="band-content">
          <span className="eyebrow">Conteúdo &amp; Treinamento</span>
          <h2>
            Conhecimento técnico que <span className="em">vende mais</span>.
          </h2>
          <p>
            Garanta seu domínio sobre CFTV, Wi-Fi e muito mais, com treinamentos
            ministrados pelos fabricantes líderes do mercado.
          </p>
          <div className="training-badges">
            {BADGES.map((b) => (
              <span className="training-badge" key={b}>
                <IconCheckCircle />
                {b}
              </span>
            ))}
          </div>
          <div className="band-cta">
            <a href="#contato" className="btn btn-primary btn-lg">
              Quero participar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
