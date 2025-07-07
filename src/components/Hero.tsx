import React from 'react';
import { ChevronDown, Award, Bug, TestTube, Target } from 'lucide-react';
import personalData from '../assets/data/personal.json';

const Hero: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: personalData.yearsOfExperience },
    { icon: Target, label: 'Projects Completed', value: personalData.projectsCompleted },
    { icon: Bug, label: 'Bugs Found', value: personalData.bugsFound },
    { icon: TestTube, label: 'Test Cases Written', value: personalData.testCasesWritten }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              {personalData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {personalData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
              {personalData.title}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {personalData.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {personalData.bio}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {formatNumber(stat.value)}+
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;