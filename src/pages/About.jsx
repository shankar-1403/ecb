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
  Sparkles,Eye,
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up mx-auto">
          <InfoIcon className="w-3 h-3 text-amber-500" />
           <span className="text-sm font-semibold">About ECB</span>
        </div>

      <h1 className="mt-5 max-w-4xl mx-auto text-3xl font-bold leading-tight tracking-tight text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
        Entrepreneurs Connect Bharat{" "}
        <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
        (ECB)
        </span>
      </h1>

  <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg">
    ECB convenes serious practitioners - from Big-4 alumni boutiques to specialist firms - around a shared mandate: dependable outcomes for founders, family businesses, and MSMEs navigating complexity at speed.
  </p>
 </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-[#1D2B4E]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-6 md:py-10">
              <div className="mb-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">OUR PURPOSE</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4">Vision & Mission</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group border border-white/60 overflow-hidden rounded-2xl">
                      <div className="absolute -bottom-20 -right-30 w-100 h-100 bg-amber-500/30 opacity-20 rounded-full"></div>
                      <div className="relative bg-card/80 backdrop-blur-sm p-8 md:p-8 h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                          <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                              <Eye className="w-7 h-7 text-white" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Our Vision</h2>
                          <div className="w-16 h-1 bg-linear-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-5" />
                          <p className="text-white leading-relaxed text-sm">To build India's most powerful entrepreneur support ecosystem</p>
                      </div>
                  </div>

                  <div className="relative group border border-white/60 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-linear-to-br from-amber-500 via-white to-green-600 rounded-2xl opacity-20 transition-opacity duration-500 blur-xl" />
                      <div className="relative bg-card/80 backdrop-blur-sm p-8 md:p-8 h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                          <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                              <Target className="w-7 h-7 text-white" />
                          </div>
                          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Our Mission</h2>
                          <div className="w-16 h-1 bg-linear-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-5" />
                          <p className="text-white leading-relaxed text-sm">Enable entrepreneurs with trusted experts across every business function.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Our Objective */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
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
                <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Objective</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed sm:text-base">Clear priorities that guide how ECB shows up for entrepreneurs, MSMEs, and startups across India.</p>
                <div className="w-16 h-1 bg-linear-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-5" />
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
                      "hover:border-amber-400/35 hover:from-white/12 hover:shadow-[0_24px_60px_-20px_rgba(245,158,11,0.12)]",
                      wide && "sm:col-span-2",
                    )}
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden/>
                    <div className="relative flex items-center gap-4 sm:gap-5">
                      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                        <div className="flex h-14 w-14 md:h-10 md:w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/25">
                          <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.75} />
                        </div>
                      </div>
                      <div>
                        <h4 className="md:text-base font-semibold leading-snug sm:text-xl">{obj.text}</h4>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden/>
                  </motion.article>
                );
              })}
            </ObjectivesGrid>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#1D2F4F] p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between md:gap-8 md:rounded-3xl md:p-12 lg:p-14">
            <div className="min-w-0">
              <h5 className="text-xl font-bold sm:text-2xl md:text-3xl">Ready to grow with us?</h5>
              <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">Membership opens doors to curated sessions, peer circles, and introductions aligned to your stage and sector.</p>
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
