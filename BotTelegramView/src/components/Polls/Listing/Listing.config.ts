import editIcon from 'Static/Assets/Images/pencil.svg';
import trashIcon from 'Static/Assets/Images/delete.svg';

export const generateConfigWithLang = (configParams: any) => {
  const { language, onOpenDeletePopUp, onOpenPollPopUp } = configParams;

  return [
    {
      name: language.name,
      property: 'name'
    },
    {
      name: language.description,
      property: 'description'
    },
    {
      name: language.userType,
      property: 'description',
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
          onClick: (dataset: any) => {
            onOpenPollPopUp(dataset);
          }
        },
        {
          type: 'delete',
          id: 'button-poll-delete',
          title: language.delete,
          icon: trashIcon.src,
          onClick: (dataset: any) => {
            onOpenDeletePopUp(dataset.pollId);
          }
        }
      ]
    }
  ];
};
