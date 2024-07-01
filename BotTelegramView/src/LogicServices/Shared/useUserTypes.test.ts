import { renderHook } from '@testing-library/react-hooks';
import useUserTypes from './useUserTypes';
import { userTypesDataMock } from 'Static/Data';

jest.mock('RepoServices/UserTypes', () => ({
  fetchUserTypes: () => ({ userTypes: userTypesDataMock })
}));

describe('useUserTypes', () => {
  it('show user types formatted when hook initied', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserTypes());

    const expected = {
      loading: false,
      userTypesOptions: [
        { id: 1, name: 'Estudiante' },
        { id: 2, name: 'Profesor' },
        { id: 3, name: 'Comunidad' }
      ]
    };
    await waitForNextUpdate();

    expect(result.current.state).toEqual(expected);
  });
});
