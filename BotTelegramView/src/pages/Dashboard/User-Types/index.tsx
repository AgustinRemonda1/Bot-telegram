import Listing from 'components/UserTypes/Listing';
import PrivateRoute from 'components/HOC/PrivateRoute/PrivateRoute';

const UserTypesPage = () => {
  return (
    <PrivateRoute>
      <Listing />
    </PrivateRoute>
  );
};

export default UserTypesPage;
