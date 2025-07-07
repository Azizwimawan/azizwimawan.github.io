import React from 'react'
import { CheckCircle, Users, Clock, Award } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: CheckCircle, label: 'Tests Executed', value: '10,000+' },
    { icon: Users, label: 'Projects Delivered', value: '50+' },
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Certifications', value: '8' },
  ]

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Quality Assurance
            <span className="text-blue-600 block">Engineer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionate about delivering exceptional software quality through comprehensive testing strategies, 
            automation frameworks, and continuous improvement processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero