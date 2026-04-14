import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { Users, Building2, Rocket, BookOpen, Heart, CheckCircle2, Eye, Target, Handshake, Globe, Lightbulb, ArrowRight, Sparkles, TrendingUp, Award, Zap, Mail, Phone, MapPin,Send } from "lucide-react";
import Layout from "../components/Layout";
import heroBg from "../assets/hero-bg.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { useState } from "react";

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


function Home() {
    const [formData, setFormData] = useState({name:"",email:"",phone:"",message:""});
    return (
        <Layout>
            {/* Hero */}
            <section className="relative overflow-hidden min-h-[90vh]">
                <div className="absolute inset-0">
                    <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative h-screen flex flex-col justify-center items-center">
                    <div className="text-center flex flex-col justify-center items-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 border border-amber-600/30 text-amber-600 mb-8 animate-fade-up">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold tracking-wide">India's Entrepreneur Growth Platform</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] animate-fade-up">
                            Empowering Indian
                            <br />
                            <span className="relative">
                                <span className="bg-linear-to-br from-amber-600 via-white to-green-600 bg-clip-text text-transparent">Entrepreneurs</span>
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
                            <span className="text-gray-300 text-xl md:text-4xl lg:text-4xl">Strengthening MSMEs. Building Bharat 🇮🇳</span>
                        </h1>
                        <p className="mt-8 text-gray-300 text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed animate-fade-up-delay">
                            A national platform dedicated to supporting MSMEs, startups, and business owners with the right opportunities, connections, knowledge, and growth resources.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up-delay-2">
                            <Link to="/membership">
                                <Button size="lg" className="text-base bg-amber-600 px-8 py-6 rounded-xl shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-shadow" asChild>Join ECB</Button>
                            </Link>
                            <Link to="/membership">
                                <Button size="lg" className="text-base bg-[#1D2F4F] px-8 py-6 rounded-xl shadow-lg shadow-[#1D2F4F]/25 hover:shadow-[#1D2F4F]/40 transition-shadow" asChild>Become a Member</Button>
                            </Link>
                            <Link to="/services">
                                <Button size="lg" className="text-base px-8 py-6 rounded-xl shadow-lg shadow-green-600/25 hover:shadow-green-600/40 transition-shadow bg-green-600" asChild>
                                    Explore Opportunities
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About ECB */}
            <section className="relative py-20 md:py-28">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="relative flex gap-12 md:gap-16 items-center max-w-7xl mx-auto">
                    <div className="w-[50%]">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-600 text-sm font-semibold mb-5 tracking-wide">WHO WE ARE</span>
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
                            <Button className="mt-8 group bg-amber-600" asChild>
                                Learn More About Us
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-[50%]">
                    {[
                        { icon: Handshake, value: "500+", sub: "Entrepreneurs Connected" },
                        { icon: Globe, value: "28+", sub: "States Covered" },
                        { icon: Lightbulb, value: "100+", sub: "Startups Supported" },
                        { icon: Building2, value: "200+", sub: "Businesses Empowered" },
                    ].map((stat) => (
                        <div key={stat.sub} className="rounded-2xl bg-white border border-amber-600/20 shadow-lg p-6 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 flex gap-10">
                            <div className="w-15 h-15 flex justify-center items-center rounded-full border-2 border-amber-600">
                                <stat.icon className="w-8 h-8 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-black">{stat.value}</p>
                                <p className="text-xs text-black mt-1">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="relative overflow-hidden bg-[#1D2B4E]">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(24, 90%, 50%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(145, 60%, 40%) 0%, transparent 50%)" }} />
                <div className="relative py-20 max-w-7xl mx-auto md:py-28">
                    <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-600 text-sm font-semibold mb-5 tracking-wide">OUR PURPOSE</span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-4">Vision & Mission</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group border border-white/60 overflow-hidden rounded-2xl">
                            <div className="absolute -bottom-20 -right-30 w-100 h-100 bg-amber-600/30 opacity-20 rounded-full"></div>
                            <div className="relative bg-card/80 backdrop-blur-sm p-8 md:p-10 h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                                <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center mb-6">
                                    <Eye className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-display font-bold text-white">Our Vision</h4>
                                <div className="w-16 h-1 bg-linear-to-r from-amber-600 via-white to-green-600 rounded-full mt-4 mb-5" />
                                <p className="text-white leading-relaxed text-base md:text-lg">
                                    To create India's most trusted platform for entrepreneurs, MSMEs, and startups by providing growth opportunities, meaningful connections, and business support systems.
                                </p>
                            </div>
                        </div>

                        <div className="relative group border border-white/60 overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-600 via-white to-green-600 rounded-2xl opacity-20 transition-opacity duration-500 blur-xl" />
                            <div className="relative bg-card/80 backdrop-blur-sm p-8 md:p-10 h-full hover:border-primary/40 transition-colors duration-300 overflow-hidden">
                            <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-2xl md:text-3xl font-display font-bold text-white">Our Mission</h4>
                            <div className="w-16 h-1 bg-linear-to-r from-amber-600 via-white to-green-600 rounded-full mt-4 mb-5" />
                            <ul className="space-y-4">
                                {missions.map((m) => (
                                <li key={m} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center mt-0.5 shrink-0">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                                    </div>
                                    <span className="text-white leading-relaxed">{m}</span>
                                </li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* Offerings */}
            <section className="py-20 overflow-hidden md:py-28 bg-gray-50">
                <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-600 text-sm font-semibold mb-5 tracking-wide">OUR SERVICES</span>
                    <h5 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">What We Offer</h5>
                </div>
                <div className="max-w-7xl mx-auto">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {offerings.map(({ icon: Icon, title, desc, number }) => (
                                <CarouselItem
                                    key={title}
                                    className="basis-full md:basis-1/2 lg:basis-1/3 py-3"
                                >
                                    <div className="group relative rounded-3xl p-6 md:p-8 flex flex-col justify-end overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 min-h-45 md:min-h-60 bg-card border border-amber-600 hover:border-amber-600/40 bg-white">
                                    <div className="absolute top-1 right-1">
                                        <span className="font-bold text-6xl text-gray-300/30">{number}</span>
                                    </div>
                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></div>

                                    {/* Optional second bubble */}
                                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 border border-amber-600">
                                        <Icon className="w-5 h-5 text-amber-600"/>
                                    </div>

                                    <h5 className="text-lg md:text-xl font-bold text-foreground">{title}</h5>

                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                                    <Link to={"/"} className="text-amber-600 text-sm mt-4 hover:underline font-bold">Read More</Link>
                                    </div>
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
                        className={`group relative rounded-3xl p-6 md:p-8 flex flex-col overflow-hidden  hover:shadow-xl hover:shadow-primary/10 min-h-45 md:min-h-50 ${span} ${isHero ? "border border-gray-200" : "bg-white border border-amber-600/30 hover:border-primary/40 justify-end transition-all duration-300 hover:-translate-y-1"}`}
                        >
                            {isHero ? <div className="absolute inset-0 bg-[#1D2F4F] rounded-2xl transition-opacity duration-500"/> : null}
                            {isHero ? 
                                <>
                                    <div className="absolute -top-20 -left-30 w-130 h-130 bg-amber-600/30 blur-2xl opacity-50 rounded-full"></div>
                                    <div className="absolute -bottom-20 -right-30 w-130 h-130 bg-green-600/30 opacity-50 blur-2xl rounded-full"></div>
                                </> : null}

                            <div className={`relative ${isHero ? 'flex flex-col justify-center items-center':null}`}>
                                {isHero?null:
                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${isHero ? "bg-primary-foreground/20" : "bg-amber-600/30"}`}>
                                        <Icon className="w-5 h-5 text-amber-600" />
                                    </div>
                                }
                                {isHero ? <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-600 text-sm font-semibold mb-5 tracking-wide text-center">Join The Movement</span>: null }
                                <h5 className={`font-display font-bold ${isHero ? "text-lg md:text-5xl text-white" : "text-foreground text-lg md:text-xl "}`}>{text}</h5>
                                <p className={`mt-1 text-sm leading-relaxed ${isHero ? "text-primary-foreground/80 text-white" : "text-muted-foreground"}`}>{detail}</p>
                                
                                {isHero ? <div className="flex justify-center items-center mt-4"><Link to={'/membership'} className="cursor-pointer"><Button className="bg-amber-600">Join Now</Button></Link></div>:null}
                            </div>
                        </div>
                    );
                    })}
                </div>
            </section>


            {/* Contact */}
            <section className="py-20 md:py-28">
                <div className="py-20 max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-amber-600/10 text-amber-600 text-sm font-semibold mb-5 tracking-wide">GET IN TOUCH</span>
                    <h5 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Contact Us</h5>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Have a question or want to collaborate? We'd love to hear from you.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
                        <div className="md:col-span-2 space-y-6">
                            {[
                            { icon: Mail, label: "Email", value: "info@ecbindia.org" },
                            { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                            { icon: MapPin, label: "Location", value: "New Delhi, India" },
                            ].map(({ icon: Icon, label, value }) => (
                                <a href={label === "Email" ? `mailto:${value}` : label === "Phone" ? `tel:${value}` : null} key={label} className="flex items-start gap-4 group shadow-2xl p-6 bg-card rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 rounded-xl bg-amber-600/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{label}</p>
                                        <p className="font-display font-semibold text-foreground">{value}</p>
                                    </div>
                                </a>
                            ))}
                            <div className="mt-8 p-6 rounded-2xl bg-[#1D2F4F]">
                                <h3 className="text-lg font-display font-bold text-white">Let's Build Together</h3>
                                <p className="mt-2 text-sm text-white/80 leading-relaxed">Join 500+ entrepreneurs who are growing their businesses with ECB.</p>
                            </div>
                        </div>

                        <form className="md:col-span-3 space-y-5 rounded-3xl bg-card p-8 shadow-2xl shadow-primary/5">
                            <div>
                                <input name="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl border p-2 w-full border-gray-300 focus:border focus:border-amber-600" maxLength={100} />
                            </div>
                            <div>
                                <input name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl border p-2 w-full border-gray-300 focus:border focus:border-amber-600" maxLength={255} />
                            </div>
                            <div>
                                <input name="phone" type="number" placeholder="+91 00000 00000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl border p-2 w-full border-gray-300 focus:border focus:border-amber-600" maxLength={15} />
                            </div>
                            <div>
                                <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="rounded-xl border p-2 w-full border-gray-300 focus:border focus:border-amber-600 min-h-30" maxLength={1000} />
                            </div>
                            <Button type="submit" size="lg" className="w-full rounded-xl bg-amber-600 cursor-pointer text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-amber-600/90 transition-all text-base py-6">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default Home;