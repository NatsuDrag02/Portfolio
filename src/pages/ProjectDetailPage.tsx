import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle, Clock, Pause } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ImageGallery from '../components/ImageGallery';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Projeto não encontrado</h1>
          <button
            onClick={() => navigate('/projetos')}
            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Voltar aos projetos
          </button>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Concluído': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'Em desenvolvimento': return <Clock className="w-5 h-5 text-blue-500" />;
      case 'Em pausa': return <Pause className="w-5 h-5 text-orange-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'Em desenvolvimento': return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
      case 'Em pausa': return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/projetos')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar aos projetos</span>
          </button>

          {/* Project Header */}
          <div className={`bg-gradient-to-r ${project.color} rounded-2xl p-8 text-white mb-8`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(project.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-white/90 text-lg max-w-2xl">{project.shortDescription}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Ver no GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Gallery */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Galeria do Projeto</h2>
                <ImageGallery images={project.images} projectTitle={project.title} />
              </section>

              {/* Project Summary */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Resumo do Projeto</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {project.longDescription.summary}
                  </p>
                </div>
              </section>

              {/* Challenges and Solutions */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Desafios e Soluções</h2>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {project.longDescription.challenges}
                  </p>
                </div>
              </section>

              {/* Lessons Learned */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Lições Aprendidas</h2>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {project.longDescription.lessons}
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Tecnologias Utilizadas</h3>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Features */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Principais Funcionalidades</h3>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Project Info */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Informações do Projeto</h3>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(project.status)}
                      <span className="font-medium text-gray-800 dark:text-white">{project.status}</span>
                    </div>
                  </div>
                  
                  {project.githubUrl && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Repositório no GitHub</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;