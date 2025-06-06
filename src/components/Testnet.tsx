import React, { useState } from 'react';
import { Dices, LineChart, Code, ShieldCheck } from 'lucide-react';

const Testnet: React.FC = () => {
  const [activeTab, setActiveTab] = useState('games');
  
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Testnet & Early Access
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience the future of AI-governed services with our testnet. Try our early products and help us improve.
        </p>
      </div>
      
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden mb-16">
        <div className="flex flex-wrap">
          <button
            onClick={() => setActiveTab('games')}
            className={`px-6 py-4 font-medium ${
              activeTab === 'games' 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
                : 'bg-transparent text-gray-400 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <Dices className="h-5 w-5 mr-2" />
              <span>Chance Games</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('investing')}
            className={`px-6 py-4 font-medium ${
              activeTab === 'investing' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                : 'bg-transparent text-gray-400 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <LineChart className="h-5 w-5 mr-2" />
              <span>AI Investing</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('contracts')}
            className={`px-6 py-4 font-medium ${
              activeTab === 'contracts' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
                : 'bg-transparent text-gray-400 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <Code className="h-5 w-5 mr-2" />
              <span>Smart Contracts</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-4 font-medium ${
              activeTab === 'security' 
                ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white' 
                : 'bg-transparent text-gray-400 hover:bg-gray-800'
            }`}
          >
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-2" />
              <span>Security</span>
            </div>
          </button>
        </div>
        
        <div className="p-8">
          {activeTab === 'games' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Chance Games & Lotteries</h3>
                <p className="text-gray-300 mb-6">
                  Our testnet features several provably fair chance games with significantly higher payout rates than traditional options. All outcomes are verified on the blockchain.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">EutopLotto</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-400">
                      90% Payout
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Daily Jackpot</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-400">
                      92% Payout
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Prediction Markets</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-400">
                      95% Payout
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  All games use our transparent random number generation system that combines blockchain entropy with AI verification to ensure fair outcomes.
                </p>
                
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  Try Games on Testnet
                </button>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-semibold text-white">EutopLotto Dashboard</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-900/30 text-cyan-400">
                    Live on Testnet
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Current Jackpot</span>
                      <span className="text-lg font-bold text-cyan-400">1,250 ETH</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Next Draw</span>
                      <span className="text-gray-300">12:00 UTC (6h 23m)</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Your Tickets</span>
                      <span className="text-lg font-bold text-white">0</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Winning Chance</span>
                      <span className="text-gray-300">0%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Previous Winners</span>
                      <span className="text-cyan-400 text-sm">View All</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">0x7a...3f4d</span>
                        <span className="text-gray-300">250 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">0x3c...8e2a</span>
                        <span className="text-gray-300">175 ETH</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">0x9b...5c1f</span>
                        <span className="text-gray-300">120 ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                    Buy Tickets
                  </button>
                  <button className="flex-1 py-2 bg-transparent border border-gray-700 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition-all">
                    View Stats
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'investing' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">AI-Driven Investing</h3>
                <p className="text-gray-300 mb-6">
                  Our AI trading algorithms analyze market data 24/7 to identify opportunities and execute trades with precision. No human emotions, just data-driven decisions.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Grid Trading Bot</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-purple-900/30 text-purple-400">
                      +12.4% YTD
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Long-Term Portfolio</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-purple-900/30 text-purple-400">
                      +8.7% YTD
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Volatility Harvester</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-purple-900/30 text-purple-400">
                      +15.2% YTD
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  All strategies are backtested against historical data and continuously improved by our AI models. Performance metrics are transparent and verifiable.
                </p>
                
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  Try AI Investing
                </button>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-semibold text-white">Investment Dashboard</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-400">
                    Live on Testnet
                  </span>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Portfolio Value</span>
                    <span className="text-lg font-bold text-purple-400">0 ETH</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Test Funds Available</span>
                    <span className="text-gray-300">100 tETH</span>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Strategy Performance</span>
                    <select className="bg-gray-800 border border-gray-700 rounded text-sm text-gray-300 px-2 py-1">
                      <option>Grid Trading</option>
                      <option>Long-Term</option>
                      <option>Volatility</option>
                    </select>
                  </div>
                  
                  <div className="h-32 relative mb-2">
                    {/* Simple chart representation */}
                    <div className="absolute inset-0 flex items-end">
                      <div className="h-20% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-30% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-25% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-40% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-35% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-50% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-45% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-60% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-55% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-70% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-80% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                      <div className="h-75% w-1/12 bg-purple-900/30 border-t border-purple-500"></div>
                    </div>
                    
                    {/* Line chart overlay */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M0,80 L8.33,70 L16.66,75 L25,60 L33.33,65 L41.66,50 L50,55 L58.33,40 L66.66,45 L75,30 L83.33,20 L91.66,25 L100,25" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Sep</span>
                    <span>Dec</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                    Allocate Funds
                  </button>
                  <button className="flex-1 py-2 bg-transparent border border-gray-700 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition-all">
                    View Strategies
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'contracts' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Smart Contract Transparency</h3>
                <p className="text-gray-300 mb-6">
                  All EutopAI services are powered by open-source smart contracts that are fully auditable and transparent. Review our code and verify our claims.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">DAO Governance</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                      Audited
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Chance Games</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                      Audited
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Investment Pools</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-400">
                      In Audit
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Our contracts implement rigorous security measures and follow best practices. All code is peer-reviewed and professionally audited before deployment.
                </p>
                
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  View on GitHub
                </button>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-semibold text-white">Contract Explorer</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-400">
                    Verified
                  </span>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-4 font-mono text-sm overflow-auto max-h-64">
                  <pre className="text-gray-300">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EutopAIGovernance is ERC20, Ownable {
    // Governance parameters
    uint256 public proposalThreshold;
    uint256 public votingPeriod;
    uint256 public quorumVotes;
    
    // Proposal tracking
    uint256 public proposalCount;
    mapping(uint256 => Proposal) public proposals;
    
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        uint256 startBlock;
        uint256 endBlock;
        bool executed;
        mapping(address => Receipt) receipts;
        uint256 forVotes;
        uint256 againstVotes;
    }
    
    struct Receipt {
        bool hasVoted;
        bool support;
        uint256 votes;
    }
    
    event ProposalCreated(
        uint256 id,
        address proposer,
        string description,
        uint256 startBlock,
        uint256 endBlock
    );
    
    event VoteCast(
        address voter,
        uint256 proposalId,
        bool support,
        uint256 votes
    );
    
    constructor() ERC20("EutopAI Governance", "EUTOP") {
        // Initialize with sensible defaults
        proposalThreshold = 100000 * 10**18; // 100,000 tokens
        votingPeriod = 40320; // ~7 days in blocks
        quorumVotes = 500000 * 10**18; // 500,000 tokens
        
        // Mint initial supply
        _mint(msg.sender, 1000000 * 10**18); // 1M tokens
    }`}
                  </pre>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Contract Address</span>
                    <span className="text-sm text-gray-300 font-mono">0x7a...3f4d</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Network</span>
                    <span className="text-sm text-gray-300">Ethereum Testnet (Sepolia)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Deployment Date</span>
                    <span className="text-sm text-gray-300">2025-06-15</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                    View Full Code
                  </button>
                  <button className="flex-1 py-2 bg-transparent border border-gray-700 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition-all">
                    Audit Report
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Security & Bug Bounty</h3>
                <p className="text-gray-300 mb-6">
                  We take security seriously. Our bug bounty program rewards security researchers for responsibly disclosing vulnerabilities in our systems.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Critical Vulnerabilities</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-green-900/30 text-green-400">
                      Up to $50,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">High Severity</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-green-900/30 text-green-400">
                      Up to $25,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Medium Severity</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-green-900/30 text-green-400">
                      Up to $10,000
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Our security team reviews all submissions and works closely with researchers to validate and fix issues. We believe in transparent security practices.
                </p>
                
                <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all">
                  Submit a Bug
                </button>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-semibold text-white">Security Dashboard</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400">
                    Active
                  </span>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Security Status</span>
                    <span className="text-sm px-2 py-1 rounded-full bg-green-900/30 text-green-400">
                      All Systems Secure
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Last Audit</span>
                    <span className="text-sm text-gray-300">2025-05-20</span>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg mb-6">
                  <h5 className="font-medium text-white mb-3">Recent Activity</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="bg-green-900/30 p-1 rounded-full mr-2 mt-0.5">
                        <svg className="h-3 w-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300">Security audit completed</p>
                        <p className="text-gray-500">3 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-900/30 p-1 rounded-full mr-2 mt-0.5">
                        <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300">New security protocol implemented</p>
                        <p className="text-gray-500">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-yellow-900/30 p-1 rounded-full mr-2 mt-0.5">
                        <svg className="h-3 w-3 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300">Minor vulnerability patched</p>
                        <p className="text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all">
                    Security Report
                  </button>
                  <button className="flex-1 py-2 bg-transparent border border-gray-700 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition-all">
                    Bug Bounty
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testnet;