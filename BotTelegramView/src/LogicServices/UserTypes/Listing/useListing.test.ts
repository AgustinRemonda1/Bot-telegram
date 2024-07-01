import { renderHook } from '@testing-library/react-hooks';
import useListing from './useListing';
import { userTypesDataMock } from 'Static/Data';

jest.mock('RepoServices/UserTypes', () => ({
  fetchUserTypes: () => ({ userTypes: userTypesDataMock })
}));

describe('useListingUserTypes', () => {
  it('show user types when hook load', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useListing());

    const expected = {
      userTypes: userTypesDataMock,
      loading: false
    };

    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });
});
