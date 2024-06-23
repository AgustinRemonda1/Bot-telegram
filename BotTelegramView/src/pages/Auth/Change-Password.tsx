import ChangePassword from 'components/Auth/ChangePassword';
import PageGuard from 'components/HOC/PageGuard';

const ChangePasswordPage = () => {
  return (
    <PageGuard>
      <ChangePassword />
    </PageGuard>
  );
};

export default ChangePasswordPage;
