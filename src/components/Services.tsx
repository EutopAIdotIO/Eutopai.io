import React, { useState } from 'react';
import { Dices, LineChart, Shield, GraduationCap, Home } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const services = [
    {
      icon: <Dices className="h-8 w-8" />,
      title: "Chance Games & Lotteries",
      description: "Provably fair games with higher payout rates than traditional options. Our AI ensures random outcomes while maintaining sustainable economics.",
      status: "Current",
      color: "from-cyan-500 to-blue-600",
      benefits: [
        "Higher payout rates (90%+ vs industry standard 50-70%)",
        "Transparent odds and results verified on blockchain",
        "No human manipulation of outcomes",
        "Profits reinvested in the DAO ecosystem"
      ]
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "AI-Driven Investing",
      description: "Algorithmic trading strategies and investment opportunities that outperform human managers. Grid trading, long-term wealth strategies, and more.",
      status: "Current",
      color: "from-purple-500 to-pink-600",
      benefits: [
        "Emotion-free trading decisions based on data",
        "Lower fees than traditional investment managers",
        "24/7 market monitoring and execution",
        "Customizable risk profiles for different investor needs"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Decentralized Insurance",
      description: "Fair, transparent insurance products without the profit-driven denials and delays of traditional insurers. Claims processed by AI for speed and fairness.",
      status: "Future",
      color: "from-blue-500 to-indigo-600",
      benefits: [
        "Faster claims processing through AI verification",
        "Lower premiums with reduced overhead costs",
        "Transparent coverage terms in smart contracts",
        "Community risk pooling for better rates"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education & Skills",
      description: "Personalized learning experiences and skill development programs that adapt to individual needs, making quality education accessible to all.",
      status: "Future",
      color: "from-green-500 to-teal-600",
      benefits: [
        "Personalized learning paths based on individual progress",
        "Affordable access to quality educational content",
        "Skill verification and certification on blockchain",
        "AI tutoring available 24/7 for continuous learning"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Real Estate & Housing",
      description: "Democratized access to real estate investments and fair housing opportunities through fractional ownership and AI-managed properties.",
      status: "Future",
      color: "from-yellow-500 to-orange-600",
      benefits: [
        "Fractional ownership lowering barriers to entry",
        "AI property management reducing costs",
        "Transparent pricing based on actual value",
        "Community-owned housing developments"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Our Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Current and future services powered by AI governance, providing fair and efficient alternatives to traditional options.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full flex items-center ${
              activeTab === index 
                ? `bg-gradient-to-r ${service.color} text-white` 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            } transition-all`}
          >
            <span className="mr-2">{service.icon}</span>
            <span>{service.title}</span>
            {service.status === "Future" && (
              <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                Future
              </span>
            )}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {services[activeTab].title}
          </h3>
          <p className="text-gray-300 mb-6">
            {services[activeTab].description}
          </p>
          
          <h4 className="text-lg font-semibold mb-4 text-cyan-300">AI Governance Benefits</h4>
          <ul className="space-y-3">
            {services[activeTab].benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className={`bg-gradient-to-r ${services[activeTab].color} p-1 rounded-full mr-3 mt-1`}>
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-400">{benefit}</span>
              </li>
            ))}
          </ul>
          
          {services[activeTab].status === "Current" ? (
            <button className="mt-8 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Try it Now
            </button>
          ) : (
            <button className="mt-8 px-6 py-2 bg-transparent border border-cyan-500 rounded-full text-cyan-400 font-medium hover:bg-cyan-950/30 transition-all">
              Join Waitlist
            </button>
          )}
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${services[activeTab].color} rounded-lg blur opacity-30`}></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex items-center justify-center">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${services[activeTab].color} flex items-center justify-center mb-4`}>
                {services[activeTab].icon}
              </div>
              
              <div className="ml-8">
                <div className="space-y-2">
                  <div className="h-2 w-32 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full w-4/5 bg-gradient-to-r ${services[activeTab].color} rounded-full`}></div>
                  </div>
                  <div className="h-2 w-48 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full w-3/5 bg-gradient-to-r ${services[activeTab].color} rounded-full`}></div>
                  </div>
                  <div className="h-2 w-40 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full w-4/5 bg-gradient-to-r ${services[activeTab].color} rounded-full`}></div>
                  </div>
                  <div className="h-2 w-36 bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full w-2/3 bg-gradient-to-r ${services[activeTab].color} rounded-full`}></div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">90%+</div>
                    <div className="text-xs text-gray-400">Return Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-gray-400">Transparency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;