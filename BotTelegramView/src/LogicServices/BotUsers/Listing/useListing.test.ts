import { renderHook } from '@testing-library/react-hooks';
import useListing from './useListing';
import { botUsersDataMock } from 'Static/Data';

jest.mock('RepoServices/BotUser', () => ({
  fetchBotUsers: () => ({ botUsers: botUsersDataMock, total: 10 })
}));

describe('useListingBotUsers', () => {
  it('show bot users when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useListing());

    const expected = {
      botUsers: botUsersDataMock,
      pagination: {
        total: 10,
        loading: false,
        page: 0,
        pageSize: 10
      }
    };

    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });
});
