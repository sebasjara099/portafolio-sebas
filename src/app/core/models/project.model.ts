export interface Project {
  slug: string;
  title: string;
  type: 'Personal' | 'Empresarial';
  stack: string[];
  summary: string;
  role: string;
  imageUrl: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  context?: string;
  highlights: string[];
  decisions?: string[];
}
