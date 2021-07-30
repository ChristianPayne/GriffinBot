export type Command = {
  enabled: boolean;
  channel: string;
  name: string;
  response: string;
  type: CommandType;
  userLevel: UserLevel;
}

export type CommandType = "action" | "response";

export type UserLevel = "broadcaster" | "mod" | "vip" | "viewer";

export type LocalStorageSettings = {
  channel: string;
  botOAuth?: string;
  channelOAuth?: string;
}

export type LocalStorageCommands = Command[];