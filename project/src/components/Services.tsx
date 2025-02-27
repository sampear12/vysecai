import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, FileText, BarChart, CheckSquare, Cpu, Database, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('governance');
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
    <section id="services" className="snap-start h-screen flex flex-col bg-gradient-to-br from-white/90 via-gray-50/30 to-white/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10"></div>
      
      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-vysec-green/5 animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-vysec-green/5 animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      
      <div className="w-full max-w-[1920px] mx-auto px-6 xl:px-16 relative z-10 py-12 flex-grow" ref={sectionRef}>
        <div className="w-full mx-auto">
          <div className="text-center mb-6 pt-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Our SGRC Solutions</h2>
            <div className="w-24 h-1 bg-vysec-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              We transform AI risks into strengths, delivering trust and security across your AI journey.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-vysec-green/10 p-8 lg:p-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{transitionDelay: '0.2s'}}>
            <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-8">
              {[
                { id: 'governance', label: 'Governance & Risk', icon: <FileText className="w-4 h-4 mr-1" /> },
                { id: 'security', label: 'Security', icon: <Lock className="w-4 h-4 mr-1" /> },
                { id: 'validation', label: 'Model Validation', icon: <BarChart className="w-4 h-4 mr-1" /> },
                { id: 'compliance', label: 'Compliance', icon: <CheckSquare className="w-4 h-4 mr-1" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                    activeTab === tab.id
                      ? 'bg-vysec-green text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="min-h-[400px]">
              {activeTab === 'governance' && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                      <FileText className="w-6 h-6 text-vysec-green" />
                    </div>
                    <h3 className="text-2xl font-semibold text-vysec-green">Governance & Risk Management</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">Build a robust foundation for AI success</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: <FileText className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Frameworks",
                        description: "Data governance, ethical use & oversight, accountability & explainability, security & data privacy."
                      },
                      {
                        icon: <CheckCircle className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Policies",
                        description: "Custom guidelines aligning AI with your values."
                      },
                      {
                        icon: <Shield className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Risk Program & Processes",
                        description: "Scalable, streamlined risk management."
                      },
                      {
                        icon: <BarChart className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Risk Assessments",
                        description: "AI-powered insights to detect vulnerabilities fast."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                        <div className="flex items-center mb-3">
                          {item.icon}
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                        <div className="mt-4 text-vysec-green flex items-center text-sm font-medium hover:text-vysec-green/80 cursor-pointer">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'security' && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                      <Lock className="w-6 h-6 text-vysec-green" />
                    </div>
                    <h3 className="text-2xl font-semibold text-vysec-green">Security</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">Protect your AI systems with precision and agility</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: <Shield className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Security Assessments",
                        description: "Real-time threat identification and prioritization."
                      },
                      {
                        icon: <Lock className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Design & Implementation",
                        description: "Secure AI systems and API controls built to last."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                        <div className="flex items-center mb-3">
                          {item.icon}
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                        <div className="mt-4 text-vysec-green flex items-center text-sm font-medium hover:text-vysec-green/80 cursor-pointer">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'validation' && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                      <BarChart className="w-6 h-6 text-vysec-green" />
                    </div>
                    <h3 className="text-2xl font-semibold text-vysec-green">Model Validation</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">Ensure your AI performs reliably and responsibly</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: <Cpu className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Algorithm Selection Assessment",
                        description: "Choose the right models with confidence."
                      },
                      {
                        icon: <Database className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Data Quality Assessment",
                        description: "Ensure clean, accurate data for trustworthy outputs."
                      },
                      {
                        icon: <BarChart className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Hyperparameter Tuning",
                        description: "Optimize model performance with AI-driven precision."
                      },
                      {
                        icon: <CheckSquare className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Model Performance Assessment",
                        description: "Validate results that align with business objectives."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                        <div className="flex items-center mb-3">
                          {item.icon}
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                        <div className="mt-4 text-vysec-green flex items-center text-sm font-medium hover:text-vysec-green/80 cursor-pointer">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'compliance' && (
                <div className="animate-fade-in">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                      <CheckSquare className="w-6 h-6 text-vysec-green" />
                    </div>
                    <h3 className="text-2xl font-semibold text-vysec-green">Compliance</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">Stay ahead of evolving regulations</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: <FileText className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "Compliance Roadmap",
                        description: "Clear, actionable steps to meet industry standards."
                      },
                      {
                        icon: <CheckSquare className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "AI Audit",
                        description: "Comprehensive reviews powered by our Helix Framework."
                      },
                      {
                        icon: <Shield className="w-5 h-5 text-vysec-green mr-2" />,
                        title: "ISO 42001:2023 Readiness",
                        description: "Prepare for the gold standard in AI management."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                        <div className="flex items-center mb-3">
                          {item.icon}
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                        <div className="mt-4 text-vysec-green flex items-center text-sm font-medium hover:text-vysec-green/80 cursor-pointer">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700 mb-6 whitespace-nowrap inline-block">
                From strategy to execution, our agile approach delivers scalable, high-impact results. Start small, scale smart—our solutions adapt to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;