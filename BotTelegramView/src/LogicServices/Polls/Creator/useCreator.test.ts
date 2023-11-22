import { act, renderHook } from '@testing-library/react-hooks';
import useCreator from './useCreator';
import { pollDataMock } from 'Static/Data';

const savePoll = jest.fn(() => 'created');

const INITIAL_PROPS_CREATOR = {
  pollToEdit: null,
  onClose: jest.fn(),
  onRefresh: jest.fn()
};

const INITIAL_PROPS_EDITOR = {
  pollToEdit: pollDataMock[0],
  onClose: jest.fn(),
  onRefresh: jest.fn()
};

jest.mock('./service', () => ({ savePoll: () => savePoll() }));

describe('useCreator', () => {
  it('show creator mode when hook its initied without some poll', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_CREATOR));

    const expected = {
      poll: { name: '', description: '', userTypeId: 0, questions: [] },
      emptyFields: false,
      hasEmptyFields: false,
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show edition mode when hook its initied with some poll', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      poll: pollDataMock[0],
      emptyFields: false,
      hasEmptyFields: false,
      questionsNumber: 3,
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show save in creator mode when use onSave', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const poll = {
      name: 'poll1',
      description: 'poll1',
      userTypeId: 1,
      questions: [
        ...pollDataMock[0].questions.slice(0, 2),
        { pollId: 0, question: 'question1', description: 'question1' }
      ]
    };

    act(() => result.current.actions.onChange(poll));
    act(() => result.current.actions.onSave());

    expect(savePoll).toBeCalled();
  });

  it('show errors in creator mode when use onSave without charge fields', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_CREATOR));

    const expected = {
      poll: { name: '', description: '', userTypeId: 0, questions: [] },
      emptyFields: true,
      hasEmptyFields: true,
      loading: false
    };
    act(() => result.current.actions.onSave());

    expect(result.current.state).toEqual(expected);
  });

  it('show change poll values in creator mode when use onChange', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      poll: {
        name: 'poll1',
        description: 'poll1',
        userTypeId: 1,
        questions: [
          ...pollDataMock[0].questions.slice(0, 2),
          { pollId: 0, question: 'question1', description: 'question1' }
        ]
      },
      emptyFields: false,
      hasEmptyFields: false,
      questionsNumber: 3,
      loading: false
    };
    act(() => result.current.actions.onChange(expected.poll));

    expect(result.current.state).toEqual(expected);
  });

  it('show save poll in editor mode when use onSave', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    act(() => result.current.actions.onSave());

    expect(savePoll).toBeCalled();
  });

  it('show errors in editor mode use onSave without charge field', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      poll: {
        ...pollDataMock[0],
        name: '',
        questions: [
          ...pollDataMock[0].questions.slice(0, 2),
          { pollId: 0, question: '', description: '' }
        ]
      },
      emptyFields: true,
      hasEmptyFields: true,
      questionsNumber: 3,
      loading: false
    };

    act(() => result.current.actions.onChange(expected.poll));
    act(() => result.current.actions.onSave());

    expect(result.current.state).toEqual(expected);
  });

  it('show change poll values in editor mode when use onChange', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      poll: {
        ...pollDataMock[0],
        name: 'poll2',
        questions: [
          ...pollDataMock[0].questions.slice(0, 2),
          { pollId: 0, question: 'question2', description: 'question2' }
        ]
      },
      emptyFields: false,
      hasEmptyFields: false,
      questionsNumber: 3,
      loading: false
    };

    act(() => result.current.actions.onChange(expected.poll));

    expect(result.current.state).toEqual(expected);
  });
});
