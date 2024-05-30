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

interface RepositoryTypes {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
  languages: {
    [key: string]: number;
  };
}

export type LanguagesColorTypes = {
  [key: string]: string;
};

export type RepositoryOptionTypes = {
  search: boolean;
};

export type TimeZoneFormatterTypes = Intl.DateTimeFormat;

export type BirthdayTypes = {
  date: string;
};

export type DiscordTypes = {
  kv: Record<string, unknown>;
  spotify: {
    track_id?: string;
    timestamps?: {
      start: number;
      end: number;
    };
    album?: string;
    album_art_url?: string;
    artist?: string;
    song?: string;
  };
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    global_name: string;
  };
  activities: Array<{
    id?: string;
    name?: string;
    state?: string;
    type?: number;
    emoji?: {
      name?: string;
    };
    created_at?: number;
    details?: string;
    timestamps?: {
      start?: number;
      end?: number;
    };
    assets?: {
      large_image?: string;
      large_text?: string;
      small_image?: string;
      small_text?: string;
    };
    application_id?: string;
  }>;
  discord_status: 'online' | 'offline' | 'idle' | 'dnd' | string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
};

export type DuolingoTypes = {
  username: string;
  joinedClassroomIds: string[];
  streak: number;
  motivation: string;
  acquisitionSurveyReason: string;
  shouldForceConnectPhoneNumber: boolean;
  picture: string;
  learningLanguage: string;
  hasFacebookId: boolean;
  shakeToReportEnabled: boolean | null;
  liveOpsFeatures: any[]; // You might want to define this interface if possible
  canUseModerationTools: boolean;
  id: number;
  betaStatus: string;
  hasGoogleId: boolean;
  privacySettings: any[]; // You might want to define this interface if possible
  fromLanguage: string;
  hasRecentActivity15: boolean;
  _achievements: any[]; // You might want to define this interface if possible
  observedClassroomIds: string[];
  bio: string;
  profileCountry: string | null;
  chinaUserModerationRecords: any[]; // You might want to define this interface if possible
  globalAmbassadorStatus: any; // You might want to define this interface if possible
  currentCourseId: string;
  hasPhoneNumber: boolean;
  creationDate: number;
  achievements: any[]; // You might want to define this interface if possible
  hasPlus: boolean;
  name: string;
  roles: string[];
  classroomLeaderboardsEnabled: boolean;
  emailVerified: boolean;
  courses: any[]; // You might want to define this interface if possible
  totalXp: number;
  streakData: {
    currentStreak: {
      length: number;
      startDate: number;
      endDate: number;
    };
    longestStreak: {
      length: number;
      startDate: number;
      endDate: number;
    };
  };
};
