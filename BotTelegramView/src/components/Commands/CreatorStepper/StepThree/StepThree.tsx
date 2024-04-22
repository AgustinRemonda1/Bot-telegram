import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { ICommandCreator } from 'LogicServices/Commands/Creator/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import ViewTable from 'components/Shared/ViewTable';
import { ITypesLists } from '../Creator.types';

interface IProps {
  command: ICommandCreator;
  typesLists: ITypesLists;
  language: ILanguage;
}

const generateFirstStepData = ({ command, language, typesLists }: IProps) => [
  {
    title: language.name,
    value: command.name
  },
  {
    title: language.command,
    value: command.telCommand
  },
  {
    title: language.description,
    value: command.description,
    correction: true
  },
  {
    title: language.userType,
    value: typesLists.userTypes.find(
      (userType) => userType.id === command.userTypeId
    )?.name as string
  },
  {
    title: language.commandType,
    value: typesLists.commandTypes.find(
      (commandType) => commandType.id === command.commandTypeId
    )?.name as string
  },
  {
    title: language.response,
    value: command.botResponses?.response || '',
    correction: true
  }
];

const StepThree: FC<IProps> = ({ command, language, typesLists }) => {
  const firstStepData = generateFirstStepData({
    command,
    language,
    typesLists
  });
  return (
    <StepperContent>
      <ViewTable stepData={firstStepData} />
    </StepperContent>
  );
};

export default StepThree;
