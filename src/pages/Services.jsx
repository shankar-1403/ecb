import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import { ServiceOfferingCard } from "../components/ServiceOfferingCard";
import { ArrowRight, Users, Building2, Rocket, BookOpen, Heart, Sparkles } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Users,
    title: "Business networking",
    desc: "Structured meetups, sector circles, and warm introductions so relationships turn into pipeline and partnerships.",
  },
  {
    number: "02",
    icon: Building2,
    title: "MSME support",
    desc: "Plain-language clarity on schemes, registrations, and programmes that affect cash flow, compliance, and growth.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Growth opportunities",
    desc: "Visibility for your offering, access to buyer conversations, and signals on where demand is heating up.",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Learning & development",
    desc: "Workshops and expert sessions on positioning, digital growth, fundraising readiness, and operational excellence.",
  },
  {
    number: "05",
    icon: Heart,
    title: "Community support",
    desc: "A culture of generosity—founders sharing playbooks, vendors, and lessons so no one has to learn everything the hard way.",
  },
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up lg:mx-0 mx-auto">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Programmes built around{" "}
            <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
              how you actually grow
            </span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Every pillar below is designed to compound: better networks, sharper positioning, and clearer next steps
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map(({ icon: Icon, title, desc, number }) => (
              <ServiceOfferingCard
                key={title}
                number={number}
                icon={Icon}
                title={title}
                desc={desc}
                footer={
                  <Link
                    to="/contact"
                    className="group/link inline-flex w-fit items-center gap-1.5 rounded-lg border border-amber-500/80 bg-white px-4 py-2.5 text-sm font-semibold text-[#1D2F4F] shadow-sm transition hover:border-amber-500 hover:bg-amber-50/70 hover:pl-5 hover:shadow"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Services;
