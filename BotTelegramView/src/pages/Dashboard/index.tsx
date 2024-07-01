import Dashboard from 'components/Dashboard';
import PageGuard from 'components/HOC/PageGuard';

const DashboardPage = () => {
  return (
    <PageGuard>
      <Dashboard />
    </PageGuard>
  );
};

export default DashboardPage;
