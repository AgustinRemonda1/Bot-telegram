import { renderHook } from '@testing-library/react-hooks';
import useCreatorFlags from './useCreatorFlags';
import { commandsDataMock } from 'Static/Data';
import { ICommandCreator, IFlags } from './Types';

const INITIAL_PROPS = {
  ...commandsDataMock[0],
  botNestedCommands: []
} as ICommandCreator;

describe('useCreatorFlags', () => {
  it('isAFileCommand is truthy and the rest is falsy when command type id is 1', async () => {
    const { result } = renderHook(() =>
      useCreatorFlags({ command: { ...INITIAL_PROPS, commandTypeId: 1 } })
    );

    const expected: IFlags = {
      isAFileCommand: true,
      isANestedCommand: false,
      isAParameterCommand: false,
      isAButtonCommand: false
    };

    expect(result.current).toEqual(expected);
  });

  it('isAFileCommand is truthy and the rest is falsy when command type id is 11', async () => {
    const { result } = renderHook(() =>
      useCreatorFlags({ command: { ...INITIAL_PROPS, commandTypeId: 11 } })
    );

    const expected: IFlags = {
      isAFileCommand: true,
      isANestedCommand: false,
      isAParameterCommand: false,
      isAButtonCommand: false
    };

    expect(result.current).toEqual(expected);
  });

  it('isANestedCommand is truthy and the rest is falsy when command type id is 8', async () => {
    const { result } = renderHook(() =>
      useCreatorFlags({ command: { ...INITIAL_PROPS, commandTypeId: 8 } })
    );

    const expected: IFlags = {
      isAFileCommand: false,
      isANestedCommand: true,
      isAParameterCommand: false,
      isAButtonCommand: false
    };

    expect(result.current).toEqual(expected);
  });

  it('isANestedCommand is truthy and the rest is falsy when command type id is 9', async () => {
    const { result } = renderHook(() =>
      useCreatorFlags({ command: { ...INITIAL_PROPS, commandTypeId: 9 } })
    );

    const expected: IFlags = {
      isAFileCommand: false,
      isANestedCommand: true,
      isAParameterCommand: false,
      isAButtonCommand: false
    };

    expect(result.current).toEqual(expected);
  });

  it('isAParameterCommand and IsAButtonCommand is truthy and the rest is falsy when command type id is 3', async () => {
    const { result } = renderHook(() =>
      useCreatorFlags({ command: { ...INITIAL_PROPS, commandTypeId: 3 } })
    );

    const expected: IFlags = {
      isAFileCommand: false,
      isANestedCommand: false,
      isAParameterCommand: true,
      isAButtonCommand: true
    };

    expect(result.current).toEqual(expected);
  });

  it('isAParameterCommand is truthy and the rest is falsy when command type id is 2', async () => {
    const { result } = renderHook(() =>
      useCreatorFlags({ command: { ...INITIAL_PROPS, commandTypeId: 2 } })
    );

    const expected: IFlags = {
      isAFileCommand: false,
      isANestedCommand: false,
      isAParameterCommand: true,
      isAButtonCommand: false
    };

    expect(result.current).toEqual(expected);
  });
});
