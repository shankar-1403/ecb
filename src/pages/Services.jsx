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

      <section
        className="relative py-16 sm:py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #fefce8 0%, #f0fdf4 50%, #fff7ed 100%)",
        }}
      >
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-6">

          <div className="w-full mb-12">
            <span className="inline-block px-4 py-1 rounded-full border border-amber-500 bg-amber-500/5 text-amber-500 text-xs font-semibold mb-5">
              Full spectrum
            </span>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Services offered through the ECB network
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
              Elite Ambassadors deliver and orchestrate high-trust outcomes across building, scaling, and governing a modern enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_ITEMS.map(({ title, Icon }, i) => {
              const total = SERVICE_ITEMS.length;
              const lastRowCount = total % 3;
              const isOnlyInLastRow = lastRowCount === 1 && i === total - 1;

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.28, delay: i * 0.045, ease: "easeOut" }}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                  className={`group relative ${isOnlyInLastRow ? "lg:col-start-2" : ""}`}
                >
                  <div
                    className="relative flex flex-row items-center gap-4 rounded-2xl px-5 py-5 min-h-[72px] overflow-hidden transition-all duration-300 group-hover:shadow-[0_16px_40px_-8px_rgba(245,158,11,0.25)]"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 100%)",
                      backdropFilter: "blur(16px) saturate(180%)",
                      WebkitBackdropFilter: "blur(16px) saturate(180%)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      boxShadow: "0 4px 24px -4px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-40 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(255,255,255,0.1) 40%, rgba(34,197,94,0.05) 100%)",
                      }}
                    />
                    <div
                      className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

                    <div className="relative z-10 shrink-0 self-center">
                      <div className="relative flex h-12 w-12 items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
                          <motion.rect
                            x="2" y="2" width="44" height="44" rx="12"
                            fill="none"
                            stroke="rgba(245,158,11,0.5)"
                            strokeWidth="1.5"
                            strokeDasharray="140"
                            strokeDashoffset="140"
                            animate={{ strokeDashoffset: [140, 0, 140] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                            className="group-hover:opacity-0 transition-opacity duration-200"
                          />
                        </svg>

                        <div
                          className="absolute inset-0 rounded-xl group-hover:opacity-0 transition-opacity duration-300"
                          style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,248,230,0.5) 100%)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px -2px rgba(245,158,11,0.15)",
                          }}
                        />

                        <motion.div
                          className="relative z-10 text-amber-500 group-hover:text-white transition-colors duration-300"
                          animate={{ rotate: [0, 0, 8, -8, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2, times: [0, 0.6, 0.7, 0.85, 1] }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>

                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          animate={{
                            boxShadow: [
                              "0 0 0px 0px rgba(245,158,11,0)",
                              "0 0 10px 3px rgba(245,158,11,0.3)",
                              "0 0 0px 0px rgba(245,158,11,0)",
                            ],
                          }}
                          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                          style={{ borderRadius: "12px" }}
                        />
                      </div>
                    </div>

                    <div className="relative z-10 flex-1 self-center min-w-0">
                      <h3 className="text-sm sm:text-[0.9rem] font-semibold leading-snug text-slate-700 group-hover:text-white transition-colors duration-300">
                        {title}
                      </h3>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </Layout>
  );
}

export default Services;
