import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { generateConfigWithLang } from './Listing.config';
import SectionTitle from 'components/Shared/SectionTitle';
import DeletePopUp from 'components/Shared/DeletePopUp';
import { Container, Content } from 'components/Layout/Content';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useListing, { useDelete } from 'LogicServices/Surveys/Listing';

const Listing = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useListing();
  const deletePopUp = useDelete({ onRefresh: actions.onRefresh });
  const configParams = {
    language,
    onOpenDeletePopUp: deletePopUp.actions.onOpen,
    onEditSurvey: actions.onEditSurvey
  };

  return (
    <Container>
      <Content>
        <SectionTitle
          action={() => actions.onCreateSurvey()}
          titleLabel={language.surveys}
        />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.surveys || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
          onRefreshTable={actions.onRefresh}
          refreshTable={state.pagination.refresh}
        />
      </Content>
      <DeletePopUp
        open={deletePopUp.state.open}
        onClose={deletePopUp.actions.onClose}
        onDelete={deletePopUp.actions.onDelete}
      />
    </Container>
  );
};

export default Listing;
