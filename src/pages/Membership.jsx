import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import { db } from "../lib/firebase";
import { push, ref } from "firebase/database";
import { ArrowRight, Sparkles, Shield, CheckCircle2, ClipboardList, FileText, UserRound, } from "lucide-react";

const fieldBase =
  "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
  "hover:border-gray-300 hover:bg-white focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15";

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-gray-800">
      {children}
    </label>
  );
}

const STEPS = [
  { n: "1", title: "Identity & firm", body: "Who you are and where you operate.", Icon: UserRound },
  { n: "2", title: "Expertise footprint", body: "Practice areas and experience depth.", Icon: ClipboardList },
  { n: "3", title: "Evidence & narrative", body: "Profile materials and how you serve founders.", Icon: FileText },
  { n: "4", title: "Review & submit", body: "We validate and route to the right steward.", Icon: CheckCircle2 },
]

const initialFormData = {name: '', company:'', email: '', phone: '', city:'', experience:'', links:'', file: null, message: ''};

function Membership() {
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
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      experience: formData.experience,
      links: formData.links,
      file: formData.file,
      message: formData.message,
    };
    try {
      await push(ref(db, 'elite_ambassador'), {
        ...payload,
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
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-14 md:pt-38 md:pb-20">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 30%, hsl(24, 90%, 50%) 0%, transparent 45%), radial-gradient(circle at 85% 70%, hsl(145, 60%, 40%) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="max-w-2xl">
                <div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-4">
                    <div className="flex items-center gap-2">
                      <div>
                        <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold tracking-wide">EMPANELMENT</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1D2F4F] md:text-5xl lg:text-6xl lg:leading-[1.05]">Apply as an Elite Ambassador</h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">Share your practice details and areas of expertise. Our team reviews your profile for credibility, fit, and alignment with ECB’s standards. </p>
              </div>
            </div>

            <div className="relative lg:col-span-5 flex justify-end">
              <div className="absolute -inset-4 rounded-4xl bg-gradientS-to-br from-amber-400/20 via-transparent to-green-600/15 blur-2xl lg:-inset-6" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-[#1D2F4F] via-[#243554] to-[#15243d] p-8 text-white shadow-2xl md:p-10 max-w-md">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Shield className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-500/90">Why it matters</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
                      ECB is built for operators who want to connect with credible peers, learn through practical sessions, and exchange meaningful insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative page-content-mesh border-t border-slate-200/80 py-14 sm:py-20">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="sticky top-20 self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Journey</p>
                <h2 className="mt-2 text-xl font-semibold">What happens next</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">Four checkpoints show how our team evaluates fit sharing details early helps keep things smooth and efficient.</p>
                <ol className="mt-4 space-y-4">
                  {STEPS.map(({ n, title, body, Icon }) => (
                    <li key={n} className="flex gap-4 rounded-xl border border-slate-200/90 bg-white/80 px-2 py-3 shadow-sm backdrop-blur-sm transition hover:border-amber-500/25 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-500/20 to-green-500/10 ring-1 ring-amber-500/15">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">Step {n}</p>
                        <p className="mt-0.5 font-semibold">{title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-gray-400/20">
                <div className="h-1.5 w-full bg-linear-to-r from-amber-500 via-white to-green-600" aria-hidden />
                <form onSubmit={handleSubmit} className="space-y-8 p-6 sm:p-10">
                  <div>
                    <h3 className="text-lg font-semibold">Apply as an Elite Ambassador</h3>
                    <p className="mt-2 text-sm text-slate-600">Fields marked by validation are required. Uploads are optional in this demo.</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label className="mb-4" htmlFor="fullName">Full name *</Label>
                      <input id="fullName" name="name" className={fieldBase} />
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="mb-4" htmlFor="companyName">Company name *</Label>
                      <input id="companyName" name="company" className={fieldBase} />
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="email">Email *</Label>
                      <input id="email" type="email" name="email" className={fieldBase} />
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="phone">Phone *</Label>
                      <input id="phone" type="number" name="phone" className={fieldBase}/>
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="city">City *</Label>
                      <input id="city" name="city" className={fieldBase} />
                    </div>


                    <div>
                      <Label className="mb-4" htmlFor="yearsExperience">Years of experience *</Label>
                      <input id="yearsExperience" type="number" className={fieldBase}/>
                    </div>

                    <div>
                      <Label className="mb-4" htmlFor="websiteOrLinkedIn">Website or LinkedIn</Label>
                      <input id="websiteOrLinkedIn" placeholder="https:// or linkedin.com/in/…" className={fieldBase} />
                    </div>
                    
                    <div>
                      <Label className="mb-4" htmlFor="profile">Upload profile</Label>
                      <input id="profile" type="file" accept=".pdf,image/jpeg,image/png" className="mt-2 block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:shadow-sm file:transition hover:file:bg-amber-500-dark cursor-pointer" />
                      <p className="mt-1 text-xs text-slate-500">PDF, JPG, or PNG — up to 5MB.</p>
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="mb-4" htmlFor="description">Short description of services</Label>
                      <textarea id="description" rows={3} className={fieldBase} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" className="sm:min-w-50 bg-amber-500">Submit application</Button>
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

export default Membership;
