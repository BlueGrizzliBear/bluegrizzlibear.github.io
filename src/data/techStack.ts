import {
  SiCypress,
  SiDocker,
  SiReact,
  SiRuby
} from 'react-icons/si';
import type { TechStack } from '../types';
import pythonLogo from '../assets/python-logo.svg';
import css3Logo from '../assets/css3-logo.svg';
import html5Logo from '../assets/html5-logo.svg';
import bunLogo from '../assets/bun-logo.svg';
import viteLogo from '../assets/vite-logo.svg';
import vscodeLogo from '../assets/vscode-logo.svg';
import gitlabLogo from '../assets/gitlab-logo.svg';
import githubLogoDark from '../assets/github-logo.dark.svg';
import githubLogoLight from '../assets/github-icon.light.svg';
import nodejsLogo from '../assets/nodejs-logo.svg';
import graphQlLogo from '../assets/graphql-logo.svg';
import figmaLogo from '../assets/figma-logo.svg';
import typescriptLogo from '../assets/typescript-logo.svg';
import javascriptLogo from '../assets/javascript-logo.svg';
import reduxLogo from '../assets/redux-logo.svg';
import tailwindLogo from '../assets/tailwindcss-logo.svg';
import { BiLogoPostgresql } from 'react-icons/bi';

export const mostUsedTechStackGroups: TechStack[] = [
  { name: 'TypeScript', category: 'Languages', iconUrl: typescriptLogo },
  { name: 'Python', category: 'Languages', iconUrl: pythonLogo },
  { name: 'React', category: 'Frameworks & Libraries', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', category: 'Frameworks & Libraries', iconUrl: nodejsLogo },
];

export const techStackGroups: TechStack[] = [
  { name: 'HTML5', category: 'Languages', iconUrl: html5Logo },
  { name: 'CSS3', category: 'Languages', iconUrl: css3Logo },
  { name: 'Javascript', category: 'Languages', iconUrl: javascriptLogo },
  { name: 'Ruby', category: 'Languages', Icon: SiRuby, color: '#CC342D' },
  { name: 'GraphQL', category: 'Frameworks & Libraries', iconUrl: graphQlLogo },
  { name: 'Redux', category: 'Frameworks & Libraries', iconUrl: reduxLogo },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries', iconUrl: tailwindLogo },
  { name: 'Cypress', category: 'Frameworks & Libraries', Icon: SiCypress, color: '#4fb38e' },
  { name: 'PostgreSQL', category: 'Bundlers & tools', Icon: BiLogoPostgresql, color: '#4169E1' },
  { name: 'Vite', category: 'Bundlers & tools', iconUrl: viteLogo },
  { name: 'Bun', category: 'Bundlers & tools', iconUrl: bunLogo },
  { name: 'Docker', category: 'Bundlers & tools', Icon: SiDocker, color: '#2496ED' },
];

export const toolStackGroups: TechStack[] = [
  { name: 'VS Code', category: 'Tools', iconUrl: vscodeLogo },
  { name: 'GitHub', category: 'Tools', iconUrl: githubLogoLight, iconUrlDark: githubLogoDark },
  { name: 'GitLab', category: 'Tools', iconUrl: gitlabLogo },
  { name: 'Figma', category: 'Tools', iconUrl: figmaLogo },
];
