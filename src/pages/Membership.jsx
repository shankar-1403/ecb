import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  Layers,
  Bell,
  CalendarDays,
  Megaphone,
  Shield,
} from "lucide-react";

const benefits = [
  { text: "Networking opportunities", icon: Users },
  { text: "Business growth support", icon: TrendingUp },
  { text: "Access to business resources", icon: Layers },
  { text: "Updates on opportunities", icon: Bell },
  { text: "Participation in events & webinars", icon: CalendarDays },
  { text: "Visibility for your business", icon: Megaphone },
];

function Membership() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 85% 70%, hsl(145, 60%, 40%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
             
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up lg:mx-0 mx-auto">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span className="text-sm font-semibold">Membership</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1D2F4F] md:text-5xl lg:text-6xl lg:leading-[1.05]">
                Become a Member of{" "}
                <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
                  ECB
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                Join Entrepreneur Connect Bharat (ECB) and become part of a growing community of entrepreneurs and business
                professionals.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:from-amber-600 hover:to-amber-700 sm:w-auto"
                  >
                    Apply for Membership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-[#1D2F4F]/15 bg-white/90 text-base font-semibold text-[#1D2F4F] shadow-sm backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-amber-500/5 sm:w-auto"
                  >
                    Explore services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-amber-400/20 via-transparent to-green-600/15 blur-2xl lg:-inset-6" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-[#1D2F4F] via-[#243554] to-[#15243d] p-8 text-white shadow-2xl md:p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Shield className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-500/90">Why it matters</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
                      ECB is built for operators who want credible peers, practical sessions, and introductions that respect
                      your time.
                    </p>
                  </div>
                </div>
                <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
                  {[
                    { k: "500+", v: "Members & growing" },
                    { k: "28+", v: "States" },
                    { k: "100+", v: "Sessions" },
                  ].map(({ k, v }) => (
                    <div key={v}>
                      <p className="text-xl font-extrabold text-white md:text-2xl">{k}</p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/50 md:text-xs">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative border-t border-gray-200/80 bg-gray-50 py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="mx-auto max-w-3xl text-center md:max-w-2xl">
            <span className="inline-block rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              What you get
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1D2F4F] md:text-4xl">Membership Benefits</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-amber-500 to-green-600" />
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="overflow-hidden rounded-[1.75rem] border border-gray-200/90 bg-white shadow-[0_24px_60px_-20px_rgba(29,47,79,0.12)] ring-1 ring-black/5">
              <div className="h-1.5 w-full bg-linear-to-r from-amber-500 via-amber-400 to-green-600" />
              <div className="grid gap-px bg-gray-100/80 md:grid-cols-2">
                {benefits.map(({ text, icon: Icon }) => (
                  <div
                    key={text}
                    className="group flex gap-4 bg-white p-6 transition md:p-7 md:hover:bg-amber-500/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500/12 to-amber-600/5 ring-1 ring-amber-500/15 transition group-hover:from-amber-500 group-hover:to-amber-600 group-hover:ring-amber-500/40">
                      <Icon className="h-5 w-5 text-amber-700 transition group-hover:text-white" />
                    </div>
                    <div className="min-w-0 pt-1">
                      <p className="text-base font-medium leading-snug text-gray-800 md:text-[1.05rem]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-linear-to-br from-[#1D2B4E] via-[#243554] to-[#15243d] px-8 py-14 text-center shadow-2xl md:px-16 md:py-16">
            <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:20px_20px] opacity-50" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">Take the next step with ECB</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                Tell us about your business on the contact form - we&apos;ll follow up with membership details and how to get
                the most from the community.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="w-full min-w-[220px] bg-linear-to-r from-amber-500 to-amber-600 text-base font-semibold text-white shadow-lg shadow-amber-500/35 transition hover:from-amber-600 hover:to-amber-700 sm:w-auto"
                  >
                    Apply for Membership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full min-w-[220px] border-white/30 bg-white/5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
                  >
                    About ECB
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Membership;
