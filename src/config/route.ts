import { Icons } from '@/components/icons/icons';
import { RouteTypes } from '@/types';

export const routeConfig: RouteTypes[] = [
  {
    path: '/',
    label: 'Home',
    icon: Icons.home,
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: Icons.dashboard,
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: Icons.projects,
  },
  {
    path: '/blog',
    label: 'Blog',
    icon: Icons.blog,
  },
  {
    path: '/about',
    label: 'About',
    icon: Icons.about,
  },
];
