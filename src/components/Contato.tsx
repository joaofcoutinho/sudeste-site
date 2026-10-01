import { WHATSAPP_NUMBER } from "@/lib/data";
import { IconWhatsApp } from "./Icons";

export default function Contato() {
  return (
    <section className="section finalcta contato" id="contato">
      <div className="wrap reveal">
        <div className="contato-copy">
          <span className="eyebrow">Fale com a gente</span>
          <h2>
            Pronto para montar seu próximo <span className="em">pedido</span>?
          </h2>
          <p>
            Chama o nosso time comercial no WhatsApp e receba preços e
            disponibilidade rapidinho.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener"
            className="btn btn-wa btn-lg"
          >
            <IconWhatsApp />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
