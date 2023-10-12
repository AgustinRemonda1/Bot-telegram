import { renderHook } from '@testing-library/react-hooks';
import useListing from './useListing';
import { pollDataMock } from 'Static/Data';

jest.mock('RepoServices/Polls', () => ({
  fetchPolls: () => ({ polls: pollDataMock, total: 10 })
}));

describe('useListingPoll', () => {
  it('show polls when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useListing());

    const expected = {
      polls: pollDataMock,
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
