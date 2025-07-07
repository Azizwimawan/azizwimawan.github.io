import React from 'react'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior QA Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading quality assurance initiatives for enterprise-level applications, managing a team of 5 QA engineers, and implementing comprehensive testing strategies.',
      achievements: [
        'Reduced production bugs by 60% through improved testing processes',
        'Implemented automated testing framework saving 40 hours/week',
        'Led migration to cloud-based testing infrastructure'
      ]
    },
    {
      title: 'QA Engineer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Responsible for functional, regression, and performance testing of web and mobile applications across multiple platforms.',
      achievements: [
        'Designed and executed 500+ test cases for critical features',
        'Established API testing protocols using Postman and Newman',
        'Collaborated with development teams to improve code quality'
      ]
    },
    {
      title: 'Junior QA Analyst',
      company: 'StartupTech',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Entry-level position focusing on manual testing, bug reporting, and test documentation for agile development teams.',
      achievements: [
        'Executed comprehensive test plans for 10+ product releases',
        'Identified and documented 200+ critical and high-priority bugs',
        'Contributed to test automation framework development'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous learning and growth in quality assurance, delivering exceptional results across diverse projects and teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-medium mb-2">
                    <span>{experience.company}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={14} className="mr-1" />
                    {experience.location}
                  </div>

                  <p className="text-gray-600 mb-4">{experience.description}</p>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience