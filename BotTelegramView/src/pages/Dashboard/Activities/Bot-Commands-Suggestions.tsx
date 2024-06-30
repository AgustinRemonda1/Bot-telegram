import SuggestionCommands from 'components/Commands/SuggestionCommands';
import PageGuard from 'components/HOC/PageGuard';

const BotCommandsSuggestionsPage = () => {
  return (
    <PageGuard>
      <SuggestionCommands />
    </PageGuard>
  );
};

export default BotCommandsSuggestionsPage;
