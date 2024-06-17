import { useState, useEffect, useCallback } from 'react';
import { fetchPolls } from 'RepoServices/Polls';
import { IPoll } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';
import { useRouter } from 'next/router';

const useListing = () => {
  const [polls, setPolls] = useState<IPoll[]>([]);
  const { state, actions } = usePagination();
  const router = useRouter();

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

  const onCreatePoll = useCallback(() => {
    router.replace('/Dashboard/Polls/Creator');
  }, [router]);

  const onEditPoll = useCallback(
    (id: number) => {
      router.replace('/Dashboard/Polls/Editor/' + id);
    },
    [router]
  );

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
      onRefresh: actions.onRefresh,
      onCreatePoll,
      onEditPoll
    }
  };
};

export default useListing;
