import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { ILanguage } from 'Static/Lang/Lang.lang';

export const stepperIcons = {
  1: <DescriptionIcon />,
  2: <AssignmentIcon />,
  3: <DoneAllIcon />
};

export const maxSteps = 2;

export const generateStepsTitles = (language: ILanguage, editmode: boolean) => [
  editmode ? language.editSurvey : language.createNewSurvey,
  editmode ? language.editQuestions : language.createQuestionsForTheSurvey,
  language.finish
];
