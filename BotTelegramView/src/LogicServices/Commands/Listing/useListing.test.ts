import { renderHook } from '@testing-library/react-hooks';
import useListing from './useListing';
import { commandsDataMock } from 'Static/Data';

jest.mock('RepoServices/Commands', () => ({
  fetchCommands: () => ({ commands: commandsDataMock, total: 10 })
}));

describe('useListingCommands', () => {
  it('show commands when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useListing());

    const expected = {
      commands: commandsDataMock,
      pagination: {
        total: 10,
        loading: false,
        refresh: false,
        page: 0,
        pageSize: 10
      }
    };

    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });
});
