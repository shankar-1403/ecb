import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/button";
import Logo from "../assets/logo.webp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Membership", path: "/membership" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-lg backdrop-blur-lg">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:min-h-[5rem] md:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 py-2">
          <img src={Logo} alt="ECB Logo" className="h-14 w-auto sm:h-16 md:h-20" width={160} height={80} />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors lg:px-4 ${
                location.pathname === link.path
                  ? "bg-amber-500/10 text-amber-600"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 hover:bg-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t bg-card pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block cursor-pointer px-4 py-3 text-sm font-medium transition-colors sm:px-6 ${
                location.pathname === link.path ? "bg-primary/5 text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-4 pt-3 sm:px-6">
            <Link to="/membership" onClick={() => setOpen(false)} className="block">
              <Button className="w-full bg-amber-500">Join ECB</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
