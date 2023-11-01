import { PortfolioProject } from "../projects";

export const animalia:PortfolioProject = {
  id: 'animalia',
  name: 'Animalia',
  label: 'frontend',
  feature: true,
  position: 1,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/sanmi01/image/upload/v1690296776/animalia-overview_chws6r.png'
  },
  domainName: 'animalia-web.netlify.app',
  url: 'https://animalia-web.netlify.app/',
  metaDescription: 'Animalia is a delightful social media app tailor-made for animal lovers, encompassing those who live, work, or simply cherish these adorable creatures.',
  description: 'Animalia is a delightful social media app tailor-made for animal lovers, encompassing those who live, work, or simply cherish these adorable creatures. Our platform seamlessly combines the joy of education and entertainment, featuring a community-driven knowledge bank akin to Wikipedia, alongside a fun and engaging social interaction, posting, and following mechanism reminiscent of Instagram.',
  technologies: [
    {
      id: 1,
      name: 'React.js',
      url: 'https://reactjs.org'
    },
    {
      id: 2,
      name: 'React Query',
      url: 'https://tanstack.com/query/v3'
    },
    {
      id: 3,
      name: 'Jotai',
      url: 'https://jotai.org'
    }
  ],
  durationOfCompletion: 'March 2023 - Present',
  myRole: 'Solo frontend engineer of the project. Worked closely with the UI design and backend teams to ensure the product requirements were satisfied. Built and tested UI component libraries for reusability across client apps.',
  productsDeveloped: ['Animalia Web Application'],
  snapshots: [
    {
      name: 'Animalia HomePage', 
      id: 3,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1690296777/animalia-homepage_jrp7rd.png'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1690296775/animalia-submitpage_gf0fkw.png',
      name: 'Animalia Submit Page' 
    },
  ],
  theme: '#198B2B'
}
