// Account Types
export type Account = {
  id: string;
  email: string;
  channel: string;
  displayName: string;
  access_token: string;
  refresh_token: string;
  profileImageURL: string;
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