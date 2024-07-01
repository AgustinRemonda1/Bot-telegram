import { useState, useEffect, useCallback } from 'react';
import { fetchCommands } from 'RepoServices/Commands';
import { ICommand } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';
import { useRouter } from 'next/router';

const useListing = () => {
  const [commands, setCommands] = useState<ICommand[]>([]);
  const { state, actions } = usePagination();
  const router = useRouter();

  useEffect(() => {
    actions.onLoading(true);
    const getCommands = async () => {
      const response = await fetchCommands(state.pagination);

      if (response !== 'error') {
        setCommands(response.commands);
        actions.onChangeTotal(response.total);
      }
      actions.onLoading(false);
    };

    getCommands();
  }, [state.pagination, state.refresh]);

  const onCreateCommand = useCallback(() => {
    router.replace('/Dashboard/Bot-Actions/Creator');
  }, [router]);

  const onEditCommand = useCallback(
    (id: number) => {
      router.replace('/Dashboard/Bot-Actions/Editor/' + id);
    },
    [router]
  );

  return {
    state: {
      commands,
      pagination: {
        ...state.pagination,
        total: state.total,
        loading: state.loading,
        refresh: state.refresh
      }
    },
    actions: {
      onChangePage: actions.onChangePage,
      onRefresh: actions.onRefresh,
      onCreateCommand,
      onEditCommand
    }
  };
};

export default useListing;
