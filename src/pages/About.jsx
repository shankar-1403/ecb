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
import {ArrowRight, Target, Users, Lightbulb, HeartHandshake, InfoIcon, Building2, TrendingUp, Sparkles, Eye} from "lucide-react";
import img_2 from "../assets/employees/2.png"
import img_3 from "../assets/employees/3.png"
import img_4 from "../assets/employees/4.png"
import img_5 from "../assets/employees/5.png"
import img_6 from "../assets/employees/6.png"
import img_7 from "../assets/employees/7.png"
import img_8 from "../assets/employees/8.png"
import img_9 from "../assets/employees/9.png"
import img_10 from "../assets/employees/10.png"
import img_11 from "../assets/employees/11.png"
import img_12 from "../assets/employees/12.png"
import img_13 from "../assets/employees/13.png"
import img_14 from "../assets/employees/14.png"
import img_15 from "../assets/employees/15.png"
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
  { name: "Dr. G. Rameshkumar", role: "Chairman", img: rameshkumar_img },
];

const team = [
  { name: "Mr. Vijay Sharma", img: vijay_sharma },
  { name: "CA Pooja Dubey", img: pooja_dubey },
  { name: "Mr. Ashwini Bhatia", img: bhatiasir_ },
  { name: "Mrs. Puja Sharma", img: puja_sharma },
  { name: "Mr. Sanjay Jhanwar", img: sanjay_jhanwar },
  { name: "Mr. Takshil Kumar", img: takshilkumar },
];

const employee = [
  { name: "Mr. Vijay Sharma", img: vijay_sharma },
  { name: "CA Pooja Dubey", img: pooja_dubey },
  { name: "Mr. Ashwini Bhatia", img: bhatiasir_ },
  { name: "Mrs. Puja Sharma", img: puja_sharma },
  { name: "Mr. Sanjay Jhanwar", img: sanjay_jhanwar },
  { name: "Mr. Takshil Kumar", img: takshilkumar },
];

const employees = [
  { name: "Mr. Ganpat Malviya",img: img_2 },
  { name: "Mr. Rohan Yadav",img: img_3 },
  { name: "Mr. Suraj Dubey",img: img_13 },
  { name: "Mr. Jigar Thakkar",img: img_11 },
  { name: "Ms. Gurveen Kaur",img: img_5 },
  { name: "Mr. Vinod Dubey",img: img_9 },
  { name: "Mr. Aditya Dogra",img: img_6 },
  { name: "Mr. Sachin Kaushal",img: img_7 },
  { name: "Mr. Shankar Manjrekar",img: img_15 },
  { name: "Mr. Sarang Krishna",img: img_4 },
  { name: "Mr. Rayhan Shaikh",img: img_8 },
  { name: "Mr. Rambo Dogra",img: img_12 },
  { name: "Ms. Trupti Jaiswal",img: img_14 },
  { name: "Ms. Mrunal Kamble",img: img_10 },
];

function About() {
  return (
    <Layout>

      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-38 md:pb-20">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 40%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(145, 60%, 40%) 0%, transparent 45%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#143973]/10 text-[#143973] text-sm font-semibold mb-4 tracking-wide">
              <div className="flex items-center gap-2">
                <div>
                  <InfoIcon className="w-3 h-3 text-[#143973]" />
                </div>
                <div>
                  <span className="text-sm font-semibold">ABOUT ECB</span>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-5 max-w-4xl mx-auto text-3xl font-bold leading-tight tracking-tight text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
            Entrepreneurs Connect Bharat{" "}
            <span className="bg-linear-to-br from-[#143973] via-[#143973] to-[#143973] bg-clip-text text-transparent">(ECB)</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-muted-foreground sm:text-lg">
            Entrepreneurs Connect Bharat (ECB), backed by PCRED Group, is a growth-driven business ecosystem connecting startups, MSMEs, and entrepreneurs with investors, corporates, and end-to-end solutions to drive funding, partnerships, and scalable growth.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 sm:py-14 md:py-16">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-5 md:px-6">
          <div className="lg:hidden">
            <div className="text-center mb-8">
              <span className="inline-flex rounded-full border border-[#143973]/35 bg-[#143973]/10 px-4 py-1.5 text-sm font-semibold text-[#143973]">What we pursue</span>
              <h2 className="mt-4 text-3xl font-bold text-[#1D2F4F]">Our Objectives</h2>
              <p className="mt-3 text-sm text-muted-foreground">Clear priorities guiding ECB across India.</p>
              <div className="w-16 h-1 bg-linear-to-r from-[#143973] via-white to-[#143973] rounded-full mt-3 mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: "Promote entrepreneurship in India", detail: "Building the foundation for a thriving ecosystem." },
                { icon: Building2, title: "Support MSMEs and startups", detail: "Connecting businesses with the right resources." },
                { icon: Users, title: "Create networking opportunities", detail: "500+ entrepreneurs across 20+ states." },
                { icon: TrendingUp, title: "Provide business growth support", detail: "End-to-end guidance for scaling businesses." },
                { icon: Sparkles, title: "Encourage innovation and collaboration", detail: "Fostering creative thinking across ECB to build impactful and innovation across all teams." },
              ].map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="group rounded-2xl p-5 border border-amber-200/50 bg-white/90 hover:border-amber-400/60 hover:shadow-[0_12px_32px_-8px_rgba(245,158,11,0.2)] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#143973]/10 border border-[#143973]/20 flex items-center justify-center mb-3 group-hover:bg-[#143973] group-hover:border-[#143973] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#143973] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1D2F4F] group-hover:text-[#143973] transition-colors">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{detail}</p>
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
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#143973]/10 text-[#143973] text-sm font-semibold mb-4 tracking-wide uppercase">What we stand for</span>
                <h4 className="text-5xl font-bold text-[#1D2F4F]">Our Objectives</h4>
                <p className="mt-2 text-base text-muted-foreground">Clear priorities guiding ECB across India.</p>
                <div className="w-14 h-1 bg-linear-to-r from-[#143973] via-white to-[#143973] rounded-full mt-3 mx-auto" />
              </div>

              {[
                { angle: 200, floatClass: "f0", icon: Lightbulb, title: "Promote entrepreneurship in India", detail: "Building the foundation for a thriving ecosystem." },
                { angle: 240, floatClass: "f1", icon: Building2, title: "Support MSMEs and startups", detail: "Connecting businesses with the right resources." },
                { angle: 270, floatClass: "f2", icon: Users, title: "Create networking opportunities", detail: "5000+ entrepreneurs across 20+ states." },
                { angle: 300, floatClass: "f3", icon: TrendingUp, title: "Provide business growth support", detail: "End-to-end guidance for scaling businesses." },
                { angle: 340, floatClass: "f4", icon: Sparkles, title: "Encourage innovation and collaboration", detail: "Fostering creative thinking across ECB to build impactful and innovation across all teams." },
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
                    <div className="ci w-10 h-10 rounded-xl bg-[#143973]/10 border border-[#143973]/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#143973]" />
                    </div>

                    <p className="ct text-sm font-semibold text-[#1D2F4F] mb-1.5">{title}</p>
                    <p className="cd text-xs text-gray-500">{detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <div style={{ background: "linear-gradient(135deg, #fff8ed 0%, #f0fdf4 50%, #fff8ed 100%)" }}>

        <section className="relative overflow-hidden pt-14 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-14">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#143973]/10 text-[#143973] text-sm font-semibold mb-4 tracking-wide">
              <span className="text-sm font-semibold">OUR TEAM</span>
            </div>
            <h5 className="mt-5 max-w-4xl mx-auto text-3xl font-bold text-[#1D2F4F] sm:text-4xl md:text-5xl lg:text-6xl">
              Meet the People Behind{" "}
              <span className="bg-linear-to-br from-[#143973] via-[#143973] to-[#143973] bg-clip-text text-transparent">ECB</span>
            </h5>
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground sm:text-lg">A collective of professionals supporting entrepreneurs and MSMEs across India.</p>
          </div>
        </section>

        <section className="py-5 sm:py-6 md:py-1">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-7">
            <h5 className="text-3xl md:text-4xl font-bold text-[#1D2F4F] text-center">Leadership</h5>
            <div className="mt-12 flex justify-center">
              {leadership.map((member, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl lg:max-w-6xl group">
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ scale: 1.03 }} className="relative md:col-span-2 lg:col-span-1">
                    <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#143973] via-orange-500 to-green-500 opacity-20 blur-lg group-hover:opacity-40 transition"></div>
                    <img src={member.img} alt={member.name} className="relative w-full h-auto object-cover rounded-2xl shadow-lg" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="text-center md:text-left md:col-span-2 lg:col-span-1 lg:max-w-none">
                    <h5 className="text-2xl font-bold text-[#1D2F4F]">{member.name}</h5>
                    <p className="text-[#143973] font-semibold mt-1">{member.role}</p>
                    <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Dr. G. Rameshkumar, Chairman of Entrepreneur Connect Bharat (ECB), is the Chief Business Officer at <a href="https://www.pcred.org/" target="_blank" className="text-[#143973]">PCRED Venture Pvt. Ltd</a>. and Executive Director at <a href="https://insurath.com/" target="_blank" className="text-[#143973]">Insurath</a>, with over 25 years of experience in the BFSI and MSME ecosystem. He has supported 100,000+ MSMEs across India in accessing finance, scaling growth, and leveraging government schemes.
                    </p>
                    <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Dr. G. Rameshkumar also played a key leadership role in Bharat Manch, driving partnerships and transforming it into an action-driven platform for MSME growth, with a strong focus on building sustainable business ecosystems and bridging the gap between entrepreneurs and financial institutions.</p>
                    <a href="https://www.drgrameshkumar.com/" target="_blank" className="text-[#143973] underline mt-4">https://www.drgrameshkumar.com/</a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
            <h5 className="text-3xl md:text-4xl font-bold text-[#1D2F4F]">Management and Board Members</h5>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} viewport={{ once: true }} className="group relative rounded-2xl border border-amber-200/40 shadow-md overflow-hidden transition hover:shadow-2xl bg-white">
                  <div className="p-2">
                    <div className="overflow-hidden bg-gray-300/70 rounded-xl">
                      <img src={member.img} alt={member.name} className="w-full h-auto max-h-55 sm:max-h-60 md:h-80 lg:h-70 md:max-h-none object-contain md:object-cover" />
                    </div>
                  </div>
                  <div className="pb-3 px-2">
                    <h4 className="text-lg font-semibold text-[#143973] group-hover:text-[#143973] transition">{member.name}</h4>
                    <p className="text-sm text-[#143973]">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl sm:px-5 md:px-6 relative pb-20">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
          <div className="text-center bg-[#1D2F4F] px-4 py-8 rounded-3xl">
            <h5 className="text-3xl md:text-4xl font-bold text-white">Internal Stakeholders</h5>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {employees.map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} viewport={{ once: true }} className="group relative rounded-2xl border border-amber-200/40 shadow-md overflow-hidden transition hover:shadow-2xl bg-white">
                  <div className="p-2">
                    <div className="overflow-hidden bg-gray-300/70 rounded-xl">
                      <img src={member.img} alt={member.name} className="w-full h-auto max-h-55 sm:max-h-60 md:h-80 lg:h-70 md:max-h-none object-contain md:object-cover" />
                    </div>
                  </div>
                  <div className="pb-3 px-2">
                    <h4 className="text-lg font-semibold text-[#143973] group-hover:text-[#143973] transition">{member.name}</h4>
                    <p className="text-sm text-[#143973]">{member.role}</p>
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
                <h7 className="text-xl font-bold sm:text-2xl md:text-3xl">Ready to grow with us?</h7>
                <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">Opens doors to curated sessions, peer circles, and introductions aligned to your stage and sector.</p>
              </div>
              <Link to="/membership/partner-with-us" className="w-full shrink-0 sm:w-auto">
                <Button size="lg" className="w-full bg-[#143973] shadow-lg shadow-[#143973]/30 sm:w-auto">
                  Explore Partnership
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