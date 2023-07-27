import { ICommand } from '../Types';

export interface ICommandCreator
  extends Omit<ICommand, 'userType' | 'commandType'> {}

export interface IFlags {
  isAFileCommand: boolean;
  isAButtonCommand: boolean;
  isANestedCommand: boolean;
  isAParameterCommand: boolean;
}
