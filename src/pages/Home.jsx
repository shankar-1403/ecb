import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { Users, Building2, Rocket, BookOpen, Heart, Eye, Target, Handshake, Globe, ArrowRight, Sparkles, TrendingUp, Award, Zap, Mail, Phone, MapPin, Bell, CalendarDays, Megaphone, Layers, BadgeCheck, Banknote, Briefcase, Building, Cpu, GraduationCap, HeartHandshake, LayoutDashboard, LineChart, Network, Scale, Truck, UsersRound, FileText, ShieldCheck } from "lucide-react";
import Layout from "../components/Layout";
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from "react";
import About from "../assets/about.webp";
import { HeroBenefitSpotlight } from "../components/ui/heroBenefitSpotlight";
import { ContactFormCard } from "../components/ContactForm";
import CountUp from "../components/CountUp";

const offerings = [
    { number: "01", icon: Users, title: "Business Networking", desc: "Connect with entrepreneurs, industry leaders, and professionals." },
    { number: "02", icon: Building2, title: "MSME Support", desc: "Get updates about schemes, policies, and opportunities for MSMEs." },
    { number: "03", icon: Rocket, title: "Growth Opportunities", desc: "Access tools, partnerships, and resources to grow your business." },
    { number: "04", icon: BookOpen, title: "Learning & Development", desc: "Workshops, webinars, and business knowledge sessions." },
    { number: "05", icon: Heart, title: "Community Support", desc: "Be part of a strong network of entrepreneurs across India." },
];

const whyJoin = [
    { text: "Why Join as Elite Ambassador", detail: "Connect with entrepreneurs, industry leaders, and professionals." },
    { icon: Globe, text: "Access to high-quality entrepreneur leads", detail: "Connect with 500+ entrepreneurs across India" },
    { icon: TrendingUp, text: "National & global business visibility", detail: "Stay ahead with curated business insights" },
    { icon: Award, text: "Strategic collaboration opportunities", detail: "Mentorship from successful entrepreneurs" },
    { icon: Zap, text: "Positioning as trusted expert", detail: "Accelerate with proven strategies & tools" },
    { icon: Users, text: "Revenue growth opportunities", detail: "Join a supportive network that lifts you up" },
    { icon: Users, text: "Participation in events & summits", detail: "Join a supportive network that lifts you up" },
];

const steps = [
    {
        number: "01",
        title: "Apply for Empanelment",
        description: "Submit your application and showcase your profile to begin your journey with us.",
        icon: FileText,
    },
    {
        number: "02",
        title: "Verification & Approval",
        description: "Our team carefully reviews your credentials to ensure quality and authenticity.",
        icon: ShieldCheck,
    },
    {
        number: "03",
        title: "Get Listed as Elite Ambassador",
        description: "Join our exclusive roster and gain visibility as a recognized Elite Ambassador.",
        icon: Award,
    },
    {
        number: "04",
        title: "Receive Opportunities & Collaborations",
        description: "Unlock premium opportunities and collaborate with leading brands worldwide.",
        icon: Sparkles,
    },
];

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


const MEMBERSHIP_BENEFIT_CARDS = [
    {
        id: 1,
        title: "Networking opportunities",
        description: "Meet founders, mentors, and partners who understand MSME realities—not generic pitch rooms.",
        detail: "Curated circles, warm intros, and sector meetups across states.",
        icon: Users,
    },
    {
        id: 2,
        title: "Business growth support",
        description: "Practical help on positioning, pipeline, and the next milestone so momentum does not stall.",
        detail: "Peer learning and expert sessions aligned to how you operate day to day.",
        icon: TrendingUp,
    },
    {
        id: 3,
        title: "Access to business resources",
        description: "Templates, playbooks, and pointers to programmes that save time when you are moving fast.",
        detail: "One place to discover what matters for compliance, digital, and scale.",
        icon: Layers,
    },
    {
        id: 4,
        title: "Updates on opportunities",
        description: "Timely signals on schemes, tenders, and openings that fit growing businesses—not noise.",
        detail: "Digestible updates so you can act quickly with your team.",
        icon: Bell,
    },
    {
        id: 5,
        title: "Events & webinars",
        description: "Participation in member events and live sessions built around real founder questions.",
        detail: "Learn, ask, and connect without leaving your city when you need virtual access.",
        icon: CalendarDays,
    },
    {
        id: 6,
        title: "Visibility for your business",
        description: "Showcase moments inside the ECB community and allied touchpoints so the right people notice you.",
        detail: "Spotlights and introductions that support trust—not cold spam.",
        icon: Megaphone,
    },
];

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={stagger} className={className}>
            {children}
        </motion.div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const staggerFast = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function CountUpStat({ value, label }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center">
            <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                {isInView && <CountUp end={value} suffix="+" />}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                {label}
            </p>
        </div>
    );
}

function Home() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    return (
        <Layout>
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 md:pt-40 lg:pt-44 xl:pt-48">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, white 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, white 50%)" }} />
                <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:justify-between md:gap-4 lg:px-6">
                    <div className="max-w-2xl w-full text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up lg:mx-0 mx-auto">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            <span className="text-sm font-semibold tracking-wide">India's Entrepreneur Growth Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] animate-fade-up mb-6">
                            Empowering Indian
                            <br />
                            <span className="relative">
                                <span className="bg-linear-to-b from-amber-500 to-amber-600 bg-clip-text font-bold text-transparent italic font-new-display tracking-tight">Entrepreneurs</span>
                                <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 300 20" fill="none">
                                    <path
                                        d="M0 15 Q150 -5 300 15"
                                        stroke="hsl(24, 90%, 50%)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            <br />
                        </h1>
                        <span className="text-gray-600 text-xl md:text-4xl lg:text-2xl">
                            Strengthening MSMEs. Building Bharat

                            <span className="inline-block ml-2 align-middle">
                                <span className="w-6 h-2 bg-gradient-to-r from-amber-500 via-white to-green-600 rounded-full block"></span>
                            </span>
                        </span>
                        <p className="mt-8 text-gray-600 text-lg md:text-lg animate-fade-up-delay">A Global Initiative empowering Entrepreneurs with Finance, Technology, Strategy, and Growth Ecosystems.</p>
                        <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Link to="/membership/elite-ambassador">
                                <Button size="lg" className="group bg-amber-500 shadow-lg shadow-amber-500/25 transition-shadow hover:shadow-amber-500/40">
                                    Apply as Elite Ambassador
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/services" className="text-black">
                                <Button size="lg" variant="outline" className="group bg-transparent text-black shadow-lg">
                                    Explore Services
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="shrink-0 w-full flex justify-center lg:justify-end lg:w-auto">
                        <HeroBenefitSpotlight
                            items={MEMBERSHIP_BENEFIT_CARDS}
                            ctaHref="/membership"
                            ctaLabel="Apply for membership"
                        />
                    </div>
                </div>

                <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
                    <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
                        <AnimatedSection className="relative overflow-hidden rounded-2xl bg-[#252D4B] p-6 shadow-elevated sm:rounded-3xl sm:p-8 md:p-10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[18px_18px] opacity-60" />
                            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-gold/15 blur-3xl" />
                            <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />
                            <motion.div variants={stagger} className="relative grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
                                {[
                                    { value: 500, label: "Entrepreneurs Connected" },
                                    { value: 20, label: "States Covered" },
                                    { value: 100, label: "Startups Supported" },
                                    { value: 200, label: "Businesses Empowered" },
                                ].map((s) => (
                                    <CountUpStat key={s.label} value={s.value} label={s.label} />
                                ))}
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>



            <section className="relative py-16 sm:py-20 md:py-28">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 sm:gap-12 sm:px-5 md:gap-16 md:px-6 lg:flex-row lg:items-center">
                    <div className="w-full min-w-0 lg:flex-1">
                        <span className="inline-block px-4 py-1 rounded-full border border-amber-500 bg-amber-500/5 text-amber-500 text-xs font-semibold mb-5">About ECB</span>
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-10">A global initiative for India’s entrepreneur economy</h2>
                        <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">Entrepreneurs Connect Bharat is a global initiative designed to build a powerful ecosystem connecting entrepreneurs with verified experts across finance, technology, strategy, legal, marketing, and business growth services.</p>
                        <Link to="/about">
                            <Button size="lg" className="group mt-20 bg-amber-500">
                                Learn More About Us
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                    <div className="w-full min-w-0 lg:flex-1">
                        <img src={About} alt="About Section" className="w-full rounded-2xl object-cover shadow-lg sm:rounded-3xl aspect-[4/3] max-h-[420px] lg:max-h-none" />
                    </div>
                </div>
            </section>


            <section className="relative py-16 sm:py-20 md:py-28">
                <div className="relative mx-auto w-full max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-5 md:gap-16 md:px-6 lg:items-center">

                    <div className="w-full">
                        <span className="inline-block px-4 py-1 rounded-full border border-amber-500 bg-amber-500/5 text-amber-500 text-xs font-semibold mb-5">
                            Full spectrum
                        </span>
                        <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-10">
                            Services offered through the ECB network
                        </h3>
                        <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                            Elite Ambassadors deliver and orchestrate high-trust outcomes across building, scaling, and governing a modern enterprise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                        {SERVICE_ITEMS.map(({ title, Icon }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.35,     // faster animation
                                    delay: i * 0.04,    // tighter stagger (was slow before)
                                    ease: "easeOut",
                                }}
                                className="group relative rounded-xl p-[1px] transition-all duration-300 hover:-translate-y-1"
                            >

                               
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/40 via-transparent to-green-500/40 opacity-70 group-hover:opacity-100 transition duration-300" />

                            
                                <div className="relative z-10 flex items-center gap-4 w-full rounded-xl bg-white p-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.25)] overflow-hidden">

                                 
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-green-500/5 opacity-80 pointer-events-none" />

                                  
                                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 text-amber-500 ring-1 ring-amber-500/30 transition-all duration-300 group-hover:bg-amber-100 group-hover:ring-amber-500">
                                        <span className="inline-block transition-transform duration-300 group-hover:rotate-6 group-hover:-translate-y-1">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                    </span>

                                    
                                    <div className="relative z-10 flex-1">
                                        <h3 className="text-sm sm:text-base font-bold leading-snug break-words transition-colors duration-300 group-hover:text-amber-600">
                                            {title}
                                        </h3>
                                    </div>

                                 
                                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                                        <div className="h-full w-0 bg-gradient-to-r from-amber-500 via-amber-400 to-green-500 transition-all duration-300 group-hover:w-full" />
                                    </div>

                                    
                                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="relative overflow-hidden bg-[#1D2B4E]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-6 md:py-10">
                    <div className="mb-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">OUR PURPOSE</span>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4">Vision & Mission</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group border border-white/60 overflow-hidden rounded-2xl">
                            <div className="absolute -bottom-20 -right-30 w-100 h-100 bg-amber-500/30 opacity-20 rounded-full"></div>
                            <div className="relative bg-card/80 backdrop-blur-sm p-8 md:p-8 h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                                    <Eye className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-display font-bold text-white">Our Vision</h4>
                                <div className="w-16 h-1 bg-linear-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-5" />
                                <p className="text-white leading-relaxed text-sm">To build India's most powerful entrepreneur support ecosystem</p>
                            </div>
                        </div>

                        <div className="relative group border border-white/60 overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500 via-white to-green-600 rounded-2xl opacity-20 transition-opacity duration-500 blur-xl" />
                            <div className="relative bg-card/80 backdrop-blur-sm p-8 md:p-8 h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center mb-6">
                                    <Target className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-display font-bold text-white">Our Mission</h4>
                                <div className="w-16 h-1 bg-linear-to-r from-amber-500 via-white to-green-600 rounded-full mt-4 mb-5" />
                                <p className="text-white leading-relaxed text-sm">Enable entrepreneurs with trusted experts across every business function.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full overflow-hidden py-24 sm:py-32">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">
                        <p className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">
                            Process
                        </p>

                        <h4 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            How it Works
                        </h4>

                        <p className="mt-4 text-lg text-muted-foreground">
                            A simple four-step journey to becoming part of our elite network.
                        </p>
                    </div>

                    <div className="relative mt-20">
                        <ol className="grid gap-12 md:grid-cols-4 md:gap-6 items-stretch">
                            {steps.map((step, idx) => {
                                const Icon = step.icon;
                                return (
                                    <motion.li
                                        key={step.number}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            duration: 0.5,
                                            delay: idx * 0.1,
                                            ease: "easeOut",
                                        }}
                                        className="group relative flex justify-center md:block h-full"
                                    >

                                        <div className="relative w-full max-w-sm md:max-w-none p-[1px] rounded-xl transition-all duration-500 hover:-translate-y-2 h-full">

                                          
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/40 via-transparent to-green-500/40 opacity-70 group-hover:opacity-100 transition duration-500" />

                                         
                                            <div className="relative z-10 flex flex-col h-full rounded-xl bg-white p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.25)]">

                                              
                                                <div className="mb-4 flex justify-center">
                                                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-slate-100 text-amber-500 ring-1 ring-amber-500/30 transition-all duration-500 group-hover:bg-amber-100 group-hover:ring-amber-500">
                                                        <span className="inline-block transition-transform duration-500 group-hover:rotate-6 group-hover:-translate-y-1">
                                                            <Icon className="h-7 w-7" />
                                                        </span>
                                                    </span>
                                                </div>

                                               
                                                <div className="text-center flex flex-col flex-grow">
                                                    <p className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground">
                                                        Step {step.number}
                                                    </p>

                                                    <h5 className="mt-1 text-base font-semibold text-amber-500">
                                                        {step.title}
                                                    </h5>

                                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground flex-grow">
                                                        {step.description}
                                                    </p>
                                                </div>

                                                
                                                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                                                    <div className="h-full w-0 bg-gradient-to-r from-amber-500 via-amber-400 to-green-500 transition-all duration-500 group-hover:w-full" />
                                                </div>

                                              
                                                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />
                                                </div>

                                            </div>
                                        </div>

                                        
                                        {idx < steps.length - 1 && (
                                            <div className="absolute right-0 top-10 hidden translate-x-1/2 md:block">
                                                <ArrowRight className="w-5 h-5 text-amber-500 transition-transform duration-300 group-hover:translate-x-1" />
                                            </div>
                                        )}
                                    </motion.li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-7xl mx-auto relative">
                    {whyJoin.map(({ icon: Icon, text, detail }, i) => {
                        const span = i === 0 ? "md:col-span-2 md:row-span-3 flex justify-center items-center" : "";
                        const isHero = i === 0;
                        return (
                            <div
                                key={text}
                                className={`group relative rounded-3xl p-6 md:p-6 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10 min-h-30 ${span} ${isHero ? "border border-gray-200" : "bg-white border border-amber-500/30 hover:border-primary/40 justify-center transition-all duration-300 hover:-translate-y-1"}`}
                            >
                                {isHero ? <div className="absolute inset-0 bg-[#1D2F4F] rounded-2xl transition-opacity duration-500" /> : null}
                                {isHero ?
                                    <>
                                        <div className="absolute -top-20 -left-30 w-130 h-130 bg-amber-500/30 blur-2xl opacity-50 rounded-full"></div>
                                        <div className="absolute -bottom-20 -right-30 w-130 h-130 bg-green-600/30 opacity-50 blur-2xl rounded-full"></div>
                                    </> : null}

                                <div className={`relative ${isHero ? 'flex flex-col justify-center items-center max-w-xl' : 'flex flex-row items-center gap-4'}`}>
                                    {isHero ? null :
                                        <div>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isHero ? "bg-primary-foreground/20" : "bg-amber-500/30"}`}>
                                                <Icon className="w-5 h-5 text-amber-500" />
                                            </div>
                                        </div>
                                    }
                                    {isHero ? <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide text-center">Join The Movement</span> : null}
                                    <h5 className={`font-display font-bold ${isHero ? "text-lg md:text-5xl text-white text-center" : "text-foreground text-lg md:text-xl "}`}>{text}</h5>

                                    {isHero ? (
                                        <div className="flex justify-center items-center mt-4">
                                            <Link to="/membership/elite-ambassador" className="cursor-pointer">
                                                <Button className="bg-amber-500">Join Now</Button>
                                            </Link>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>



            <section className="py-20 md:py-20">
                <div className="md:max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">Get In Touch</span>
                        <h5 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Contact Us</h5>
                        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Have a question or want to collaborate? We'd love to hear from you.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 lg:gap-10 max-w-7xl mx-auto items-start">
                        <div className="md:col-span-2 space-y-4">
                            {[
                                { icon: Mail, label: "Email", value: "contact@ec-bharat.in", href: "mailto:contact@ec-bharat.in" },
                                { icon: Phone, label: "Phone", value: "+91 22 3512 0060", href: "tel:+91 22 3512 0060" },
                                { icon: MapPin, label: "Location", value: "Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400093", href: null },
                            ].map(({ icon: Icon, label, value, href }) => {
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
                                const cardClass = "flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:border-amber-500/25 hover:shadow-lg";
                                return href ? (
                                    <a key={label} href={href} className={cardClass}>{inner}</a>
                                ) : (
                                    <div key={label} className={cardClass}>{inner}</div>
                                );
                            })}
                            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-[#1D2F4F] to-[#15243d] p-6 text-white shadow-lg">
                                <h5 className="text-lg font-display font-bold">Let&apos;s Build Together</h5>
                                <p className="mt-2 text-sm text-white/80 leading-relaxed">Join 500+ entrepreneurs who are growing their businesses with ECB.</p>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <ContactFormCard formData={formData} setFormData={setFormData} submitLabel="Send message" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default Home;