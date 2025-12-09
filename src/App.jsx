import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HowItsWork from './pages/HowWork/HowItsWork';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Interior from './pages/InteriorDesign/Interior';
import DreamHome from './pages/Dream/DreamHome';
import BusinessHome from './pages/Bussiness/BusinessHome';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-its-work" element={<HowItsWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/interior-design" element={<Interior />} />
          <Route path="/services/dream-home" element={<DreamHome />} />
          <Route path="/services/business-design" element={<BusinessHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
