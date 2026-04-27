import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Users, Building2, Banknote, Cpu, Megaphone, Sparkles,Target,LayoutDashboard,Scale,LineChart,Building,Truck,BadgeCheck,TrendingUp,GraduationCap,Handshake,Network,Briefcase,UsersRound,HeartHandshake } from "lucide-react";

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

      <section className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <span className="inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-500">
              Core pillars
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1D2F4F] md:text-3xl">How ECB supports you</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Each programme is built to compound—networks, clarity, and momentum for MSMEs and founders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_ITEMS.map(({ title, Icon }, i) => (
              <div className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-900/4 transition-all duration-300 hover:border-amber-500/35 hover:shadow-lg hover:shadow-amber-500/20" transition={{ duration: 0.22 }}>
                  <div className="absolute left-0 top-0 h-full w-0.75 bg-linear-to-b from-amber-400/90 via-amber-500/70 to-amber-600/50" aria-hidden />
                  <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-slate-50 to-slate-100/80 text-amber-500 ring-1 ring-amber-500/80 transition-colors group-hover:bg-amber-500 group-hover:text-amber-500 group-hover:ring-amber-500"
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                      <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                      <h3 className="text-base font-bold leading-snug">{title}</h3>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Services;
