import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import { ContactFormCard } from "../components/ContactForm";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "info@ecbindia.org", href: "mailto:info@ecbindia.org" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Location", value: "New Delhi, India", href: null },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-40 md:pb-16">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(145, 60%, 40%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-5 md:px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold tracking-wide">
            GET IN TOUCH
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold">
            Let&apos;s build{" "}
            <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-600 bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Partnerships, press, membership, or a simple question—reach out and our team will route your message to the
            right person.
          </p>
        </div>
      </section>

      <section className="pb-20 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5 md:gap-8 lg:gap-10">
            <div className="md:col-span-2 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500/15 to-amber-600/5 ring-1 ring-amber-500/10">
                      <Icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                      <p className="mt-1 font-semibold text-foreground">{value}</p>
                    </div>
                  </>
                );
                const cardClass =
                  "flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:border-amber-500/25 hover:shadow-lg";
                return href ? (
                  <a key={label} href={href} className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <div key={label} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
              <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#1D2F4F] to-[#15243d] p-6 text-white shadow-lg">
                <h2 className="text-lg font-bold">Office hours</h2>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  We respond to most enquiries within two business days. For membership applications, include your sector
                  and one concrete goal so we can tailor our reply.
                </p>
                <Link
                  to="/membership"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition hover:text-amber-500"
                >
                  Membership overview
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              {submitted ? (
                <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-white shadow-[0_24px_60px_-15px_rgba(29,47,79,0.18)] md:rounded-[1.75rem]">
                  <div className="h-1.5 w-full bg-linear-to-r from-amber-500 via-amber-400 to-green-600" aria-hidden />
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
                  <div className="relative flex min-h-[420px] flex-col items-center justify-center px-8 py-14 text-center md:px-12">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-amber-600 text-white shadow-xl shadow-amber-500/35 ring-4 ring-amber-500/15">
                      <CheckCircle2 className="h-10 w-10" strokeWidth={2.2} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1D2F4F]">Thank you</h2>
                    <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                      Your message has been recorded. In a live deployment this would connect to your CRM or inbox—for
                      now, please email us directly at{" "}
                      <a
                        href="mailto:info@ecbindia.org"
                        className="font-semibold text-amber-600 underline-offset-2 hover:underline"
                      >
                        info@ecbindia.org
                      </a>
                      .
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-10 border-gray-300 px-8"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", message: "" });
                      }}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send another message
                    </Button>
                  </div>
                </div>
              ) : (
                <ContactFormCard
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleSubmit}
                  requireFields
                  submitLabel="Send message"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
