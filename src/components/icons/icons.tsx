import {
  FolderGit2,
  Home,
  Info,
  LayoutDashboard,
  Moon,
  PencilRuler,
  SunMedium,
  ChevronRight,
  Cake,
  FileText,
  Star,
  Copy,
  CopyCheck,
  Eye,
  BadgeAlert,
  Calendar,
} from 'lucide-react';

import {
  FaDatabase,
  FaDiscord,
  FaGithub,
  FaTwitch,
  FaJs,
  FaLinkedinIn,
  FaPhp,
  FaPython,
  FaReact,
  FaYoutube,
} from 'react-icons/fa';
import { FaCodeFork, FaXTwitter } from 'react-icons/fa6';
import { BiLinkExternal, BiLogoTailwindCss } from 'react-icons/bi';

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  logo: PencilRuler,
  sun: SunMedium,
  moon: Moon,
  // not found
  back: ChevronRight,
  // navigation
  home: Home,
  dashboard: LayoutDashboard,
  projects: FolderGit2,
  about: Info,
  blog: PencilRuler,
  // skills
  React: FaReact,
  Tailwind: BiLogoTailwindCss,
  Php: FaPhp,
  Js: FaJs,
  Python: FaPython,
  Database: FaDatabase,
  // social
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitch: FaTwitch,
  youtube: FaYoutube,
  discord: FaDiscord,
  twitter: FaXTwitter,
  // projects
  externalLink: BiLinkExternal,
  projectData: FileText,
  fork: FaCodeFork,
  star: Star,
  copy: Copy,
  copyCheck: CopyCheck,
  eye: Eye,
  issue: BadgeAlert,
  calendar: Calendar,
  // birthday
  cake: Cake,
  // projects
};

export const Icons: IconsType = icons;
