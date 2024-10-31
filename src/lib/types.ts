export interface DiscordData {
  discord_status: string;
  discord_user: {
    id: string;
    avatar: string;
    username: string;
  };
}

export type PopupState = {
  programmingLanguages: boolean;
  coolBox: boolean;
};

export type PopupAction =
  | { type: "TOGGLE_POPUP"; popup: keyof PopupState }
  | { type: "CLOSE_POPUP"; popup: keyof PopupState }
  | { type: "OPEN_POPUP"; popup: keyof PopupState };

export type Project = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  href: string;
  description: string;
  url: string;
};
