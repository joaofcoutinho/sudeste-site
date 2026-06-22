"use client";

import { useState } from "react";
import { CATS, GROUPS, GLABEL, WHATSAPP_NUMBER } from "@/lib/data";
import CategoryIcon from "./CategoryIcon";
import { IconArrow } from "./Icons";

function waLink(produto: string) {
  const txt = `Olá! Vim pelo site da Sudeste Atacado e tenho interesse em *${produto}*. Poderiam me passar preços e disponibilidade?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
}

export default function Categories() {
  const [filter, setFilter] = useState("all");

  return (
    <section className="section" id="categorias">
      <div className="wrap">
        <div className="cats-head reveal">
          <div className="section-head">
            <span className="eyebrow">Catálogo</span>
            <h2 className="section-title">
              Categorias em <span className="em">Destaque</span>
            </h2>
            <p className="section-sub">
              Encontre tudo o que você precisa para seus projetos em um só lugar.
            </p>
          </div>
          <a href="#contato" className="btn btn-ghost cats-headcta">
            Ver todos os produtos
          </a>
        </div>

        <div className="cats-filter" id="catsFilter">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              className={`chip${filter === g.id ? " active" : ""}`}
              data-filter={g.id}
              onClick={() => setFilter(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="cats-grid" id="catsGrid">
          {CATS.map((c) => {
            const show = filter === "all" || c.g === filter;
            return (
              <a
                key={c.t}
                href={waLink(c.t)}
                target="_blank"
                rel="noopener noreferrer"
                className={`cat-card reveal${show ? "" : " hidden"}`}
                data-group={c.g}
                aria-label={`Falar no WhatsApp sobre ${c.t}`}
              >
                <div className="cat-thumb has-img">
                  <span className="imgtag">IMG</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="cat-img"
                    src={c.img}
                    alt={c.t}
                    loading="lazy"
                  />
                  <CategoryIcon name={c.ic} />
                </div>
                <div className="cat-body">
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                  <div className="cat-tagrow">
                    <span className="cat-cat">{GLABEL[c.g]}</span>
                    <span className="cat-arrow">
                      <IconArrow />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="cats-foot reveal">
          <a href="#contato" className="btn btn-dark btn-lg">
            Ver todos os produtos
          </a>
        </div>
      </div>
    </section>
  );
}
