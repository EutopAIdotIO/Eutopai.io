import React, { useState } from 'react';
import { Brain, ChevronDown, Coins, GraduationCap, Home, Info, LayoutGrid, LineChart, MessageSquare, Shield, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Roadmap from './components/Roadmap';
import GetInvolved from './components/GetInvolved';
import Testnet from './components/Testnet';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="pt-20">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="services" className="py-20 bg-gray-900">
          <Services />
        </section>
        
        <section id="roadmap" className="py-20">
          <Roadmap />
        </section>
        
        <section id="get-involved" className="py-20 bg-gray-900">
          <GetInvolved />
        </section>
        
        <section id="testnet" className="py-20">
          <Testnet />
        </section>
        
        <section id="blog" className="py-20 bg-gray-900">
          <Blog />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;