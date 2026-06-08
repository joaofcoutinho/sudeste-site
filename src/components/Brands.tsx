const BASE = "https://www.sudesteatacado.com.br/wp-content/uploads/2026/05/";
// 6 logos repeated 4x to fill the looping marquee track (as in the original)
const LOGOS = Array.from({ length: 24 }, (_, i) => `${BASE}${(i % 6) + 1}.png`);

export default function Brands() {
  return (
    <div className="brands">
      <p className="brands-label">Marcas que trabalhamos</p>
      <div className="marquee">
        <div className="marquee-track" id="brandTrack">
          {LOGOS.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              className="brand-logo-img"
              src={src}
              alt="Marca parceira"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
