import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { Container, Content } from 'components/Layout/Content';
import { generateConfigWithLang } from './Listing.config';
import SectionTitle from 'components/Shared/SectionTitle';
import useListing from 'LogicServices/UserTypes/Listing/useListing';

const GetUserTypesContent = () => {
  const { state } = useListing();
  const { language } = useContext(LanguageContext);
  const configParams = { language };

  return (
    <Container>
      <Content>
        <SectionTitle titleLabel={language.userTypes} />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.userTypes || []}
          loader={state.loading}
          totalRows={Number(null)}
        />
      </Content>
    </Container>
  );
};

export default GetUserTypesContent;
