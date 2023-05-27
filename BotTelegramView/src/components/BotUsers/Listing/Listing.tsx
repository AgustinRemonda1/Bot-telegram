import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { Container, ContentContainer } from 'components/Layout/Content';
import { generateConfigWithLang } from './Listing.config';
import SectionTitle from 'components/Shared/SectionTitle';
import useListing from 'LogicServices/BotUsers/Listing/useListing';

const Listing = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useListing();

  const configParams = { language };

  return (
    <Container>
      <ContentContainer>
        <SectionTitle titleLabel={language.subscribers} />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.botUsers || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
        />
      </ContentContainer>
    </Container>
  );
};

export default Listing;
