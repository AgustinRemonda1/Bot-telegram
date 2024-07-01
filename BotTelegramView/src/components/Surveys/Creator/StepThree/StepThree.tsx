import React, { FC } from 'react';
import { StepperContent } from 'components/Layout/Content';
import { ISurvey } from 'LogicServices/Surveys/Types';
import { ILanguage } from 'Static/Lang/Lang.lang';
import ViewTable from 'components/Shared/ViewTable';
import { IOption } from 'LogicServices/Shared/Types';
import { TableSeparators } from './StepThree.styled';
import {
  generateFirstStepData,
  generateSecondStepData
} from './StepThree.config';

interface IProps {
  props: {
    survey: ISurvey;
    userTypesOptions: IOption[];
    language: ILanguage;
    editMode: boolean;
  };
  actions: {
    onSelectStep: (step: number) => void;
  };
}

const StepThree: FC<IProps> = ({ props, actions }) => {
  const firstStepData = generateFirstStepData({
    ...props
  });
  const secondStepData = generateSecondStepData({ ...props });

  return (
    <StepperContent>
      <TableSeparators>
        <ViewTable
          title={
            props.editMode
              ? props.language.editSurvey
              : props.language.createNewSurvey
          }
          stepData={firstStepData}
          onStepSelected={() => actions.onSelectStep(0)}
        />
        <ViewTable
          title={
            props.editMode
              ? props.language.editQuestions
              : props.language.createQuestionsForTheSurvey
          }
          stepData={secondStepData}
          onStepSelected={() => actions.onSelectStep(1)}
        />
      </TableSeparators>
    </StepperContent>
  );
};

export default StepThree;
