import Config from 'components/Auth/Config';
import PageGuard from 'components/HOC/PageGuard';

const ConfigPage = () => {
  return (
    <PageGuard>
      <Config />
    </PageGuard>
  );
};

export default ConfigPage;
