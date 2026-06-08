"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { REVIEWS } from "@/lib/data";
import { IconStar, IconChevronLeft, IconChevronRight } from "./Icons";

function perView() {
  if (typeof window === "undefined") return 3;
  return window.innerWidth <= 680 ? 1 : window.innerWidth <= 980 ? 2 : 3;
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [per, setPer] = useState(3);
  const [idx, setIdx] = useState(0);
  const [offset, setOffset] = useState(0);

  const pages = Math.max(1, REVIEWS.length - per + 1);

  const measure = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector<HTMLElement>(".review");
      if (!card) return;
      const step = card.getBoundingClientRect().width + 24;
      setOffset(-i * step);
    },
    []
  );

  useLayoutEffect(() => {
    setPer(perView());
  }, []);

  useLayoutEffect(() => {
    measure(idx);
  }, [idx, per, measure]);

  useEffect(() => {
    const onResize = () => {
      const np = perView();
      setPer((prev) => {
        if (np !== prev) {
          setIdx(0);
          return np;
        }
        return prev;
      });
      measure(idx);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [idx, measure]);

  const move = (dir: number) => {
    const max = REVIEWS.length - per;
    setIdx((i) => Math.min(max, Math.max(0, i + dir)));
  };

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow center">Quem compra, recomenda</span>
          <h2 className="section-title">
            Avaliações dos <span className="em">Parceiros</span>
          </h2>
          <p className="google-badge" style={{ marginTop: 14 }}>
            Verificadas pelo{" "}
            <span className="g">
              <span>G</span>
              <span>o</span>
              <span>o</span>
              <span>g</span>
              <span>l</span>
              <span>e</span>
            </span>
          </p>
        </div>

        <div className="reviews-rail reveal">
          <div className="reviews-viewport">
            <div
              className="reviews-track"
              id="reviewsTrack"
              ref={trackRef}
              style={{ transform: `translateX(${offset}px)` }}
            >
              {REVIEWS.map((r) => (
                <article className="review" key={r.n}>
                  <div className="review-stars">
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                    <IconStar />
                  </div>
                  <p className="review-quote">&ldquo;{r.q}&rdquo;</p>
                  <div className="review-by">
                    <div className="review-av" style={{ background: r.av }}>
                      {r.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={r.img} alt={r.n} />
                      ) : (
                        r.n
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")
                      )}
                    </div>
                    <div className="review-meta">
                      <b>{r.n}</b>
                      <span>{r.when}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="reviews-nav">
            <div className="reviews-dots" id="reviewsDots">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  className={`rev-dot${i === idx ? " active" : ""}`}
                  aria-label={`Ir para avaliação ${i + 1}`}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
            <div className="reviews-arrows">
              <button
                className="rev-arrow"
                id="revPrev"
                aria-label="Anterior"
                onClick={() => move(-1)}
              >
                <IconChevronLeft />
              </button>
              <button
                className="rev-arrow"
                id="revNext"
                aria-label="Próximo"
                onClick={() => move(1)}
              >
                <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
