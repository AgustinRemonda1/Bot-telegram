import { renderHook, act } from '@testing-library/react-hooks';
import useCreatorModal from './useCreatorModal';
import { pollDataMock } from 'Static/Data';

describe('useCreatorModal', () => {
  it('show pop up closed and poll has null when hook its initied', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      poll: null,
      open: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show creator mode when use onOpen without some poll', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      poll: null,
      open: true
    };

    act(() => result.current.actions.onOpen());

    expect(result.current.state).toEqual(expected);
  });

  it('show creator mode closed when use onClose', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      poll: null,
      open: false
    };

    act(() => result.current.actions.onOpen());

    act(() => result.current.actions.onClose());

    expect(result.current.state).toEqual(expected);
  });

  it('show editor mode when use onOpen with some poll', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      poll: pollDataMock[0],
      open: true
    };

    act(() => result.current.actions.onOpen(expected.poll));

    expect(result.current.state).toEqual(expected);
  });

  it('show editor mode closed when use onClose', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      poll: null,
      open: false
    };

    act(() => result.current.actions.onOpen(pollDataMock[0]));

    act(() => result.current.actions.onClose());

    expect(result.current.state).toEqual(expected);
  });
});
