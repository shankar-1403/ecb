import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col overflow-x-hidden">
    <Navbar />
    <main className="min-w-0 flex-1 w-full">{children}</main>
    <Footer />
  </div>
);

export default Layout;
