import { cn } from "../lib/utils";

/** Shared service / offering card for Home carousel and Services page. */
export function ServiceOfferingCard({ number, icon: Icon, title, desc, footer, className }) {
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-gray-200/95 bg-white",
        "shadow-[0_2px_12px_-2px_rgba(29,47,79,0.06)] ring-1 ring-black/5",
        "transition duration-300 ease-out",
        "hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-[0_16px_40px_-12px_rgba(29,47,79,0.1)] hover:ring-amber-500/10",
        className
      )}
    >
      {/* Restrained brand accent + soft depth */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-linear-to-b from-amber-400/90 via-amber-500/70 to-amber-600/50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 80% at 100% 0%, rgba(245, 158, 11, 0.06) 0%, transparent 55%), radial-gradient(80% 60% at 0% 100%, rgba(29, 47, 79, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative flex flex-1 flex-col pl-5 pr-6 pb-6 pt-6 md:pl-6 md:pr-8 md:pb-8 md:pt-8">
        {number ? (
          <span className="pointer-events-none absolute bottom-0 right-2 font-bold tabular-nums text-[4.5rem] leading-none text-gray-100 transition-colors duration-300 group-hover:text-amber-500/5 md:text-[5.25rem]">
            {number}
          </span>
        ) : null}

        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/60 bg-amber-50/90 text-amber-800 shadow-sm transition duration-300 group-hover:border-amber-500/80 group-hover:bg-amber-50 group-hover:shadow-md">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>

        <h3 className="relative mt-5 text-xl font-bold tracking-tight text-[#1D2F4F] md:text-2xl">{title}</h3>
        <div className="relative mt-3 flex items-center gap-2">
          <span className="h-0.5 w-10 rounded-full bg-amber-500/75" />
          <span className="h-px flex-1 max-w-[4.5rem] bg-gray-200" />
        </div>
        <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem] md:leading-relaxed">
          {desc}
        </p>

        {footer ? <div className="relative z-10 mt-6 shrink-0">{footer}</div> : null}
      </div>
    </div>
  );
}
