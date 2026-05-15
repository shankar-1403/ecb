import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { Users, Building2, Rocket, BookOpen, Heart, Eye, Target, Handshake, Globe, ArrowRight, Sparkles, TrendingUp, Award, Zap, Mail, Phone, MapPin, Bell, CalendarDays, Megaphone, Layers, BadgeCheck, Banknote, Briefcase, Building, Cpu, GraduationCap, HeartHandshake, LayoutDashboard, LineChart, Network, Scale, Truck, UsersRound, FileText, ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, Database } from "lucide-react";
import Layout from "../components/Layout";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import About from "../assets/about.webp";
import { HeroBenefitSpotlight } from "../components/ui/heroBenefitSpotlight";
import { ContactFormCard } from "../components/ContactForm";
import CountUp from "../components/CountUp";
import { push, ref } from 'firebase/database';
import { db } from "../lib/firebase";
import CircleLoader from "../components/CircularLoader";
import { useSnackbar } from "../components/SnackbarContext";

const fieldBase =
    "w-full rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3.5 text-foreground placeholder:text-gray-400 shadow-sm outline-none transition " +
    "hover:border-gray-300 hover:bg-white focus:border-[#143973] focus:bg-white focus:ring-4 focus:ring-[#143973]/15";

const offerings = [
    { number: "01", icon: Users, title: "Business Networking", desc: "Connect with entrepreneurs, industry leaders, and professionals." },
    { number: "02", icon: Building2, title: "MSME Support", desc: "Get updates about schemes, policies, and opportunities for MSMEs." },
    { number: "03", icon: Rocket, title: "Growth Opportunities", desc: "Access tools, partnerships, and resources to grow your business." },
    { number: "04", icon: BookOpen, title: "Learning & Development", desc: "Workshops, webinars, and business knowledge sessions." },
    { number: "05", icon: Heart, title: "Community Support", desc: "Be part of a strong network of entrepreneurs across India." },
];

const whyJoin = [
    { text: "Why Join as Elite Ambassador", detail: "Connect with entrepreneurs, industry leaders, and professionals." },
    { icon: Globe, text: "Access to high-quality entrepreneur leads", detail: "Connect with 5000+ entrepreneurs across India" },
    { icon: TrendingUp, text: "National & global business visibility", detail: "Stay ahead with curated business insights" },
    { icon: Award, text: "Strategic collaboration opportunities", detail: "Mentorship from successful entrepreneurs" },
    { icon: Zap, text: "Positioning as trusted expert", detail: "Accelerate with proven strategies & tools" },
    { icon: Users, text: "Revenue growth opportunities", detail: "Join a supportive network that lifts you up" },
    { icon: Users, text: "Participation in events & summits", detail: "Join a supportive network that lifts you up" },
];

const steps = [
    { number: "01", title: "Apply for Empanelment", description: "Submit your application and showcase your profile to begin your journey with us.", icon: FileText },
    { number: "02", title: "Verification & Approval", description: "Our team carefully reviews your credentials to ensure quality and authenticity.", icon: ShieldCheck },
    { number: "03", title: "Get Listed as Elite Ambassador", description: "Join our exclusive roster and gain visibility as a recognized Elite Ambassador.", icon: Award },
    { number: "04", title: "Receive Opportunities & Collaborations", description: "Unlock premium opportunities and collaborate with leading brands worldwide.", icon: Sparkles },
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
    { title: "Strategic Insurance Solutions", Icon: ShieldCheck },
    { title: "Verified Business Database", Icon: Database },
];

const MEMBERSHIP_BENEFIT_CARDS = [
    { id: 1, title: "Networking opportunities", description: "Meet founders, mentors, and partners who understand MSME realities without generic pitch rooms.", detail: "Curated circles, warm intros, and sector meetups across states.", icon: Users },
    { id: 2, title: "Business growth support", description: "Practical help on positioning, pipeline, and the next milestone so momentum does not stall.", detail: "Peer learning and expert sessions aligned to how you operate day to day.", icon: TrendingUp },
    { id: 3, title: "Access to business resources", description: "Templates, playbooks, and pointers to programmes that save time when you are moving fast.", detail: "One place to discover what matters for compliance, digital, and scale.", icon: Layers },
    { id: 4, title: "Updates on opportunities", description: "Timely signals on schemes, tenders, and openings that fit growing businesses without noise.", icon: Bell },
    { id: 5, title: "Events & webinars", description: "Participation in member events and live sessions built around real founder questions.", detail: "Learn, ask, and connect without leaving your city when you need virtual access.", icon: CalendarDays },
    { id: 6, title: "Visibility for your business", description: "Showcase moments inside the ECB community and allied touchpoints so the right people notice you.", detail: "Spotlights and introductions that support trust—not cold spam.", icon: Megaphone },
];

const STATS = [
    { value: 5000, label: "Entrepreneurs Connected", icon: Users },
    { value: 20, label: "States Covered", icon: Globe },
    { value: 100, label: "Startups Supported", icon: Rocket },
    { value: 200, label: "Businesses Empowered", icon: TrendingUp },
];

const TESTIMONIALS = [
    { name: "Rajesh Sharma", role: "Founder", quote: "ECB connected me with the right experts at the right time. My business scaled 3x within a year of joining the network.", location: "Mumbai" },
    { name: "Priya Mehta", role: "CEO", quote: "The government scheme guidance alone saved us lakhs. ECB is genuinely invested in entrepreneur success.", location: "Pune" },
    { name: "Arjun Nair", role: "Director", quote: "What sets ECB apart is the quality of their network. Every connection has been meaningful and business-relevant.", location: "Bangalore" },
    { name: "Sneha Kulkarni", role: "Co-Founder", quote: "ECB's financial advisory network helped us close our first institutional round. Couldn't have done it without them.", location: "Hyderabad" },
    { name: "Vikram Patel", role: "MD", quote: "The events and summits gave us visibility we couldn't have bought with marketing spend. Quality connections every time.", location: "Ahmedabad" },
    { name: "Anita Desai", role: "CEO", quote: "As a woman entrepreneur, ECB gave me a platform where my expertise was recognized and my business grew meaningfully.", location: "Delhi" },
    { name: "Ravi Menon", role: "Founder", quote: "The government scheme connect through ECB got us MSME subsidies worth ₹12 lakhs. Game changer for our startup.", location: "Chennai" },
    { name: "Meera Joshi", role: "Director", quote: "ECB's network brought us 3 major corporate clients within 6 months. The ROI on membership is unmatched.", location: "Jaipur" },
    { name: "Sanjay Batra", role: "CEO", quote: "The strategic advisory board connections through ECB elevated our company from startup to scaleup in under 2 years.", location: "Gurgaon" },
];

const ABOUT_STRENGTHS = [
    { icon: Globe, text: "Pan-India network spanning 20+ states with verified domain experts" },
    { icon: ShieldCheck, text: "Trusted by 5000+ entrepreneurs, MSMEs and growing businesses" },
    { icon: Handshake, text: "Strategic tie-ups with government bodies, NBFCs and corporates" },
    { icon: Rocket, text: "End-to-end support from ideation to scale across 21 service domains" },
    { icon: Award, text: "Recognized platform for Elite Ambassadors across India" },
];

function AnimatedSection({ children, className = '', style }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={stagger} className={className} style={style}>
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

function CountUpStat({ value, label, Icon }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div ref={ref} className="flex flex-col items-center text-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white" style={{ boxShadow: "0 0 0 1px rgba(218,201,235,0.6)" }}>
                <Icon className="h-4 w-4 text-white" />
            </div>
            <div className="font-heading text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                {isInView && <CountUp end={value} suffix="+" />}
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50 leading-relaxed max-w-25">
                {label}
            </p>
        </div>
    );
}

function TestimonialSlider() {
    const getPerPage = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    };

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [perPage, setPerPage] = useState(getPerPage);

    useEffect(() => {
        const handleResize = () => {
            setPerPage(getPerPage());
            setCurrent(0);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
    const prev = () => { setDirection(-1); setCurrent((c) => (c === 0 ? totalPages - 1 : c - 1)); };
    const next = () => { setDirection(1); setCurrent((c) => (c === totalPages - 1 ? 0 : c + 1)); };
    const visible = TESTIMONIALS.slice(current * perPage, current * perPage + perPage);

    return (
        <div>
            <div className="relative">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -60 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={`grid gap-5 ${perPage === 1 ? "grid-cols-1" : perPage === 2 ? "grid-cols-2" : "grid-cols-3"}`}
                    >
                        {visible.map((t) => (
                            <div key={t.name} className="relative rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#143973]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: "linear-gradient(to right, transparent, rgba(218,201,235,0.8), transparent)" }} />
                                <Quote className="h-5 w-5 mb-3 shrink-0" style={{ color: "#9B72C4" }} />
                                <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(218,201,235,0.2)", border: "1px solid rgba(218,201,235,0.5)" }}>
                                        <span className="font-bold text-sm" style={{ color: "#9B72C4" }}>{t.name[0]}</span>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white font-semibold text-sm truncate">{t.name}</p>
                                        <p className="text-white/50 text-xs truncate">{t.role} · {t.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-[#143973]/15 border border-[#143973]/60 flex items-center justify-center text-white hover:scale-110 transition-all duration-200 z-10 hidden lg:flex">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-[#143973]/15 border border-[#143973]/60 flex items-center justify-center text-white hover:scale-110 transition-all duration-200 z-10 hidden lg:flex">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
                <button onClick={prev} className="w-10 h-10 rounded-full bg-[#143973]/15 border border-[#143973]/60 flex items-center justify-center text-white hover:scale-110 transition-all duration-200 lg:hidden">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full bg-[#143973]/15 border border-[#143973]/60 flex items-center justify-center text-white hover:scale-110 transition-all duration-200 lg:hidden"> 
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
} 

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

function Home() {
    const {showSnackbar} = useSnackbar();
    const [formData, setFormData] = useState(initialFormData);
    const [submit, setSubmit] = useState(false);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const totalPages = Math.ceil(TESTIMONIALS.length / 3);
    const prev = () => { setDirection(-1); setCurrent((c) => (c === 0 ? totalPages - 1 : c - 1)); };
    const next = () => { setDirection(1); setCurrent((c) => (c === totalPages - 1 ? 0 : c + 1)); };
    const visible = TESTIMONIALS.slice(current * 3, current * 3 + 3);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.email) {
            showSnackbar('Please fill in name, phone and email','error');
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
                page: 'home',
                createdAt: new Date().toISOString(),
            });

            setFormData(initialFormData);
            showSnackbar('Your form has been submitted successfully','success');
        } catch (error) {
            showSnackbar('Form submission failed:', 'error');
        } finally {
            setSubmit(false);
        }
    };

    return (
        <Layout>
            <section className="relative overflow-hidden pt-20 pb-0 sm:pt-24 md:pt-28 lg:pt-32">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 40%, hsl(214, 71%, 40%) 0%, transparent 45%), radial-gradient(circle at 80% 60%, hsl(210, 50%, 30%) 0%, transparent 45%), radial-gradient(circle at 55% 80%, hsl(276, 35%, 80%) 0%, transparent 35%)" }} />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">

                        <div className="w-full lg:w-1/2 flex flex-col justify-center py-8 lg:py-1">
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>
                                    <div className="flex items-center gap-2">
                                        <div>
                                            <Sparkles className="w-3 h-3 shrink-0" style={{ color: "#9B72C4" }} />
                                        </div>
                                        <div>
                                            <span className="text-xs sm:text-sm font-semibold tracking-wide">INDIA'S ENTREPENEUR GROWTH PLATFORM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-center lg:text-left">
                                Empowering Indian <span className="text-[#143973]">Entrepreneurs</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-6 flex items-center gap-2 justify-center lg:justify-start flex-wrap"
                            >
                                <span className="text-[#143973] text-lg sm:text-xl lg:text-2xl font-medium">Strengthening MSMEs. Building Bharat</span>
                            </motion.div>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-4 text-[#143973] text-base sm:text-lg leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                                One Platform & End To End Solutions
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-col md:flex-row gap-3 justify-center lg:justify-start">
                                <Link to="/membership/elite-ambassador" className="w-full md:w-auto">
                                    <Button size="lg" className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1D2F4F] to-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]">
                                        Apply as an Elite Ambassador
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Link to="/services" className="text-black w-full md:w-auto">
                                    <Button size="lg" variant="outline" className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-transparent px-4 py-3.5 text-sm font-semibold shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]">
                                        Explore Services
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </motion.div>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                                <div className="flex -space-x-2">
                                    {["#1D2F4F", "#143973", "#143973", "#1D2F4F"].map((color, i) => (
                                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center" style={{ backgroundColor: color }}>
                                            <Users className="w-3 h-3 text-white" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold text-gray-700">5000+</span> entrepreneurs already growing with ECB
                                </p>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end py-6 lg:py-8">
                            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="w-full max-w-sm sm:max-w-md">
                                <HeroBenefitSpotlight items={MEMBERSHIP_BENEFIT_CARDS} ctaHref="/membership/partner-with-us" ctaLabel="Partner With ECB" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-10">
                        <AnimatedSection
                            className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-3 md:p-4"
                            style={{ background: "linear-gradient(135deg, #1D2F4F 0%, #162440 100%)", boxShadow: "0 25px 60px -15px rgba(29,47,79,0.5), 0 0 0 1px rgba(20,57,115,0.1)" }}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[18px_18px] opacity-60" />
                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#143973]/10 blur-3xl" />
                            <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-[#143973]/5 blur-3xl" />
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/60 to-transparent" />
                            <motion.div variants={stagger} className="relative grid grid-cols-2 md:grid-cols-4 gap-0">
                                {STATS.map((s, i) => (
                                    <div key={s.label} className="relative px-2 py-3 sm:px-4 sm:py-4">
                                        <CountUpStat value={s.value} label={s.label} Icon={s.icon} />
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>


            <section className="relative py-14 sm:py-18 md:py-20">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:gap-16">
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={slideInLeft} className="w-full min-w-0 lg:flex-1">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>ABOUT ECB</span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">A global initiative for India's entrepreneur economy</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">Entrepreneurs Connect Bharat is a global initiative designed to build a powerful ecosystem connecting entrepreneurs with verified experts across finance, technology, strategy, legal, marketing, and business growth services.</p>
                        <ul className="mt-6 space-y-3">
                            {ABOUT_STRENGTHS.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-3">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5" style={{ backgroundColor: "rgba(218,201,235,0.2)", border: "1px solid rgba(218,201,235,0.5)" }}>
                                        <Icon className="h-3.5 w-3.5" style={{ color: "#9B72C4" }} />
                                    </span>
                                    <span className="text-sm text-gray-700 leading-relaxed">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about">
                            <Button size="lg" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1D2F4F] to-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99] mt-8">
                                Learn More About Us
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={scaleUp} className="w-full min-w-0 lg:flex-1">
                        <div className="relative">
                            <img src={About} alt="About Section" className="w-full rounded-2xl object-cover shadow-lg sm:rounded-3xl aspect-4/3" />
                            <motion.div
                                className="absolute -bottom-4 -left-4 rounded-2xl border border-[#143973]/25 bg-white p-4 shadow-lg hidden sm:block"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <p className="text-2xl font-bold text-[#143973]">5000+</p>
                                <p className="text-xs text-gray-500">Entrepreneurs Connected</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="relative py-14 sm:py-18 md:py-20" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f5ff 80%, #dbeafe 100%)" }}>
                <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="w-full mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>FULL SPECTRUM</span>
                        <h3 className="text-3xl md:text-4xl font-bold leading-tight text-[#1D2F4F]">Services offered through the ECB network</h3>
                        <p className="mt-3 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">Elite Ambassadors deliver and orchestrate high-trust outcomes across building, scaling, and governing a modern enterprise.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SERVICE_ITEMS.map(({ title, Icon }, i) => {
                            const total = SERVICE_ITEMS.length;
                            const lastRowCount = total % 3;
                            const isOnlyInLastRow = lastRowCount === 1 && i === total - 1;
                            return (
                                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.28, delay: i * 0.045, ease: "easeOut" }} whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }} className={`group relative ${isOnlyInLastRow ? "lg:col-start-2" : ""}`}>
                                    <div className="relative flex flex-row items-center gap-4 rounded-2xl px-4 py-4 min-h-17 overflow-hidden transition-all duration-300 group-hover:shadow-[0_16px_40px_-8px_rgba(20,57,115,0.25)]" style={{ background: "#ffffff", border: "1px solid rgba(20,57,115,0.25)", boxShadow: "0 4px 24px -4px rgba(0,0,0,0.07)" }}>

                                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" style={{ background: "linear-gradient(135deg, #dbeafe 0%, #f0f5ff 100%)" }} />

                                        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }} />

                                        <div className="relative z-10 shrink-0 self-center">
                                            <div className="relative flex h-11 w-11 items-center justify-center">
                                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
                                                    <motion.rect x="2" y="2" width="44" height="44" rx="12" fill="none" stroke="rgba(20,57,115,0.5)" strokeWidth="1.5" strokeDasharray="140" strokeDashoffset="140" animate={{ strokeDashoffset: [140, 0, 140] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }} className="group-hover:opacity-0 transition-opacity duration-200" />
                                                </svg>
                                                <div className="absolute inset-0 rounded-xl group-hover:opacity-0 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,248,230,0.5) 100%)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px -2px rgba(20,57,115,0.15)" }} />
                                                <motion.div className="relative z-10 group-hover:text-[#1D2F4F] transition-colors duration-300" style={{ color: "#9B72C4" }} animate={{ rotate: [0, 0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2, times: [0, 0.6, 0.7, 0.85, 1] }}>
                                                    <Icon className="h-5 w-5" />
                                                </motion.div>
                                                <motion.div className="absolute inset-0 pointer-events-none" animate={{ boxShadow: i % 3 === 1 ? ["0 0 0px 0px rgba(218,201,235,0)", "0 0 10px 3px rgba(218,201,235,0.5)", "0 0 0px 0px rgba(218,201,235,0)"] : ["0 0 0px 0px rgba(20,57,115,0)", "0 0 10px 3px rgba(20,57,115,0.3)", "0 0 0px 0px rgba(20,57,115,0)"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }} style={{ borderRadius: "12px" }} />
                                            </div>
                                        </div>
                                        <div className="relative z-10 flex-1 self-center min-w-0">
                                            <h3 className="text-sm font-semibold leading-snug text-slate-700 group-hover:text-[#1D2F4F] transition-colors duration-300">{title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            <section className="relative overflow-hidden bg-[#143973]">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(214, 71%, 40%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(210, 50%, 30%) 0%, transparent 50%)" }} />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-20">
                    <div className="mb-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>OUR PURPOSE</span>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-2">Vision & Mission</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Eye, title: "Our Vision", text: "To become the world’s most trusted and preferred execution-driven global business ecosystem for collaboration, capital access, and scalable growth, enabling MSMEs, startups, and enterprises to connect, collaborate, and expand beyond borders while driving measurable economic impact. "
                            },
                            { icon: Target, title: "Our Mission", text: "To enable entrepreneurs and businesses to achieve structured growth by providing an integrated platform that combines strategic connections, funding access, advisory, and execution support ensuring every opportunity is tracked, nurtured, and converted into real business outcomes." },
                        ].map(({ icon: Icon, title, text }) => (
                            <motion.div key={title} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="relative group border border-white/20 overflow-hidden rounded-2xl hover:border-[#143973]/40 transition-colors duration-300">
                                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/8 transition-colors duration-300" />
                                <div className="relative p-7 sm:p-8 md:p-10 h-full">
                                    <div className="w-fit rounded-2xl bg-[#143973] flex items-center justify-center mb-5 shadow-lg shadow-[#143973]/30 p-3">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{title}</h3>
                                    <div className="w-16 h-1 bg-linear-to-r from-[#143973] via-white to-[#143973] rounded-full mt-4 mb-4" />
                                    <p className="text-white/80 leading-relaxed text-sm md:text-base">{text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="relative w-full overflow-hidden py-14 sm:py-18 md:py-20">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>PROCESS</p>
                        <h5 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-foreground">How it Works</h5>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">A simple four-step journey to becoming part of our elite network.</p>
                    </div>
                    <div className="relative mt-14 sm:mt-16">
                        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {steps.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <li key={step.number} className="group relative h-full">
                                        <div className="relative h-full p-px rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                                            <div className="relative z-10 flex flex-col items-start text-left h-full rounded-2xl border border-[#0d2850]/60 p-5 sm:p-6 shadow-sm transition-all duration-300 group-hover:shadow-[0_16px_40px_-8px_rgba(20,57,115,0.5)]" style={{ background: "linear-gradient(135deg, #1D2F4F 0%, #143973 60%, #1a4d99 100%)" }}>
                                                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                                    <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#143973]/10 blur-2xl" />
                                                    <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-[#143973]/10 blur-2xl" />
                                                </div>
                                                <span className="absolute top-3 right-4 text-[55px] sm:text-[65px] font-bold transition-all duration-300 select-none leading-none" style={{ color: "rgba(218,201,235,0.35)" }}>
                                                    {String(step.number).padStart(2, "0")}
                                                </span>
                                                <div className="mb-4">
                                                    <span className="flex items-center justify-center rounded-full bg-[#143973] text-white border border-[#143973]/60 shadow-[0_2px_8px_-2px_rgba(20,57,115,0.2)] transition-all duration-300 group-hover:bg-[#143973] group-hover:text-white group-hover:shadow-[0_4px_16px_-4px_rgba(20,57,115,0.4)] w-fit p-3">
                                                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                                                    </span>
                                                </div>
                                                <h3 className="text-sm sm:text-base font-semibold text-white">{step.title}</h3>
                                                <p className="mt-2 text-xs sm:text-sm text-white leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Link to="/membership/elite-ambassador">
                            <Button size="lg" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1D2F4F] to-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]">
                                Apply as an Elite Ambassador
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-14 sm:py-18 md:py-20 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #dbeafe 0%, #e8f0fc 50%, #dbeafe 100%)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />

                <style>{`
                    @keyframes marquee1 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                    @keyframes marquee2 { from { transform: translateX(-50%); } to { transform: translateX(0); } }
                `}</style>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>JOIN THE MOVEMENT</span>
                        <h5 className="text-3xl md:text-4xl font-bold text-[#1D2F4F]">Why Join as an Elite Ambassador</h5>
                        <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">Connect with India's most powerful entrepreneur network and unlock real growth opportunities.</p>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden space-y-5">
                    {[
                        {
                            animation: "marquee1 60s linear infinite",
                            items: [
                                { icon: Globe, text: "Access to high-quality entrepreneur leads" },
                                { icon: TrendingUp, text: "National & global business visibility" },
                                { icon: Award, text: "Strategic collaboration opportunities" },
                                { icon: Zap, text: "Positioning as a trusted expert" },
                                { icon: Users, text: "Revenue growth opportunities" },
                                { icon: CalendarDays, text: "Participation in events & summits" },
                                { icon: Handshake, text: "Government & corporate connect" },
                                { icon: Rocket, text: "Access to verified business leads" },
                                { icon: BadgeCheck, text: "Credibility & brand recognition" },
                            ],
                            pillStyle: { background: "rgba(255,255,255,0.90)", border: "1px solid rgba(20,57,115,0.18)", boxShadow: "0 4px 20px -4px rgba(20,57,115,0.12), 0 0 0 1px rgba(20,57,115,0.08)" },
                            iconStyle: { background: "rgba(20,57,115,0.1)" },
                            iconBorder: "border-[#143973]/20",
                            iconColor: "",
                            textColor: "text-[#1D2F4F]",
                        },
                        {
                            animation: "marquee2 70s linear infinite",
                            items: [
                                { icon: Network, text: "Networking with 5000+ entrepreneurs" },
                                { icon: ShieldCheck, text: "Verified expert empanelment" },
                                { icon: Briefcase, text: "Virtual CXO opportunities" },
                                { icon: HeartHandshake, text: "CSR & social impact projects" },
                                { icon: LineChart, text: "Financial structuring advisory" },
                                { icon: GraduationCap, text: "Consulting coaching & training" },
                                { icon: Target, text: "Business ideation & orientation" },
                                { icon: Megaphone, text: "Marketing & branding support" },
                                { icon: Building2, text: "Government scheme access" },
                            ],
                            pillStyle: { background: "rgba(255,255,255,0.90)", border: "1px solid rgba(20,57,115,0.18)", boxShadow: "0 4px 20px -4px rgba(20,57,115,0.12), 0 0 0 1px rgba(20,57,115,0.08)" },
                            iconStyle: { background: "rgba(20,57,115,0.1)" },
                            iconBorder: "border-[#143973]/20",
                            iconColor: "",
                            textColor: "text-[#1D2F4F]",
                        },
                    ].map((row, rowIdx) => (
                        <div
                            key={rowIdx}
                            className="overflow-x-hidden overflow-y-visible py-2"
                            onMouseEnter={(e) => e.currentTarget.querySelector('.track').style.animationPlayState = 'paused'}
                            onMouseLeave={(e) => e.currentTarget.querySelector('.track').style.animationPlayState = 'running'}
                        >
                            <div
                                className="track flex gap-4"
                                style={{ animation: row.animation, width: "max-content" }}
                            >
                                {[...row.items, ...row.items].map(({ icon: Icon, text }, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl shrink-0 mx-2 shadow-sm"
                                        style={row.pillStyle}
                                    >
                                        <div
                                            className={`w-9 h-9 rounded-xl flex items-center justify-center border ${row.iconBorder} shrink-0`}
                                            style={row.iconStyle}
                                        >
                                            <Icon className="w-4 h-4" style={{ color: "#9B72C4" }} />
                                        </div>
                                        <span className={`text-sm sm:text-base font-semibold ${row.textColor} whitespace-nowrap`}>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center">
                    <Link to="/membership/elite-ambassador">
                        <Button size="lg" className="group bg-[#143973] shadow-lg shadow-[#143973]/25 hover:shadow-[#143973]/40 transition-shadow">
                            Apply as an Elite Ambassador
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </section>



            <section className="relative py-14 sm:py-18 md:py-20 overflow-hidden bg-[#1D2B4E]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(214, 71%, 40%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(210, 50%, 30%) 0%, transparent 50%)" }} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#143973]/40 to-transparent" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>MEMBER STORIES</span>
                        <h5 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">What Our Members Say</h5>
                        <p className="mt-3 text-white/60 max-w-xl mx-auto text-sm sm:text-base">Real entrepreneurs. Real results. Real growth through the ECB network.</p>
                    </div>
                    <TestimonialSlider />
                </div>
            </section>


            <section className="py-14 sm:py-18 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide" style={{ backgroundColor: "#DAC9EB", color: "#1D2F4F" }}>GET IN TOUCH</span>
                        <h5 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Contact Us</h5>
                        <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">Have a question or want to collaborate? We'd love to hear from you.</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6 lg:gap-10 items-start">
                        <div className="md:col-span-2 space-y-4">
                            {[
                                { icon: Mail, label: "Email", value: "ecb@ec-bharat.com", href: "mailto:ecb@ec-bharat.com" },
                                { icon: Phone, label: "Phone", value: "+91 22 3512 0060", href: "tel:+912235120060" },
                                { icon: MapPin, label: "Location", value: "Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400093", href: "https://www.google.com/maps?q=Lodha+Supremus+Andheri+East+Mumbai" },
                            ].map(({ icon: Icon, label, value, href }) => {
                                const inner = (
                                    <>
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(218,201,235,0.2)", border: "1px solid rgba(218,201,235,0.4)" }}>
                                            <Icon className="h-5 w-5" style={{ color: "#9B72C4" }} />
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</p>
                                            <p className="mt-1 font-semibold text-foreground text-sm">{value}</p>
                                        </div>
                                    </>
                                );
                                const cardClass = "flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:border-[#143973]/25 hover:shadow-lg";
                                return href ? (
                                    <a key={label} href={href} target={label === "Location" ? "_blank" : "_self"} rel="noopener noreferrer" className={cardClass}>
                                        {inner}
                                    </a>
                                ) : (
                                    <div key={label} className={cardClass}>{inner}</div>
                                );
                            })}
                            <div className="rounded-2xl border border-[#143973]/20 bg-linear-to-br from-[#1D2F4F] to-[#15243d] p-5 text-white shadow-lg">
                                <h5 className="text-base font-display font-bold">Let's Build Together</h5>
                                <p className="mt-2 text-sm text-white/80 leading-relaxed">Join 5000+ entrepreneurs who are growing their businesses with ECB.</p>
                                <Link to="/membership/elite-ambassador" className="mt-4 inline-block">
                                    <Button size="sm" className="bg-[#143973] hover:bg-[#143973] mt-2">
                                        Join Now <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_24px_60px_-15px_rgba(29,47,79,0.18)] md:rounded-[1.75rem]">
                                <div className="h-1.5 w-full bg-linear-to-r from-[#143973] via-white to-[#143973]" aria-hidden />
                                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#143973]/10 blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#1D2F4F]/5 blur-3xl pointer-events-none" />

                                <div className="relative border-b border-gray-100 bg-linear-to-br from-gray-50/90 to-white px-6 py-5 md:px-8 md:py-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#1D2F4F] to-[#2563eb] text-white shadow-lg shadow-[#143973]/25">
                                            <MessageSquare className="h-5 w-5" strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h5 className="text-lg font-bold text-[#1D2F4F] md:text-xl">Send us a message</h5>
                                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                Share your details and connect with the right support for your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative space-y-5 px-6 py-6 md:space-y-6 md:px-8 md:py-8">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <Label htmlFor="name">Full name *</Label>
                                            <input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={fieldBase} maxLength={100} />
                                        </div>
                                        <div>
                                            <Label htmlFor="phone">Phone *</Label>
                                            <input id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleInputChange} className={fieldBase} maxLength={10} />
                                        </div>

                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email *</Label>
                                        <input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className={fieldBase} maxLength={255} />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <textarea id="message" name="message" rows={1} placeholder="How can we help you?" value={formData.message} onChange={handleInputChange} className={`${fieldBase} min-h-30 resize-y leading-relaxed`} />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Button type="submit" size="lg" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1D2F4F] to-[#2563eb] px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#143973]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#143973]/35 hover:scale-[1.02] active:scale-[0.99]" disabled={submit}>
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

export default Home; 