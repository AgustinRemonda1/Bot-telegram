import { IEvent, IOption } from 'LogicServices/Shared/Types';
import { ICommandCreator } from 'LogicServices/Commands/Creator/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';

export interface IInputConfigProps {
  language: ILanguage;
  command: ICommandCreator;
  onChangeInputs: (e: IEvent) => void;
  isAButtonCommand: boolean;
  emptyFields: boolean;
  editMode: boolean;
}

export interface ITypesLists {
  userTypes: IOption[];
  commandTypes: IOption[];
}
