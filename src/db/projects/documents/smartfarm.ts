import { PortfolioProject } from "../projects";

export const smartfarm:PortfolioProject = {
  id: 'smartfarm-assistant',
  name: 'Smart Farm Assistant',
  label: 'frontend',
  feature: true,
  position: 4,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/sanmi01/image/upload/v1764184977/smart-farm-1_o7m7lp.png'
  },
  domainName: 'smart-farm-assistant.netlify.app/',
  url: 'https://smart-farm-assistant.netlify.app/',
  metaDescription: "Smart Farm Assistant is an AI-powered platform helping farmers make data-driven decisions through weather analysis and intelligent crop recommendations.",
  description: "Smart Farm Assistant is an AI-powered agricultural management platform designed for farmers, agronomists, and anyone passionate about modern, data-driven farming. The platform seamlessly combines real-time weather analysis with intelligent crop recommendations, featuring an AI chat assistant for personalized farming advice alongside comprehensive farm monitoring and management tools for optimized agricultural decision-making.",
  technologies: [
    {
      id: 1,
      name: 'React.js',
      url: 'https://reactjs.org'
    },
    {
      id: 2,
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org'
    },
    {
      id: 3,
      name: 'NestJS',
      url: 'https://nestjs.com'
    },
    {
      id: 4,
      name: 'OpenAI SDK',
      url: 'https://platform.openai.com'
    },
    {
      id: 5,
      name: 'MongoDB',
      url: 'https://www.mongodb.com'
    }
  ],
  durationOfCompletion: 'September 2025',
  myRole: "Solo full-stack engineer of the project. Developed both the React frontend and NestJS backend, integrating OpenAI GPT-4 for intelligent recommendations and Visual Crossing API for weather forecasting.",
  productsDeveloped: ['Smart Farm Web Application', 'AI Chat Assistant'],
  snapshots: [
    {
      name: 'Dashboard page', 
      id: 4,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1764184977/smart-farm-2_vqup5y.png'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1764184977/smart-farm-1_o7m7lp.png',
      name: 'Smart Farm Assistant Home Page' 
    },
    {
      name: 'AI Chat', 
      id: 3,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1764184976/smart-farm-3_v5znzs.png'
    },
    {
      name: 'AI Recommendations and Report', 
      id: 5,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1764186234/smart-farm-4_b25j5w.png'
    }
  ],
  theme: '#009966'
}
