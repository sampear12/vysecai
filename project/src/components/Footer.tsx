import React from 'react';
import { Shield, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      
      {/* Animated elements */}
      <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-vysec-green/5 animate-pulse-slow"></div>
      <div className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-vysec-green/5 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 bg-vysec-green/20 rounded-full flex items-center justify-center mr-2 animate-pulse-slow">
              <Shield className="h-6 w-6 text-vysec-green" />
            </div>
            <span className="text-white font-display font-bold text-2xl">VySec</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">About</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Services</a>
            <a href="#industry" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Industry</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-vysec-green hover:bg-vysec-green-light text-white p-3 rounded-full transition-all duration-300 mt-6 md:mt-0 transform hover:-translate-y-1 hover:shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              VySec, LLC | NAICS 541519 | © 2025
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
              
              <div className="flex space-x-3 ml-4">
                <a href="#" className="text-gray-400 hover:text-vysec-green transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-vysec-green transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-vysec-green transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;