import Activities from 'components/Activities';
import PageGuard from 'components/HOC/PageGuard';

const ChangePasswordPage = () => {
  return (
    <PageGuard>
      <Activities />
    </PageGuard>
  );
};

export default ChangePasswordPage;
