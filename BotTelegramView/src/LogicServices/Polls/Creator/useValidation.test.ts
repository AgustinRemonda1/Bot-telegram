import { renderHook } from '@testing-library/react-hooks';
import useValidation from './useValidation';
import { pollDataMock } from 'Static/Data';

describe('useValidation', () => {
  it('has every fields', async () => {
    const { result } = renderHook(() =>
      useValidation({ poll: pollDataMock[0] })
    );

    expect(result.current.emptyFields).toBeFalsy();
  });

  it('missing name field', async () => {
    const { result } = renderHook(() =>
      useValidation({ poll: { ...pollDataMock[0], name: '' } })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing description field', async () => {
    const { result } = renderHook(() =>
      useValidation({ poll: { ...pollDataMock[0], description: '' } })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing userTypeId field', async () => {
    const { result } = renderHook(() =>
      useValidation({ poll: { ...pollDataMock[0], userTypeId: 0 } })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing question', async () => {
    const { result } = renderHook(() =>
      useValidation({
        poll: {
          ...pollDataMock[0],
          questions: [
            ...pollDataMock[0].questions,
            { pollId: 0, question: '', description: '' }
          ]
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });
});
