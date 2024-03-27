import { Icons } from '@/components/icons/icons';
import { RouteConfig } from '@/types';

export const routeConfig: RouteConfig[] = [
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
    path: '/about',
    label: 'About',
    icon: Icons.about,
  },
];
