import React, { useContext } from 'react';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { ContentSize } from 'components/Layout/Content';
import { SelectQuestionsContainer } from './Creator.styled';
import {
  generateInputConfig,
  inputNames,
  numberOfQuestionsConfig
} from './Creator.config';
import RightModal from 'components/Shared/RightModal';
import BuildInputs from 'components/Shared/BuildInputs';
import CustomSelect from 'components/Shared/CustomSelect';
import { generateInputQuestions } from './Creators.utils';
import { IPoll } from 'LogicServices/Polls/Types';
import useCreator, { usePoll } from 'LogicServices/Polls/Creator';
import useUserTypes from 'LogicServices/Shared/useUserTypes';

interface IProps {
  poll: IPoll | null;
  open: boolean;
  onClose: () => void;
  onRefresh: (refresh: boolean) => void;
}

const Creator = ({ poll, open, onClose, onRefresh }: IProps) => {
  const { language } = useContext(LanguageContext);
  const userTypes = useUserTypes();
  const { state, actions } = useCreator({
    pollToEdit: poll,
    onClose,
    onRefresh
  });
  const pollEdit = usePoll({
    open,
    poll: state.poll,
    onChange: actions.onChange,
    questionsNumber: state.questionsNumber
  });

  const inputs = generateInputConfig({
    language,
    onChange: pollEdit.actions.onChangePollFields,
    poll: state.poll,
    emptyFields: state.emptyFields,
    userTypes: userTypes.state.userTypesOptions
  });

  const title = poll ? language.editPoll : language.newPoll;

  return (
    <RightModal
      open={open}
      onClose={onClose}
      title={title}
      onSave={actions.onSave}
      loading={state.loading}
    >
      <ContentSize>
        {inputs.map((input, index) => (
          <BuildInputs key={index} input={input} />
        ))}
      </ContentSize>
      <SelectQuestionsContainer>
        <CustomSelect
          title={language.numberOfQuestions}
          name={inputNames.numberOfQuestions}
          value={pollEdit.state.questionNumber}
          list={numberOfQuestionsConfig}
          onChange={pollEdit.actions.onChangeQuestionNumber}
        />
      </SelectQuestionsContainer>
      <ContentSize>
        {generateInputQuestions({
          poll: state.poll,
          onChangeQuestions: pollEdit.actions.onChangeQuestions,
          language,
          hasEmptyFields: state.hasEmptyFields
        })}
      </ContentSize>
    </RightModal>
  );
};

export default Creator;
