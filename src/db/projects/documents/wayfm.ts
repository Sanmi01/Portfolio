import { PortfolioProject } from "../projects";

export const wayfm:PortfolioProject = {
  id: 'wayfm',
  name: 'WayFM',
  label: 'frontend',
  feature: true,
  position: 1,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/sanmi01/image/upload/v1715961668/way-fm-1_xn0jeb.png'
  },
  domainName: 'wayfm.vercel.app/',
  url: 'https://wayfm.vercel.app/',
  metaDescription: 'WayFM is a network of listener-supported stations across the country. You’ll hear uplifting music and genuinely laugh along with the DJs.',
  description: 'WayFM is a network of listener-supported stations across the country. You’ll hear uplifting music and genuinely laugh along with the DJs.',
  technologies: [
    {
      id: 1,
      name: 'Next.js',
      url: 'https://nextjs.org/'
    },
    {
      id: 2,
      name: 'Directus',
      url: 'https://directus.io/'
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      url: 'https://tailwindcss.com/'
    }
  ],
  durationOfCompletion: 'January 2024 - Present',
  myRole: 'Implemented interactive mapping features for business and event addresses, enabling direct navigation via Google/Apple Maps for enhanced user accessibility. Developed tag-click functionality to redirect users to relevant search pages, improving navigation and user experience. Integrated content management capabilities, including post expiration date settings for better content lifecycle management. Conducted peer reviews and rigorously reviewed pull requests on GitHub to ensure code quality and adherence to project standards.',
  productsDeveloped: ['WayFM Network Web Application'],
  snapshots: [
    {
      name: 'Way FM HomePage', 
      id: 3,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1715961682/way-fm-3_obj4zu.png'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1715961667/way-fm-2_w9pz7n.png',
      name: 'Way FM Business Page' 
    },
  ],
  theme: '#D7362F'
}
