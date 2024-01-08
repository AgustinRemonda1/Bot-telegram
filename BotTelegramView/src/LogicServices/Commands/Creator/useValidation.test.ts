import { renderHook } from '@testing-library/react-hooks';
import useValidation from './useValidation';
import { commandsDataMock } from 'Static/Data';
import { ICommandCreator, IFlags } from './Types';
import { ICommand } from '../Types';

const INITIAL_PROPS = {
  command: {
    ...commandsDataMock[0],
    description: 'description',
    botNestedCommands: []
  } as ICommandCreator,
  flags: {
    isAFileCommand: false,
    isANestedCommand: false,
    isAParameterCommand: false,
    isAButtonCommand: false
  } as IFlags
};

describe('useValidation', () => {
  it('has every fields', async () => {
    const { result } = renderHook(() => useValidation(INITIAL_PROPS));

    expect(result.current.emptyFields).toBeFalsy();
  });

  it('missing name field', async () => {
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        command: { ...INITIAL_PROPS.command, name: '' }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing description field', async () => {
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        command: { ...INITIAL_PROPS.command, description: '' }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing telCommand field', async () => {
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        command: { ...INITIAL_PROPS.command, telCommand: '' }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing commandTypeId field', async () => {
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        command: { ...INITIAL_PROPS.command, commandTypeId: 0 }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing userTypeId field', async () => {
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        command: { ...INITIAL_PROPS.command, userTypeId: 0 }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing response field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        command: {
          ...command,
          botResponses: { ...command.botResponses, response: '' }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('has every fields and param field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true },
        command: {
          ...command,
          botResponses: { ...command.botResponses, parameter: 'params' }
        }
      })
    );

    expect(result.current.emptyFields).toBeFalsy();
  });

  it('has every fields and missing param field', async () => {
    const { result } = renderHook(() =>
      useValidation({
        ...INITIAL_PROPS,
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing fields and has param field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true },
        command: {
          ...command,
          name: '',
          description: '',
          botResponses: {
            ...command.botResponses,
            response: '',
            parameter: 'params'
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing fields and has param field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true },
        command: {
          ...command,
          name: '',
          description: '',
          botResponses: {
            ...command.botResponses,
            response: '',
            parameter: 'params'
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing fields and missing param field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true },
        command: {
          ...command,
          name: '',
          description: '',
          botResponses: {
            ...command.botResponses,
            response: '',
            parameter: ''
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('has every fields and file params fields', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAFileCommand: true },
        command: {
          ...command,
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              filename: 'name',
              url: 'url'
            }
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeFalsy();
  });

  it('has every fields and missing filename field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAFileCommand: true },
        command: {
          ...command,
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              filename: '',
              url: 'url'
            }
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('has every fields and missing url field', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAFileCommand: true },
        command: {
          ...command,
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              filename: 'filename',
              url: ''
            }
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing fields and has file params fields', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true },
        command: {
          ...command,
          name: '',
          description: '',
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              filename: 'name',
              url: 'url'
            }
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing fields and missing file params fields', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isAParameterCommand: true },
        command: {
          ...command,
          name: '',
          description: '',
          botResponses: {
            ...command.botResponses,
            botResponseFiles: {
              ...command.botResponses.botResponseFiles,
              filename: '',
              url: ''
            }
          }
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('has every fields and nested commands', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isANestedCommand: true },
        command: {
          ...command,
          botNestedCommands: [
            { botFatherId: 1, botChildId: 1, botCommand: command as ICommand }
          ]
        }
      })
    );

    expect(result.current.emptyFields).toBeFalsy();
  });

  it('has every fields and missing nested commands', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isANestedCommand: true },
        command: {
          ...command,
          botNestedCommands: []
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });

  it('missing fields and missing nested commands', async () => {
    const command = INITIAL_PROPS.command;
    const { result } = renderHook(() =>
      useValidation({
        flags: { ...INITIAL_PROPS.flags, isANestedCommand: true },
        command: {
          ...command,
          name: '',
          description: '',
          userTypeId: 0,
          botNestedCommands: []
        }
      })
    );

    expect(result.current.emptyFields).toBeTruthy();
  });
});
