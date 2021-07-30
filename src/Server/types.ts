export type Command = {
  channel: string;
  name: string;
  response: string;
  type: CommandType;
}

export type CommandType = "action" | "response";

export type LocalStorageSettings = {
  channel: string;
  botOAuth?: string;
  channelOAuth?: string;
}

export type LocalStorageCommands = Command[]