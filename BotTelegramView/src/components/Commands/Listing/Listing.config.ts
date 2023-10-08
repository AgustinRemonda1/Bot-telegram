import editIcon from 'Static/Assets/Icons/pencil.svg';
import trashIcon from 'Static/Assets/Icons/delete.svg';

export const commandNotEditable = [5, 6, 12, 13, 10];

export const generateConfigWithLang = (configParams: any) => {
  const { language, onOpenDeletePopUp, onOpenPollPopUp } = configParams;

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'botResponses',
      custom: (property: any) => property && property.description
    },
    {
      name: language.status,
      property: 'status',
      custom: (property: any) =>
        property ? language.active : language.inactive,
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
          disabled: (dataset: any) =>
            Boolean(commandNotEditable.includes(dataset.commandTypeId)),
          onClick: (dataset: any) => {
            onOpenPollPopUp(dataset);
          }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon.src,
          disabled: (dataset: any) =>
            Boolean(commandNotEditable.includes(dataset.commandTypeId)),
          onClick: (dataset: any) => {
            onOpenDeletePopUp(dataset.botCommandId);
          }
        }
      ]
    }
  ];
};
