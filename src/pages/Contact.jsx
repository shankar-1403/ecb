import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { push, ref } from 'firebase/database';
import { db } from './../lib/firebase';
import Button from "../components/ui/button";
import { ContactFormCard } from "../components/ContactForm";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2,MessageSquare } from "lucide-react";
import { p } from "framer-motion/client";

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
  "hover:border-gray-300 hover:bg-white focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15";

const contactItems = [
  { icon: Mail, label: "Email", value: "contact@ec-bharat.com", href: "mailto:contact@ec-bharat.com" },
  { icon: Phone, label: "Phone", value: "+91 22 3512 0060", href: "tel:+91 22 3512 0060" },
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
  const [submitState, setSubmitState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!submitState) return;

    const timer = setTimeout(() => {
      setSubmitState('');
    }, 5000);

    return () => clearTimeout(timer); 
  }, [submitState]);

  useEffect(() => {
    if (!errorMessage) return;

    const timer = setTimeout(() => {
      setErrorMessage('');
    }, 5000);

    return () => clearTimeout(timer); 
  }, [errorMessage]);
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage('Please fill in name, phone and email.');
      return;
    }

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };
    try {
      await push(ref(db, 'contacts'), {
        ...payload,
        page:'contact',
        createdAt: new Date().toISOString(),
      });

      setFormData(initialFormData);
      setSubmitState('Form Submitted Successfully')
    } catch (error) {
      console.error('Form submission failed:', error);
    }
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

      <section className="relative pb-20 md:py-15">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />
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
                <h2 className="text-lg font-bold">Office hours</h2>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  We respond to most enquiries within 24 hours. For membership applications, include your sector
                  and one concrete goal so we can tailor our reply.
                </p>
                <Link
                  to="/membership/elite-ambassador"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition hover:text-amber-500"
                >
                  Membership overview
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_24px_60px_-15px_rgba(29,47,79,0.18)] md:rounded-[1.75rem]"
              >
                <div className="h-1.5 w-full bg-linear-to-r from-amber-500 via-white to-green-600" aria-hidden />
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#1D2F4F]/5 blur-3xl pointer-events-none" />

                <div className="relative border-b border-gray-100 bg-linear-to-br from-gray-50/90 to-white px-6 py-5 md:px-8 md:py-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25">
                      <MessageSquare className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1D2F4F] md:text-xl">Send us a message</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Share a few details and we&apos;ll get back to you as soon as we can.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-5 px-6 py-6 md:space-y-6 md:px-8 md:py-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Full name *</Label>
                      <input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={fieldBase} maxLength={100}/>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <input id="phone" name="phone" type="number" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleInputChange} className={fieldBase} maxLength={10}/>
                    </div>
                    
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className={fieldBase} maxLength={255}/>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea id="message" name="message" rows={1} placeholder="How can we help you?" value={formData.message} onChange={handleInputChange} className={`${fieldBase} min-h-30 resize-y leading-relaxed`}/>
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-lg bg-amber-500 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-600 hover:shadow-amber-500/40">Send Message</Button>
                  {submitState && <p className="text-sm text-green-500 text-center">{submitState}</p>}
                  {errorMessage && <p className="text-sm text-red-500 text-center">{errorMessage}</p>}
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
