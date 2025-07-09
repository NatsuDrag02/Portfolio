import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import txmImage from './txm.jpeg'

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate('/projetos');
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Meus <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Projetos pessoais e acadêmicos que demonstram minhas habilidades técnicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <button
              onClick={handleViewAllProjects}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Ver todos os projetos</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Achievement Highlight */}
          <div className="mt-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl text-white text-center">
  <div className="flex flex-col md:flex-row">

    {/* Imagem grande responsiva */}
    <div className="w-full md:w-[50%] h-[32rem]">
      <img
        src={txmImage}
        alt="TXM Challenge"
        className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl transition-all duration-200 hover:rounded-2xl hover:scale-105"
      />
    </div>

    {/* Texto à direita (em desktop) */}
    <div className="w-full md:w-[50%] px-6 py-8 text-white font-[350] text-justify space-y-4 flex flex-col justify-center">
      <div className="flex items-center my-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">🥈</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold">TXM Challenge 2023</h3>
          <p className="text-lg opacity-90">2º lugar - Expo Indústria</p>
        </div>
      </div>
      <p>
        Representando a Valor Consultoria, conquistei o 2º lugar no TXM Challenge, uma maratona de inovação promovida pelo SENAI Maranhão em parceria com a Universidade Ceuma, durante a Expo Indústria 2023. O desafio consistia em propor soluções reais para problemas enfrentados por grandes empresas do setor industrial.
      </p>
      <p>
        Nossa equipe desenvolveu uma solução tecnológica inteligente para reduzir as filas no restaurante da Alumar, integrando análise de dados, usabilidade e automação de processos. Essa experiência evidenciou minha capacidade de trabalhar em equipe, aplicar metodologias ágeis e desenvolver soluções eficientes com impacto direto no cotidiano empresarial.
      </p>
    </div>

  </div>
</div>
        </div>
      </div>

    </section>
  );
};

export default Projects;