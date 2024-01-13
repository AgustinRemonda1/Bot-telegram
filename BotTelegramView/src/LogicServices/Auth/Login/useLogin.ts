import { useState, useEffect, useCallback } from 'react';
import { inputNames } from 'components/Auth/Login/Login.config';
import { useRouter } from 'next/router';
import { loginRequest } from 'RepoServices/Auth/Login';
import { getCookieValue, setCookieValue } from 'Static/Utils/Cookies.utils';
import { useAuthContext } from '../Auth';
import { IEvent } from 'LogicServices/Shared/Types';
import { getUser } from './utils';

interface iLoginResponse {
  token: string;
}

interface IKeyEvent {
  key: string;
}

const useLogin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const { actions } = useAuthContext();

  useEffect(() => {
    const auth = getCookieValue('user') && getCookieValue('token');

    auth ? router.replace('/Dashboard') : router.replace('/Auth/Login');
  }, []);

  const onChange = useCallback((event: IEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === inputNames.username) {
      setUsername(value);
    } else if (name === inputNames.password) {
      setPassword(value);
    }
  }, []);

  const login = useCallback(
    (res: iLoginResponse) => {
      const user = getUser(res.token);
      const userStringify = JSON.stringify(user);
      setCookieValue('user', userStringify);
      setCookieValue('token', res.token);

      actions && actions.onLogin({ ...res, user });
      setLoading(false);
      router.replace('/Dashboard');
    },
    [actions]
  );

  const onLogin = useCallback(async () => {
    if (password && username) {
      setLoading(true);
      console.log(password, username);
      loginRequest({ username, password })
        .then((res) => login(res as iLoginResponse))
        .catch((err) => console.log(err));
    }
  }, [password, username]);

  const onEnter = useCallback(
    (event: IKeyEvent) => event.key === 'Enter' && onLogin(),
    [onLogin]
  );

  return {
    state: { username, password, error, loading },
    actions: { onChange, onLogin, onEnter }
  };
};

export default useLogin;
