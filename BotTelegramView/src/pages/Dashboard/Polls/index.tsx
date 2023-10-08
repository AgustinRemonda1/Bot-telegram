import Listing from 'components/Polls/Listing';
import PageGuard from 'components/HOC/PageGuard';

const PollPage = () => {
  return (
    <PageGuard>
      <Listing />
    </PageGuard>
  );
};

export default PollPage;
