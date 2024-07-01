import { renderHook } from '@testing-library/react-hooks';
import useCommandTypes from './useCommandTypes';
import { commandTypesDataMock } from 'Static/Data';

jest.mock('RepoServices/CommandTypes', () => ({
  fetchCommandTypes: () => ({ commandTypes: commandTypesDataMock, total: 10 })
}));

describe('useCommandTypes', () => {
  it('show commands types when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCommandTypes());

    const expected = {
      commandTypesOptions: commandTypesDataMock.map((commandType) => ({
        id: commandType.commandTypeId || 0,
        name: commandType.name || ''
      })),
      loading: false
    };

    expect(result.current.state).toEqual({
      loading: true,
      commandTypesOptions: []
    });
    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });
});
