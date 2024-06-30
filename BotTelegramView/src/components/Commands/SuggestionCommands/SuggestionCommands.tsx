import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { Container, Content } from 'components/Layout/Content';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useSuggestionCommands from 'LogicServices/Commands/SuggestionCommands/useSuggestionCommands';
import useViewSuggestionDetails from 'LogicServices/Commands/SuggestionCommands/useViewSuggestionDetails';
import { generateConfigWithLang } from './SuggestionCommands.config';
import ViewModal from './ViewModal';

const SuggestionCommands = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useSuggestionCommands();
  const suggestionView = useViewSuggestionDetails();
  const config = generateConfigWithLang({
    language,
    onOpenSuggestionView: suggestionView.actions.onOpenSuggestionView
  });

  return (
    <Container>
      <Content>
        <SectionTitle titleLabel={language.suggestionOfNewCommands} />
        <Table
          config={config || []}
          dataset={state.commandsSuggestions || []}
          loader={state.pagination.loading}
          totalRows={state.pagination.total}
          onChangePage={actions.onChangePage}
        />
      </Content>
      <ViewModal
        props={{
          language,
          open: suggestionView.state.open,
          title: language.commandSuggestion,
          commandSuggestion: suggestionView.state.commandSuggestion
        }}
        actions={{
          onClose: suggestionView.actions.onCloseSuggestionView,
          onCreate: actions.onCreateCommand
        }}
      />
    </Container>
  );
};

export default SuggestionCommands;
