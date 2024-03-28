export type SiteTypes = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
  };
  ogImage: string;
};

export type RouteTypes = {
  path: string;
  label: string;
  icon: React.ElementType;
};

export type SkillsTypes = {
  name: string;
  icon: React.ElementType;
};

export type SosialsTypes = {
  platform: string;
  link: string;
  icon: React.ElementType;
};

export type SportlightProjectsTypes = {
  projectName: string;
  description: string;
  link: string;
  repo: string;
  image: string;
};
