import { useState,useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./ui/button";
import Logo from "../assets/logo.webp";
import { AnimatePresence,motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { name: "Membership",
    children: [
      { name: "Elite Ambassador", path: "/membership/elite-ambassador" },
      { name: "Partner With Us", path: "/membership/partner-with-us" },
    ]
   },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 shadow-lg backdrop-blur-lg">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 md:min-h-8 md:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2 py-2">
          <div className="flex items-center gap-2">
            <div>
              <img src={Logo} alt="ECB Logo" className="h-14 w-auto sm:h-16 md:h-12" width={160} height={80} />
            </div>
            <div>
              <p className="font-semibold text-sm">Entrepreneurs Connect Bharat</p>
              <p className="uppercase text-[11px] leading-4 text-gray-600 ">Global Initiative of PCRED</p>
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item, idx) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setVisible(idx)}
              onMouseLeave={() => setVisible(null)}
            >
              {item.path ? (
                <div ref={ref}>
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-semibold transition-colors lg:px-4 ${
                      location.pathname === item.path
                        ? "bg-linear-to-br from-30% from-amber-500/10 to-amber-500/30 border border-amber-500/10 shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ) : (
                <span className={`px-4 py-2 text-sm font-semibold cursor-pointer flex items-center gap-1`}>
                  <div className="group relative cursor-pointer text-left text-sm py-3 flex gap-2 items-center">
                    <span>{item.name}</span>
                    <div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </span>
              )}
              {/* Dropdown */}
              <AnimatePresence>
                {item.children && visible === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-1/2 top-full w-60 -translate-x-1/3 rounded-b-xl bg-white shadow-xl overflow-hidden"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-3 text-sm hover:bg-neutral-100 hover:text-[#E18126] text-blue-950 font-semibold"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
