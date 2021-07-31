// Account Types
export type Account = {
  email: string;
  channel: string;
  twitch_user_id: string;
  twitch_access_token: string;
  twitch_refresh_token: string;
  api_key: string;
}

// Bot Types
export type BotSettings = {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
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