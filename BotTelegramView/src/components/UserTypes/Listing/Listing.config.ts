export const generateConfigWithLang = (configParams: any) => {
  const { language } = configParams;

  return [
    {
      name: language.userTypeId,
      property: 'userTypeId'
    },
    {
      name: language.type,
      property: 'description'
    }
  ];
};
