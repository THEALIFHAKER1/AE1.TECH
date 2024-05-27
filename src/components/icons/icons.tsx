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

export type ImagesKeys = keyof typeof images

type ImagesType = {
  [key in ImagesKeys]: string
}

const images = {
  logo: "/icons/icon.png",
}

export const Images: ImagesType = images


export const duolingoIcons = {
  JA: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/6d303af9f69038c1db4bffa52abdc997.svg',
  DE: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/097f1c20a4f421aa606367cd33893083.svg',
  FR: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/7488bd7cd28b768ec2469847a5bc831e.svg',
  ZHCN: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/8537efd75f444d1d7dc21d8caf563f58.svg',
  AR: 'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/e052b83e772ae592295961e595ca50ef.svg',

  Streak:
    'https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg',
  XP: 'https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg',
  League:
    'https://d35aaqx5ub95lt.cloudfront.net/images/leagues/8148b17e32d8706a82c02688f559e9ef.svg',
};
