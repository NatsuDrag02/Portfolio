import React from 'react';
import { Code, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Caio Nascimento</span>
              </div>
              <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
                Desenvolvedor em formação apaixonado por tecnologia e soluções inovadoras. 
                Transformando ideias em código funcional.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a href="#interests" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    Interesses
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Vamos Conectar</h3>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/NatsuDrag02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/caio-barros-a67218220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:caiobdn6@gmail.com"
                  className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                <strong>Email:</strong> caiobdn6@gmail.com
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                <strong>Localização:</strong> São Luís, MA
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
  <p className="text-gray-400 dark:text-gray-500 flex flex-wrap justify-center items-center gap-1">
    © {currentYear} Caio Nascimento. Feito com
    <Heart className="w-4 h-4 text-red-500 mx-1 inline" />
    e muito código.
  </p>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;