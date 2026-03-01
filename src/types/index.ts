export type TabId = 'home' | 'experience' | 'projects' | 'education' | 'contact';

export interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  isActive?: boolean;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  gradient: string;
}







