import Creator from 'components/Commands/Creator';
import PageGuard from 'components/HOC/PageGuard';

const CreatorPage = () => {
  return (
    <PageGuard>
      <Creator />
    </PageGuard>
  );
};

export default CreatorPage;
