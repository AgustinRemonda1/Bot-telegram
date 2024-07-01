import { ILanguage } from 'Static/Lang/Lang.lang';
import { IOption } from 'LogicServices/Shared/Types';
import { ISurvey } from 'LogicServices/Surveys/Types';

interface IFirstStepProps {
  survey: ISurvey;
  userTypesOptions: IOption[];
  language: ILanguage;
}

export const generateFirstStepData = ({
  survey,
  language,
  userTypesOptions
}: IFirstStepProps) => [
  {
    title: language.name,
    value: survey.name
  },
  {
    title: language.userType,
    value: userTypesOptions.find(
      (userType) => userType.id === survey.userTypeId
    )?.name as string
  },
  {
    title: language.description,
    value: survey.description,
    correction: true
  },
  {
    title: language.numberOfQuestions,
    value: String(survey.questions.length),
    correction: true
  }
];

interface ISecondStepProps {
  survey: ISurvey;
  language: ILanguage;
}

export const generateSecondStepData = ({
  survey,
  language
}: ISecondStepProps) =>
  survey.questions.map((question) => ({
    title: language.question,
    value: question.question,
    correction: true
  }));
