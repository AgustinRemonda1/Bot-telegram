import Listing from 'components/Commands/Listing';
import PageGuard from 'components/HOC/PageGuard';

const CommandsPage = () => {
  return (
    <PageGuard>
      <Listing />
    </PageGuard>
  );
};

export default CommandsPage;
