import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import { Circle } from "lucide-react";
const Footer = () => (
  <footer className="bg-[#1D314E] text-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 md:px-6 md:py-12">

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="p-2 w-30 flex items-center justify-center bg-white rounded-lg">
            <Link to="/" className="inline-block cursor-pointer">
              <img src={Logo} alt="ECB Logo" className="h-18" />
            </Link>
          </div>

          <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-sm mt-4">
            Entrepreneur Connect Bharat (ECB) is committed to empowering entrepreneurs and MSMEs
            across India through networking, opportunities, and growth support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Membership", path: "/membership" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="cursor-pointer text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>

              <a href="https://www.google.com/maps?q=Lodha+Supremus+Andheri+East+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition"
  >
              Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East, Mumbai, Maharashtra 400093
            </a>
          </li>
          <li className="flex flex-col">
            <div className="w-20 font-bold">Email:</div>
            <a href="mailto:contact@ec-bharat.in">contact@ec-bharat.in</a>
          </li>
          <li className="flex flex-col">
            <div className="w-20 font-bold">Phone:</div>
            <a href="tel:+912235120060">+91 22 3512 0060</a>
          </li>
        </ul>
      </div>
    </div>


    <div className="border-t border-secondary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 text-xs text-secondary-foreground/50 text-center">
      <p>© 2026 Entrepreneur Connect Bharat (ECB). All Rights Reserved.</p>
      <Circle className="w-2 h-2 fill-current hidden sm:block mx-3" />

      <p>
        Powered by{" "}
        <a
          href="https://www.pcred.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-amber-400 transition"
        >
          PCRED
        </a>
      </p>

    </div>
  </div>
  </footer >
);

export default Footer;