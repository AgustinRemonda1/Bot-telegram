import { useState, useEffect, useCallback } from 'react';
import { fetchSurveysOnly } from 'RepoServices/Surveys';
import { ISurvey } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';
import { useRouter } from 'next/router';

const useSurveysToResults = () => {
  const [surveys, setSurveys] = useState<ISurvey[]>([]);
  const { state, actions } = usePagination();
  const router = useRouter();

  useEffect(() => {
    actions.onLoading(true);
    const getSurveys = async () => {
      const response = await fetchSurveysOnly(state.pagination);

      if (response !== 'error') {
        setSurveys(response.surveys);
        actions.onChangeTotal(response.total);
      }
      actions.onLoading(false);
    };

    getSurveys();
  }, [state.pagination]);

  const onViewSurveyResult = useCallback(
    (id: number) => {
      router.replace('/Dashboard/Activities/Surveys/Results/' + id);
    },
    [router]
  );

  return {
    state: {
      surveys,
      pagination: {
        ...state.pagination,
        total: state.total,
        loading: state.loading
      }
    },
    actions: {
      onChangePage: actions.onChangePage,
      onViewSurveyResult
    }
  };
};

export default useSurveysToResults;
