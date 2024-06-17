import Creator from 'components/Commands/Creator';
import PageGuard from 'components/HOC/PageGuard';

const EditorPage = () => {
  return (
    <PageGuard>
      <Creator />
    </PageGuard>
  );
};

export default EditorPage;
