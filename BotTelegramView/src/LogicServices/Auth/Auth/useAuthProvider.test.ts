import { act, renderHook } from '@testing-library/react-hooks';
import useAuthProvider from './useAuthProvider';

const setCookieValue = jest.fn();

jest.mock('Static/Utils/Cookies.utils', () => ({
  getCookieValue: jest.fn(),
  setCookieValue: () => setCookieValue()
}));

describe('useAuthProvider', () => {
  it('show initial state when useAuthProvider is initied', async () => {
    const { result } = renderHook(() => useAuthProvider());

    const expected = {
      user: null,
      token: '',
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show user and token when onLogin is used with user and token', async () => {
    const { result } = renderHook(() => useAuthProvider());

    const expected = {
      user: {
        backUserId: 1,
        userRoleId: 1,
        username: 'an username',
        firstName: 'a first name',
        lastName: 'a lastname',
        email: 'an email',
        image: 'an image'
      },
      token: 'asdasdasdasdasdasdasdasd',
      loading: false
    };

    act(() =>
      result.current.actions.onLogin({
        user: expected.user,
        token: expected.token
      })
    );

    expect(result.current.state).toEqual(expected);
  });

  it('show setCookieValue is called 2 times and user and token in his initial state when onSignOut is used', async () => {
    const { result } = renderHook(() => useAuthProvider());

    const login = {
      user: {
        backUserId: 1,
        userRoleId: 1,
        username: 'an username',
        firstName: 'a first name',
        lastName: 'a lastname',
        email: 'an email',
        image: 'an image'
      },
      token: 'asdasdasdasdasdasdasdasd'
    };

    const expected = {
      user: null,
      token: '',
      loading: false
    };

    act(() => result.current.actions.onLogin(login));

    act(() => result.current.actions.onSignOut());

    expect(result.current.state).toEqual(expected);
    expect(setCookieValue).toBeCalledTimes(2);
  });
});
