import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { IInputConfigProps, ITypesLists } from '../Creator.types';
import { generateMainInputs } from './StepOne.config';
import BuildInputs from 'components/Shared/BuildInputs';

interface IProps {
  inputParams: IInputConfigProps;
  typesLists: ITypesLists;
}

const StepOne: FC<IProps> = ({ inputParams, typesLists }) => {
  const mainInputs = generateMainInputs({
    ...inputParams,
    commandTypesOptions: typesLists.commandTypes,
    userTypesOptions: typesLists.userTypes
  });

  return (
    <StepperContent>
      {mainInputs.map((input, index) => (
        <BuildInputs key={'main' + index} input={input} />
      ))}
    </StepperContent>
  );
};

export default StepOne;
