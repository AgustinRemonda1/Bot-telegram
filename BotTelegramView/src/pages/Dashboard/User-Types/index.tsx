import Listing from 'components/UserTypes/Listing';
import PageGuard from 'components/HOC/PageGuard';

const UserTypesPage = () => {
  return (
    <PageGuard>
      <Listing />
    </PageGuard>
  );
};

export default UserTypesPage;
