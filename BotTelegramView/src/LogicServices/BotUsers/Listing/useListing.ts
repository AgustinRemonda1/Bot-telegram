import { useState, useEffect } from 'react';
import { fetchBotUsers } from 'RepoServices/BotUser';
import { IBotUsers } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';

const useListing = () => {
  const [botUsers, setBotUsers] = useState<IBotUsers[]>([]);
  const { state, actions } = usePagination();

  useEffect(() => {
    actions.onLoading(true);
    const getBotUsers = async () => {
      const response = await fetchBotUsers(state.pagination);

      if (response !== 'error') {
        setBotUsers(response.botUsers);
        actions.onChangeTotal(response.total);
      }
      actions.onLoading(false);
    };
    getBotUsers();
  }, [state.pagination]);

  return {
    state: {
      botUsers,
      pagination: {
        ...state.pagination,
        total: state.total,
        loading: state.loading
      }
    },
    actions: { onChangePage: actions.onChangePage }
  };
};

export default useListing;
