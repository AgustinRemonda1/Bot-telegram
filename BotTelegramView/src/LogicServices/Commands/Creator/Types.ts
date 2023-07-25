import { ICommand } from '../Types';

export interface ICommandCreator
  extends Omit<ICommand, 'userType' | 'commandType'> {}
