import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { Container, Content } from 'components/Layout/Content';
import { generateConfigWithLang } from './Listing.config';
import SectionTitle from 'components/Shared/SectionTitle';
import DeletePopUp from 'components/Shared/DeletePopUp';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useListing, {
  useDelete,
  useCreatorModal
} from 'LogicServices/Commands/Listing';
import Creator from 'components/Commands/Creator';

const Listing = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useListing();
  const deletePopUp = useDelete({ onRefresh: actions.onRefresh });
  const creatorModal = useCreatorModal();
  const configParams = {
    language,
    onOpenDeletePopUp: deletePopUp.actions.onOpen,
    onOpenPollPopUp: creatorModal.actions.onOpen
  };

  return (
    <Container>
      <Content>
        <SectionTitle
          titleLabel={language.botActions}
          action={() => creatorModal.actions.onOpen()}
        />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.commands || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
          onRefreshTable={actions.onRefresh}
          refreshTable={state.pagination.refresh}
        />
      </Content>
      <Creator
        command={creatorModal.state.command}
        open={creatorModal.state.open}
        onClose={creatorModal.actions.onClose}
        onRefresh={actions.onRefresh}
      />
      <DeletePopUp
        open={deletePopUp.state.open}
        onClose={deletePopUp.actions.onClose}
        onDelete={deletePopUp.actions.onDelete}
      />
    </Container>
  );
};

export default Listing;
