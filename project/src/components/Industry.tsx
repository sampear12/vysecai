import React, { useEffect, useRef } from 'react';
import { Building, Heart, Lightbulb, ShoppingBag, Shield, Lock, Database, Cpu } from 'lucide-react';

const Industry: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="industry" className="py-16 md:py-24 bg-gradient-to-br from-vysec-gray-light via-white/90 to-vysec-gray-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Animated elements */}
      <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-vysec-green/5 animate-pulse-slow"></div>
      <div className="absolute -right-10 bottom-1/3 w-60 h-60 rounded-full bg-vysec-green/5 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Floating tech icons */}
      <div className="absolute top-1/4 left-5 md:left-10 animate-float opacity-20" style={{animationDelay: '0.5s'}}>
        <Shield className="w-10 h-10 text-vysec-green" />
      </div>
      <div className="absolute bottom-1/4 right-5 md:right-10 animate-float opacity-20" style={{animationDelay: '1.2s'}}>
        <Lock className="w-10 h-10 text-vysec-green" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-float opacity-20" style={{animationDelay: '0.8s'}}>
        <Database className="w-8 h-8 text-vysec-green" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{animationDelay: '1.5s'}}>
        <Cpu className="w-8 h-8 text-vysec-green" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <div className="w-20 h-1 bg-vysec-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We understand industry-specific AI use cases, challenges, and regulatory landscapes. VySec helps organizations navigate the complexities of AI adoption with tailored, real-world solutions.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/90 to-vysec-gray-light/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.2s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                  <Building className="w-6 h-6 text-vysec-green" />
                </div>
                <h3 className="text-xl font-semibold">Banking, Financial Services & Insurance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                AI in payments and risk modeling shouldn't mean exposure. We ensure compliance with FFIEC and PCI-DSS—without slowing you down.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">FFIEC</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">PCI-DSS</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Risk Modeling</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/90 to-vysec-gray-light/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.3s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow" style={{animationDelay: '0.5s'}}>
                  <Heart className="w-6 h-6 text-vysec-green" />
                </div>
                <h3 className="text-xl font-semibold">Healthcare & Life Sciences</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Secure patient data and AI-driven innovations like diagnostics and drug discovery. Achieve HIPAA compliance and ethical governance without compromise.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">HIPAA</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Patient Data</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Diagnostics</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/90 to-vysec-gray-light/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.4s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow" style={{animationDelay: '1s'}}>
                  <Lightbulb className="w-6 h-6 text-vysec-green" />
                </div>
                <h3 className="text-xl font-semibold">Tech & AI Startups</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Build cutting-edge AI products responsibly. We embed trust and compliance into your foundation so your innovations scale securely.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Startups</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Product Security</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Scalability</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/90 to-vysec-gray-light/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.5s'}}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow" style={{animationDelay: '1.5s'}}>
                  <ShoppingBag className="w-6 h-6 text-vysec-green" />
                </div>
                <h3 className="text-xl font-semibold">Retail</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Protect AI-powered customer experiences and supply chains. From risk assessments to GDPR compliance, we ensure secure, ethical operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">GDPR</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Customer Experience</span>
                <span className="bg-vysec-green/10 text-vysec-green text-sm px-3 py-1 rounded-full">Supply Chain</span>
              </div>
            </div>
          </div>
          
          {/* <div className="mt-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.6s'}}>
            <p className="text-lg text-gray-800 font-medium">
              Serving clients nationwide and beyond, VySec helps industry leaders harness AI's potential safely and confidently.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Industry;