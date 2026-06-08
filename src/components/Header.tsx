"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Sudeste Atacado">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-img" src="/logos/logo-header.png" alt="Sudeste Atacado" />
        </a>
        <nav className="nav">
          <a href="#categorias">Produtos</a>
          <a href="#revenda">Para Revenda</a>
          <a href="#lojas">Unidades</a>
          <a href="#avaliacoes">Avaliações</a>
        </nav>
        <div className="header-cta">
          <a href="#contato" className="btn btn-ghost">
            Falar com o time
          </a>
          <a href="#categorias" className="btn btn-primary">
            Ver Catálogo
          </a>
        </div>
      </div>
    </header>
  );
}
