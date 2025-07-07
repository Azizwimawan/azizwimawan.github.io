import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Testing Suite',
      description: 'Comprehensive testing framework for online retail platform including functional, performance, and security testing.',
      category: 'Web Testing',
      technologies: ['Selenium', 'TestNG', 'Java', 'Jenkins'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Reduced bug leakage by 40%', 'Automated 200+ test cases', 'Improved test coverage to 95%']
    },
    {
      id: 2,
      title: 'Mobile App Quality Assurance',
      description: 'End-to-end testing strategy for iOS and Android applications with focus on usability and performance.',
      category: 'Mobile Testing',
      technologies: ['Appium', 'Python', 'Pytest', 'BrowserStack'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Cross-platform compatibility', 'Performance optimization', 'User experience validation']
    },
    {
      id: 3,
      title: 'API Testing Framework',
      description: 'Robust API testing solution with automated validation, performance monitoring, and security checks.',
      category: 'API Testing',
      technologies: ['Postman', 'Newman', 'JavaScript', 'Docker'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['100+ API endpoints tested', 'Continuous integration', 'Security vulnerability detection']
    }
  ]

  const categories = ['All', 'Web Testing', 'Mobile Testing', 'API Testing']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of comprehensive testing projects demonstrating expertise across different domains and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects