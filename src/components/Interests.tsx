import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, BarChart3, Heart } from 'lucide-react';

const Interests: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const interests = [
    {
      id: 'java',
      title: 'Java Development',
      icon: Code,
      color: 'from-purple-500 to-blue-500',
      content: {
        description: 'Desenvolvi aplicações com Java utilizando Spring Boot, incluindo um sistema de biblioteca com funcionalidades de cadastro, consulta e atualização de dados (CRUD) para livros e autores. Integrei a aplicação com banco de dados MySQL e organizei o código seguindo a arquitetura em camadas (controller, service e repository).',
        highlights: [
          'Sistema de biblioteca completo com CRUD',
          'Integração com MySQL',
          'Arquitetura em camadas',
          'Spring Boot framework',
          'APIs REST bem estruturadas'
        ]
      }
    },
    {
      id: 'dados',
      title: 'Dados',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      content: {
        description: 'Participei de projetos acadêmicos que envolvem análise de dados com Python, utilizando bibliotecas como Pandas e Matplotlib. Criei uma aplicação com Tkinter que extrai dados de múltiplas planilhas do Excel, estrutura e exibe as informações de forma clara e visual. Também tenho domínio em modelagem de dados e SQL para manipulação de bancos relacionais.',
        highlights: [
          'Análise de dados com Python',
          'Pandas e Matplotlib',
          'Extração de dados do Excel',
          'Visualização de informações',
          'Modelagem de dados e SQL'
        ]
      }
    },
    {
      id: 'tecnologia',
      title: 'Tecnologia',
      icon: BarChart3,
      color: 'from-blue-500 to-purple-500',
      content: {
        description: 'Curso Engenharia de Software na Universidade Dom Bosco e busco aplicar meu conhecimento técnico em contextos práticos. Tenho familiaridade com desenvolvimento web (HTML, CSS, JavaScript), Angular e bibliotecas para interfaces desktop como CustomTkinter. Estou sempre explorando novas tecnologias e boas práticas de desenvolvimento.',
        highlights: [
          'Engenharia de Software - Undb',
          'Desenvolvimento web moderno',
          'Angular framework',
          'CustomTkinter para desktop',
          'Exploração de novas tecnologias'
        ]
      }
    },
    {
      id: 'solucoes',
      title: 'Soluções Criativas',
      icon: Heart,
      color: 'from-orange-500 to-yellow-500',
      content: {
        description: 'Gosto de unir criatividade e lógica para resolver problemas reais. Fui premiado com o 2º lugar no TXM Challenge da Expo Indústria com uma solução para reduzir filas no restaurante da Alumar. Também venho desenvolvendo uma aplicação de reconhecimento facial com ArcFace e Milvus para registrar presença em ambientes organizados. Busco sempre pensar "fora da caixa" na criação de sistemas úteis e inovadores.',
        highlights: [
          '2º lugar no TXM Challenge 2023',
          'Solução para reduzir filas',
          'Reconhecimento facial com ArcFace',
          'Banco de dados vetorial Milvus',
          'Pensamento inovador'
        ]
      }
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % interests.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + interests.length) % interests.length);
  };

  const currentInterest = interests[currentPage];

  return (
    <section id="interests" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Meus <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Interesses</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore as áreas que mais me motivam e onde aplico meus conhecimentos
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mb-12">
            {interests.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentInterest.color} p-8 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                      <currentInterest.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{currentInterest.title}</h3>
                      <p className="text-white/80 text-lg">{currentPage + 1} de {interests.length}</p>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex space-x-2">
                    <button
                      onClick={prevPage}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextPage}
                      className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Description */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Sobre esta área</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {currentInterest.content.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Principais pontos</h4>
                    <ul className="space-y-4">
                      {currentInterest.content.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`w-3 h-3 bg-gradient-to-r ${currentInterest.color} rounded-full mr-4 mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 dark:text-gray-300 text-lg">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${currentInterest.color} transition-all duration-500`}
                  style={{ width: `${((currentPage + 1) / interests.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  index === currentPage
                    ? `bg-gradient-to-r ${interest.color} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 shadow-md'
                }`}
              >
                <interest.icon className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{interest.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;