import { act, renderHook } from '@testing-library/react-hooks';
import useCreator from './useCreator';
import { surveyDataMock } from 'Static/Data';

const saveSurvey = jest.fn(() => 'created');

const INITIAL_PROPS_CREATOR = {
  surveyToEdit: null,
  onClose: jest.fn(),
  onRefresh: jest.fn()
};

const INITIAL_PROPS_EDITOR = {
  surveyToEdit: surveyDataMock[0],
  onClose: jest.fn(),
  onRefresh: jest.fn()
};

jest.mock('./service', () => ({ saveSurvey: () => saveSurvey() }));

describe('useCreator', () => {
  it('show creator mode when hook its initied without some survey', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_CREATOR));

    const expected = {
      survey: { name: '', description: '', userTypeId: 0, questions: [] },
      emptyFields: false,
      hasEmptyFields: false,
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show edition mode when hook its initied with some survey', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      survey: surveyDataMock[0],
      emptyFields: false,
      hasEmptyFields: false,
      questionsNumber: 3,
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show save in creator mode when use onSave', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const survey = {
      name: 'survey1',
      description: 'survey1',
      userTypeId: 1,
      questions: [
        ...surveyDataMock[0].questions.slice(0, 2),
        { surveyId: 0, question: 'question1', description: 'question1' }
      ]
    };

    act(() => result.current.actions.onChange(survey));
    act(() => result.current.actions.onSave());

    expect(saveSurvey).toBeCalled();
  });

  it('show errors in creator mode when use onSave without charge fields', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_CREATOR));

    const expected = {
      survey: { name: '', description: '', userTypeId: 0, questions: [] },
      emptyFields: true,
      hasEmptyFields: true,
      loading: false
    };
    act(() => result.current.actions.onSave());

    expect(result.current.state).toEqual(expected);
  });

  it('show change survey values in creator mode when use onChange', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      survey: {
        name: 'survey1',
        description: 'survey1',
        userTypeId: 1,
        questions: [
          ...surveyDataMock[0].questions.slice(0, 2),
          { surveyId: 0, question: 'question1', description: 'question1' }
        ]
      },
      emptyFields: false,
      hasEmptyFields: false,
      questionsNumber: 3,
      loading: false
    };
    act(() => result.current.actions.onChange(expected.survey));

    expect(result.current.state).toEqual(expected);
  });

  it('show save survey in editor mode when use onSave', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    act(() => result.current.actions.onSave());

    expect(saveSurvey).toBeCalled();
  });

  it('show errors in editor mode use onSave without charge field', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      survey: {
        ...surveyDataMock[0],
        name: '',
        questions: [
          ...surveyDataMock[0].questions.slice(0, 2),
          { surveyId: 0, question: '', description: '' }
        ]
      },
      emptyFields: true,
      hasEmptyFields: true,
      questionsNumber: 3,
      loading: false
    };

    act(() => result.current.actions.onChange(expected.survey));
    act(() => result.current.actions.onSave());

    expect(result.current.state).toEqual(expected);
  });

  it('show change survey values in editor mode when use onChange', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      survey: {
        ...surveyDataMock[0],
        name: 'survey2',
        questions: [
          ...surveyDataMock[0].questions.slice(0, 2),
          { surveyId: 0, question: 'question2', description: 'question2' }
        ]
      },
      emptyFields: false,
      hasEmptyFields: false,
      questionsNumber: 3,
      loading: false
    };

    act(() => result.current.actions.onChange(expected.survey));

    expect(result.current.state).toEqual(expected);
  });
});
