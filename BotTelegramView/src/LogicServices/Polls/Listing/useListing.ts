import { useState, useEffect } from 'react';
import { fetchPolls } from 'RepoServices/Polls';
import { IPoll } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';

const useListing = () => {
  const [polls, setPolls] = useState<IPoll[]>([]);
  const { state, actions } = usePagination();

  useEffect(() => {
    actions.onLoading(true);
    const getPolls = async () => {
      const response = await fetchPolls(state.pagination);

      if (response !== 'error') {
        setPolls(response.polls);
        actions.onChangeTotal(response.total);
      }
      actions.onLoading(false);
    };

    getPolls();
  }, [state.pagination, state.refresh]);

  return {
    state: {
      polls,
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
