import { act, renderHook } from '@testing-library/react-hooks';
import useCreator, { INITIAL_COMMAND } from './useCreator';
import { commandsDataMock } from 'Static/Data';
import { ICommandCreator } from './Types';

const saveCommand = jest.fn((command: ICommandCreator) => 'created');

const INITIAL_PROPS_CREATOR = {
  commandToEdit: null,
  onClose: jest.fn(),
  onRefresh: jest.fn()
};

const INITIAL_PROPS_EDITOR = {
  commandToEdit: {
    ...commandsDataMock[4],
    botNestedCommands: []
  } as ICommandCreator,
  onClose: jest.fn(),
  onRefresh: jest.fn()
};

jest.mock('./service', () => ({
  saveCommand: (command: ICommandCreator) => saveCommand(command)
}));

describe('useCreator', () => {
  it('show creator mode when hook its initied without some command', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_CREATOR));

    const expected = {
      command: INITIAL_COMMAND,
      emptyFields: false,
      hasEmptyFields: false,
      loading: false,
      flags: {
        isAFileCommand: false,
        isANestedCommand: false,
        isAParameterCommand: false,
        isAButtonCommand: false,
        editMode: false
      }
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show edition mode when hook its initied with some command', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      command: {
        ...commandsDataMock[4],
        description: commandsDataMock[4].botResponses.description,
        botNestedCommands: []
      },
      emptyFields: false,
      hasEmptyFields: false,
      loading: false,
      flags: {
        isAFileCommand: false,
        isANestedCommand: false,
        isAParameterCommand: false,
        isAButtonCommand: false,
        editMode: true
      }
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show save in creator mode when use onSave', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const command = {
      ...commandsDataMock[4],
      description: commandsDataMock[4].botResponses.description,
      botNestedCommands: []
    };

    act(() => result.current.actions.onChange(command));
    act(() => result.current.actions.onSave());

    expect(saveCommand).toBeCalled();
    expect(saveCommand).toBeCalledWith(expect.objectContaining(command));
  });

  it('show errors in creator mode when use onSave without charge fields', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCreator(INITIAL_PROPS_CREATOR)
    );

    const expected = {
      command: INITIAL_COMMAND,
      emptyFields: true,
      hasEmptyFields: true,
      loading: false,
      flags: {
        isAFileCommand: false,
        isANestedCommand: false,
        isAParameterCommand: false,
        isAButtonCommand: false,
        editMode: false
      }
    };

    act(() => result.current.actions.onSave());

    expect(result.current.state).toEqual(expected);
  });

  it('show change command values in creator mode when use onChange', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      command: {
        ...commandsDataMock[4],
        description: commandsDataMock[4].botResponses.description,
        botNestedCommands: []
      },
      emptyFields: false,
      hasEmptyFields: false,
      loading: false,
      flags: {
        isAFileCommand: false,
        isANestedCommand: false,
        isAParameterCommand: false,
        isAButtonCommand: false,
        editMode: true
      }
    };
    act(() => result.current.actions.onChange(expected.command));

    expect(result.current.state).toEqual(expected);
  });

  it('show save command in editor mode when use onSave', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    act(() => result.current.actions.onSave());

    expect(saveCommand).toBeCalled();
  });

  it('show errors in editor mode use onSave without charge field', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      command: {
        ...commandsDataMock[0],
        name: '',
        description: '',
        botNestedCommands: []
      } as ICommandCreator,
      emptyFields: true,
      hasEmptyFields: true,
      loading: false,
      flags: {
        isAFileCommand: false,
        isANestedCommand: false,
        isAParameterCommand: false,
        isAButtonCommand: false,
        editMode: true
      }
    };

    act(() => result.current.actions.onChange(expected.command));
    act(() => result.current.actions.onSave());

    expect(result.current.state).toEqual(expected);
    expect(saveCommand).toBeCalled();
  });

  it('show change command values in editor mode when use onChange', async () => {
    const { result } = renderHook(() => useCreator(INITIAL_PROPS_EDITOR));

    const expected = {
      command: {
        ...commandsDataMock[0],
        name: '',
        description: '',
        botNestedCommands: []
      } as ICommandCreator,
      emptyFields: false,
      hasEmptyFields: false,
      loading: false,
      flags: {
        isAFileCommand: false,
        isANestedCommand: false,
        isAParameterCommand: false,
        isAButtonCommand: false,
        editMode: true
      }
    };

    act(() => result.current.actions.onChange(expected.command));

    expect(result.current.state).toEqual(expected);
  });
});
