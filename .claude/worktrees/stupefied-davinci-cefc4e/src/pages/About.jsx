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
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
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

      <section
        className="relative overflow-hidden py-10 sm:py-14 md:py-16"

      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-5 md:px-6">


          <div className="lg:hidden">
            <div className="text-center mb-8">
              <span className="inline-flex rounded-full border border-amber-500/35 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-500">
                What we pursue
              </span>
              <h3 className="mt-4 text-3xl font-bold text-[#1D2F4F]">
                Our Objective
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Clear priorities guiding ECB across India.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 via-white to-green-600 rounded-full mt-3 mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: "Promote entrepreneurship in India", detail: "Building the foundation for a thriving ecosystem." },
                { icon: Building2, title: "Support MSMEs and startups", detail: "Connecting businesses with the right resources." },
                { icon: Users, title: "Create networking opportunities", detail: "500+ entrepreneurs across 20+ states." },
                { icon: TrendingUp, title: "Provide business growth support", detail: "End-to-end guidance for scaling businesses." },
                { icon: Sparkles, title: "Encourage innovation and collaboration", detail: "Fostering creative thinking across ECB." },
              ].map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="group rounded-2xl p-5 border border-amber-200/50 bg-white/90 hover:border-amber-400/60 hover:shadow-[0_12px_32px_-8px_rgba(245,158,11,0.2)] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                    <Icon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h4 className="text-sm font-semibold text-[#1D2F4F] group-hover:text-amber-600 transition-colors">
                    {title}
                  </h4>

                  <p className="text-xs text-muted-foreground mt-1">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>


          <div className="hidden lg:block">
            <style>{`
        @keyframes float0 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes float1 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-7px)} }
        @keyframes float3 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes float4 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }

        .f0{animation:float0 5s ease-in-out infinite;}
        .f1{animation:float1 6s ease-in-out infinite;}
        .f2{animation:float2 5.5s ease-in-out infinite;}
        .f3{animation:float3 6.5s ease-in-out infinite;}
        .f4{animation:float4 6s ease-in-out infinite;}

        .ocard{
          position:absolute;
          width:200px;
          background:rgba(255,255,255,0.95);
          border:1px solid rgba(245,158,11,0.25);
          border-radius:18px;
          padding:16px;
          backdrop-filter:blur(10px);
          transition:all 0.3s;
          z-index:5;
          box-shadow:0 6px 24px -6px rgba(0,0,0,0.08);
        }

        .ocard:hover{
          background:#1D2F4F;
          border-color:rgba(245,158,11,0.7);
          box-shadow:0 20px 48px -8px rgba(245,158,11,0.4);
          transform:scale(1.06) !important;
          z-index:20;
        }

        .ocard:hover .ci{background:rgba(245,158,11,0.25);}
        .ocard:hover .ct{color:white;}
        .ocard:hover .cd{color:rgba(255,255,255,0.65);}
      `}</style>

            <div className="relative w-full" style={{ height: "380px" }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 380">
                <path d="M 80 350 A 400 300 0 0 1 920 350" fill="none" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" strokeDasharray="6,5" />
              </svg>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-96 z-10">
                <span className="inline-flex rounded-full border border-amber-500/35 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-500 mb-2">
                  What we pursue
                </span>
                <h3 className="text-5xl font-bold text-[#1D2F4F]">Our Objective</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Clear priorities guiding ECB across India.
                </p>
                <div className="w-14 h-1 bg-gradient-to-r from-amber-500 via-white to-green-600 rounded-full mt-3 mx-auto" />
              </div>

              {[
                { angle: 200, floatClass: "f0", icon: Lightbulb, title: "Promote entrepreneurship in India", detail: "Building the foundation for a thriving ecosystem." },
                { angle: 240, floatClass: "f1", icon: Building2, title: "Support MSMEs and startups", detail: "Connecting businesses with the right resources." },
                { angle: 270, floatClass: "f2", icon: Users, title: "Create networking opportunities", detail: "500+ entrepreneurs across 20+ states." },
                { angle: 300, floatClass: "f3", icon: TrendingUp, title: "Provide business growth support", detail: "End-to-end guidance for scaling businesses." },
                { angle: 340, floatClass: "f4", icon: Sparkles, title: "Encourage innovation and collaboration", detail: "Fostering creative thinking across ECB." },
              ].map(({ angle, floatClass, icon: Icon, title, detail }) => {
                const rad = (angle * Math.PI) / 180;
                const cx = 50;
                const cy = 84;
                const rx = 40;
                const ry = 65;

                const x = cx + rx * Math.cos(rad);
                const y = cy + ry * Math.sin(rad);

                return (
                  <div
                    key={title}
                    className={`ocard ${floatClass}`}
                    style={{
                      left: `calc(${x}% - 100px)`,
                      top: `calc(${y}% - 85px)`,
                    }}
                  >
                    <div className="ci w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>

                    <p className="ct text-sm font-semibold text-[#1D2F4F] mb-1.5">
                      {title}
                    </p>

                    <p className="cd text-xs text-gray-500">
                      {detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <div style={{ background: "linear-gradient(135deg, #fff8ed 0%, #f0fdf4 50%, #fff8ed 100%)" }}>

      <section className="relative overflow-hidden pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-14">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2F4F]">Management and Board Members</h2>
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

    </Layout >
  );
}

export default About;