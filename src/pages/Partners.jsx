import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import { ArrowRight, Sparkles, Shield, CheckCircle2, ClipboardList, FileText, UserRound, } from "lucide-react";
import { db } from "../lib/firebase";
import { push, ref } from "firebase/database";
import { useState, useEffect, useRef } from "react";
import CircleLoader from "../components/CircularLoader";
import { useSnackbar } from "../components/SnackbarContext";

const STEPS = [
  { title: "Get access to verified business requirements", Icon: UserRound },
  { title: "Work as an outsourced partner across multiple domains", Icon: ClipboardList },
  { title: "While you focus on your work, we bring the right opportunities", Icon: FileText },
  { title: "Grow with a structured, scalable ecosystem", Icon: CheckCircle2 },
]

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
  "hover:border-gray-300 hover:bg-white focus:border-[#143973] focus:bg-white focus:ring-4 focus:ring-[#143973]/15";

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-gray-800">
      {children}
    </label>
  );
}


const initialFormData = { company: '', company_website:'', company_size: '', turnover:'', name: '', designation: '', email: '', phone: '', location: '', experience: '', services: '', industry: '', background: '' };

function Partners() {
  const {showSnackbar} = useSnackbar();
  const [formData, setFormData] = useState(initialFormData);
  const [submit, setSubmit] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.company || !formData.company_size || !formData.turnover || !formData.name || !formData.designation || !formData.email || !formData.phone || !formData.location || !formData.experience || !formData.services || !formData.industry || !formData.background) {
      showSnackbar('Please fill all the required details in *','error');
      return;
    }

    const payload = {
      company: formData.company,
      company_size: formData.company_size,
      company_website: formData.company_website,
      turnover: formData.turnover,
      name: formData.name,
      designation: formData.designation,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      experience: formData.experience,
      services: formData.services,
      industry: formData.industry,
      background: formData.background,
    };
    try {
      setSubmit(true);
      await push(ref(db, 'partner'), {
        ...payload,
        createdAt: new Date().toISOString(),
      });

      setFormData(initialFormData);
      showSnackbar('Your form has been submitted successfully','success')
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setSubmit(false);
    }
  };
  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-38 md:pb-20">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, hsl(214, 71%, 40%) 0%, transparent 45%), radial-gradient(circle at 85% 70%, hsl(210, 50%, 30%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-5 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 justify-center">
            <div className="lg:col-span-12 flex flex-col items-center text-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>
                  <div className="flex items-center gap-2">
                    <div>
                      <Sparkles className="w-3 h-3 shrink-0" style={{ color: "#9B72C4" }} />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide">PARTNER</span>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1D2F4F] md:text-5xl lg:text-6xl lg:leading-[1.05] mx-auto">
                Become an Elite Solutions Subscriber/ Elite Solutions Provider
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
                Partner with us as an execution expert and deliver services to corporates and MSMEs through the ECB ecosystem. From finance and insurance to compliance and consulting, we connect you with real business opportunities.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center justify-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative page-content-mesh border-t border-slate-200/80 py-14 sm:py-20">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4 sticky top-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#143973]">Journey</p>
                <h2 className="mt-2 text-xl font-semibold">What This Means</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We are building a network of trusted partners who can execute, deliver, and scale services across industries.
                </p>
                <ol className="mt-8 space-y-4">
                  {STEPS.map(({ title, body, Icon }) => (
                    <li
                      key={title}
                      className="flex gap-4 rounded-xl border border-slate-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition hover:border-[#143973]/25 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(218,201,235,0.25)", border: "1px solid rgba(218,201,235,0.5)" }}>
                        <Icon className="h-5 w-5" style={{ color: "#9B72C4" }} aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#143973]"></p>
                        <p className="mt-0.5 font-semibold">{title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-gray-400/20">
                <div className="h-1.5 w-full bg-linear-to-r from-[#143973] via-white to-[#143973]" aria-hidden />
                <form onSubmit={handleSubmit} className="space-y-8 p-6 sm:p-10" >
                  <div>
                    <h3 className="text-lg font-semibold">Apply as Elite Solutions Subscriber/ Elite Solutions Provider</h3>
                    <p className="mt-2 text-sm text-slate-600">Fields marked by validation are required.</p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="name">Company name <span className="text-red-500">*</span></Label>
                      <input id="name" name="company" value={formData.company} onChange={handleInputChange} className={fieldBase} />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="company_website">Company website <span className="text-red-500">*</span></Label>
                      <input id="company_website" name="company_website" value={formData.company_website} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div className="relative">
                      <Label className="mb-4" htmlFor="company_size">Company size (Employee strength) <span className="text-red-500">*</span></Label>
                      <select id="company_size" name="company_size" value={formData.company_size} onChange={handleInputChange} className={`appearance-none ${fieldBase}`}>
                        <option value="" selected>-- select --</option>
                        <option value="0-100">0-100</option>
                        <option value="100-250">100-250</option>
                        <option value="250-500">250-500</option>
                        <option value="500+">500+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 top-6 flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <Label className="mb-4" htmlFor="turnover">Approximate turnover <span className="text-red-500">*</span></Label>
                      <select id="turnover" name="turnover" value={formData.turnover} onChange={handleInputChange} className={`appearance-none ${fieldBase}`}>
                        <option value="" selected>-- select --</option>
                        <option value="0-100cr">0-100cr</option>
                        <option value="100-250cr">100-250cr</option>
                        <option value="250-500cr">250-500cr</option>
                        <option value="Above 500cr">Above 500cr</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-4 top-6 flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Full name <span className="text-red-500">*</span></Label>
                      <input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={fieldBase} maxLength={100} />
                    </div>

                    <div>
                      <Label htmlFor="designation">Designation <span className="text-red-500">*</span></Label>
                      <input id="designation" name="designation" value={formData.designation} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
                      <input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={fieldBase} maxLength={10}/>
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="experience">Years of experience <span className="text-red-500">*</span></Label>
                      <input id="name" name="experience" value={formData.experience} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="services">Services you offer <span className="text-red-500">*</span></Label>
                      <input id="services" name="services" value={formData.services} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="mb-4" htmlFor="location">Location <span className="text-red-500">*</span></Label>
                      <input id="location" name="location" value={formData.location} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div className="sm:col-span-2 relative">
                      <Label className="mb-4" htmlFor="industry">Industry <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <select id="industry" name="industry" value={formData.industry} onChange={handleInputChange} className={`appearance-none ${fieldBase}`}>
                          <option value="" selected>-- select --</option>
                          <option value="Technology / IT">Technology / IT</option>
                          <option value="Finance & Banking">Finance & Banking</option>
                          <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                          <option value="Marketing & Branding">Marketing & Branding</option>
                          <option value="Legal & Compliance">Legal & Compliance</option>
                          <option value="Business Consulting">Business Consulting</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Real Estate & Infrastructure">Real Estate & Infrastructure</option>
                          <option value="Education & Training">Education & Training</option>
                          <option value="Logistics & Distribution">Logistics & Distribution</option>
                          <option value="Retail & E-commerce">Retail & E-commerce</option>
                          <option value="Government / Public Sector">Government / Public Sector</option>
                          <option value="DE">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="mb-4" htmlFor="background">Professional overview <span className="text-red-500">*</span></Label>
                      <textarea id="background" rows={3} name="background" value={formData.background} onChange={handleInputChange} className={fieldBase} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1D2F4F] to-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]" disabled={submit}>
                      {submit ? (
                        <div className="flex items-center gap-2">
                          <CircleLoader />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                    <p className="max-w-md text-xs leading-relaxed text-slate-500">
                      Our team will review your profile and connect with you for the next steps.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Partners;