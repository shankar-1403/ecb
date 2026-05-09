import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import { Circle } from "lucide-react";
const Footer = () => (
  <footer className="bg-[#1D314E] text-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 md:px-6 md:py-8">

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-xs">
          <Link to="/" className="p-2 w-30 flex items-center justify-center bg-white rounded-lg">
            <div className="inline-block cursor-pointer">
              <img src={Logo} alt="ECB Logo" className="h-18" />
            </div>
          </Link>

          <p className="text-secondary-foreground/70 text-sm leading-relaxed mt-4">
            Entrepreneur Connect Bharat (ECB) is committed to empowering entrepreneurs and MSMEs
            across India through networking, opportunities, and growth support.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-base uppercase tracking-wider text-amber-500">Quick Links</p>
          <ul className="space-y-2 border-l border-amber-400/30 pl-4">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Elite Ambassador", path: "/membership/elite-ambassador" },
              { label: "Partner With Us", path: "/membership/partner-with-us" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="cursor-pointer text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground hover:text-amber-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-base uppercase tracking-wider text-amber-500">Global Headquarters</p>
          <ul className="space-y-2 text-sm text-secondary-foreground/70 border-l border-amber-400/30 pl-4">
            <li className="flex flex-col gap-1">
              <p>Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400093</p>
            </li>
            <li className="flex flex-col gap-1">
              <p className="w-20 font-bold">Email:</p>
              <a href="mailto:ecb@ec-bharat.com" className="hover:text-amber-400 transition">ecb@ec-bharat.com</a>
            </li>
            <li className="flex flex-col gap-1">
              <p className="w-20 font-bold">Phone:</p>
              <a href="tel:+912235120060" className="hover:text-amber-400 transition">+91 22 3512 0060</a>
            </li>
            <li className="flex flex-col gap-1">
              <p className="w-20 font-bold">Whatsapp:</p>
              <a href="tel:+917982218029" className="hover:text-amber-400 transition">+91 79822 18029</a>
            </li>
          </ul>
        </div>
      </div>


      <div className="border-t border-white/30 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-sm text-secondary-foreground/50 text-center">
        <p>© 2026 Entrepreneur Connect Bharat (ECB). All Rights Reserved.</p>
        <Circle size={8} className="fill-current hidden text-amber-500 sm:block mx-3" />
        <p>
          Powered by{" "}
          <a href="https://www.pcred.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-amber-400 transition">PCRED</a>
        </p>
      </div>
    </div>
  </footer >
);

export default Footer;