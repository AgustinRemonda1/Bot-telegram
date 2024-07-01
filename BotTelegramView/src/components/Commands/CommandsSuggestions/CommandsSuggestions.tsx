import React, { useContext } from 'react';
import Table from 'components/Shared/Table';
import { Container, Content } from 'components/Layout/Content';
import SectionTitle from 'components/Shared/SectionTitle';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useCommandsSuggestions from 'LogicServices/Commands/CommandsSuggestions/useCommandsSuggestions';
import useViewSuggestionDetails from 'LogicServices/Commands/CommandsSuggestions/useViewSuggestionDetails';
import { generateConfigWithLang } from './CommandsSuggestions.config';
import ViewModal from './ViewModal';

const CommandsSuggestions = () => {
  const { language } = useContext(LanguageContext);
  const { state, actions } = useCommandsSuggestions();
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

export default CommandsSuggestions;
