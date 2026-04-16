import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94];

/** Fixed body height; description uses remaining space with scroll if needed. */
const SPOTLIGHT_BODY_CLASS = "h-[300px] md:h-[316px]";

/**
 * Hero visual: one benefit at a time with dots + arrows; auto-advances on a timer.
 * @param {Array<{ id: string|number, title: string, description: string, detail?: string, icon?: React.ComponentType<{ className?: string }> }>} items
 * @param {number} [intervalMs] — time between automatic slide changes
 */
export function HeroBenefitSpotlight({
  items,
  ctaHref = "/membership",
  ctaLabel = "Apply for membership",
  intervalMs = 5500,
}) {
  const [i, setI] = useState(0);
  const [pointerPause, setPointerPause] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const n = items?.length ?? 0;

  const go = useCallback(
    (dir) => {
      if (!n) return;
      setI((prev) => (prev + dir + n) % n);
    },
    [n],
  );

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
    const id = window.setInterval(() => {
      setI((prev) => (prev + 1) % n);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [n, pointerPause, reduceMotion, intervalMs]);

  const card = n > 0 ? items[i] : null;
  if (!n || !card) return null;

  const Icon = card.icon;

  return (
    <div className="relative w-full max-w-[min(22rem,calc(100vw-2rem))] shrink-0">
      <div className="pointer-events-none absolute -inset-8 rounded-4xl bg-linear-to-tr from-amber-500/15 via-white/0 to-green-600/12 blur-2xl" />

      <div
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_56px_-20px_rgba(29,47,79,0.3)] md:rounded-3xl"
        onPointerEnter={() => setPointerPause(true)}
        onPointerLeave={() => setPointerPause(false)}
      >
        {/* <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-amber-500/10 via-green-500/5 to-transparent" /> */}

        <div className="relative px-5 pb-5 pt-6 md:px-6 md:pb-6 md:pt-7">

          <div
            className={cn(
              "flex min-h-0 shrink-0 flex-col overflow-hidden px-0.5",
              SPOTLIGHT_BODY_CLASS,
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease }}
                className="flex h-full w-full flex-col"
              >
                {Icon ? (
                  <div className="relative mb-2.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-700 shadow-lg ring-[3px] ring-white">
                    {/* <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-amber-500/20 to-transparent" /> */}
                    <Icon className="relative h-6 w-6 text-white md:h-7 md:w-7" />
                  </div>
                ) : (
                  <div className="mb-2.5 h-15 w-15 shrink-0" aria-hidden />
                )}

                <p className="line-clamp-2 w-full max-w-76 shrink-0 text-balance text-base font-bold leading-snug text-[#1D2F4F] md:text-lg">
                  {card.title}
                </p>

                <div className="mx-auto mt-2 flex min-h-0 w-full max-w-76 flex-1 flex-col">
                  <div
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5 [scrollbar-gutter:stable]"
                    style={{ scrollbarWidth: "thin" }}
                  >
                    <p className="text-left text-sm leading-relaxed text-pretty text-gray-600">{card.description}</p>
                  </div>
                </div>

                <div className="h-20 w-full max-w-76 shrink-0">
                  {card.detail ? (
                    <div
                      className="h-full overflow-y-auto overscroll-contain rounded-xl border border-green-500/20 bg-green-500/5 px-3 py-2 text-left [scrollbar-gutter:stable]"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      <p className="text-xs leading-relaxed text-gray-600">{card.detail}</p>
                    </div>
                  ) : (
                    <div className="h-full rounded-xl border border-transparent" aria-hidden />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
            {items.map((it, idx) => (
              <button
                key={it.id}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  idx === i ? "w-7 bg-amber-500" : "w-2 bg-gray-300 hover:bg-gray-400",
                )}
                aria-label={`Show benefit ${idx + 1}`}
                aria-current={idx === i ? true : undefined}
              />
            ))}
          </div>

          <div className="mt-5">
            <Link
              to={ctaHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-linear-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/20 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
