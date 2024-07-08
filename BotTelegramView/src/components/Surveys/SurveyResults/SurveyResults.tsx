import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { generateConfigWithLang } from './SurveysToResults.config';
import SectionTitle from 'components/Shared/SectionTitle';
import { Container, Content } from 'components/Layout/Content';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useSurveyResults, {
  useViewResponsesResults
} from 'LogicServices/Surveys/SurveyResults';
import ViewModal from './ViewModal';

const SurveyResults = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useSurveyResults();
  const viewResponsesResult = useViewResponsesResults();
  const configParams = {
    language,
    onOpenResponsesView: viewResponsesResult.actions.onOpenResponsesView
  };

  return (
    <Container>
      <Content>
        <SectionTitle
          sectionLabel={language.resultFrom}
          titleLabel={(state.survey && state.survey.name) || ''}
        />
        <Table
          config={generateConfigWithLang(configParams) || []}
          dataset={state.results || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
        />
      </Content>
      <ViewModal
        props={{
          language,
          open: viewResponsesResult.state.open,
          title: language.responsesFromSurvey,
          survey: state.survey,
          responses: viewResponsesResult.state.responses
        }}
        actions={{
          onClose: viewResponsesResult.actions.onCloseSuggestionView
        }}
      />
    </Container>
  );
};

export default SurveyResults;
