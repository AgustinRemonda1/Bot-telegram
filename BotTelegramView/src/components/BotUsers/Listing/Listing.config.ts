export const generateConfigWithLang = (configParams: any) => {
  const { language } = configParams;

  return [
    {
      name: language.username,
      property: 'telUsername'
    },
    {
      name: language.name,
      property: 'telFirstName'
    },
    {
      name: language.lastName,
      property: 'telLastName'
    },
    {
      name: language.dni,
      property: 'guaraniUser',
      custom: (guaraniUsers: any) => guaraniUsers && guaraniUsers.dni
    },
    {
      name: language.email,
      property: 'guaraniUser',
      custom: (guaraniUsers: any) => guaraniUsers && guaraniUsers.email
    },
    {
      name: language.phoneNumber,
      property: 'guaraniUser',
      custom: (guaraniUsers: any) => guaraniUsers && guaraniUsers.phoneNumber
    },
    {
      name: language.userType,
      property: 'userType',
      custom: (userType: any) => userType && userType.description
    }
  ];
};
