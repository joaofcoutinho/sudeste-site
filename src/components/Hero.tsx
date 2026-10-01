import { WHATSAPP_NUMBER } from "@/lib/data";
import { IconWhatsApp, IconStar } from "./Icons";

export default function Hero() {
  return (
    <section className="hero hero-pro">
      <div className="hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ph-img"
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=2000&q=80&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-glow" />
      <div className="hero-edge" />
      <div className="wrap hero-pro-inner">
        <div className="hero-pro-copy reveal">
          <span className="eyebrow">Distribuidor de tecnologia · ES · RJ · MG</span>
          <h1>
            Segurança e tecnologia no atacado,{" "}
            <span className="em">mais perto de você</span>.
          </h1>
          <p className="hero-lead">
            CFTV, controle de acesso, redes, automação e energia das principais
            marcas do mercado — com estoque imediato e suporte técnico dedicado à
            sua revenda.
          </p>
          <div className="hero-actions">
            <a href="#categorias" className="btn btn-primary btn-lg">
              Explorar catálogo
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost on-dark btn-lg"
            >
              <IconWhatsApp />
              Falar no WhatsApp
            </a>
          </div>
          <div className="hero-trust">
            <div className="hero-rating">
              <span className="stars">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
              </span>
              <b>4,9</b>
              <span>no Google</span>
            </div>
            <span className="hero-trust-div" />
            <span className="hero-trust-txt">Distribuidor oficial · +40 marcas</span>
          </div>
        </div>
      </div>
      <div className="hero-stripe">
        <div className="wrap hero-stripe-inner">
          <div className="hero-st">
            <b>
              4 <span className="u">unidades</span>
            </b>
            <span>ES · RJ · MG</span>
          </div>
          <div className="hero-st">
            <b>+40 marcas</b>
            <span>Fabricantes oficiais</span>
          </div>
          <div className="hero-st">
            <b>Pronta entrega</b>
            <span>Estoque imediato</span>
          </div>
          <div className="hero-st">
            <b>Suporte técnico</b>
            <span>Equipe dedicada à revenda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
