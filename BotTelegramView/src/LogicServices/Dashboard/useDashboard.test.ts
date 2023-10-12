import { act, renderHook } from '@testing-library/react-hooks';
import useDashboard from './useDashboard';
import { pollDataMock, commandsDataMock } from 'Static/Data';

const STATISTICS = {
  totalCommands: 20,
  totalSubscribers: 50,
  newLastAdmission: 12,
  totalPolls: 10
};

const refreshCommand = jest.fn();

jest.mock('RepoServices/Polls', () => ({
  fetchPolls: () => ({ polls: pollDataMock.slice(0, 3), total: 10 })
}));

jest.mock('RepoServices/Commands', () => ({
  fetchCommands: () => ({ commands: commandsDataMock.slice(0, 3), total: 10 }),
  refreshCommand: () => refreshCommand()
}));

jest.mock('RepoServices/Statistics', () => ({
  fetchStatistics: () => STATISTICS
}));

describe('useDashboard', () => {
  it('show polls, commands and statistics when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDashboard());

    const expected = {
      polls: pollDataMock.slice(0, 3),
      commands: commandsDataMock.slice(0, 3),
      statistics: STATISTICS,
      loading: false
    };

    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });

  it('refresh commands when use onRefreshCommands', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDashboard());

    await waitForNextUpdate();

    await act(() => result.current.actions.onRefreshCommands());

    expect(refreshCommand).toBeCalled();
  });
});
