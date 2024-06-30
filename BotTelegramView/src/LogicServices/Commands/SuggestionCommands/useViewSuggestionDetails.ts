import { useCallback, useState } from 'react';
import { ICommandSuggestions } from '../Types';
import usePopUp from 'LogicServices/Shared/usePopUp';

const useSuggestionCommands = () => {
  const [commandSuggestion, setCommandSuggestion] =
    useState<ICommandSuggestions>();
  const { state, actions } = usePopUp();

  const onOpenSuggestionView = useCallback(
    (suggestion: ICommandSuggestions) => {
      setCommandSuggestion(suggestion);
      actions.onOpen();
    },
    [actions]
  );

  return {
    state: {
      commandSuggestion,
      ...state
    },
    actions: { onOpenSuggestionView, onCloseSuggestionView: actions.onClose }
  };
};

export default useSuggestionCommands;
