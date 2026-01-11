import type { IconType } from 'react-icons';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  liveLink?: string;
  baseColor: string;
}

export interface TechStack {
  name: string;
  category?: string;
  Icon?: IconType;
  iconUrl?: string; // For multi-color logo images
  iconUrlDark?: string; // Dark theme variant
  color?: string;
  secondaryColor?: string;
}
