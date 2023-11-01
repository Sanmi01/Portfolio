import { smtpexpress } from './documents/smtpexpress';
import { verapax } from './documents/verapax';
import { animalia } from './documents/animalia';

export interface PortfolioProject {
  id: string
  name: string
  label: string
  feature: boolean
  position?: number
  primaryImage: ProjectImage
  domainName: string
  url: string
  metaDescription?: string
  description: string
  technologies: {
    id: number
    name: string
    url: string
  }[]
  durationOfCompletion: string
  myRole: string,
  productsDeveloped: string[]
  snapshots: ProjectImage[]
  theme: string
}

export interface ProjectImage {
  id: number
  name?: string
  url: string
  highResUrl?: string
}

const projectObjects = [
  animalia,
  smtpexpress,
  verapax,
]

export default projectObjects
