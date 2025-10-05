import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null, 'success', 'error'
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setLoading(false);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-700 bg-teal-50 rounded-full mb-4 shadow-sm">
            STAY CONNECTED
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Subscribe to Our <span className="text-teal-600 font-semibold">Newsletter</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            Get the latest insights on clinical research and industry trends delivered to your inbox.
          </p>
        </div>
        
        <div className="relative">
          {/* Modern glass-morphism card */}
          <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20">
            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0M0 0L40 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>
            
            {/* Colored accent bars */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-blue-400"></div>
            
            <div className="flex flex-col md:flex-row">
              {/* Left side - Visual element */}
              <div className="w-full md:w-2/5 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
                <div className="h-full flex flex-col justify-center p-10 md:p-12">
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 font-oxygen">Stay Informed</h3>
                    <p className="text-teal-50 mb-6 font-oxygen font-normal">Get the latest insights on clinical research and industry trends delivered to your inbox.</p>
                    
                    <div className="flex flex-col space-y-3">
                      {['Weekly Updates', 'Research Insights', 'Industry News'].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm md:text-base font-oxygen font-normal">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>
              
              {/* Right side - Email form */}
              <div className="w-full md:w-3/5 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-oxygen">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={`w-full px-5 py-4 rounded-lg border ${
                          status === 'error' ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 
                          'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
                        } shadow-sm focus:outline-none focus:ring-2 transition-colors duration-200 text-base font-oxygen`}
                        disabled={loading || status === 'success'}
                        required
                      />
                      {status === 'error' && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </div>
                    {status === 'error' && (
                      <p className="mt-1 text-sm text-red-600 font-oxygen font-normal">
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading || status === 'success'}
                    className={`w-full px-8 py-4 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center font-oxygen ${
                      loading ? 'bg-gray-400 cursor-not-allowed' : 
                      status === 'success' ? 'bg-green-500 hover:bg-green-600' : 
                      'bg-gradient-to-r from-teal-600 to-teal-500 hover:shadow-xl hover:-translate-y-0.5'
                    }`}
                  >
                    {loading ? (
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : status === 'success' ? (
                      <CheckCircle className="h-5 w-5 mr-2" />
                    ) : (
                      <Send className="h-5 w-5 mr-2" />
                    )}
                    {loading ? 'Subscribing...' : status === 'success' ? 'Subscribed' : 'Subscribe to Newsletter'}
                  </button>
                  
                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium font-oxygen">Thank you for subscribing!</p>
                        <p className="text-sm font-oxygen font-normal">We'll keep you updated with the latest news and insights.</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-sm text-gray-500 flex items-center font-oxygen font-normal">
                    <svg className="h-4 w-4 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    By subscribing, you agree to our <a href="#" className="text-teal-600 hover:underline ml-1">Privacy Policy</a>.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;