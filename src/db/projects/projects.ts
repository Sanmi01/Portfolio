import { smtpexpress } from './documents/smtpexpress';
import { moneylang } from './documents/moneylang'
import { verapax } from './documents/verapax';
import { animalia } from './documents/animalia';
import { wayfm } from './documents/wayfm';
import { smartfarm } from './documents/smartfarm';

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
  wayfm,
  moneylang,
  smtpexpress,
  smartfarm,
  animalia,
  verapax,
]

export default projectObjects
