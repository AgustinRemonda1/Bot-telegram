import { renderHook, act } from '@testing-library/react-hooks';
import useCreatorModal from './useCreatorModal';
import { commandsDataMock } from 'Static/Data';

describe('useCreatorModal', () => {
  it('show pop up closed and command has null when hook its initied', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      command: null,
      open: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show creator mode when use onOpen without some command', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      command: null,
      open: true
    };

    act(() => result.current.actions.onOpen());

    expect(result.current.state).toEqual(expected);
  });

  it('show creator mode closed when use onClose', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      command: null,
      open: false
    };

    act(() => result.current.actions.onOpen());

    act(() => result.current.actions.onClose());

    expect(result.current.state).toEqual(expected);
  });

  it('show editor mode when use onOpen with some command', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      command: commandsDataMock[0],
      open: true
    };

    act(() => result.current.actions.onOpen(expected.command));

    expect(result.current.state).toEqual(expected);
  });

  it('show editor mode closed when use onClose', () => {
    const { result } = renderHook(() => useCreatorModal());

    const expected = {
      command: null,
      open: false
    };

    act(() => result.current.actions.onOpen(commandsDataMock[0]));

    act(() => result.current.actions.onClose());

    expect(result.current.state).toEqual(expected);
  });
});
