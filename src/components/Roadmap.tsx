import React, { useState } from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      title: "Phase 1: Testnet Launch",
      timeframe: "Q3 2025",
      status: "In Progress",
      description: "Launch of the initial testnet with basic services and community building.",
      milestones: [
        { text: "Launch EutopAI DAO governance structure", completed: true },
        { text: "Deploy testnet for chance games and lotteries", completed: true },
        { text: "Release initial AI trading algorithms", completed: false },
        { text: "Community growth to 10,000 members", completed: false },
        { text: "Security audits and bug bounty program", completed: false }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Phase 2: AI Infrastructure",
      timeframe: "Q1 2026",
      status: "Planned",
      description: "Building robust AI models and expanding service offerings.",
      milestones: [
        { text: "Develop advanced AI decision-making models", completed: false },
        { text: "Launch mainnet for core services", completed: false },
        { text: "Implement cross-chain compatibility", completed: false },
        { text: "Establish AI research partnerships", completed: false },
        { text: "Begin development of insurance products", completed: false }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Phase 3: Service Expansion",
      timeframe: "Q4 2026",
      status: "Planned",
      description: "Expanding into new service categories and scaling operations.",
      milestones: [
        { text: "Launch decentralized insurance platform", completed: false },
        { text: "Begin real estate tokenization and management", completed: false },
        { text: "Release educational platform beta", completed: false },
        { text: "Expand to multiple blockchain ecosystems", completed: false },
        { text: "Reach 100,000 active users", completed: false }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Phase 4: Global Adoption",
      timeframe: "2027 and beyond",
      status: "Future",
      description: "Achieving widespread adoption and disrupting traditional service industries.",
      milestones: [
        { text: "Full suite of financial services", completed: false },
        { text: "Global expansion and localization", completed: false },
        { text: "Integration with traditional finance systems", completed: false },
        { text: "Advanced AI governance mechanisms", completed: false },
        { text: "Become leading provider in multiple service categories", completed: false }
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Roadmap & Progress
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our strategic plan for building and scaling EutopAI's services and ecosystem.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {phases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setActivePhase(index)}
            className={`px-4 py-2 rounded-full flex items-center ${
              activePhase === index 
                ? `bg-gradient-to-r ${phase.color} text-white` 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            } transition-all`}
          >
            {phase.status === "In Progress" ? (
              <Clock className="h-4 w-4 mr-2" />
            ) : phase.status === "Completed" ? (
              <CheckCircle className="h-4 w-4 mr-2" />
            ) : (
              <Circle className="h-4 w-4 mr-2" />
            )}
            <span>{phase.title}</span>
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {phases[activePhase].title}
            </h3>
            <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
              phases[activePhase].status === "In Progress" 
                ? "bg-blue-900/50 text-blue-300" 
                : phases[activePhase].status === "Completed"
                  ? "bg-green-900/50 text-green-300"
                  : "bg-gray-800 text-gray-400"
            }`}>
              {phases[activePhase].status}
            </span>
          </div>
          
          <p className="text-gray-300 mb-2">
            <span className="text-cyan-400">Timeframe:</span> {phases[activePhase].timeframe}
          </p>
          
          <p className="text-gray-300 mb-6">
            {phases[activePhase].description}
          </p>
          
          <h4 className="text-lg font-semibold mb-4 text-cyan-300">Key Milestones</h4>
          <ul className="space-y-3">
            {phases[activePhase].milestones.map((milestone, index) => (
              <li key={index} className="flex items-start">
                <div className={`p-1 rounded-full mr-3 ${
                  milestone.completed 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-gray-700 text-gray-400"
                }`}>
                  {milestone.completed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Circle className="h-4 w-4" />
                  )}
                </div>
                <span className={milestone.completed ? "text-gray-300" : "text-gray-400"}>
                  {milestone.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${phases[activePhase].color} rounded-lg blur opacity-30`}></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h4 className="text-lg font-semibold mb-6 text-cyan-300">Funding & Resources</h4>
              
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Development Progress</span>
                    <span className="text-cyan-400">
                      {activePhase === 0 ? "45%" : activePhase === 1 ? "10%" : "0%"}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${phases[activePhase].color} rounded-full`}
                      style={{ width: activePhase === 0 ? "45%" : activePhase === 1 ? "10%" : "0%" }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Funding Secured</span>
                    <span className="text-cyan-400">
                      {activePhase === 0 ? "75%" : activePhase === 1 ? "30%" : "0%"}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${phases[activePhase].color} rounded-full`}
                      style={{ width: activePhase === 0 ? "75%" : activePhase === 1 ? "30%" : "0%" }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Community Growth</span>
                    <span className="text-cyan-400">
                      {activePhase === 0 ? "60%" : activePhase === 1 ? "15%" : "0%"}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${phases[activePhase].color} rounded-full`}
                      style={{ width: activePhase === 0 ? "60%" : activePhase === 1 ? "15%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold mb-4 text-cyan-300">Capital Allocation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-lg font-bold text-white">40%</div>
                  <div className="text-xs text-gray-400">Development</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-lg font-bold text-white">25%</div>
                  <div className="text-xs text-gray-400">AI Research</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-lg font-bold text-white">20%</div>
                  <div className="text-xs text-gray-400">Marketing</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-lg font-bold text-white">15%</div>
                  <div className="text-xs text-gray-400">Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;