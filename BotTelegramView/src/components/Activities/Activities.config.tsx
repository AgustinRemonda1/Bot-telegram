import FeedbackIcon from '@mui/icons-material/Feedback';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ILanguage } from 'Static/Lang/Lang.lang';

interface IActivitiesButtons {
  language: ILanguage;
  onChangeRoute: (route: string) => void;
}

export const generateActivitiesButtons = ({
  language,
  onChangeRoute
}: IActivitiesButtons) => {
  return [
    {
      text: language.suggestionOfNewCommands,
      icon: <FeedbackIcon />,
      onClick: () =>
        onChangeRoute('/Dashboard/Activities/Bot-Commands-Suggestions')
    },
    {
      text: language.surveyResults,
      icon: <QueryStatsIcon />,
      onClick: () => onChangeRoute('/Dashboard/Activities/Poll-Results')
    },
    {
      text: language.backofficeUsers,
      icon: <PersonAddIcon />,
      onClick: () => onChangeRoute('/Dashboard/Activities/Backoffice-Users')
    }
  ];
};
