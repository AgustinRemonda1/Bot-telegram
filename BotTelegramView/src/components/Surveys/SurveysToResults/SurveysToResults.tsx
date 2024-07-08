import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { generateConfigWithLang } from './SurveysToResults.config';
import SectionTitle from 'components/Shared/SectionTitle';
import { Container, Content } from 'components/Layout/Content';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useSurveysToResults from 'LogicServices/Surveys/SurveysToResults';

const SurveysToResults = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useSurveysToResults();
  const configParams = {
    language,
    onViewSurveyResult: actions.onViewSurveyResult
  };

  return (
    <Container>
      <Content>
        <SectionTitle titleLabel={language.viewSurveysResults} />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.surveys || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
        />
      </Content>
    </Container>
  );
};

export default SurveysToResults;
