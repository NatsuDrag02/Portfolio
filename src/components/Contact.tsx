import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'caiobdn6@gmail.com',
      href: 'mailto:caiobdn6@gmail.com',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'NatsuDrag02',
      href: 'https://github.com/NatsuDrag02',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Caio Barros',
      href: 'https://www.linkedin.com/in/caio-barros-a67218220',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Luís, MA',
      href: '',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Vamos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Conversar</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Interessado em colaborar ou tem alguma pergunta? Entre em contato!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
  {contactInfo.map((info, index) => (
    <a
      key={index}
      href={info.href || '#'}
      target={info.href?.startsWith('http') ? '_blank' : undefined}
      rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={e => {
        if (!info.href) e.preventDefault();
      }}
      className="group flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${info.color} text-white flex items-center justify-center text-xl mr-4`}
      >
        <info.icon />
      </div>
      <div>
        <div>
  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{info.title}</h3>
  <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
</div>

      </div>
    </a>
  ))}
</div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Pronto para começar?</h4>
            <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
              Vamos discutir como posso contribuir para o seu próximo projeto ou equipe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:caiobdn6@gmail.com"
                className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
              <a
                href="https://www.linkedin.com/in/caio-barros-a67218220"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;