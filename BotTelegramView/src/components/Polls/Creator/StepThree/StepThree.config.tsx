import { ILanguage } from 'Static/Lang/Lang.lang';
import { IOption } from 'LogicServices/Shared/Types';
import { IPoll } from 'LogicServices/Polls/Types';

interface IFirstStepProps {
  poll: IPoll;
  userTypesOptions: IOption[];
  language: ILanguage;
}

export const generateFirstStepData = ({
  poll,
  language,
  userTypesOptions
}: IFirstStepProps) => [
  {
    title: language.name,
    value: poll.name
  },
  {
    title: language.userType,
    value: userTypesOptions.find((userType) => userType.id === poll.userTypeId)
      ?.name as string
  },
  {
    title: language.description,
    value: poll.description,
    correction: true
  },
  {
    title: language.numberOfQuestions,
    value: String(poll.questions.length),
    correction: true
  }
];

interface ISecondStepProps {
  poll: IPoll;
  language: ILanguage;
}

export const generateSecondStepData = ({ poll, language }: ISecondStepProps) =>
  poll.questions.map((question) => ({
    title: language.question,
    value: question.question,
    correction: true
  }));
