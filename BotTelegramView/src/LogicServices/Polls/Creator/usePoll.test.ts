import { act, renderHook } from '@testing-library/react-hooks';
import usePoll from './usePoll';
import { pollDataMock } from 'Static/Data';

const INITIAL_PROPS = {
  open: true,
  poll: pollDataMock[0],
  questionsNumber: 3,
  onChange: jest.fn()
};

describe('usePoll', () => {
  it('show initial question number when hook its initied with some poll', async () => {
    const { result } = renderHook(() => usePoll(INITIAL_PROPS));

    expect(result.current.state.questionNumber).toEqual(3);
  });

  it('show questions number changed when use onChangeQuestionNumber', async () => {
    const { result } = renderHook(() => usePoll(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeQuestionNumber({ target: { value: 4 } })
    );

    expect(result.current.state.questionNumber).toEqual(4);
  });

  it('onChange has called and received poll with new name when use onChangePollFields with value and field name', async () => {
    const { result } = renderHook(() => usePoll(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangePollFields({
        target: { value: 'encuesta', name: 'name' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({ ...INITIAL_PROPS.poll, name: 'encuesta' })
    );
  });

  it('onChange has called and received poll with new description when use onChangePollFields with value and field name', async () => {
    const { result } = renderHook(() => usePoll(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangePollFields({
        target: { value: 'new description', name: 'description' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.poll,
        description: 'new description'
      })
    );
  });

  it('onChange has called and received poll with new user type when use onChangePollFields with value and field name', async () => {
    const { result } = renderHook(() => usePoll(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangePollFields({
        target: { value: '2', name: 'userType' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.poll,
        userTypeId: 2
      })
    );
  });

  it('onChange has called and received poll with question changed when use onChangeQuestions with value and question position', async () => {
    const { result } = renderHook(() => usePoll(INITIAL_PROPS));

    act(() =>
      result.current.actions.onChangeQuestions(
        {
          target: { value: 'pregunta' }
        },
        0
      )
    );

    const expected = {
      ...INITIAL_PROPS.poll,
      questions: [
        {
          pollId: 1,
          question: 'pregunta',
          description: 'el alumno debera elegir entre las franja horarias dadas'
        },
        ...INITIAL_PROPS.poll.questions.slice(1, INITIAL_PROPS.questionsNumber)
      ]
    };

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining(expected)
    );
  });
});
