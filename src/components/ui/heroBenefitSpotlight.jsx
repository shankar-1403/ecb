import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94];

export function HeroBenefitSpotlight({
  items,
  ctaHref = "/membership/partner-with-us",
  ctaLabel = "Apply for membership",
  intervalMs = 5500,
}) {
  const [i, setI] = useState(0);
  const [pointerPause, setPointerPause] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const n = items?.length ?? 0;

  const go = useCallback((dir) => {
    if (!n) return;
    setI((prev) => (prev + dir + n) % n);
  }, [n]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (n > 0 && i >= n) setI(0);
  }, [n, i]);

  useEffect(() => {
    if (n < 2 || pointerPause || reduceMotion) return;
    const id = window.setInterval(() => setI((prev) => (prev + 1) % n), intervalMs);
    return () => window.clearInterval(id);
  }, [n, pointerPause, reduceMotion, intervalMs]);

  const card = n > 0 ? items[i] : null;
  if (!n || !card) return null;
  const Icon = card.icon;

  return (
    <div className="relative w-full shrink-0">
      <motion.div
        className="pointer-events-none absolute -inset-6 rounded-3xl blur-2xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(255,255,255,0) 50%, rgba(22,163,74,0.1) 100%)" }}
      />

      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200/80 bg-white shadow-[0_32px_64px_-20px_rgba(29,47,79,0.25),0_8px_24px_-8px_rgba(245,158,11,0.1)]"
        onPointerEnter={() => setPointerPause(true)}
        onPointerLeave={() => setPointerPause(false)}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-white to-green-500 rounded-t-2xl" />
        <div className="absolute inset-x-0 top-1 h-24 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

        <div className="absolute top-4 right-4 pointer-events-none select-none">
          <svg viewBox="0 0 80 80" className="w-20 h-20 text-amber-500/5" fill="currentColor">
            <circle cx="40" cy="40" r="36" />
          </svg>
        </div>

        <div className="relative px-5 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">

          <div className="min-h-[260px] sm:min-h-[280px] flex flex-col">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="flex flex-col h-full"
              >
                {Icon ? (
                  <motion.div
                    className="relative mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg"
                    style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" }}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/10" />
                    <Icon className="relative h-7 w-7 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{ boxShadow: ["0 0 0px 0px rgba(245,158,11,0)", "0 0 16px 4px rgba(245,158,11,0.35)", "0 0 0px 0px rgba(245,158,11,0)"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                ) : (
                  <div className="mb-4 h-14 w-14 shrink-0" aria-hidden />
                )}

                <p className="text-base font-bold leading-snug text-[#1D2F4F] md:text-lg mb-3 max-w-[280px]">
                  {card.title}
                </p>

                <p className="text-sm leading-relaxed text-gray-600 max-w-[280px] flex-1">
                  {card.description}
                </p>

                {card.detail && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mt-3 text-xs leading-relaxed text-amber-600/80 font-medium border-l-2 border-amber-400/40 pl-3"
                  >
                    {card.detail}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {items.map((it, idx) => (
              <button
                key={it.id}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === i ? "w-7 bg-amber-500" : "w-2 bg-gray-200 hover:bg-gray-300",
                )}
                aria-label={`Show benefit ${idx + 1}`}
                aria-current={idx === i ? true : undefined}
              />
            ))}
          </div>

          <div className="mt-5">
            <Link
              to={ctaHref}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.99]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}