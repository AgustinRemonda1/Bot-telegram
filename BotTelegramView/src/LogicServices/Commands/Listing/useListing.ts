import { useState, useEffect } from 'react';
import { fetchCommands } from 'RepoServices/Commands';
import { ICommand } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';

const useListing = () => {
  const [commands, setCommands] = useState<ICommand[]>([]);
  const { state, actions } = usePagination();

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
      onRefresh: actions.onRefresh
    }
  };
};

export default useListing;
