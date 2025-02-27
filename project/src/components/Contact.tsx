import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, Shield, CheckCircle, Lock, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/Logo 1_no background.png'; // Assuming the logo is in the assets folder

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="h-screen flex flex-col bg-gradient-to-br from-white via-vysec-gray-light/30 to-gray-900 relative overflow-hidden" ref={sectionRef}>
      <div className="flex-grow pt-24 md:pt-32 pb-12">
        {/* Background elements */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        
        {/* Animated elements */}
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-vysec-green/5 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 rounded-full bg-vysec-green/5 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 right-5 md:right-20 animate-float opacity-20" style={{animationDelay: '0.5s'}}>
          <Shield className="w-10 h-10 text-vysec-green" />
        </div>
        <div className="absolute bottom-1/4 left-5 md:left-20 animate-float opacity-20" style={{animationDelay: '1.2s'}}>
          <Lock className="w-10 h-10 text-vysec-green" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Get in Touch</h2>
              <div className="w-20 h-1 bg-vysec-green mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Ready to secure your AI future? Contact us for a free consultation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gradient-to-br from-white/90 to-vysec-gray-light/50 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.2s'}}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                      <Mail className="w-6 h-6 text-vysec-green" />
                    </div>
                    <h3 className="text-2xl font-semibold">Contact Information</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-4">
                    Fill out the form—we'll respond within 24 hours.
                  </p>
                  
                  <div className="flex items-center text-vysec-green font-medium text-lg">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>info@vysec.ai</span>
                  </div>
                </div>
                
                <div className="bg-vysec-green rounded-xl shadow-lg p-6 md:p-8 text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.3s'}}>
                  <h3 className="text-2xl font-semibold mb-4">Why Choose VySec?</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center text-vysec-green mt-0.5 mr-3 animate-pulse-slow">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span>Expert-led team with decades of experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center text-vysec-green mt-0.5 mr-3 animate-pulse-slow" style={{animationDelay: '0.5s'}}>
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span>Proprietary Helix Delivery Framework</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center text-vysec-green mt-0.5 mr-3 animate-pulse-slow" style={{animationDelay: '1s'}}>
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span>AI-powered solutions that outpace traditional methods</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center text-vysec-green mt-0.5 mr-3 animate-pulse-slow" style={{animationDelay: '1.5s'}}>
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <span>Tailored approach to your specific industry needs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/90 to-vysec-gray-light/50 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.4s'}}>
                {isSubmitted ? (
                  <div className="text-center py-8 animate-scale-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <p className="text-xl text-gray-700">
                      Thank you for reaching out! We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-vysec-green focus:border-vysec-green transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-vysec-green focus:border-vysec-green transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-base font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-vysec-green focus:border-vysec-green transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:ring-vysec-green focus:border-vysec-green transition-all duration-300"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-vysec-green hover:bg-vysec-green-light text-white py-4 px-8 rounded-md text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-vysec-green-dark'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-6 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"></div>
        
        {/* Animated elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-vysec-green/5 animate-pulse-slow"></div>
        <div className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-vysec-green/5 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-vysec-green/20 rounded-full flex items-center justify-center mr-2 animate-pulse-slow">
                <Shield className="h-6 w-6 text-vysec-green" />
              </div>
              <img src={logo} alt="VySec Logo" className="h-8 w-auto" />
            </div>
            
            <div className="flex space-x-6 text-base">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Services</a>
              <a href="#industry" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Industry</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:translate-y-1 inline-block">Contact</a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="bg-vysec-green hover:bg-vysec-green-light text-white p-3 rounded-full transition-all duration-300 mt-4 md:mt-0 transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-base">
              <p className="text-gray-400 mb-4 md:mb-0">
                VySec, LLC | NAICS 541519 | 2025
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                </div>
                
                <div className="flex space-x-2 ml-3">
                  <a href="#" className="text-gray-400 hover:text-vysec-green transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-vysec-green transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-vysec-green transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;