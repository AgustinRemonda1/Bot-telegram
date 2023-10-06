import Listing from 'components/BotUsers/Listing';
import PrivateRoute from 'components/HOC/PrivateRoute/PrivateRoute';

const BotUsersPage = () => {
  return (
    <PrivateRoute>
      <Listing />
    </PrivateRoute>
  );
};

export default BotUsersPage;
