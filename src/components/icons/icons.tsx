import {
  FolderGit2,
  Home,
  Info,
  LayoutDashboard,
  Moon,
  PencilRuler,
  SunMedium,
} from 'lucide-react';

import { FaDatabase, FaJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  logo: PencilRuler,
  sun: SunMedium,
  moon: Moon,
  // navigation
  home: Home,
  dashboard: LayoutDashboard,
  projects: FolderGit2,
  about: Info,
  // skills
  React: FaReact,
  Tailwind: BiLogoTailwindCss,
  Php: FaPhp,
  Js: FaJs,
  Python: FaPython,
  Database: FaDatabase,
};

export const Icons: IconsType = icons;
