import {
  FolderGit2,
  Home,
  Info,
  LayoutDashboard,
  Moon,
  PencilRuler,
  SunMedium,
} from 'lucide-react';

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
};

export const Icons: IconsType = icons;
