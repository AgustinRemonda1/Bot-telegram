import { useState, useEffect } from 'react';
import { fetchSurvey, fetchSurveyResponses } from 'RepoServices/Surveys';
import { IResponses, ISurvey } from '../Types';
import usePagination from 'LogicServices/Shared/usePagination';
import { useRouter } from 'next/router';

const useSurveyResults = () => {
  const [survey, setSurvey] = useState<ISurvey>();
  const [results, setResults] = useState<IResponses[]>([]);
  const { state, actions } = usePagination();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    actions.onLoading(true);
    const getResults = async () => {
      const surveyResult = await fetchSurvey(Number(id));
      const result = await fetchSurveyResponses({
        ...state.pagination,
        id: Number(id)
      });

      if (result !== 'error' && surveyResult !== 'error') {
        setResults(result.responses);
        setSurvey(surveyResult.survey);
        actions.onChangeTotal(result.total);
      }
      actions.onLoading(false);
    };

    getResults();
  }, [state.pagination, id]);

  return {
    state: {
      survey,
      results,
      pagination: {
        ...state.pagination,
        total: state.total,
        loading: state.loading
      }
    },
    actions: {
      onChangePage: actions.onChangePage
    }
  };
};

export default useSurveyResults;
