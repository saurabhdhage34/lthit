import React from "react";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Team from "./Team";
import Services from "./Services";
import Contact from "./Contact";
import Careers from "./Careers";
import Gallery from "./Gallery";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
     </Router>

      
    </div>
  );
}

export default App;