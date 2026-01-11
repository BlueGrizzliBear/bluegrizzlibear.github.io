import type { Project } from '../types';
import chrysalideGif from '../assets/dansnotrechrysalide.gif';
import deathwatchGif from '../assets/deathwatchapp.gif';
import aocFavicon from '../assets/aoc.favicon.png';

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 'chrysalide',
    title: t('projects.chrysalide.title'),
    description: t('projects.chrysalide.description'),
    image: chrysalideGif,
    baseColor: 'rgb(205, 157, 150)',
    liveLink: 'https://dans-notre-chrysalide-pre-production.up.railway.app/',
  },
  {
    id: 'aoc2025',
    title: t('projects.aoc2025.title'),
    description: t('projects.aoc2025.description'),
    image: aocFavicon,
    baseColor: 'rgb(0, 204, 0)',
  },
  {
    id: 'deathwatch',
    title: t('projects.deathwatch.title'),
    description: t('projects.deathwatch.description'),
    image: deathwatchGif,
    baseColor: 'rgb(70, 121, 147)',
  },
];
