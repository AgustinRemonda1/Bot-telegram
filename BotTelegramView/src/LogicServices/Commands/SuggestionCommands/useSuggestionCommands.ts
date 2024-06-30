import { useState, useEffect, useCallback } from 'react';
import { fetchSuggestionsCommands } from 'RepoServices/Commands';
import { ICommandSuggestions } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';
import { useRouter } from 'next/router';

const useSuggestionCommands = () => {
  const [commandsSuggestions, setCommandsSuggestions] = useState<
    ICommandSuggestions[]
  >([]);
  const { state, actions } = usePagination();
  const router = useRouter();

  useEffect(() => {
    actions.onLoading(true);
    const getCommands = async () => {
      const response = await fetchSuggestionsCommands(state.pagination);

      if (response !== 'error') {
        setCommandsSuggestions(response.commandsSuggestions);
        actions.onChangeTotal(response.total);
      }
      actions.onLoading(false);
    };

    getCommands();
  }, [state.pagination]);

  const onCreateCommand = useCallback(() => {
    router.replace('/Dashboard/Bot-Actions/Creator');
  }, [router]);

  return {
    state: {
      commandsSuggestions,
      pagination: {
        ...state.pagination,
        total: state.total,
        loading: state.loading
      }
    },
    actions: {
      onChangePage: actions.onChangePage,
      onCreateCommand
    }
  };
};

export default useSuggestionCommands;
