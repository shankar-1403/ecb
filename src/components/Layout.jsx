import Navbar from "./Navbar";
import Footer from "./Footer";
import { IconBrandWhatsapp } from "@tabler/icons-react";
const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col overflow-x-hidden">
    <Navbar />
    <main className="min-w-0 flex-1 w-full">{children}</main>
    <Footer />
    <a
      href="https://wa.me/919999999999" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <IconBrandWhatsapp className="w-6 h-6 text-white" />
    </a>
  </div>
);

export default Layout;
