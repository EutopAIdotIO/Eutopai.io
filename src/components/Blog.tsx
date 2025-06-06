import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI Governance in Financial Services",
      excerpt: "How AI-driven decision making can eliminate bias and inefficiency in traditional financial systems.",
      date: "June 15, 2025",
      author: "Dr. Elena Voss",
      category: "AI Governance",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
    },
    {
      title: "Blockchain + AI: The Perfect Partnership for Trust",
      excerpt: "Exploring how the combination of blockchain transparency and AI intelligence creates unprecedented trust.",
      date: "June 8, 2025",
      author: "Marcus Chen",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
    },
    {
      title: "EutopAI Testnet Reaches 2,500 Active Users",
      excerpt: "Our community is growing rapidly as more people discover the benefits of AI-governed services.",
      date: "May 30, 2025",
      author: "Sarah Johnson",
      category: "Milestone",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
    }
  ];

  const featuredPost = {
    title: "Why Human Bias Makes AI Governance Essential",
    excerpt: "Traditional systems are plagued by human biases that lead to unfair outcomes. AI governance offers a solution by making decisions based on data and fairness principles rather than profit motives or personal gain.",
    date: "June 20, 2025",
    author: "Dr. James Wilson",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80"
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Blog & Updates
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay informed about our progress, learn about AI governance, and discover the latest developments in the EutopAI ecosystem.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="relative h-96 rounded-xl overflow-hidden mb-6">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-3 py-1 bg-cyan-500/80 backdrop-blur-sm text-white text-xs rounded-full mb-3">
                {featuredPost.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{featuredPost.title}</h3>
              <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.date}</span>
                <User className="h-4 w-4 mr-1" />
                <span>{featuredPost.author}</span>
              </div>
            </div>
          </div>
          
          <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Latest Articles</h3>
          
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="inline-block px-2 py-1 bg-gray-800/80 backdrop-blur-sm text-cyan-400 text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h4>
              
              <div className="flex items-center text-gray-500 text-xs mt-2">
                <Calendar className="h-3 w-3 mr-1" />
                <span className="mr-3">{post.date}</span>
                <User className="h-3 w-3 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
          ))}
          
          <button className="w-full py-2 mt-4 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-30"></div>
        <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates, articles, and announcements delivered directly to your inbox. Stay informed about our progress and upcoming features.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="updates"
                    type="checkbox"
                    className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded"
                  />
                  <label htmlFor="updates" className="ml-2 block text-sm text-gray-400">
                    I want to receive product updates and announcements
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
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-cyan-300">Popular Topics</h4>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  AI Governance
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  Blockchain
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  Decentralized Finance
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  Smart Contracts
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  DAO Structure
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  Testnet Updates
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  Community
                </span>
                <span className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 text-sm cursor-pointer transition-colors">
                  Roadmap
                </span>
              </div>
              
              <h4 className="text-xl font-semibold text-cyan-300 pt-4">Upcoming Webinars</h4>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-white">Introduction to AI Governance</h5>
                    <span className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-400 rounded-full">
                      June 25
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Learn the basics of how AI can govern services fairly and efficiently.
                  </p>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    Register Now
                  </button>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-medium text-white">The Economics of Fair Services</h5>
                    <span className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-400 rounded-full">
                      July 10
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">
                    Exploring how AI-governed services can be both fair and economically sustainable.
                  </p>
                  <button className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;