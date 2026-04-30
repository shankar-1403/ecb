import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import AboutImg from "../assets/about.webp";
import pooja_dubey from "../assets/teamwebp/pooja_dubey.webp";
import puja_sharma from "../assets/teamwebp/puja_sharma.webp";
import bhatiasir_ from "../assets/teamwebp/bhatiasir_.webp";
import rameshkumar_img from "../assets/teamwebp/rameshkumar_img.webp";
import vijay_sharma from "../assets/teamwebp/vijay_sharma.webp";
import sanjay_jhanwar from "../assets/teamwebp/sanjay_jhanwar.webp";
import takshilkumar from "../assets/teamwebp/takshilkumar.webp";
import {
  ArrowRight, Target, Users, Lightbulb, HeartHandshake, InfoIcon, Building2, TrendingUp, Sparkles, Eye,
} from "lucide-react";
import { cn } from "../lib/utils";

const objectives = [
  { text: "Promote entrepreneurship in India", icon: Lightbulb },
  { text: "Support MSMEs and startups", icon: Building2 },
  { text: "Create networking opportunities", icon: Users },
  { text: "Provide business growth support", icon: TrendingUp },
  { text: "Encourage innovation and collaboration", icon: Sparkles },
];

const objectiveFade = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const objectiveStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function ObjectivesGrid({ children, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-48px" });
  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={inView ? "show" : "hidden"} variants={objectiveStagger}>
      {children}
    </motion.div>
  );
}

const values = [
  { icon: Users, title: "Collaboration first", desc: "We believe stronger businesses are built when founders learn from each other and lift the ecosystem together." },
  { icon: Lightbulb, title: "Practical knowledge", desc: "Sessions and resources focus on what you can apply this week—not abstract theory disconnected from MSME reality." },
  { icon: HeartHandshake, title: "Inclusive growth", desc: "From first-time founders to scaling MSMEs, we design touchpoints that meet you where you are on the journey." },
];

const leadership = [
  { name: "Dr. G. Ramesh Kumar", role: "Chairman", img: rameshkumar_img },
];

const team = [
  { name: "Mr. Vijay Sharma", img: vijay_sharma },
  { name: "CA Pooja Dubey", img: pooja_dubey },
  { name: "Mr. Ashwini Bhatia", img: bhatiasir_ },
  { name: "Mrs. Puja Sharma", img: puja_sharma },
  { name: "Mr. Sanjay Jhanwar", img: sanjay_jhanwar },
  { name: "Mr. Takshil Kumar", img: takshilkumar },
];

function About() {
  return (
    <Layout>

      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 40%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(145, 60%, 40%) 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up mx-auto">
            <InfoIcon className="w-3 h-3 text-amber-500" />
            <span className="text-sm font-semibold">About ECB</span>
          </div>
          <h1 className="mt-5 max-w-4xl mx-auto text-3xl font-bold leading-tight tracking-tight text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
            Entrepreneurs Connect Bharat{" "}
            <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">(ECB)</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg">
            ECB convenes serious practitioners - from Big-4 alumni boutiques to specialist firms - around a shared mandate: dependable outcomes for founders, family businesses, and MSMEs navigating complexity at speed.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1D2B4E]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20">
          <div className="mb-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-4 tracking-wide">OUR PURPOSE</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-2">Vision & Mission</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Eye, title: "Our Vision", text: "To build India's most powerful entrepreneur support ecosystem — where every MSME has access to the right expertise, network, and opportunity to scale." },
              { icon: Target, title: "Our Mission", text: "Enable entrepreneurs with trusted experts across every business function — from finance and legal to marketing and technology — through a verified, pan-India network." },
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative group border border-white/20 overflow-hidden rounded-2xl hover:border-amber-500/40 transition-colors duration-300">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/8 transition-colors duration-300" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                <div className="relative p-7 sm:p-8 md:p-10 h-full">
                  <div className="w-fit rounded-2xl bg-amber-500 flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 p-3">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-white">{title}</h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-4" />
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div className="lg:col-span-5 xl:col-span-4" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex rounded-full border border-amber-500/35 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-400">What we pursue</span>
                <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Objective</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed sm:text-base">Clear priorities that guide how ECB shows up for entrepreneurs, MSMEs, and startups across India.</p>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-5" />
              </div>
            </motion.div>
            <ObjectivesGrid className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7 xl:col-span-8">
              {objectives.map((obj, index) => {
                const Icon = obj.icon;
                const wide = index === objectives.length - 1;
                return (
                  <motion.article key={obj.text} variants={objectiveFade} className={cn("group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-500 sm:rounded-3xl sm:p-6 hover:border-amber-400/35 hover:from-white/12 hover:shadow-[0_24px_60px_-20px_rgba(245,158,11,0.12)]", wide && "sm:col-span-2")}>
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
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
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                  </motion.article>
                );
              })}
            </ObjectivesGrid>
          </div>
        </div>
      </section>

      <div style={{ background: "linear-gradient(135deg, #fffbeb 0%, #f0fdf4 60%, #fff7ed 100%)" }}>

        <section className="relative overflow-hidden pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-14">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500 mb-4 mx-auto">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span className="text-sm font-semibold">Our Team</span>
            </div>
            <h1 className="mt-5 max-w-4xl mx-auto text-3xl font-bold text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
              Meet the People Behind{" "}
              <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">ECB</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground sm:text-lg">A collective of professionals supporting entrepreneurs and MSMEs across India.</p>
          </div>
        </section>

        <section className="py-5 sm:py-6 md:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D2F4F] text-center">Leadership</h2>
            <div className="mt-12 flex justify-center">
              {leadership.map((member, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-10 items-center max-w-4xl group">
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ scale: 1.03 }} className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-green-500 opacity-20 blur-lg group-hover:opacity-40 transition"></div>
                    <img src={member.img} alt={member.name} className="relative w-full h-auto max-h-[300px] sm:max-h-[350px] md:h-80 md:max-h-none object-contain md:object-cover rounded-2xl shadow-lg" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-[#1D2F4F]">{member.name}</h3>
                    <p className="text-amber-600 font-semibold mt-1">{member.role}</p>
                    <p className="mt-4 text-muted-foreground text-sm sm:text-base">A visionary leader guiding ECB to build a strong ecosystem for entrepreneurs and MSMEs.</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D2F4F]">Management Team</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} viewport={{ once: true }} className="group relative rounded-2xl bg-white/70 border border-amber-200/40 shadow-md overflow-hidden transition hover:shadow-2xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-auto max-h-[220px] sm:max-h-[240px] md:h-64 md:max-h-none object-contain md:object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#1D2F4F] group-hover:text-amber-600 transition">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </motion.div>
              ))}
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
              <Link to="/membership/elite-ambassador" className="w-full shrink-0 sm:w-auto">
                <Button size="lg" className="w-full bg-amber-500 shadow-lg shadow-amber-500/30 sm:w-auto">
                  Explore membership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>

    </Layout>
  );
}

export default About;