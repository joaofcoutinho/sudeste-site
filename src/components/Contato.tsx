"use client";

import { useRef, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/data";
import { IconWhatsApp, IconMail, IconPhone, IconPin, IconCheck } from "./Icons";

export default function Contato() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [waHref, setWaHref] = useState("#");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = formRef.current;
    if (!f) return;
    if (!f.checkValidity()) {
      f.reportValidity();
      return;
    }
    const g = (n: string) =>
      ((f.elements.namedItem(n) as HTMLInputElement | null)?.value || "").trim();
    const nome = g("nome");
    const empresa = g("empresa");
    const cidade = g("cidade");
    const email = g("email");
    const tel = g("telefone");
    const msg = g("mensagem");

    let txt = `Olá! Vim pelo site da Sudeste Atacado. Sou ${nome}`;
    if (empresa) txt += ` — ${empresa}`;
    if (cidade) txt += ` (${cidade})`;
    txt += ".\n\n" + (msg || "Gostaria de montar um pedido / orçamento.");
    const extra = [email && `E-mail: ${email}`, tel && `Telefone: ${tel}`]
      .filter(Boolean)
      .join("\n");
    if (extra) txt += "\n\n" + extra;

    const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
    setWaHref(wa);
    setSent(true);
    window.open(wa, "_blank");
  };

  return (
    <section className="section finalcta contato" id="contato">
      <div className="fc-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ph-img"
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className="wrap reveal contato-grid">
        <div className="contato-copy">
          <span className="eyebrow">Fale com a gente</span>
          <h2>
            Pronto para montar seu próximo <span className="em">pedido</span>?
          </h2>
          <p>
            Deixe seu contato que o nosso time comercial responde rapidinho — ou
            fale agora mesmo no WhatsApp.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener"
            className="btn btn-wa btn-lg"
          >
            <IconWhatsApp />
            Abrir WhatsApp
          </a>
          <div className="contato-list">
            <a href="mailto:contato@sudesteatacado.com.br">
              <IconMail />
              contato@sudesteatacado.com.br
            </a>
            <a href="tel:+552732990200">
              <IconPhone />
              (27) 3299-0200
            </a>
            <span>
              <IconPin />
              Aribiri, Vila Velha — ES, 29120-575
            </span>
          </div>
        </div>

        <div className="lead-card">
          <div className="lead-head">
            <b>Monte seu pedido</b>
            <span>
              Preencha e o time comercial retorna com preços e disponibilidade.
            </span>
          </div>
          <form
            className="lead-form"
            id="leadForm"
            noValidate
            ref={formRef}
            onSubmit={onSubmit}
            style={{ display: sent ? "none" : undefined }}
          >
            <div className="lf-row">
              <div className="lf-field">
                <label htmlFor="lf-nome">Nome*</label>
                <input id="lf-nome" name="nome" placeholder="Seu nome" required />
              </div>
              <div className="lf-field">
                <label htmlFor="lf-empresa">Empresa</label>
                <input id="lf-empresa" name="empresa" placeholder="Nome da empresa" />
              </div>
            </div>
            <div className="lf-row">
              <div className="lf-field">
                <label htmlFor="lf-cidade">Cidade</label>
                <input id="lf-cidade" name="cidade" placeholder="Cidade / UF" />
              </div>
              <div className="lf-field">
                <label htmlFor="lf-email">E-mail*</label>
                <input
                  id="lf-email"
                  type="email"
                  name="email"
                  placeholder="voce@email.com"
                  required
                />
              </div>
            </div>
            <div className="lf-field">
              <label htmlFor="lf-tel">Telefone / WhatsApp</label>
              <input id="lf-tel" name="telefone" placeholder="(27) 9 9999-9999" />
            </div>
            <div className="lf-field">
              <label htmlFor="lf-msg">Mensagem</label>
              <textarea
                id="lf-msg"
                name="mensagem"
                rows={3}
                placeholder="Conte o que você precisa para o seu projeto..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg lf-submit">
              Enviar mensagem
            </button>
          </form>

          <div className={`lead-success${sent ? " show" : ""}`} id="leadSuccess">
            <span className="ok">
              <IconCheck />
            </span>
            <b>Recebemos seu contato!</b>
            <p>
              Vamos te direcionar para o WhatsApp do time comercial — é só enviar a
              mensagem já preenchida.
            </p>
            <a
              className="btn btn-wa"
              id="leadWa"
              href={waHref}
              target="_blank"
              rel="noopener"
            >
              <IconWhatsApp />
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
