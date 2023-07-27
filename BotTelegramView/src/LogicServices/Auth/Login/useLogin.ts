import { useState, useEffect, useCallback } from 'react';
import { inputNames } from 'components/Auth/Login/Login.config';
import { useRouter } from 'next/router';
import { loginRequest } from 'RepoServices/Auth/Login/Login';
import { IUser } from '../User';
import { getCookieValue, setCookieValue } from '~/Static/Utils/Cookies.utils';

interface iLoginResponse {
  user: IUser;
  token: string;
}

const useLogin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const auth = getCookieValue('user') && getCookieValue('token');

    auth ? router.replace('/Dashboard') : router.replace('/Auth/Login');
  }, []);

  const onChange = useCallback((event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === inputNames.username) {
      setUsername(value);
    } else if (name === inputNames.password) {
      setPassword(value);
    }
  }, []);

  const login = useCallback((res: iLoginResponse) => {
    const userStringify = JSON.stringify(res.user);
    setCookieValue('user', userStringify);
    setCookieValue('token', res.token);
    setLoading(false);
    router.replace('/Dashboard');
  }, []);

  const onLogin = useCallback(async () => {
    if (password && username) {
      setLoading(true);
      loginRequest({ username, password })
        .then((res) => login(res as iLoginResponse))
        .catch((err) => console.log(err));
    }
  }, [password, username]);

  const onEnter = useCallback(
    (event: any) => event.key === 'Enter' && onLogin(),
    [onLogin]
  );

  return {
    state: { username, password, error, loading },
    actions: { onChange, onLogin, onEnter }
  };
};

export default useLogin;
