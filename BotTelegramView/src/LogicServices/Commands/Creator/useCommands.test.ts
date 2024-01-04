import { act, renderHook } from '@testing-library/react-hooks';
import useCommands from './useCommands';
import { commandsDataMock } from 'Static/Data';

const INITIAL_PROPS = {
  command: { ...commandsDataMock[0], botNestedCommands: [] },
  onChange: jest.fn()
};

describe('useCommands', () => {
  it('onChange has called and received command with new name when use onChangeAttributes with value and field name', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: 'command', name: 'name' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({ ...INITIAL_PROPS.command, name: 'command' })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field telCommand', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: '/command', name: 'telCommand' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        telCommand: '/command'
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field description', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: 'a description', name: 'description' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        description: 'a description'
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field userTypeId', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: '1', name: 'userTypeId' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        userTypeId: 1
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field commandTypeId', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: '2', name: 'commandTypeId' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        commandTypeId: 2
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field response', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: 'a response', name: 'response' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        botResponses: {
          ...INITIAL_PROPS.command.botResponses,
          response: 'a response'
        }
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field filename', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: 'a filename', name: 'filename' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        botResponses: {
          ...INITIAL_PROPS.command.botResponses,
          botResponseFiles: {
            ...INITIAL_PROPS.command.botResponses.botResponseFiles,
            filename: 'a filename'
          }
        }
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field url', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: 'a url', name: 'url' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        botResponses: {
          ...INITIAL_PROPS.command.botResponses,
          botResponseFiles: {
            ...INITIAL_PROPS.command.botResponses.botResponseFiles,
            url: 'a url'
          }
        }
      })
    );
  });

  it('onChange has called and received command with new name when use onChangeAttributes with value and field parameter', async () => {
    const { result } = renderHook(() => useCommands(INITIAL_PROPS));

    act(() =>
      result.current.onChangeAttributes({
        target: { value: 'a parameter', name: 'parameter' }
      })
    );

    expect(INITIAL_PROPS.onChange).toBeCalled();
    expect(INITIAL_PROPS.onChange).toBeCalledWith(
      expect.objectContaining({
        ...INITIAL_PROPS.command,
        botResponses: {
          ...INITIAL_PROPS.command.botResponses,
          parameter: 'a parameter'
        }
      })
    );
  });
});
