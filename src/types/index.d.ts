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

export type DiscordTypes = {
  kv: Record<string, unknown>;
  spotify: {
    track_id: string;
    timestamps: {
      start: number;
      end: number;
    };
    album: string;
    album_art_url: string;
    artist: string;
    song: string;
  };
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    bot: boolean;
    global_name: string;
    avatar_decoration_data: null;
    display_name: string;
    public_flags: number;
  };
  activities: Array<{
    id: string;
    name: string;
    state: string;
    type: number;
    emoji: {
      name: string;
    };
    created_at: number;
    details?: string;
    timestamps?: {
      start: number;
      end: number;
    };
    assets?: {
      large_image: string;
      large_text: string;
      small_image: string;
      small_text: string;
    };
    application_id?: string;
  }>;
  discord_status: 'online' | 'offline' | 'idle' | 'dnd';
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
};
