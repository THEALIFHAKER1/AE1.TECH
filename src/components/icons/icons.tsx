import {
  FolderGit2,
  Home,
  Info,
  LayoutDashboard,
  Moon,
  PencilRuler,
  SunMedium,
  ExternalLink,
  ChevronRight,
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
import { FaXTwitter } from 'react-icons/fa6';
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
  // carousel
  externalLink: BiLinkExternal,
};

export const Icons: IconsType = icons;
