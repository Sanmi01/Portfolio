import { PortfolioProject } from "../projects";

export const moneylang:PortfolioProject = {
  id: 'moneylang-playground',
  name: 'MoneyLang Playground',
  label: 'frontend',
  feature: true,
  position: 2,
  primaryImage: {
    id: 1,
    url: 'https://res.cloudinary.com/sanmi01/image/upload/v1757072618/moneylang1_drrnia.png'
  },
  domainName: 'playground.moneylang.com',
  url: 'https://playground.moneylang.com/',
  metaDescription: "MoneyLang Playground is a sophisticated web-based IDE for financial transaction modeling, featuring a custom DSL for defining complex money movement rules, multi-party allocations, and conditional logic.",
  description: "MoneyLang Playground is a sophisticated web-based IDE designed for financial transaction modeling and money movement logic. The platform features MoneyLang, a custom domain-specific language (DSL) that enables developers and financial engineers to define complex transaction flows, multi-party revenue sharing, conditional allocations, and compliance rules. With intelligent syntax highlighting, real-time validation, and an extensive template library ranging from simple transfers to complex cryptocurrency exchange fee distributions, the playground serves as a comprehensive development environment for fintech applications, payment processors, and financial institutions requiring sophisticated money movement capabilities.",
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
      name: 'Monaco Editor',
      url: 'https://microsoft.github.io/monaco-editor'
    }
  ],
  durationOfCompletion: 'March 2023 - Present',
  myRole: "Responsible for the complete frontend architecture and MoneyLang language integration. Designed and implemented the Monaco Editor configuration with custom syntax highlighting, intelligent autocompletion, and real-time validation. Built the template system, theme management, and responsive UI components. Developed the execution engine integration and output visualization components for transaction postings and account balances.",
  productsDeveloped: ['MoneyLang Playground Web IDE'],
  snapshots: [
    {
      id: 2,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1757073009/moneylang4_dhibpl.png',
      name: 'MoneyLang Output Panel' 
    },
    {
      name: 'MoneyLang Light Mode', 
      id: 3,
      url: 'https://res.cloudinary.com/sanmi01/image/upload/v1757072618/moneylang3_qmdqsm.png'
    }
  ],
  theme: '#A9A9A9'
}
