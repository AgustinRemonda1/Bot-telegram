import Listing from 'components/Surveys/Listing';
import PageGuard from 'components/HOC/PageGuard';

const SurveyPage = () => {
  return (
    <PageGuard>
      <Listing />
    </PageGuard>
  );
};

export default SurveyPage;
