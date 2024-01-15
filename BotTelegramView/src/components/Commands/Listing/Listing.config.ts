import editIcon from 'Static/Assets/Icons/pencil.svg';
import trashIcon from 'Static/Assets/Icons/delete.svg';
import { ICommand } from 'LogicServices/Commands/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import { IConfig } from 'LogicServices/Shared/Types';

export const commandNotEditable = [5, 6, 12, 13, 10];

interface IConfigProps {
  language: ILanguage;
  onOpenDeletePopUp: (id: number) => void;
  onOpenPollPopUp: (command?: ICommand) => void;
}

export const generateConfigWithLang = (configParams: IConfigProps) => {
  const { language, onOpenDeletePopUp, onOpenPollPopUp } = configParams;

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'botResponses',
      custom: (botResponses: ICommand['botResponses']) =>
        botResponses && botResponses.description
    },
    {
      name: language.status,
      property: 'status',
      custom: (status: ICommand['status']) =>
        status ? language.active : language.inactive,
      align: 'center'
    },
    {
      name: language.commandType,
      property: 'name',
      nestedTable: 'commandType'
    },
    {
      name: language.userType,
      property: 'name',
      nestedTable: 'userType'
    },
    {
      name: language.actions,
      align: 'center',
      isActions: true,
      actions: [
        {
          type: 'edit',
          id: 'button-poll-edit',
          title: language.edit,
          icon: editIcon.src,
          disabled: (command: ICommand) =>
            Boolean(commandNotEditable.includes(command.commandTypeId)),
          onClick: (command: ICommand) => {
            onOpenPollPopUp(command);
          }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon.src,
          disabled: (command: ICommand) =>
            Boolean(commandNotEditable.includes(command.commandTypeId)),
          onClick: (command: ICommand) => {
            onOpenDeletePopUp(Number(command.botCommandId));
          }
        }
      ]
    }
  ] as IConfig[];
};
