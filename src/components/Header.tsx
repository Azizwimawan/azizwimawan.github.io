import React, { useState, useEffect } from 'react';
import { Menu, X, User, FileText, Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import personalData from '../assets/data/personal.json';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: FileText },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {personalData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">{personalData.name}</h1>
              <p className="text-sm text-gray-600">{personalData.title}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <item.icon size={18} />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;