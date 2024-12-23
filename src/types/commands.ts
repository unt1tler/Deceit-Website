export interface Command {
  name: string;
  description: string;
  usage?: string;
}

export interface CommandCategory {
  name: string;
  commands: Command[];
}