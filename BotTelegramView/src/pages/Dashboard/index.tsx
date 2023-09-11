import Dashboard from 'components/Dashboard';
import PrivateRoute from 'components/HOC/PrivateRoute/PrivateRoute';

const DashboardPage = () => {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  );
};

export default DashboardPage;
