import { IInput } from 'components/Shared/BuildInputs/BuildInput.types';
import { IUser } from 'LogicServices/Auth';
import { IEvent } from 'LogicServices/Shared/Types';
import { ILanguage } from '~/Static/Lang/Lang.lang';

export const inputNames = {
  username: 'username',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  userRoleId: 'userRoleId',
  image: 'image'
};

interface IConfigInputs {
  user: IUser;
  language: ILanguage;
  emptyFields: boolean;
  onChange: (e: IEvent) => void;
}

export const generateFirstInput = ({
  user,
  language,
  onChange,
  emptyFields
}: IConfigInputs) => {
  return {
    type: 'text',
    name: inputNames.username,
    title: language.username,
    onChange,
    value: user.username || '',
    emptyFields
  };
};

export const generateConfigInputs = ({
  user,
  language,
  onChange,
  emptyFields
}: IConfigInputs) => {
  return [
    {
      type: 'text',
      name: inputNames.firstName,
      title: language.firstname,
      onChange,
      value: user?.firstName || '',
      emptyFields
    },
    {
      type: 'text',
      name: inputNames.lastName,
      title: language.lastname,
      onChange,
      value: user?.lastName || '',
      emptyFields
    },
    {
      type: 'text',
      name: inputNames.email,
      title: language.email,
      onChange,
      value: user?.email || '',
      emptyFields
    },
    {
      type: 'select',
      name: inputNames.userRoleId,
      title: language.role,
      onChange,
      value: Number(user?.userRoleId) || 1,
      list: [{ id: 1, name: 'admin' }],
      disabled: true
    },
    {
      type: 'file',
      name: inputNames.image,
      title: language.profileImage,
      onChange,
      value: user?.image || '',
      fileValues: {
        filename: 'profile',
        extension: '.jpg'
      },
      fileTargets: {
        file: 'image',
        extension: ''
      }
    }
  ];
};
