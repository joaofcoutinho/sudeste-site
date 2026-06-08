import { IconPinBold } from "./Icons";

const SHOTS = [
  { src: "/filiais/matriz-vila-velha.jpeg", alt: "Matriz — Vila Velha", cap: "Matriz · Vila Velha" },
  { src: "/filiais/guarapari.png", alt: "Guarapari — ES", cap: "Guarapari · ES" },
  { src: "/filiais/campos.png", alt: "Campos dos Goytacazes — RJ", cap: "Campos · RJ" },
  { src: "/filiais/muriae.png", alt: "Muriaé — MG", cap: "Muriaé · MG" },
];

const ITEMS = [
  { n: "01", h: "Estoque imediato", p: "Produtos à pronta entrega para agilizar os seus projetos sem espera." },
  { n: "02", h: "Marcas de referência", p: "Os principais fabricantes do mercado reunidos em um só lugar." },
  { n: "03", h: "Suporte técnico", p: "Equipe especializada para orientar e apoiar a sua revenda." },
  { n: "04", h: "Treinamentos exclusivos", p: "Capacitação contínua para você vender com mais segurança." },
  { n: "05", h: "Condições comerciais", p: "Preços competitivos e negociações personalizadas por perfil." },
  { n: "06", h: "Atendimento regional", p: "Cobertura no ES, RJ e MG com foco real no seu negócio." },
];

export default function Why() {
  return (
    <section className="section why" id="revenda">
      <div className="wrap why-grid">
        <div className="why-media reveal">
          <div className="why-shots">
            {SHOTS.map((s) => (
              <figure className="why-shot" key={s.cap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.alt} />
                <figcaption>
                  <IconPinBold />
                  {s.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="why-copy reveal">
          <span className="eyebrow">Por que a Sudeste</span>
          <h2 className="section-title">
            Feita para quem <span className="em">revende</span>.
          </h2>
          <p className="section-sub">
            Agilidade, estoque confiável e suporte técnico especializado para você
            fechar mais negócios — com a parceria de quem entende do mercado.
          </p>
          <ul className="why-list">
            {ITEMS.map((it) => (
              <li className="why-item" key={it.n}>
                <span className="n">{it.n}</span>
                <div>
                  <h3>{it.h}</h3>
                  <p>{it.p}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="why-cta">
            <a href="#contato" className="btn btn-dark btn-lg">
              Quero ser parceiro
            </a>
            <a href="#categorias" className="btn btn-ghost btn-lg">
              Ver catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
