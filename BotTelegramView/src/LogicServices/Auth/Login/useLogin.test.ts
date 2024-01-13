import { act, renderHook } from '@testing-library/react-hooks';
import useLogin from './useLogin';

interface ILogin {
  username: string;
  password: string;
}

const loginRequest = jest.fn(async (login: ILogin) => ({
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWNrX3VzZXJfaWQiOjEsInVzZXJSb2xlSWQiOjEsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6ImVtYWlsIiwiaW1hZ2UiOiJodHRwczovL2NvbmNlcHRvLmRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL3ByZWhpc3RvcmlhMi1lMTUzOTAyNTc5ODk1NC5qcGcifQ.r40QGQ1ZpmNvf7Ibok6sC9q-JTT7uJcYNnjeDA2PLEw'
}));

jest.mock('RepoServices/Auth/Login', () => ({
  loginRequest: (login: ILogin) => loginRequest(login)
}));

jest.mock('Static/Utils/Cookies.utils', () => ({
  getCookieValue: jest.fn(),
  setCookieValue: jest.fn()
}));

jest.mock('next/router', () => ({
  useRouter: () => ({ replace: (route: string) => {} })
}));

describe('useLogin', () => {
  it('show initial state when useLogin is initied', async () => {
    const { result } = renderHook(() => useLogin());

    const expected = {
      username: '',
      password: '',
      error: '',
      loading: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show user in username field when username is changed with onChange', async () => {
    const { result } = renderHook(() => useLogin());

    const expected = {
      username: 'user',
      password: '',
      error: '',
      loading: false
    };

    act(() =>
      result.current.actions.onChange({
        target: { name: 'username', value: 'user' }
      })
    );

    expect(result.current.state).toEqual(expected);
  });

  it('show password in password field when password is changed with onChange', async () => {
    const { result } = renderHook(() => useLogin());

    const expected = {
      username: '',
      password: 'password',
      error: '',
      loading: false
    };

    act(() =>
      result.current.actions.onChange({
        target: { name: 'password', value: 'password' }
      })
    );
    expect(result.current.state).toEqual(expected);
  });

  it('show password and user in his respectives fields when are changed with onChange', async () => {
    const { result } = renderHook(() => useLogin());

    const expected = {
      username: 'user',
      password: 'password',
      error: '',
      loading: false
    };

    act(() =>
      result.current.actions.onChange({
        target: { name: 'username', value: 'user' }
      })
    );

    act(() =>
      result.current.actions.onChange({
        target: { name: 'password', value: 'password' }
      })
    );
    expect(result.current.state).toEqual(expected);
  });

  it('show 0 called times in loginRequest if his called without username and password when key enter is pressed', async () => {
    const { result } = renderHook(() => useLogin());

    await act(async () => result.current.actions.onEnter({ key: 'Enter' }));

    expect(result.current.state.username).toBe('');
    expect(result.current.state.password).toBe('');
    expect(loginRequest).toHaveBeenCalledTimes(0);
  });

  it('show 0 called times in loginRequest when his called without username and password', async () => {
    const { result } = renderHook(() => useLogin());

    await act(async () => result.current.actions.onLogin());

    expect(loginRequest).toHaveBeenCalledTimes(0);
  });

  it('show loginRequest is called with user and password when onLogin is used', async () => {
    const { result } = renderHook(() => useLogin());

    const expected = {
      username: 'user',
      password: 'password'
    };

    act(() =>
      result.current.actions.onChange({
        target: { name: 'username', value: 'user' }
      })
    );

    act(() =>
      result.current.actions.onChange({
        target: { name: 'password', value: 'password' }
      })
    );

    await act(async () => result.current.actions.onLogin());

    expect(loginRequest).toBeCalled();
    expect(loginRequest).toBeCalledWith(expect.objectContaining(expected));
  });
});
