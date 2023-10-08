export const generateCommandConfigWithLang = (configParams: any) => {
  const { language } = configParams;

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
    }
  ];
};

export const generatePollConfigWithLang = (configParams: any) => {
  const { language } = configParams;

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
      property: 'name',
      nestedTable: 'userType'
    }
  ];
};

export const generateCardInfo = (configParams: any) => {
  const {
    language,
    totalSubscribers,
    newLastAdmission,
    totalPolls,
    totalCommands
  } = configParams;

  return [
    {
      name: language.totalSubscribers.toUpperCase(),
      value: totalSubscribers
    },
    {
      name: language.newLastAdmission.toUpperCase(),
      value: newLastAdmission
    },
    {
      name: language.totalPolls.toUpperCase(),
      value: totalPolls
    },
    {
      name: language.totalCommands.toUpperCase(),
      value: totalCommands
    }
  ];
};
