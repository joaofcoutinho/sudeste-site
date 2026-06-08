export default function BandSoho() {
  return (
    <section className="band band-soho reveal">
      <div className="band-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ph-img"
          src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=2000&q=80&auto=format&fit=crop"
          alt="Cabos e conectividade SohoPlus"
        />
      </div>
      <div className="band-scrim" />
      <div className="band-glow" />
      <div className="band-edge" />
      <div className="wrap band-inner">
        <div className="band-content">
          <span className="eyebrow">Linha exclusiva</span>
          <h2>
            Conecte seu negócio ao próximo nível com{" "}
            <span className="em">SohoPlus</span>.
          </h2>
          <p>
            Com a linha SohoPlus, seu projeto ganha mais confiabilidade e
            desempenho — reduzindo falhas e custos no longo prazo.
          </p>
          <span className="band-tag">
            <b>CAT5e · CAT6</b> Cabos &amp; conectividade de alto desempenho
          </span>
          <div className="band-cta">
            <a href="#contato" className="btn btn-primary btn-lg">
              Saiba mais sobre SohoPlus
            </a>
            <a href="#categorias" className="btn btn-ghost on-dark btn-lg">
              Ver todos os produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
