export type SiteConfig = {
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

export type RouteConfig = {
  path: string;
  label: string;
  icon: React.ElementType;
};

export type SkillsConfig = {
  name: string;
  icon: React.ElementType;
};

export type SosialConfig = {
  platform: string;
  link: string;
  icon: React.ElementType;
};
