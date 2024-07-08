import SurveyResults from 'components/Surveys/SurveyResults';
import PageGuard from 'components/HOC/PageGuard';

const SurveyResultsPage = () => {
  return (
    <PageGuard>
      <SurveyResults />
    </PageGuard>
  );
};

export default SurveyResultsPage;
