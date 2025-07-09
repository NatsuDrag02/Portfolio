import React from 'react';
import { Code } from 'lucide-react';
import imagem2 from './imagem2.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Sobre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={imagem2}
                    alt="Imagem do projeto"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>


            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Sou apaixonado por <span className="font-semibold text-purple-600 dark:text-purple-400">aprender coisas novas</span>,
                  explorar diferentes áreas do conhecimento e me desafiar com projetos práticos.
                  Tenho interesse especial por Java development, análise de dados e soluções criativas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Busco <span className="font-semibold text-blue-600 dark:text-blue-400">integrar meus conhecimentos </span>
                  em programação com a área de administração para resolver problemas reais e criar
                  soluções inovadoras que fazem a diferença.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-2xl">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Em novembro de 2023, conquistei o <span className="font-semibold text-green-600 dark:text-green-400">2º lugar no TXM Challenge </span>
                  - Expo Indústria, desenvolvendo uma solução inovadora para reduzir filas no restaurante da Alumar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;