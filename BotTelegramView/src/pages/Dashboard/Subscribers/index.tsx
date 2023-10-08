import Listing from 'components/BotUsers/Listing';
import PageGuard from 'components/HOC/PageGuard';

const BotUsersPage = () => {
  return (
    <PageGuard>
      <Listing />
    </PageGuard>
  );
};

export default BotUsersPage;
