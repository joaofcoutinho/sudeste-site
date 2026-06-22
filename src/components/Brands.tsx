// Logos locais dos parceiros (public/parceiros-sudeste), repetidas para o loop do marquee
const LOGOS = Array.from(
  { length: 24 },
  (_, i) => `/parceiros-sudeste/${(i % 6) + 1}.png`
);

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
