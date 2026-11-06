export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  category: 'governanca' | 'sap' | 'processos';
  iconName: string;
  description: string;
  benefits: string[];
  technicalDetails: string[];
  deliverables: string[];
}

export interface BtoOffice {
  id: string;
  code: 'PMO' | 'BMO' | 'TMO' | 'CMO' | 'AMO' | 'VMO';
  name: string;
  subtitle: string;
  color: string;
  objective: string;
  responsibilities: string[];
  deliverables: string[];
  clientBenefits: string[];
  connections: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  tagline: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  highlightMetric: string;
  highlightLabel: string;
  image?: string;
}

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  experienceYears: string;
  expertise: string[];
  image: string;
  socialLinkedin?: string;
  isFounder?: boolean;
}

export interface PartnerItem {
  name: string;
  category: string;
  description: string;
  tag: string;
}
