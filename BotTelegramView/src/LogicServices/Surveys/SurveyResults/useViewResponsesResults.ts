import { useCallback, useState } from 'react';
import { IResponses } from '../Types';
import usePopUp from 'LogicServices/Shared/usePopUp';

const useViewResponsesResults = () => {
  const [responses, setResponses] = useState<IResponses>();
  const { state, actions } = usePopUp();

  const onOpenResponsesView = useCallback(
    (responses: IResponses) => {
      setResponses(responses);
      actions.onOpen();
    },
    [actions]
  );

  return {
    state: {
      responses,
      ...state
    },
    actions: { onOpenResponsesView, onCloseSuggestionView: actions.onClose }
  };
};

export default useViewResponsesResults;
