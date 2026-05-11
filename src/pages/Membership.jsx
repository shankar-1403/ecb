import { useState, useEffect, useRef } from "react";
import { useSnackbar } from "../components/SnackbarContext";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import CircleLoader from "../components/CircularLoader";
import { db,storage } from "../lib/firebase";
import { push, ref, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL  } from "firebase/storage";
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

const initialFormData = { name: '', company: '', entrepreneurs:'', phone: '', email: '', location: '', experience: '', links: '', file: null, message: '' };

function Membership() {
  const { showSnackbar } = useSnackbar();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState(null);
  const [submit,setSubmit] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.entrepreneurs || !formData.phone || !formData.email || !formData.location || !formData.experience || !formData.message) {
      showSnackbar('Please fill all the required details with *',"error");
      return;
    }

    const payload = {
      name: formData.name,
      company: formData.company,
      entrepreneurs:formData.entrepreneurs,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      experience: formData.experience,
      links: formData.links,
      message: formData.message,
    };
    try {
      setSubmit(true);
      const newRef = push(ref(db, 'elite_ambassador'))

      const filePath = `elite_ambassador/${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, filePath);
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);

      await set(newRef, {
        ...payload,
        fileURL,
        filePath,
        createdAt: new Date().toISOString(),
      });

      setFormData(initialFormData);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      showSnackbar('Your form has been submitted successfully',"success")
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally{
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

                <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1D2F4F] md:text-5xl lg:text-6xl lg:leading-[1.05]">Apply as an Elite Solutions Ambassador</h1>
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
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                    <h3 className="text-lg font-semibold">Apply as an Elite Solutions Ambassador</h3>
                    <p className="mt-2 text-sm text-slate-600">Fields marked by validation are required. Uploads are optional in this demo.</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Label htmlFor="name">Full name <span className="text-red-500">*</span></Label>
                      <input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={fieldBase} maxLength={100} />
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="company">Company name</Label>
                      <input id="company" name="company" value={formData.company} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div className="sm:col-span-2 relative">
                      <Label htmlFor="entrepreneurs">Approximate network of Entrepreneurs <span className="text-red-500">*</span></Label>
                      <input id="entrepreneurs" name="entrepreneurs" value={formData.entrepreneurs} onChange={handleInputChange} className={fieldBase}/>
                    </div>

                    <div>
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className={fieldBase} maxLength={255} />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
                      <input id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleInputChange} className={`appearance-none ${fieldBase}`} maxLength={10} />
                    </div>

                    <div>
                      <Label htmlFor="location">Location <span className="text-red-500">*</span></Label>
                      <input id="location" name="location" value={formData.location} onChange={handleInputChange} className={fieldBase} />
                    </div>


                    <div>
                      <Label htmlFor="experience">Years of experience <span className="text-red-500">*</span></Label>
                      <input id="experience" name="experience" value={formData.experience} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div>
                      <Label htmlFor="links">Website or LinkedIn</Label>
                      <input id="links" placeholder="https:// or linkedin.com/in/…" name="links" value={formData.links} onChange={handleInputChange} className={fieldBase} />
                    </div>

                    <div>
                      <Label htmlFor="profile">Upload profile</Label>
                      <input ref={fileInputRef} id="profile" type="file" accept=".pdf,image/jpeg,image/png" onChange={(e)=>setFile(e.target.files[0])} className="mt-2 block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:shadow-sm file:transition hover:file:bg-amber-500-dark cursor-pointer" />
                      <p className="mt-1 text-xs text-slate-500">PDF, JPG, or PNG — up to 5MB.</p>
                    </div>

                    <div className="sm:col-span-2">
                      <Label htmlFor="description">Short description of services <span className="text-red-500">*</span></Label>
                      <textarea id="description" rows={3} name="message" value={formData.message} onChange={handleInputChange} className={fieldBase} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-amber-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.99]" disabled={submit}>
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
