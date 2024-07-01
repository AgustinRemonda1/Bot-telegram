import { act, renderHook } from '@testing-library/react-hooks';
import useAuth from './useAuth';

const onSignOut = jest.fn();

const replace = jest.fn((route: string) => {});

jest.mock('./AuthContext', () => ({
  useAuthContext: () => ({ token: '', loading: false, actions: { onSignOut } })
}));

jest.mock('next/router', () => ({
  useRouter: () => ({ replace })
}));

describe('useAuth', () => {
  it('show initial state when useAuth is initied', async () => {
    const { result } = renderHook(() => useAuth());

    const expected = {
      user: undefined,
      auth: false,
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show onSignOut is called and replace is called with "/Auth/Login" route when onSignOut is used', async () => {
    const { result } = renderHook(() => useAuth());

    act(() => result.current.action.onSignOut());

    expect(onSignOut).toBeCalled();
    expect(replace).toBeCalled();
    expect(replace).toBeCalledWith('/Auth/Login');
  });
});
