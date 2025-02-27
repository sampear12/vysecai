import React, { useRef } from 'react';
import { Shield, FileText, BarChart, CheckCircle } from 'lucide-react';

const HelixAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-[600px] bg-white rounded-3xl overflow-hidden border border-vysec-green/10" ref={containerRef}>
      {/* Background elements - simplified */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Connection lines from center to corners */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i * Math.PI) / 2;
          const x2 = 50 + 40 * Math.cos(angle);
          const y2 = 50 + 40 * Math.sin(angle);
          return (
            <g key={i}>
              <line 
                x1="50%" 
                y1="50%" 
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(10, 77, 46, 0.3)" 
                strokeWidth="1.5"
                strokeDasharray="4,4"
                className="animate-pulse-slow"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              <circle
                cx={`${x2}%`}
                cy={`${y2}%`}
                r="2"
                fill="rgba(10, 77, 46, 0.4)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </g>
          );
        })}
      </svg>
      
      {/* Helix Core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52">
        {/* Pulse rings */}
        <div className="absolute inset-[-35px] rounded-full border-2 border-vysec-green/20 animate-ping-slow"></div>
        <div className="absolute inset-[-25px] rounded-full border-2 border-vysec-green/30 animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Core circle */}
        <div className="absolute inset-0 bg-white rounded-full"></div>
        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center border border-vysec-green/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-vysec-green">VySec</h3>
            <p className="text-base text-gray-600">Solutions</p>
          </div>
        </div>
        
        {/* Rotating elements */}
        <div className="absolute inset-[-20px] border-2 border-dashed border-vysec-green/20 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-[-30px] border border-vysec-green/10 rounded-full animate-spin-reverse-slow"></div>
      </div>
      
      {/* SGRC Components */}
      <div className="absolute inset-0">
        {['Security', 'Governance', 'Risk', 'Compliance'].map((title, i) => {
          const Icon = [Shield, FileText, BarChart, CheckCircle][i];
          const positions = [
            'top-[15%] left-[15%]',
            'top-[15%] right-[15%]',
            'bottom-[15%] left-[15%]',
            'bottom-[15%] right-[15%]'
          ];
          return (
            <div key={i} className={`absolute ${positions[i]} animate-float`} style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="relative group transition-all duration-300">
                <div className="absolute inset-0 bg-vysec-green/5 rounded-full animate-pulse-slow blur-md transform scale-150 group-hover:scale-175 transition-transform"></div>
                <div className="relative bg-white p-4 rounded-xl border border-vysec-green/20 group-hover:bg-white transition-all">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-vysec-green/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-vysec-green/20 transition-colors">
                      <Icon className="w-6 h-6 text-vysec-green" />
                    </div>
                    <span className="font-semibold text-vysec-green text-lg group-hover:text-[#004d40] transition-colors">{title}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Framework Label */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full border border-vysec-green/20">
        <div className="text-center">
          <span className="text-base font-medium text-vysec-green">Powered by our proprietary</span>
          <h4 className="text-xl font-bold text-vysec-green">Helix Delivery Framework</h4>
        </div>
      </div>
    </div>
  );
};

export default HelixAnimation;