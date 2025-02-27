import React from 'react';
import { ArrowRight, Shield, Lock, Code } from 'lucide-react';
import HelixAnimation from './HelixAnimation';

const Hero: React.FC = () => {
  return (
    <section className="h-full flex items-center justify-center relative bg-gradient-to-br from-white via-[#e8f2ed] to-[#004d40]/10">
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,77,64,0.05)1px,transparent_1px),linear-gradient(to_bottom,rgba(0,77,64,0.05)1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-vysec-green/10 text-vysec-green border border-vysec-green/20 backdrop-blur-sm animate-fade-in">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Enterprise AI Security</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight animate-fade-in">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-vysec-green to-[#004d40]">
                  VySec
                </span>{" "}
                : Secure AI, Ethically Built
              </h1>
              
              {/* Feature Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-vysec-green/20 hover:bg-white/80 transition-all">
                  <Shield className="w-5 h-5 text-vysec-green mb-2" />
                  <span className="text-sm font-medium">Security</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-vysec-green/20 hover:bg-white/80 transition-all">
                  <Lock className="w-5 h-5 text-vysec-green mb-2" />
                  <span className="text-sm font-medium">Governance</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-vysec-green/20 hover:bg-white/80 transition-all">
                  <Shield className="w-5 h-5 text-vysec-green mb-2" />
                  <span className="text-sm font-medium">Risk</span>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-vysec-green/20 hover:bg-white/80 transition-all">
                  <Code className="w-5 h-5 text-vysec-green mb-2" />
                  <span className="text-sm font-medium">Compliance</span>
                </div>
              </div>
              
              {/* Main Description */}
              <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-vysec-green/20 shadow-lg animate-fade-in">
                <p className="text-gray-700 leading-relaxed">
                  At VySec, we revolutionize how organizations build AI—
                  <span className="font-semibold text-vysec-green">securely</span>,{" "}
                  <span className="font-semibold text-vysec-green">ethically</span>, and{" "}
                  <span className="font-semibold text-vysec-green">efficiently</span>.
                  Leveraging cutting-edge AI tools, deep domain expertise, and our proprietary Helix Delivery Framework,
                  we provide Security, Governance, Risk, and Compliance (SGRC) solutions that stay ahead of the curve.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-vysec-green hover:bg-vysec-green-dark text-white font-medium transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Contact Us for a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-vysec-green text-vysec-green hover:bg-vysec-green hover:text-white font-medium transition-all duration-300"
              >
                Explore Solutions
              </a>
            </div>
            
            {/* Certification Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-vysec-green/20">
                <Code className="w-4 h-4 text-vysec-green mr-2" />
                <span className="text-sm font-medium">ISO 42001:2023</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-vysec-green/20">
                <Shield className="w-4 h-4 text-vysec-green mr-2" />
                <span className="text-sm font-medium">NIST AI RMF</span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-vysec-green/20">
                <Lock className="w-4 h-4 text-vysec-green mr-2" />
                <span className="text-sm font-medium">EU AI Act</span>
              </div>
            </div>
          </div>
          
          {/* Right Side Animation */}
          <div className="relative h-[500px] lg:h-[650px] animate-fade-in flex items-center justify-center ml-10">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent rounded-3xl"></div>
            <div className="relative -ml-12 mt-12 w-full h-full scale-90">
              <HelixAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;