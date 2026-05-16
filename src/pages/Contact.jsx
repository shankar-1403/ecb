import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { push, ref } from 'firebase/database';
import { db } from './../lib/firebase';
import Button from "../components/ui/button";
import { ContactFormCard } from "../components/ContactForm";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2,MessageSquare } from "lucide-react";
import { p } from "framer-motion/client";
import CircleLoader from "../components/CircularLoader";
import { useSnackbar } from "../components/SnackbarContext";

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
  "hover:border-gray-300 hover:bg-white focus:border-[#143973] focus:bg-white focus:ring-4 focus:ring-[#143973]/15";

const contactItems = [
  { icon: Mail, label: "Email", value: "ecb@ec-bharat.com", href: "mailto:ecb@ec-bharat.com" },
  { icon: Phone, label: "Phone", value: "+917208812845", href: "tel:+91 72088 12845" },
  { icon: MapPin, label: "Location", value: "Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400093", href: "https://www.google.com/maps?q=Lodha+Supremus+Andheri+East+Mumbai" },
];

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-gray-800">
      {children}
    </label>
  );
}

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const { showSnackbar } = useSnackbar()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      showSnackbar('Please fill in name, phone and email',"error");
      return;
    }

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };
    try {
      setSubmit(true);
      await push(ref(db, 'contacts'), {
        ...payload,
        page:'contact',
        createdAt: new Date().toISOString(),
      });

      setFormData(initialFormData);
      showSnackbar('Your form has been submitted successfully',"success")
    } catch (error) {
      showSnackbar('Form submission failed', "error");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 md:pt-40 md:pb-16">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 40%, hsl(214, 71%, 40%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(210, 50%, 30%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-5 md:px-6">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#143973]/10 text-[#143973] text-sm font-semibold mb-4">
              <div className="flex items-center gap-2">
                <div>
                  <Phone className="w-3 h-3 text-[#143973] shrink-0" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Get in touch</span>
                </div>
              </div>
            </div>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold">
            Let&apos;s build{" "}
            <span className="bg-linear-to-br from-[#143973] via-[#143973] to-[#143973] bg-clip-text text-transparent">
              together
            </span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">For partnerships, memberships, or general enquiries, reach out and our team will guide you to the right person</p>
        </div>
      </section>

      <section className="relative pb-20 md:py-15">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-5 md:gap-8 lg:gap-10">
            <div className="md:col-span-2 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#143973]/15 to-[#143973]/5 ring-1 ring-[#143973]/10">
                      <Icon className="h-5 w-5 text-[#143973]" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                      <p className="mt-1 font-semibold text-foreground">{value}</p>
                    </div>
                  </>
                );
                const cardClass =
                  "flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:border-[#143973]/25 hover:shadow-lg";
                return href ? (
                  <a key={label} href={href} target={label === "Location" ? "_blank" : "_self"} rel="noopener noreferrer" className={cardClass}>
                    {inner}
                  </a>
                ) : (
                  <div key={label} className={cardClass}>
                    {inner}
                  </div>
                );
              })}
              <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#1D2F4F] to-[#15243d] p-6 text-white shadow-lg">
                <h2 className="text-lg font-bold">Membership Assistance</h2>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  We respond to most enquiries within 24 hours. For membership applications, include your sector
                  and one concrete goal so we can tailor our reply.
                </p>
                <Link
                  to="/membership/elite-ambassador"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
                >
                  Membership overview
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_24px_60px_-15px_rgba(29,47,79,0.18)] md:rounded-[1.75rem]"
              >
                <div className="h-1.5 w-full bg-linear-to-r from-[#143973] via-white to-[#143973]" aria-hidden />
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#143973]/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#1D2F4F]/5 blur-3xl pointer-events-none" />

                <div className="relative border-b border-gray-100 bg-linear-to-br from-gray-50/90 to-white px-6 py-5 md:px-8 md:py-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#143973] to-[#143973] text-white shadow-lg shadow-[#143973]/25">
                      <MessageSquare className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1D2F4F] md:text-xl">Send us a message</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Share your details and connect with the right support for your business.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-5 px-6 py-6 md:space-y-6 md:px-8 md:py-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name <span className="text-red-500">*</span></Label>
                      <input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={fieldBase} maxLength={100}/>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
                      <input id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleInputChange} className={fieldBase} maxLength={10}/>
                    </div>
                    
                  </div>
                  <div>
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className={fieldBase} maxLength={255}/>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea id="message" name="message" rows={1} placeholder="How can we help you?" value={formData.message} onChange={handleInputChange} className={`${fieldBase} min-h-30 resize-y leading-relaxed`}/>
                  </div>
                  <div className="flex justify-between items-center">
                    <Button type="submit" size="lg" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#143973] to-[#143973] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]" disabled={submit}>
                      {submit ? (
                        <div className="flex items-center gap-2">
                          <CircleLoader />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
