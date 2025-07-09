import React from 'react';
import { Code, Database, Settings, Package, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Linguagens',
      icon: Brain,
      color: 'from-purple-500 to-blue-500',
      skills: ['Java', 'JavaScript', 'Python', 'SQL']
    },
    {
      id: 'frameworks',
      title: 'Frameworks',
      icon: Settings,
      color: 'from-blue-500 to-teal-500',
      skills: ['Spring Boot', 'Angular', 'React', 'Tkinter']
    },
    {
      id: 'databases',
      title: 'Banco de Dados',
      icon: Database,
      color: 'from-teal-500 to-green-500',
      skills: ['PostgreSQL', 'MySQL', 'Milvus']
    },
    {
      id: 'tools',
      title: 'Ferramentas',
      icon: Package,
      color: 'from-green-500 to-yellow-500',
      skills: ['Git', 'Figma', 'Postman', 'Docker']
    },
    {
      id: 'methodologies',
      title: 'Metodologias',
      icon: Wrench,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Metodologias Ágeis', 'API REST', 'JWT', 'TDD']
    },
    {
      id: 'others',
      title: 'Outros',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      skills: ['Machine Learning', 'Computer Vision', 'Análise de Dados', 'UI/UX']
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Habilidades <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Técnicas</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Compact Header */}
                <div className={`bg-gradient-to-r ${category.color} p-4 text-white`}>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <category.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                </div>

                {/* Compact Skills List */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Motivational Comment */}
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Sempre em Evolução</h4>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              Acredito que o aprendizado contínuo é fundamental para o crescimento profissional. 
              Cada projeto é uma oportunidade de explorar novas tecnologias e expandir horizontes, 
              sempre buscando soluções inovadoras para problemas reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;