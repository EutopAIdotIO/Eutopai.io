import React from 'react';
import { Brain, Github, Twitter, MessageSquare, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                EutopAI
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              An AI-powered DAO dedicated to providing essential services affordably and fairly through AI governance.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors">
                <Send size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Get Involved</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Testnet</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Smart Contracts</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">API</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-400">
                <span className="block text-gray-300">Email:</span>
                info@eutopai.io
              </li>
              <li className="text-gray-400">
                <span className="block text-gray-300">Discord:</span>
                discord.gg/eutopai
              </li>
              <li className="text-gray-400">
                <span className="block text-gray-300">Telegram:</span>
                t.me/eutopai
              </li>
            </ul>
            
            <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              Contact Support
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 EutopAI DAO. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;