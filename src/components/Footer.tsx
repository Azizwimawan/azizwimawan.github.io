import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import personalData from '../assets/data/personal.json';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {personalData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold">{personalData.name}</h3>
            </div>
            <p className="text-gray-400 mb-4">
              {personalData.title} passionate about delivering quality software through comprehensive testing strategies and automation.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong>Email:</strong> {personalData.email}
              </p>
              <p className="text-gray-400">
                <strong>Phone:</strong> {personalData.phone}
              </p>
              <p className="text-gray-400">
                <strong>Location:</strong> {personalData.location}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;