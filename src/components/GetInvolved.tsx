import React from 'react';
import { Coins, Code, Users } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Get Involved
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join the EutopAI ecosystem and help build the future of fair, AI-governed services.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-cyan-900 transition-all hover:shadow-lg hover:shadow-cyan-900/10">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Coins className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">For Investors</h3>
          <p className="text-gray-400 mb-6">
            Invest in the future of AI governance and decentralized services. Purchase governance tokens or participate in funding rounds.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Governance token ownership</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Early access to new services</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Revenue sharing opportunities</span>
            </li>
            <li className="flex items-start">
              <div className="bg-cyan-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Voting rights on major decisions</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            Invest Now
          </button>
        </div>
        
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-purple-900 transition-all hover:shadow-lg hover:shadow-purple-900/10">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">For Developers</h3>
          <p className="text-gray-400 mb-6">
            Contribute to our open-source AI models, smart contracts, and applications. Help build the technical foundation of EutopAI.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Open-source contributions</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Bug bounty program</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">AI model training & testing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Smart contract development</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Join Developer Community
          </button>
        </div>
        
        <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-900 transition-all hover:shadow-lg hover:shadow-blue-900/10">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-blue-300">For Supporters</h3>
          <p className="text-gray-400 mb-6">
            Help spread awareness about EutopAI's mission and build our community. Become an advocate for AI-governed services.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Community moderation</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Content creation & sharing</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Early testing & feedback</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-400">Ambassador program</span>
            </li>
          </ul>
          <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            Join Community
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30"></div>
        <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Join Our Community
              </h3>
              <p className="text-gray-300 mb-6">
                Connect with like-minded individuals who believe in the power of AI governance to create a more equitable world. Our community is growing rapidly and welcomes contributors of all kinds.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <a href="#" className="flex items-center justify-center py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.874-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Discord
                </a>
                <a href="#" className="flex items-center justify-center py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l.035.001c.16-.003.358-.067.568-.168.185-.088.37-.222.562-.41.317-.313.48-.706.629-1.07.684-1.58 2.184-5.016 2.766-6.356.14-.307.177-.612.138-.919-.024-.19-.065-.368-.13-.524.5-.067 1.304-.211 2.233-.362 1.672-.27 3.562-.575 4.517-.713.398-.058.763-.165 1.07-.333.314-.168.614-.405.784-.714.17-.31.216-.663.178-.995-.036-.304-.159-.614-.427-.87-.537-.514-1.4-.598-1.9-.598h-.013z" />
                  </svg>
                  Telegram
                </a>
                <a href="#" className="flex items-center justify-center py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a>
                <a href="#" className="flex items-center justify-center py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
              
              <p className="text-gray-400 text-sm">
                By joining our community, you'll get early access to new features, exclusive content, and opportunities to shape the future of EutopAI.
              </p>
            </div>
            
            <div>
              <form className="bg-gray-800/50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-cyan-300">Stay Updated</h4>
                <p className="text-gray-400 mb-6">
                  Subscribe to our newsletter to receive the latest updates on our progress and upcoming features.
                </p>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-400">
                      I'm interested in becoming an early tester
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;