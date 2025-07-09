import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, ExternalLink } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'Em desenvolvimento': return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30';
      case 'Em pausa': return 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock': return Lock;
      case 'Eye': return Eye;
      default: return Eye;
    }
  };

  const IconComponent = getIcon(project.icon);

  const handleCardClick = () => {
    navigate(`/projeto/${project.id}`);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <IconComponent className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
          <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)} mb-4`}>
          {project.status}
        </span>
        <p className="text-white/90 leading-relaxed">{project.shortDescription}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Technologies */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Tecnologias</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Principais Funcionalidades</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                E mais {project.features.length - 3} funcionalidades...
              </li>
            )}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Clique para ver detalhes completos →
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;