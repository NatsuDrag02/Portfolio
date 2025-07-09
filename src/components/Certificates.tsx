import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink, Building } from 'lucide-react';
import imagetxm from './txmchallenge.jpeg'
import imageincode from './modulo2.jpeg';
import imageinova from './inovaportos.jpeg';
import imageTechDelas from './trilhas.jpeg';
import imagemysql from './mysql1.jpeg';
import imagejavascript from './javascript1.jpeg';
import imagesql from './sql1.jpeg';

interface Certificate {
  id: string;
  title: string;
  platform: string;
  date: string;
  description: string;
  image: string;
  link?: string;
  skills: string[];
}

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      id: 'txm-challenge',
      title: 'TXM Challenge 2023 - Projeto Araçagi',
      platform: 'Universidade Ceuma / SENAI-MA',
      date: 'Novembro 2023',
      description: 'Participei na maratona de inovação TXM Challenge, durante a Expo Indústria do Maranhão. Desenvolvemos uma solução para redução de filas no restaurante da Alumar.',
      image: imagetxm,
      skills: ['Inovação', 'Resolução de Problemas', 'Prototipação'],
    },
    {
      id: 'incode-backend',
      title: 'Trilha Back-End - Incode Tech School',
      platform: 'Incode Tech School',
      date: 'Janeiro 2025',
      description: 'Formação completa em desenvolvimento back-end, com foco em Java e Spring Boot. Carga horária de 448h.',
      image: imageincode,
      skills: ['Java', 'Spring Boot', 'APIs', 'JPA', 'Boas Práticas'],
    },
    {
      id: 'inova-portos',
      title: 'Inova Portos 2025',
      platform: 'Porto do Itaqui / Sebrae',
      date: 'Junho 2025',
      description: 'Participação como ouvinte no evento de Inovação e Tecnologia Portuária, totalizando 20 horas de imersão.',
      image: imageinova,
      skills: ['Inovação', 'Tecnologia', 'Logística'],
    },
  {
  id: 'sql-oracle-alura',
  title: 'SQL com Oracle Database: manipule e consulte dados',
  platform: 'Alura',
  date: 'Maio 2025',
  description: 'Curso de 12 horas que aborda os principais comandos SQL para criação, consulta e manipulação de dados em bancos de dados Oracle. Inclui práticas com SELECTs complexos, filtros, ordenações e manipulação de tabelas, ideal para quem deseja entender como extrair e gerenciar informações de forma eficiente.',
  image: imagesql,
  skills: ['SQL', 'Oracle Database', 'Manipulação de Dados', 'Consultas'],
},
{
  id: 'javascript-web-alura',
  title: 'JavaScript para Web: crie páginas dinâmicas',
  platform: 'Alura',
  date: 'Março 2025',
  description: 'Curso de 10 horas com foco na criação de páginas web interativas utilizando JavaScript puro. Ensina manipulação do DOM, tratamento de eventos, criação de elementos dinâmicos e estruturação lógica para deixar a experiência do usuário mais fluida e responsiva.',
  image: imagejavascript,
  skills: ['JavaScript', 'Web', 'DOM', 'Interatividade'],
},
{
  id: 'mysql-analise-dados-alura',
  title: 'MySQL: aplicado para análise de dados',
  platform: 'Alura',
  date: 'Maio 2025',
  description: 'Curso de 8 horas voltado para quem deseja utilizar MySQL em contextos de análise de dados. Aborda criação de queries para extração e cruzamento de informações, utilização de funções de agregação e análise estatística básica, voltado para aplicações práticas no dia a dia profissional.',
  image: imagemysql,
  skills: ['MySQL', 'Análise de Dados', 'SQL', 'Consultas'],
},

    {
      id: 'tech-delas',
      title: 'Tech Delas - Caminhos e Desafios na TI',
      platform: 'Inova Maranhão / SECTI-MA',
      date: 'Março 2025',
      description: 'Oficina coletiva sobre diversidade e desafios na área de tecnologia, com carga horária de 2h.',
      image: imageTechDelas,
      skills: ['Diversidade', 'Tecnologia', 'Discussão em Grupo'],
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Certificados & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Formações</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Formações complementares que ampliam meu conhecimento técnico
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              disabled={totalPages <= 1}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Certificates Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((cert) => (
                      <div
                        key={cert.id}
                        className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                      >
                        {/* Certificate Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute top-4 right-4">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Certificate Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {cert.title}
                          </h3>
                          
                          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {cert.platform}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {cert.date}
                            </div>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            {cert.description}
                          </p>

                          {/* Skills */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Certificate Link */}
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                            >
                              <span>Ver certificado</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
