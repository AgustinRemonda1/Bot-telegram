import CommandsSuggestions from 'components/Commands/CommandsSuggestions';
import PageGuard from 'components/HOC/PageGuard';

const BotCommandsSuggestionsPage = () => {
  return (
    <PageGuard>
      <CommandsSuggestions />
    </PageGuard>
  );
};

export default BotCommandsSuggestionsPage;
