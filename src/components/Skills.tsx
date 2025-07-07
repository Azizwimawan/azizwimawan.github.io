import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing Methodologies',
      skills: [
        { name: 'Manual Testing', level: 95 },
        { name: 'Automated Testing', level: 90 },
        { name: 'API Testing', level: 85 },
        { name: 'Performance Testing', level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Selenium WebDriver', level: 90 },
        { name: 'Postman/Newman', level: 85 },
        { name: 'JIRA/TestRail', level: 95 },
        { name: 'Jenkins/CI/CD', level: 75 },
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'SQL', level: 90 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across testing methodologies, automation tools, and quality assurance practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills