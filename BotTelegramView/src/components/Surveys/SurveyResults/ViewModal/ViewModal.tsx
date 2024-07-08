import React, { FC } from 'react';
import RightModal from 'components/Shared/RightModal';
import { ISurvey, IResponses } from 'LogicServices/Surveys/Types';
import { ContentSize, DataCeil } from 'components/Layout/Content';
import { Typography } from '@mui/material';
import { ILanguage } from 'Static/Lang/Lang.lang';
import AddIcon from '@mui/icons-material/Add';
import { getResponse } from './utils';

interface IProps {
  props: {
    language: ILanguage;
    survey?: ISurvey;
    responses?: IResponses;
    title: string;
    open: boolean;
  };
  actions: {
    onClose: () => void;
  };
}

const ViewModal: FC<IProps> = ({ props, actions }) => {
  const questions =
    (props.survey && props.survey.questionResponse.questions) || [];
  const responses = (props.responses && props.responses.response) || [];

  return (
    <RightModal
      title={props.title}
      open={props.open}
      onClose={actions.onClose}
      loading={false}
    >
      <ContentSize>
        {questions &&
          questions.map((question) => (
            <DataCeil correction>
              <Typography variant="h6">{question.question}</Typography>
              <Typography>{getResponse(question, responses)}</Typography>
            </DataCeil>
          ))}
      </ContentSize>
    </RightModal>
  );
};

export default ViewModal;
