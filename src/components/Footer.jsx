import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Footer = () => (
  <footer className="bg-[#1D314E] text-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-5 md:px-6 md:py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link to="/" className="inline-block cursor-pointer">
            <img src={Logo} alt="ECB Logo" className="h-20"/>
          </Link>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed max-w-sm">
            Entrepreneur Connect Bharat (ECB) is committed to empowering entrepreneurs and MSMEs
            across India through networking, opportunities, and growth support.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Membership", path: "/membership" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="cursor-pointer text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-secondary-foreground/50">Contact</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>Email: info@ecb.in</li>
            <li>Phone: +91 XXXXX XXXXX</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-xs text-secondary-foreground/50">
        © 2026 Entrepreneur Connect Bharat (ECB). All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
