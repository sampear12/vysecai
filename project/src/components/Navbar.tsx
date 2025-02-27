import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo 1_no background.png';

const Navbar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${className} fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="VySec Logo" className="h-8 md:h-10 w-auto" />
            <span className="text-2xl font-bold text-vysec-green">VySec</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-vysec-green transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-vysec-green transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-vysec-green transition-colors">Services</a>
            <a href="#industry" className="text-gray-700 hover:text-vysec-green transition-colors">Industry</a>
            <a href="#contact" className="text-gray-700 hover:text-vysec-green transition-colors">Contact</a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-vysec-green/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-vysec-green" />
            ) : (
              <Menu className="w-6 h-6 text-vysec-green" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-vysec-green transition-colors" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block text-gray-700 hover:text-vysec-green transition-colors" onClick={() => setIsOpen(false)}>About</a>
            <a href="#services" className="block text-gray-700 hover:text-vysec-green transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#industry" className="block text-gray-700 hover:text-vysec-green transition-colors" onClick={() => setIsOpen(false)}>Industry</a>
            <a href="#contact" className="block text-gray-700 hover:text-vysec-green transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;