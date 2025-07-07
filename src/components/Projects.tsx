import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Target, TrendingUp, Filter } from 'lucide-react';
import projectsData from '../assets/data/projects.json';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', ...Array.from(new Set(projectsData.projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === selectedCategory);

  const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Duration: {project.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Team Size: {project.teamSize}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Test Cases: {project.testCases}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Coverage: {project.coverage}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of comprehensive testing projects and quality assurance initiatives
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filter by category:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{project.testCases}</div>
                    <div className="text-sm text-gray-500">Test Cases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{project.coverage}</div>
                    <div className="text-sm text-gray-500">Coverage</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    View Details
                  </button>
                  <a
                    href={project.link}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;