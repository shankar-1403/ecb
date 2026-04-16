import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import AboutImg from "../assets/about.webp";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  HeartHandshake,
  InfoIcon,
  Building2,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { cn } from "../lib/utils";

const objectives = [
  {
    text: "Promote entrepreneurship in India",
    icon: Lightbulb,
  },
  {
    text: "Support MSMEs and startups",
    icon: Building2,
  },
  {
    text: "Create networking opportunities",
    icon: Users,
  },
  {
    text: "Provide business growth support",
    icon: TrendingUp,
  },
  {
    text: "Encourage innovation and collaboration",
    icon: Sparkles,
  },
];

const objectiveFade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const objectiveStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

function ObjectivesGrid({ children, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-48px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={objectiveStagger}
    >
      {children}
    </motion.div>
  );
}

const values = [
  {
    icon: Users,
    title: "Collaboration first",
    desc: "We believe stronger businesses are built when founders learn from each other and lift the ecosystem together.",
  },
  {
    icon: Lightbulb,
    title: "Practical knowledge",
    desc: "Sessions and resources focus on what you can apply this week—not abstract theory disconnected from MSME reality.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive growth",
    desc: "From first-time founders to scaling MSMEs, we design touchpoints that meet you where you are on the journey.",
  },
];

function About() {
  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(145, 60%, 40%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up lg:mx-0 mx-auto">
            <InfoIcon className="w-3 h-3 text-amber-500" />
            <span className="text-sm font-semibold">About ECB</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
            About Entrepreneur Connect Bharat{" "}
            <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
              (ECB)
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Entrepreneur Connect Bharat (ECB) is a platform built with the vision of empowering entrepreneurs, MSMEs,
            startups, and business owners across India.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 py-12 sm:py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-5 md:gap-16 md:px-6 lg:grid-cols-2">
          <div className="order-2 min-w-0 lg:order-1">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Who we are</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We understand the challenges faced by small and growing businesses. Our goal is to bridge the gap between
              opportunities and entrepreneurs by providing the right support, connections, and resources.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ECB works towards creating awareness about business opportunities, collaboration possibilities, and growth
              strategies that help entrepreneurs succeed in today&apos;s competitive environment.
            </p>
            <p className="mt-6 border-l-4 border-amber-500 pl-4 text-base font-semibold leading-snug text-[#1D2F4F] sm:text-lg">
              We believe that when entrepreneurs grow, the nation grows.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/membership" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-amber-500 shadow-lg shadow-amber-500/25 sm:w-auto">
                  Join the network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full border-gray-300 sm:w-auto">
                  View what we offer
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative order-1 min-w-0 lg:order-2">
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-amber-500/15 to-green-600/15 blur-2xl sm:-inset-4" />
            <img
              src={AboutImg}
              alt="Entrepreneurs collaborating"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl sm:rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Our Objective */}
      <section className="relative overflow-hidden bg-[#1D2B4E] py-16 text-white sm:py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 15%, hsl(24, 90%, 50%) 0%, transparent 42%), radial-gradient(circle at 78% 85%, hsl(145, 50%, 42%) 0%, transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-amber-500/12 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-green-500/10 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              className="lg:col-span-5 xl:col-span-4"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex rounded-full border border-amber-500/35 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-400">
                  What we pursue
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Our Objective
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Clear priorities that guide how ECB shows up for entrepreneurs, MSMEs, and startups across India.
                </p>
                <div className="mt-6 h-1 w-24 rounded-full bg-linear-to-r from-amber-400 via-amber-500 to-green-500/80" />
             
              </div>
            </motion.div>

            <ObjectivesGrid className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7 xl:col-span-8">
              {objectives.map((obj, index) => {
                const Icon = obj.icon;
                const wide = index === objectives.length - 1;
                return (
                  <motion.article
                    key={obj.text}
                    variants={objectiveFade}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.09] to-white/[0.02] p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-500 sm:rounded-3xl sm:p-6",
                      "hover:border-amber-400/35 hover:from-white/[0.12] hover:shadow-[0_24px_60px_-20px_rgba(245,158,11,0.12)]",
                      wide && "sm:col-span-2",
                    )}
                  >
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25 sm:h-14 sm:w-14">
                          <Icon className="h-6 w-6 sm:h-6 sm:w-6" strokeWidth={1.75} />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">{obj.text}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-[0.9375rem]">{obj.hint}</p>
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                  </motion.article>
                );
              })}
            </ObjectivesGrid>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14">
            <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-600">
              WHAT DRIVES US
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">Values in action</h2>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              These principles shape how we design programmes, facilitate introductions, and show up for the community.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-amber-500/20 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8 md:rounded-3xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 text-amber-600 sm:h-6 sm:w-6" />
                </div>
                <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#1D2F4F] p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between md:gap-8 md:rounded-3xl md:p-12 lg:p-14">
            <div className="min-w-0">
              <h2 className="text-xl font-bold sm:text-2xl md:text-3xl">Ready to grow with us?</h2>
              <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                Membership opens doors to curated sessions, peer circles, and introductions aligned to your stage and
                sector.
              </p>
            </div>
            <Link to="/membership" className="w-full shrink-0 sm:w-auto">
              <Button size="lg" className="w-full bg-amber-500 shadow-lg shadow-amber-500/30 sm:w-auto">
                Explore membership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
