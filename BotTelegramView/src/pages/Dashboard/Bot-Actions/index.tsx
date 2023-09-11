import Listing from 'components/Commands/Listing';
import PrivateRoute from 'components/HOC/PrivateRoute/PrivateRoute';

const CommandsPage = () => {
  return (
    <PrivateRoute>
      <Listing />
    </PrivateRoute>
  );
};

export default CommandsPage;
