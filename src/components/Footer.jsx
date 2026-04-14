import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Footer = () => (
  <footer className="bg-[#1D314E] text-white">
    <div className="py-12 md:py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/">
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
                <Link to={l.path} className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
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
