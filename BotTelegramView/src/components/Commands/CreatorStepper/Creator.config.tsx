import BallotIcon from '@mui/icons-material/Ballot';
import QuizIcon from '@mui/icons-material/Quiz';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { ILanguage } from 'Static/Lang/Lang.lang';

export const stepperIcons = {
  1: <BallotIcon />,
  2: <QuizIcon />,
  3: <DoneAllIcon />
};

export const maxSteps = 2;

export const generateStepsTitles = (language: ILanguage) => [
  language.createBaseCommand,
  language.createCommandTypeFeatures,
  language.finish
];
