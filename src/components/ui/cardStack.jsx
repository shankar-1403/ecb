import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/** Fixed card size so the stack never resizes when slides change. */
const CARD_WIDTH_CLASS = "w-[26rem] max-w-[min(26rem,calc(100vw-2rem))]";
const CARD_HEIGHT_PX = 328;
const ARENA_HEIGHT_PX = 408;

/**
 * @param {Array<{ id: string|number, title: string, description: string, icon?: React.ComponentType<{ className?: string }> }>} items
 */
export function CardStack({
  items,
  offset = 14,
  scaleFactor = 0.045,
  intervalMs = 5000,
  ctaHref = "/membership",
  ctaLabel = "Become a member",
}) {
  const [cards, setCards] = useState(items);
  const timerRef = useRef(null);

  useEffect(() => {
    setCards(items);
  }, [items]);

  useEffect(() => {
    if (!items.length) return;
    timerRef.current = setInterval(() => {
      setCards((prev) => {
        if (!prev.length) return prev;
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [intervalMs, items]);

  if (!cards.length) return null;

  const depth = Math.max(0, cards.length - 1);
  const arenaPadRight = offset * depth + 8;
  const arenaPadBottom = offset * depth + 8;

  return (
    <div className={`relative shrink-0 ${CARD_WIDTH_CLASS} pt-2`}>

      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          height: ARENA_HEIGHT_PX,
          paddingRight: arenaPadRight,
          paddingBottom: arenaPadBottom,
        }}
      >
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              className={`absolute left-0 right-0 mx-auto overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-[0_20px_50px_-12px_rgba(29,47,79,0.25)] md:rounded-3xl flex flex-col ${
                index === 0 ? "pointer-events-auto" : "pointer-events-none"
              }`}
              style={{
                transformOrigin: "90% 8%",
                width: "100%",
                height: CARD_HEIGHT_PX,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.85 }}
              animate={{
                top: index * -offset,
                right: index * -offset * 0.92,
                scale: 1 - index * scaleFactor,
                rotate: index * -1.25,
                zIndex: cards.length - index,
                opacity: 1 - index * 0.08,
              }}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-linear-to-br from-amber-400/25 via-amber-500/10 to-green-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[#1D2F4F]/5 blur-2xl" />

              <div className="relative shrink-0 border-b border-amber-500/15 bg-linear-to-br from-[#1D2F4F] via-[#252D4B] to-[#1D314E] px-4 py-3.5 md:px-5 md:py-4">
                <div className="flex items-start gap-3">
                  {Icon ? (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                      <Icon className="h-5 w-5 text-amber-500" />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-500/90">Included with ECB</p>
                    <h3 className="mt-0.5 line-clamp-2 text-base font-bold leading-snug text-white md:text-lg">{card.title}</h3>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-0 flex-1 flex-col bg-linear-to-b from-gray-50/80 to-white px-4 pt-3 md:px-5 md:pt-4">
                <div className="min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-contain pr-0.5 pb-2">
                  <p className="text-sm leading-relaxed text-gray-600">{card.description}</p>
                  {card.detail ? (
                    <p className="text-xs leading-relaxed text-gray-500 border-l-2 border-amber-500 pl-3">{card.detail}</p>
                  ) : null}
                </div>
                <div
                  className={`shrink-0 flex min-h-13 items-center border-t py-3 md:py-3.5 ${
                    index === 0 ? "border-gray-100 bg-white/90" : "border-transparent"
                  }`}
                >
                  {index === 0 ? (
                    <Link
                      to={ctaHref}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
                    >
                      {ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
