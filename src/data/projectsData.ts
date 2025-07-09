import image1 from './ProjetoAngular.png';
import image2 from './ProjetoSpring.jpeg';
import image3 from './ProjetoSpring2.jpeg';
import image4 from './SwaggerSpring.jpeg';
import image5 from './projetodedados.png';
import image6 from './projetodedados2.png';
import image7 from './projetoIa.jpeg'
import image8 from './projetoIa2.jpeg';
import image9 from './projetoIa3.png';
import image10 from './projetoIa4.png';



export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: {
    summary: string;
    challenges: string;
    lessons: string;
  };
  technologies: string[];
  features: string[];
  status: 'Concluído' | 'Em desenvolvimento' | 'Em pausa';
  icon: string;
  color: string;
  githubUrl?: string;
  images: string[];
}

const developmentColor = "from-purple-500 to-blue-500";
const completedColor = "from-green-500 to-teal-500";
const pausedColor = "from-yellow-500 to-orange-500";

const projectsDataInitial: Project[] = [
  {
    id: 'sistema-login-fullstack',
    title: 'Sistema de Login Fullstack',
    shortDescription: 'Sistema completo de autenticação e autorização desenvolvido com Java Spring Boot no backend, PostgreSQL como banco de dados e Angular no frontend.',
    longDescription: {
      summary: 'Este projeto representa um sistema completo de autenticação e autorização, desenvolvido seguindo as melhores práticas de segurança e arquitetura de software. O backend foi construído com Java Spring Boot, implementando JWT para autenticação stateless, controle de acesso baseado em roles e uma API REST robusta. O frontend Angular oferece uma interface moderna e responsiva, com formulários reativos e interceptors para gerenciamento automático de tokens.',
      challenges: 'Os principais desafios incluíram a implementação segura do JWT, garantindo que os tokens fossem validados corretamente em todas as requisições. Outro desafio foi criar um sistema de roles flexível que permitisse diferentes níveis de acesso sem comprometer a segurança. A integração entre Angular e Spring Boot também exigiu cuidado especial com CORS e interceptors.',
      lessons: 'Aprendi muito sobre segurança em aplicações web, especialmente sobre JWT e suas melhores práticas. O projeto me ensinou a importância de uma arquitetura bem definida, separando claramente as responsabilidades entre frontend e backend. Também desenvolvi habilidades em documentação de APIs.'
    },
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'JWT', 'REST API', 'Spring Security'],
    features: [
      'Autenticação JWT segura',
      'Controle de acesso por roles',
      'Interface Angular responsiva',
      'API REST documentada',
      'Validação de dados robusta',
      'Interceptors automáticos'
    ],
    status: 'Em desenvolvimento',
    icon: 'Lock',
    color: '',
    githubUrl: 'https://github.com/NatsuDrag02/Candle-API',
    images: [
      image1,
      image2,
      image3,
      image4
    ]
  },
  {
    id: 'sistema-estatistica',
    title: 'Sistema de Estatística',
    shortDescription: 'Aplicação que extrai dados de 5 planilhas Excel, estrutura e exibe de forma visual e clara usando Python e Tkinter.',
    longDescription: {
      summary: 'Sistema desenvolvido para automatizar a análise de dados de múltiplas planilhas Excel, transformando informações brutas em insights visuais claros e acionáveis. A aplicação utiliza Python com Pandas para processamento de dados e Tkinter para criar uma interface gráfica intuitiva. O sistema é capaz de processar grandes volumes de dados e gerar relatórios estatísticos detalhados.',
      challenges: 'O maior desafio foi lidar com a inconsistência dos dados nas diferentes planilhas, cada uma com formatos e estruturas ligeiramente diferentes. Implementar uma lógica robusta de limpeza e normalização de dados foi crucial. Outro desafio foi criar uma interface gráfica que fosse tanto funcional quanto visualmente atraente usando apenas Tkinter.',
      lessons: 'Este projeto me ensinou muito sobre manipulação de dados com Pandas e a importância da validação e limpeza de dados. Aprendi técnicas avançadas de visualização de dados e como criar interfaces desktop responsivas. Também desenvolvi habilidades em otimização de performance para processamento de grandes datasets.'
    },
    technologies: ['Python', 'Tkinter', 'Pandas', 'Excel', 'Matplotlib', 'NumPy'],
    features: [
      'Extração automática de dados',
      'Interface gráfica intuitiva',
      'Visualização de estatísticas',
      'Relatórios exportáveis',
      'Processamento de múltiplas planilhas',
      'Gráficos interativos'
    ],
    status: 'Concluído',
    icon: 'Eye',
    color: "",
    githubUrl: 'https://github.com/NatsuDrag02/DataAnalise',
    images: [
      image5,
      image6,
    ]
  },
  {
    id: 'reconhecimento-facial',
    title: 'Reconhecimento Facial',
    shortDescription: 'Sistema de controle de presença via câmera dupla usando ArcFace e Milvus para reconhecimento facial avançado. Projeto privado para a Inconde Tech School.',
    longDescription: {
      summary: 'Sistema avançado de reconhecimento facial para controle de presença, utilizando tecnologias de ponta como ArcFace para extração de features faciais e Milvus como banco de dados vetorial para busca eficiente. O sistema suporta múltiplas câmeras simultaneamente e oferece alta precisão no reconhecimento, mesmo em condições variadas de iluminação.',
      challenges: 'Os principais desafios incluem a calibração precisa do modelo ArcFace para diferentes condições de iluminação e ângulos de câmera. A integração com Milvus exigiu otimização cuidadosa para garantir buscas rápidas em grandes volumes de dados vetoriais. Outro desafio foi implementar um sistema robusto de detecção de faces que funcione em tempo real.',
      lessons: 'Este projeto me proporcionou conhecimento profundo em visão computacional e machine learning aplicado. Aprendi sobre embeddings faciais, bancos de dados vetoriais e otimização de sistemas em tempo real. Também desenvolvi habilidades em integração de hardware (câmeras) com software de IA.'
    },
    technologies: ['Python', 'ArcFace', 'Milvus', 'OpenCV', 'AI/ML', 'Computer Vision', 'NumPy'],
    features: [
      'Reconhecimento facial preciso',
      'Controle de presença automatizado',
      'Suporte a múltiplas câmeras',
      'Banco de dados vetorial',
      'Processamento em tempo real',
      'Interface de administração'
    ],
    status: 'Em desenvolvimento',
    icon: 'Eye',
    color: 'from-blue-500 to-purple-500',
    githubUrl: '',
    images: [
      image10,
      image9,
      image8,
      image7]
  }
];

export const projectsData = projectsDataInitial.map(project => {
  if (project.status === 'Em desenvolvimento') {
    return { ...project, color: developmentColor };
  }
  if (project.status === 'Concluído') {
    return { ...project, color: completedColor };
  }
  if(project.status === 'Em pausa') {
    return { ...project, color: pausedColor };
  }
});