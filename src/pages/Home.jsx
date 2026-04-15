import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { Users, Building2, Rocket, BookOpen, Heart, CheckCircle2, Eye, Target, Handshake, Globe, Lightbulb, ArrowRight, Sparkles, TrendingUp, Award, Zap, Mail, Phone, MapPin, Bell, CalendarDays, Megaphone, Layers } from "lucide-react";
import Layout from "../components/Layout";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { useState, useRef } from "react";
import About from "../assets/about.webp";
import { CardStack } from "../components/ui/cardStack";
import { ContactFormCard } from "../components/ContactForm";
import { ServiceOfferingCard } from "../components/ServiceOfferingCard";

const offerings = [
  { number:"01",icon: Users, title: "Business Networking", desc: "Connect with entrepreneurs, industry leaders, and professionals." },
  { number:"02",icon: Building2, title: "MSME Support", desc: "Get updates about schemes, policies, and opportunities for MSMEs." },
  { number:"03",icon: Rocket, title: "Growth Opportunities", desc: "Access tools, partnerships, and resources to grow your business." },
  { number:"04",icon: BookOpen, title: "Learning & Development", desc: "Workshops, webinars, and business knowledge sessions." },
  { number:"05",icon: Heart, title: "Community Support", desc: "Be part of a strong network of entrepreneurs across India." },
];

const whyJoin = [
  { text: "Why Join ECB", detail: "Connect with entrepreneurs, industry leaders, and professionals." },
  { icon: Globe, text: "Expand your business network", detail: "Connect with 500+ entrepreneurs across India" },
  { icon: TrendingUp, text: "Get access to opportunities & updates", detail: "Stay ahead with curated business insights" },
  { icon: Award, text: "Learn from industry experts", detail: "Mentorship from successful entrepreneurs" },
  { icon: Zap, text: "Grow your business faster", detail: "Accelerate with proven strategies & tools" },
  { icon: Users, text: "Be part of a strong entrepreneur community", detail: "Join a supportive network that lifts you up" },
];

const missions = [
  "Support MSMEs and startups in scaling their business",
  "Connect entrepreneurs with industry experts and networks",
  "Spread awareness about government schemes and business opportunities",
  "Promote entrepreneurship across India",
  "Build a strong and self-reliant business ecosystem",
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

function CountUpStat({ value, label, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const StatIcon = icon;
  return (
    <motion.div ref={ref} variants={fadeUp} className="group text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]}}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
          <StatIcon className="h-5 w-5 text-white" />
        </div>
        <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
          {value}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{label}</p>
      </motion.div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]} },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]} },
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
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]} },
};
function Home() {
    const [formData, setFormData] = useState({name:"",email:"",phone:"",message:""});
    return (
        <Layout>
            {/* Hero */}
            <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 md:pt-40 lg:pt-44 xl:pt-48">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-6">
                    <div className="max-w-2xl w-full text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-amber-500 mb-4 animate-fade-up lg:mx-0 mx-auto">
                            <Sparkles className="w-3 h-3 text-amber-500" />
                            <span className="text-sm font-semibold tracking-wide">India's Entrepreneur Growth Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-[1.1] animate-fade-up">
                            Empowering Indian
                            <br />
                            <span className="relative">
                                <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-500 bg-clip-text text-transparent">Entrepreneurs</span>
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
                            <span className="text-gray-600 text-xl md:text-4xl lg:text-3xl">Strengthening MSMEs. Building Bharat <span className="bg-linear-to-br from-amber-500 via-amber-600 to-green-500 bg-clip-text text-transparent">🇮🇳</span></span>
                        </h1>
                        <p className="mt-8 text-gray-600 text-lg md:text-lg animate-fade-up-delay">
                            A national platform dedicated to supporting MSMEs, startups, and business owners with the right opportunities, connections, knowledge, and growth resources.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4 animate-fade-up-delay-2 justify-center lg:justify-start">
                            <Link to="/membership">
                                <Button size="lg" className="group bg-amber-500 shadow-lg shadow-amber-500/25 transition-shadow hover:shadow-amber-500/40">
                                    Join ECB
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/services" className="text-black">
                                <Button size="lg" variant="outline" className="group bg-transparent text-black shadow-lg">
                                    Explore Opportunities
                                    <ArrowRight  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"  />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="shrink-0 w-full flex justify-center lg:justify-end lg:w-auto">
                        <CardStack
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
                                    { icon: Handshake, value: "500+", label: "Entrepreneurs Connected" },
                                    { icon: Globe, value: "28+", label: "States Covered" },
                                    { icon: Lightbulb, value: "100+", label: "Startups Supported" },
                                    { icon: Building2, value: "200+", label: "Businesses Empowered" },
                                ].map((s) => (
                                    <CountUpStat key={s.label} value={s.value} label={s.label} icon={s.icon} />
                                ))}
                            </motion.div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>


            {/* About ECB */}
            <section className="relative py-16 sm:py-20 md:py-28">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 sm:gap-12 sm:px-5 md:gap-16 md:px-6 lg:flex-row lg:items-center">
                    <div className="w-full min-w-0 lg:flex-1">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">WHO WE ARE</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            About ECB
                        </h2>
                        <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
                            Entrepreneur Connect Bharat (ECB) is an initiative created to empower entrepreneurs, startups, and MSMEs across India. We aim to build a strong business ecosystem where entrepreneurs can connect, grow, and succeed through collaboration, guidance, and opportunities.
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                            Our mission is to support businesses with access to funding awareness, networking opportunities, government scheme information, skill development programs, and strategic partnerships.
                        </p>
                        <Link to="/about">
                            <Button size="lg" className="group mt-8 bg-amber-500">
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

            {/* Vision & Mission */}
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
                                <p className="text-white leading-relaxed text-sm">
                                    To create India's most trusted platform for entrepreneurs, MSMEs, and startups by providing growth opportunities, meaningful connections, and business support systems.
                                </p>
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
                            <ul className="space-y-1">
                                {missions.map((m) => (
                                <li key={m} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center mt-0.5 shrink-0">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                                    </div>
                                    <span className="text-white text-sm leading-relaxed">{m}</span>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* Offerings */}
            <section className="relative overflow-hidden py-20 md:py-28 bg-gray-50">
                <div className="relative text-center mb-12 md:mb-14 px-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">OUR SERVICES</span>
                    <h5 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#1D2F4F]">What We Offer</h5>
                    <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
                        Explore how ECB supports your journey—swipe or use the arrows to browse our core offerings.
                    </p>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                    <Carousel className="w-full" opts={{ align: "start", containScroll: "trimSnaps" }}>
                        <CarouselContent className="-ml-5 md:-ml-6">
                            {offerings.map(({ icon: Icon, title, desc, number }) => (
                                <CarouselItem
                                    key={title}
                                    className="pl-5 md:pl-6 basis-full sm:basis-1/2 xl:basis-1/3"
                                >
                                    <ServiceOfferingCard
                                        number={number}
                                        icon={Icon}
                                        title={title}
                                        desc={desc}
                                        footer={
                                            <Link
                                                to="/services"
                                                className="group/link inline-flex w-fit items-center gap-1.5 rounded-lg border border-amber-500/80 bg-white px-4 py-2.5 text-sm font-semibold text-[#1D2F4F] shadow-sm transition hover:border-amber-500 hover:bg-amber-50/70 hover:pl-5 hover:shadow"
                                            >
                                                Read more
                                                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                                            </Link>
                                        }
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
            

            {/* Why Join */}
            <section className="py-20 md:py-28 relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-7xl mx-auto relative">
                    {whyJoin.map(({ icon: Icon, text, detail }, i) => {
                    const span = i === 0 ? "md:col-span-2 md:row-span-2 flex justify-center items-center": "";
                    const isHero = i === 0;
                    return (
                        <div
                        key={text}
                        className={`group relative rounded-3xl p-6 md:p-8 flex flex-col overflow-hidden  hover:shadow-xl hover:shadow-primary/10 min-h-45 md:min-h-50 ${span} ${isHero ? "border border-gray-200" : "bg-white border border-amber-500/30 hover:border-primary/40 justify-end transition-all duration-300 hover:-translate-y-1"}`}
                        >
                            {isHero ? <div className="absolute inset-0 bg-[#1D2F4F] rounded-2xl transition-opacity duration-500"/> : null}
                            {isHero ? 
                                <>
                                    <div className="absolute -top-20 -left-30 w-130 h-130 bg-amber-500/30 blur-2xl opacity-50 rounded-full"></div>
                                    <div className="absolute -bottom-20 -right-30 w-130 h-130 bg-green-600/30 opacity-50 blur-2xl rounded-full"></div>
                                </> : null}

                            <div className={`relative ${isHero ? 'flex flex-col justify-center items-center':null}`}>
                                {isHero?null:
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${isHero ? "bg-primary-foreground/20" : "bg-amber-500/30"}`}>
                                        <Icon className="w-5 h-5 text-amber-500" />
                                    </div>
                                }
                                {isHero ? <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide text-center">Join The Movement</span>: null }
                                <h5 className={`font-display font-bold ${isHero ? "text-lg md:text-5xl text-white" : "text-foreground text-lg md:text-xl "}`}>{text}</h5>
                                <p className={`mt-1 text-sm leading-relaxed ${isHero ? "text-white" : "text-muted-foreground"}`}>{detail}</p>
                                
                                {isHero ? <div className="flex justify-center items-center mt-4"><Link to={'/membership'} className="cursor-pointer"><Button className="bg-amber-500">Join Now</Button></Link></div>:null}
                            </div>
                        </div>
                    );
                    })}
                </div>
            </section>


            {/* Contact */}
            <section className="py-20 md:py-28">
                <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-sm font-semibold mb-5 tracking-wide">GET IN TOUCH</span>
                    <h5 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Contact Us</h5>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Have a question or want to collaborate? We'd love to hear from you.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 lg:gap-10 max-w-7xl mx-auto items-start">
                        <div className="md:col-span-2 space-y-4">
                            {[
                            { icon: Mail, label: "Email", value: "info@ecbindia.org", href: "mailto:info@ecbindia.org" },
                            { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                            { icon: MapPin, label: "Location", value: "New Delhi, India", href: null },
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
                                <h3 className="text-lg font-display font-bold">Let&apos;s Build Together</h3>
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
};

export default Home;