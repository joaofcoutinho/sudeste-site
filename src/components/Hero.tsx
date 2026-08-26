import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-banner">
      <a href="#contato" className="hero-banner-link" aria-label="Sudeste Atacado — fale com a gente">
        <Image
          className="hero-banner-img is-desktop"
          src="/banner-desktop.png"
          alt="Sudeste Atacado — distribuidor de tecnologia em segurança"
          width={1942}
          height={809}
          priority
          sizes="100vw"
        />
        <Image
          className="hero-banner-img is-mobile"
          src="/banner-mobile.png"
          alt="Sudeste Atacado — distribuidor de tecnologia em segurança"
          width={1122}
          height={1402}
          priority
          sizes="100vw"
        />
      </a>
    </section>
  );
}
