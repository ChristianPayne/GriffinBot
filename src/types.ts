// Account Types
export type Account = {
  id: string;
  channel: string;
  twitchDisplayName: string;
  twitchAccessToken: string;
  twitchRefreshToken: string;
  twitchProfileImageURL: string;
  apiKey: string;
}

// Bot Types
export type BotSettings = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
}

export type Command = {
  enabled: boolean;
  channel: string;
  name: string;
  response: string;
  type: CommandType;
  userLevel: UserLevel;
}


// Server Types
export type CommandType = "action" | "response";

export type UserLevel = "broadcaster" | "mod" | "vip" | "viewer";

export type LocalStorageSettings = {
  channel: string;
  botOAuth?: string;
  channelOAuth?: string;
}

export type LocalStorageCommands = Command[];