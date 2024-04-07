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

export type SpotlightProjectsTypes = {
  projectName: string;
  description: string;
  link: string;
  repo: string;
  image: string;
};

export type RepositoryTypes = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  languages_url: string;
  languages: {
    [key: string]: number;
  };
  stargazers_count: number;
  forks_count: number;
};

export type LanguagesColorTypes = {
  [key: string]: string;
};

export type RepositoryOptionTypes = {
  pagination: boolean;
  search: boolean;
};

export type TimeZoneFormatterTypes = Intl.DateTimeFormat;

export type BirthdayTypes = {
  date: string;
};
