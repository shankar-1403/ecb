import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Users, Building2, Banknote, Cpu, Megaphone, Sparkles, Target, LayoutDashboard, Scale, LineChart, Building, Truck, BadgeCheck, TrendingUp, GraduationCap, Handshake, Network, Briefcase, UsersRound, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const SERVICE_ITEMS = [
  { title: "Finance & Funding", Icon: Banknote },
  { title: "Technology Enablement", Icon: Cpu },
  { title: "Marketing & Branding", Icon: Megaphone },
  { title: "Government Schemes & Subsidies", Icon: Building2 },
  { title: "Entrepreneurial Ideation & Orientation", Icon: Target },
  { title: "Business Planning & Strategy", Icon: LayoutDashboard },
  { title: "Company Formation & Legal Structuring", Icon: Scale },
  { title: "Financial Structuring & Advisory", Icon: LineChart },
  { title: "Infrastructure & Real Estate Solutions", Icon: Building },
  { title: "Human Resources & Talent Acquisition", Icon: Users },
  { title: "Sales Distribution & Logistics", Icon: Truck },
  { title: "Credit Rating & Financial Health", Icon: BadgeCheck },
  { title: "Growth Strategy & Expansion", Icon: TrendingUp },
  { title: "Consulting Coaching & Training", Icon: GraduationCap },
  { title: "Liaisoning & Government Connect", Icon: Handshake },
  { title: "Networking & Business Visibility", Icon: Network },
  { title: "Virtual CXO Services", Icon: Briefcase },
  { title: "Strategic Advisory Boards", Icon: UsersRound },
  { title: "CSR & Social Impact", Icon: HeartHandshake },
];

function Services() {
  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 85% 70%, hsl(145, 60%, 40%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up mx-auto">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span className="text-sm font-semibold">Our Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Programmes built around{" "}
            <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
              how you actually grow
            </span>
          </h1>

          <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto">
            Every pillar below is designed to compound: better networks, sharper positioning, and clearer  next steps
            for MSMEs and founders across India.
          </p>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-28">
        <div className="relative mx-auto w-full max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-5 md:gap-16 md:px-6 lg:items-center">

          <div className="w-full">
            <span className="inline-block px-4 py-1 rounded-full border border-amber-500 bg-amber-500/5 text-amber-500 text-xs font-semibold mb-5">
              Full spectrum
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-10">
              Services offered through the ECB network
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              Elite Ambassadors deliver and orchestrate high-trust outcomes across building, scaling, and governing a modern enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {SERVICE_ITEMS.map(({ title, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{
                  duration: 0.35,     // faster animation
                  delay: i * 0.04,    // tighter stagger (was slow before)
                  ease: "easeOut",
                }}
                className="group relative rounded-xl p-[1px] transition-all duration-300 hover:-translate-y-1"
              >

              
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/40 via-transparent to-green-500/40 opacity-70 group-hover:opacity-100 transition duration-300" />

               
                <div className="relative z-10 flex items-center gap-4 w-full rounded-xl bg-white p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.25)] overflow-hidden">

                 
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-green-500/5 opacity-80 pointer-events-none" />

                 
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 text-amber-500 ring-1 ring-amber-500/30 transition-all duration-300 group-hover:bg-amber-100 group-hover:ring-amber-500">
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-6 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" />
                    </span>
                  </span>

                 
                  <div className="relative z-10 flex-1">
                    <h3 className="text-sm sm:text-base font-bold leading-snug break-words transition-colors duration-300 group-hover:text-amber-600">
                      {title}
                    </h3>
                  </div>

                  
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                    <div className="h-full w-0 bg-gradient-to-r from-amber-500 via-amber-400 to-green-500 transition-all duration-300 group-hover:w-full" />
                  </div>

                  
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Services;
