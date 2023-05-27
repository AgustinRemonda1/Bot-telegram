import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { generateConfigWithLang } from './Listing.config';
import SectionTitle from 'components/Shared/SectionTitle';
import DeletePopUp from 'components/Shared/DeletePopUp';
import { Container, ContentContainer } from 'components/Layout/Content';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useListing from 'LogicServices/Polls/Listing/useListing';
import useDelete from 'LogicServices/Polls/Listing/useDeletePopUp';
import useCreatorModal from 'LogicServices/Polls/Listing/useCreatorModal';
import Creator from 'components/Polls/Creator';

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
      <ContentContainer>
        <SectionTitle
          action={() => creatorModal.actions.onOpen()}
          titleLabel={language.polls}
        />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.polls || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
          onRefreshTable={actions.onRefresh}
          refreshTable={state.pagination.refresh}
        />
      </ContentContainer>
      <Creator
        poll={creatorModal.state.poll}
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
