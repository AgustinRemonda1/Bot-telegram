import Creator from 'components/Polls/Creator';
import PageGuard from 'components/HOC/PageGuard';

const CreatorPage = () => {
  return (
    <PageGuard>
      <Creator />
    </PageGuard>
  );
};

export default CreatorPage;
