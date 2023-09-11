import Listing from 'components/Polls/Listing';
import PrivateRoute from 'components/HOC/PrivateRoute/PrivateRoute';

const PollPage = () => {
  return (
    <PrivateRoute>
      <Listing />
    </PrivateRoute>
  );
};

export default PollPage;
