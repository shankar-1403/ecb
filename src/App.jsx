import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from "./pages/Team";
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/membership/elite-ambassador" element={<Membership />} />
        <Route path="/membership/partner-with-us" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
