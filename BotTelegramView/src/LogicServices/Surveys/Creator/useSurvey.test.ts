import { act, renderHook } from '@testing-library/react-hooks';
import useSurvey from './useSurvey';
import { surveyDataMock } from 'Static/Data';

const INITIAL_PROPS = {
  open: true,
  survey: surveyDataMock[0],
  questionsNumber: 3,
  onChange: jest.fn()
};

describe('useSurvey', () => {
  it('show initial question number when hook its initied with some survey', async () => {
    const { result } = renderHook(() => useSurvey(INITIAL_PROPS));

    expect(result.current.state.questionNumber).toEqual(3);
  });

  it('show questions number changed when use onChangeQuestionNumber', async () => {
    const { result } = renderHook(() => useSurvey(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeQuestionNumber({
        target: { value: '4', name: '' }
      })
    );

    expect(result.current.state.questionNumber).toEqual(4);
  });

  it('onChange has called and received survey with new name when use onChangeSurveyFields with value and field name', async () => {
    const { result } = renderHook(() => useSurvey(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeSurveyFields({
        target: { value: 'encuesta', name: 'name' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({ ...INITIAL_PROPS.survey, name: 'encuesta' })
    );
  });

  it('onChange has called and received survey with new description when use onChangeSurveyFields with value and field name', async () => {
    const { result } = renderHook(() => useSurvey(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeSurveyFields({
        target: { value: 'new description', name: 'description' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.survey,
        description: 'new description'
      })
    );
  });

  it('onChange has called and received survey with new user type when use onChangeSurveyFields with value and field name', async () => {
    const { result } = renderHook(() => useSurvey(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeSurveyFields({
        target: { value: '2', name: 'userType' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.survey,
        userTypeId: 2
      })
    );
  });

  it('onChange has called and received survey with question changed when use onChangeQuestions with value and question position', async () => {
    const { result } = renderHook(() => useSurvey(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeQuestions(
        {
          target: { value: 'pregunta', name: '' }
        },
        0
      )
    );

    const expected = {
      ...INITIAL_PROPS.survey,
      questions: [
        {
          surveyId: 1,
          question: 'pregunta',
          description: 'el alumno debera elegir entre las franja horarias dadas'
        },
        ...INITIAL_PROPS.survey.questions.slice(
          1,
          INITIAL_PROPS.questionsNumber
        )
      ]
    };

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining(expected)
    );
  });
});
