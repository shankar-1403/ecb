import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { ArrowUp } from "lucide-react";

const Layout = ({ children }) => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <main className="min-w-0 flex-1 w-full">{children}</main>
      <Footer />

      <div className="fixed bottom-6 sm:bottom-16 right-4 z-50 flex flex-col items-center gap-3">

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`w-11 h-11 flex items-center justify-center rounded-full bg-[#1D2F4F] text-white shadow-lg hover:bg-amber-500 transition-all duration-300 hover:-translate-y-1 ${showArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>


        <a href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform"
        >
        <IconBrandWhatsapp className="w-6 h-6 text-white" />
      </a>

    </div>
    </div >
  );
};

export default Layout;