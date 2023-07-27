import { PortfolioProject } from "../projects";

export const verapax:PortfolioProject = {
  id: 'verapax',
  name: 'Verapax Tech',
  label: 'frontend',
  feature: true,
  position: 2,
  primaryImage: {
    id: 1,
    name: 'VeraPax Tech Home',
    url: 'https://res.cloudinary.com/sanmi01/image/upload/v1690292933/verapax-home_pzw45y.png',
  },
  domainName: 'VeraPax Tech',
  url: 'https://www.verapaxtech.com/',
  metaDescription: 'VeraPax Tech is a one-stop destination for SaaS solutions, marketing, advertising, and branding expertise.',
  description: 'VeraPax Tech is a one-stop destination for SaaS solutions, marketing, advertising, and branding expertise. Our cutting-edge software and creative campaigns drive results that resonate with your audience.',
  technologies: [
    {
      id: 1,
      name: 'React.js',
      url: 'https://reactjs.org'
    },
    {
      id: 2,
      name: 'React Redux',
      url: 'https://react-redux.js.org/'
    },
    {
      id: 3,
      name: 'React Query',
      url: 'https://tanstack.com/query/v3/'
    }
  ],
  durationOfCompletion: 'February 2022 - July 2023',
  myRole: 'As the frontend developer on the team, my primary responsibilities included converting intricate designs into production-ready code and seamlessly integrating APIs for enhanced functionality. One of my significant achievements was the successful development of a software application that proved instrumental in significantly reducing errors in content submissions made by the content team, achieving a remarkable 100% error reduction rate. Additionally, I facilitated the content uploading process by implementing a rigorous validation procedure to ensure the accuracy and quality of the content uploaded to the platform. My contributions not only streamlined the content workflow but also optimized the overall user experience, contributing to the success of the project.',
  productsDeveloped: ['BlastOff WebAdmin', 'BlastOff File Checker', 'Animalia Web App'],
  snapshots: [
    {
      id: 2,
      name: 'VeraPax Tech - Products',
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1690292933/verapax-products_krgfjs.png'
    },
    {
      id: 3,
      name: 'VeraPax Tech - Services',
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1690292934/verapax-services_nthtrs.png',
    },
  ],
  theme: '#FFDE17'
}
