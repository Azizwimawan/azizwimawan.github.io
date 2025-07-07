import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Target, TrendingUp, Filter } from 'lucide-react';
import projectsData from '../assets/data/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  duration: string;
  teamSize: string;
  testCases: string;
  coverage: string;
  highlights: string[];
  challenges: string[];
  tools: string[];
  link: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projectsData.projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === selectedCategory);

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
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
            className="object-cover w-full h-64 mb-6 rounded-lg"
          />
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Project Overview</h4>
              <p className="mb-4 text-gray-600">{project.description}</p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Duration: {project.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Team Size: {project.teamSize}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Test Cases: {project.testCases}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Coverage: {project.coverage}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Key Highlights</h4>
              <ul className="mb-6 space-y-2">
                {project.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
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
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Showcase of comprehensive testing projects and quality assurance initiatives
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-gray-500" />
            <span className="font-medium text-gray-700">Filter by category:</span>
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-4 text-gray-600 line-clamp-3">{project.description}</p>
                
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
                      className="px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-sm text-gray-700 bg-gray-100 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    View Details
                  </button>
                  <a
                    href={project.link}
                    className="flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-700"
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