import React from 'react';
import { Brain, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          About EutopAI
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A revolutionary AI-powered DAO dedicated to providing essential services affordably and fairly through AI governance.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-900 transition-all hover:shadow-lg hover:shadow-cyan-900/10">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Why AI is Superior</h3>
          <p className="text-gray-400">
            AI governance eliminates human greed, inefficiency, and bias. Our algorithms make decisions based on data and fairness, not profit motives or personal gain.
          </p>
        </div>
        
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-900 transition-all hover:shadow-lg hover:shadow-cyan-900/10">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Decentralized Ownership</h3>
          <p className="text-gray-400">
            Our DAO structure ensures that power and profits are distributed fairly. No central authority can manipulate the system for personal gain.
          </p>
        </div>
        
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-900 transition-all hover:shadow-lg hover:shadow-cyan-900/10">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Long-Term Vision</h3>
          <p className="text-gray-400">
            EutopAI will evolve from investing & lotteries to real estate, insurance, and education - creating a comprehensive ecosystem of fair services.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-cyan-300">The EutopAI Difference</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Transparent Algorithms</h4>
                <p className="text-gray-400">All decision-making processes are open-source and auditable.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Community Governance</h4>
                <p className="text-gray-400">Token holders vote on major decisions and protocol upgrades.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Fair Profit Distribution</h4>
                <p className="text-gray-400">Revenue is reinvested in the ecosystem and distributed to stakeholders.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">Continuous Improvement</h4>
                <p className="text-gray-400">AI models that learn and adapt to provide better services over time.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30"></div>
          <div className="relative bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              EutopAI aims to create a more equitable world by leveraging artificial intelligence to provide essential services that are:
            </p>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">•</span> Affordable for everyone
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">•</span> Free from human bias and corruption
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">•</span> Transparent in operation
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">•</span> Governed by the community
              </li>
              <li className="flex items-center">
                <span className="text-cyan-400 mr-2">•</span> Continuously improving through AI
              </li>
            </ul>
            <p className="text-gray-300">
              By replacing traditional human-controlled systems with AI governance, we can eliminate the inefficiencies and inequalities that plague current service providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;