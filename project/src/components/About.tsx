import React, { useEffect, useRef } from 'react';
import { Zap, Users, Clock, Infinity } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-vysec-gray-light via-white/90 to-vysec-gray-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Animated circles */}
      <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-vysec-green/5 animate-pulse-slow"></div>
      <div className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full bg-vysec-green/5 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-vysec-green mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.2s'}}>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              VySec, a Virginia-based innovator, redefines AI Security, Governance, Risk, and Compliance (SGRC). Our passion is helping organizations build AI that is secure, ethical, and resilient—powered by our proprietary Helix Delivery Framework.
            </p>
            
            <h3 className="text-xl font-semibold text-vysec-green mb-6">What sets us apart?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.3s'}}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Zap className="w-6 h-6 text-vysec-green" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Next-Level Tooling</h4>
                  <p className="text-gray-600">AI-powered solutions that outpace traditional methods.</p>
                </div>
              </div>
              
              <div className="flex animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.4s'}}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center animate-pulse-slow" style={{animationDelay: '0.5s'}}>
                    <Users className="w-6 h-6 text-vysec-green" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Expert-Led Insights</h4>
                  <p className="text-gray-600">Decades of cybersecurity and compliance know-how along with AI front line experience.</p>
                </div>
              </div>
              
              <div className="flex animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.5s'}}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center animate-pulse-slow" style={{animationDelay: '1s'}}>
                    <Clock className="w-6 h-6 text-vysec-green" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Fast-Track Delivery</h4>
                  <p className="text-gray-600">Speed and agility without trade-offs.</p>
                </div>
              </div>
              
              <div className="flex animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.6s'}}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center animate-pulse-slow" style={{animationDelay: '1.5s'}}>
                    <Infinity className="w-6 h-6 text-vysec-green" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Helix Advantage</h4>
                  <p className="text-gray-600">Our proprietary methodology ensures seamless, tailored SGRC implementation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.7s'}}>
            <p className="text-lg font-medium text-gray-800">
              For AI-first organizations, we tackle your toughest SGRC challenges—so you can focus on innovation with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;