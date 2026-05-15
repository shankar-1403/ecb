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
        style={{ background: "linear-gradient(135deg, rgba(20,57,115,0.15) 0%, rgba(255,255,255,0) 50%, rgba(37,99,235,0.12) 100%)" }}
      />

      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200/80 bg-white shadow-[#143973]"
        onPointerEnter={() => setPointerPause(true)}
        onPointerLeave={() => setPointerPause(false)}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#143973] via-white to-[#143973] rounded-t-2xl" />
        <div className="absolute inset-x-0 top-1 h-24 bg-linear-to-b from-[#143973]/5 to-transparent pointer-events-none" />


        <div className="relative px-5 pb-6 pt-6 md:px-7 md:pb-7 md:pt-7">

          <div className="min-h-65 sm:min-h-70 flex flex-col">
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
                    style={{ background: "linear-gradient(135deg, #1D2F4F 0%, #2563eb 100%)" }}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/10" />
                    <Icon className="relative h-7 w-7" style={{ color: "#9B72C4" }} />
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{ boxShadow: ["0 0 0px 0px rgba(20,57,115,0)", "0 0 16px 4px rgba(20,57,115,0.35)", "0 0 0px 0px rgba(20,57,115,0)"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                ) : (
                  <div className="mb-4 h-14 w-14 shrink-0" aria-hidden />
                )}

                <p className="text-base font-bold leading-snug text-[#143973] md:text-lg mb-3 max-w-70">
                  {card.title}
                </p>

                <p className="text-sm leading-relaxed text--[#143973] max-w-70 flex-1">
                  {card.description}
                </p>

                {card.detail && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mt-3 text-xs leading-relaxed text-[#143973]/80 font-medium border-l-2 pl-3" style={{ borderColor: "#DAC9EB" }}
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
                  idx === i ? "w-7 bg-[#143973]" : "w-2",
                )}
                style={idx !== i ? { backgroundColor: "rgba(218,201,235,0.7)" } : {}}
                aria-label={`Show benefit ${idx + 1}`}
                aria-current={idx === i ? true : undefined}
              />
            ))}
          </div>

          <div className="mt-5">
            <Link
              to={ctaHref}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1D2F4F] to-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]"
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