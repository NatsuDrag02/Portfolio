import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">

          {/* Botão voltar para a home */}
          <a
            href="/"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para o início</span>
          </a>


          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Meus <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projetos</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Projetos pessoais e acadêmicos que demonstram minhas habilidades técnicas e criatividade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
