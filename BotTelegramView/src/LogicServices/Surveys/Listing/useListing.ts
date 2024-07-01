import { useState, useEffect, useCallback } from 'react';
import { fetchSurveys } from 'RepoServices/Surveys';
import { ISurvey } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';
import { useRouter } from 'next/router';

const useListing = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>([]);
  const { state, actions } = usePagination();
  const router = useRouter();

  useEffect(() => {
    actions.onLoading(true);
    const getSurveys = async () => {
      const response = await fetchSurveys(state.pagination);

      if (response !== 'error') {
        setSurveys(response.surveys);
        actions.onChangeTotal(response.total);
      }
      actions.onLoading(false);
    };

    getSurveys();
  }, [state.pagination, state.refresh]);

  const onCreateSurvey = useCallback(() => {
    router.replace('/Dashboard/Surveys/Creator');
  }, [router]);

  const onEditSurvey = useCallback(
    (id: number) => {
      router.replace('/Dashboard/Surveys/Editor/' + id);
    },
    [router]
  );

  return {
    state: {
      surveys,
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
      onCreateSurvey,
      onEditSurvey
    }
  };
};

export default useListing;
