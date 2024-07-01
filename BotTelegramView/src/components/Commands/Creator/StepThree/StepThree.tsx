import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { ICommandCreator, IFlags } from 'LogicServices/Commands/Creator/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import ViewTable from 'components/Shared/ViewTable';
import { ITypesLists } from '../Creator.types';
import { TableSeparators } from './StepThree.styled';
import {
  generateFirstStepData,
  generateSecondStepData
} from './StepThree.config';

interface IProps {
  props: {
    command: ICommandCreator;
    typesLists: ITypesLists;
    language: ILanguage;
    flags: { editMode: boolean } & IFlags;
  };
  actions: {
    onSelectStep: (step: number) => void;
  };
}

const StepThree: FC<IProps> = ({ props, actions }) => {
  const {
    editMode,
    isAButtonCommand,
    isAFileCommand,
    isANestedCommand,
    isAParameterCommand
  } = props.flags;
  const firstStepData = generateFirstStepData({
    ...props
  });
  const secondStepData = generateSecondStepData({ ...props });
  const showSecondStep =
    isAButtonCommand ||
    isAFileCommand ||
    isANestedCommand ||
    isAParameterCommand;

  return (
    <StepperContent>
      <TableSeparators>
        <ViewTable
          title={
            editMode
              ? props.language.editBaseCommand
              : props.language.createBaseCommand
          }
          stepData={firstStepData}
          onStepSelected={() => actions.onSelectStep(0)}
        />
        {showSecondStep && (
          <ViewTable
            title={
              editMode
                ? props.language.editCommandTypeFeatures
                : props.language.createCommandTypeFeatures
            }
            stepData={secondStepData}
            onStepSelected={() => actions.onSelectStep(1)}
          />
        )}
      </TableSeparators>
    </StepperContent>
  );
};

export default StepThree;
