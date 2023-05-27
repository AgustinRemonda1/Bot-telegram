import { IUserType } from 'LogicServices/UserTypes/Types';

export interface ICommandTypes {
  commandTypesId?: number;
  type?: string;
  description?: string;
}

export interface INestedCommands {
  botFatherId?: number;
  botChildId?: number;
  botCommand: ICommand;
}

export interface IResponseFiles {
  botResponseFilesId?: number;
  botResponseId?: number;
  filename?: string;
  description?: string;
  url?: string;
}

export interface IResponses {
  botResponseId?: number;
  botId?: number;
  response?: string;
  description?: string;
  parameter?: string;
  botResponseFiles?: IResponseFiles;
}

export interface ICommand {
  botCommandId?: number;
  commandTypeId: number;
  userTypeId: number;
  telCommand: string;
  description: string;
  name: string;
  status: boolean;
  userType: IUserType;
  botResponses: IResponses;
  commandType: ICommandTypes;
  botNestedCommands: INestedCommands[];
  createdAt?: string;
  updatedAt?: string;
}
