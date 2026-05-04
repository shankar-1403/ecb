import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/ui/button";
import { ArrowRight, Sparkles, Shield, CheckCircle2, ClipboardList, FileText, UserRound, } from "lucide-react";

const STEPS = [
  { n: "1", title: "Identity & firm", body: "Who you are and where you operate.", Icon: UserRound },
  { n: "2", title: "Expertise footprint", body: "Practice areas and experience depth.", Icon: ClipboardList },
  { n: "3", title: "Evidence & narrative", body: "Profile materials and how you serve founders.", Icon: FileText },
  { n: "4", title: "Review & submit", body: "We validate and route to the right steward.", Icon: CheckCircle2 },
]

function Membership() {
  const [status, setStatus] = useState("idle");
  return (
    <Layout>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
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

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up lg:mx-0 mx-auto">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span className="text-sm font-semibold">Empanelment</span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-[#1D2F4F] md:text-5xl lg:text-6xl lg:leading-[1.05]">Apply as an Elite Ambassador</h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">Share your practice details and expertise footprint. Our team reviews fit, credibility, and alignment with ECB's quality bar for entrepreneur outcomes.</p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:from-amber-600 hover:to-amber-700 sm:w-auto"
                  >
                    Apply for Membership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-[#1D2F4F]/15 bg-white/90 text-base font-semibold text-[#1D2F4F] shadow-sm backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-amber-500/5 sm:w-auto"
                  >
                    Explore services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -inset-4 rounded-4xl bg-gradientS-to-br from-amber-400/20 via-transparent to-green-600/15 blur-2xl lg:-inset-6" />
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-[#1D2F4F] via-[#243554] to-[#15243d] p-8 text-white shadow-2xl md:p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Shield className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-500/90">Why it matters</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
                      ECB is built for operators who want credible peers, practical sessions, and introductions that respect
                      your time.
                    </p>
                  </div>
                </div>
                <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
                  {[
                    { k: "500+", v: "Members & growing" },
                    { k: "20+", v: "States" },
                    { k: "100+", v: "Sessions" },
                  ].map(({ k, v }) => (
                    <div key={v}>
                      <p className="text-xl font-extrabold text-white md:text-2xl">{k}</p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/50 md:text-xs">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative page-content-mesh border-t border-slate-200/80 py-14 sm:py-20">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4 sticky top-0">
              <div  >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Journey</p>
                <h2 className="mt-2 text-xl font-semibold">What happens next</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Four checkpoints mirror how our stewards evaluate fit — clarity upfront reduces
                  back-and-forth and protects your time.
                </p>
                <ol className="mt-8 space-y-4">
                  {STEPS.map(({ n, title, body, Icon }) => (
                    <li
                      key={n}
                      className="flex gap-4 rounded-xl border border-slate-200/90 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition hover:border-amber-500/25 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-amber-500/20 to-green-500/10 ring-1 ring-amber-500/15">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                          Step {n}
                        </p>
                        <p className="mt-0.5 font-semibold">{title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-8">
              {status === "success" ? (
                <div
                  className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-linear-to-br from-emerald-50 via-white to-teal-50/50 p-8 shadow-[0_16px_48px_-20px_rgba(16,185,129,0.25)] sm:p-10"
                  role="status"
                >
                  <div
                    className="pointer-events-none absolute -right-12 top-0 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl"
                    aria-hidden
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-lg font-semibold text-emerald-950">Application received (demo)</p>
                      <p className="mt-2 text-sm leading-relaxed text-emerald-900/85">
                        Thank you. In production, this form would connect to your CRM or inbox. Your
                        details were validated successfully.
                      </p>
                      <Button
                        type="button"
                        variant="secondary"
                        className="mt-6"
                        onClick={() => setStatus("idle")}
                      >
                        Submit another application
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-gray-400/20">
                  <div className="h-1.5 w-full bg-linear-to-r from-amber-500 via-white to-green-600" aria-hidden />
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setStatus("success");
                    }}
                    className="space-y-8 p-6 sm:p-10"
                    noValidate
                  >
                    <div>
                      <h2 className="text-lg font-semibold">Application form</h2>
                      <p className="mt-2 text-sm text-slate-600">
                        Fields marked by validation are required. Uploads are optional in this
                        demo.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="mb-4" htmlFor="fullName">Full name</label>
                        <input id="fullName" autoComplete="name" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl" />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-4" htmlFor="companyName">Company name</label>
                        <input id="companyName" autoComplete="organization" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl" />
                      </div>

                      <div>
                        <label className="mb-4" htmlFor="email">Email</label>
                        <input id="email" type="email" autoComplete="email" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl" />
                      </div>

                      <div>
                        <label className="mb-4" htmlFor="phone">Phone</label>
                        <input id="phone" type="tel" autoComplete="tel" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-4" htmlFor="city">City</label>
                        <input id="city" autoComplete="address-level2" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl" />
                      </div>


                      <div >
                        <label className="mb-4" htmlFor="yearsExperience">Years of experience</label>
                        <input id="yearsExperience" inputMode="numeric" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-4" htmlFor="websiteOrLinkedIn">Website or LinkedIn</label>
                        <input id="websiteOrLinkedIn" placeholder="https:// or linkedin.com/in/…" className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl" />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-4" htmlFor="profile">Upload profile (optional)</label>
                        <input id="profile" type="file" accept=".pdf,image/jpeg,image/png" className="mt-2 block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:shadow-sm file:transition hover:file:bg-amber-500-dark cursor-pointer" />
                        <p className="mt-1 text-xs text-slate-500">PDF, JPG, or PNG — up to 5MB.</p>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-4" htmlFor="description">Short description of services</label>
                        <textarea id="description" rows={5} className="bg-neutral-secondary-medium border border-gray-200 text-heading text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body rounded-xl" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <Button type="submit" className="sm:min-w-50 bg-amber-500">Submit application</Button>
                      <p className="max-w-md text-xs leading-relaxed text-slate-500">
                        By submitting, you agree to be contacted regarding empanelment. This demo
                        does not persist data.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Membership;
