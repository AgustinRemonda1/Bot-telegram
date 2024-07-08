import SurveysToResults from 'components/Surveys/SurveysToResults';
import PageGuard from 'components/HOC/PageGuard';

const SurveysToResultsPage = () => {
  return (
    <PageGuard>
      <SurveysToResults />
    </PageGuard>
  );
};

export default SurveysToResultsPage;
