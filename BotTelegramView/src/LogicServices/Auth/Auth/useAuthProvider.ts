import { useState, useEffect, useCallback } from 'react';
import { IUser } from '../types';
import { getCookieValue, setCookieValue } from 'Static/Utils/Cookies.utils';
import { IOnLogin } from './AuthContext';

const useAuthProvider = () => {
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = getCookieValue('token');
    const user = getCookieValue('user');

    token && setToken(token);
    user && setUser(JSON.parse(user));
    setLoading(false);
  }, []);

  const onLogin = useCallback(({ token, user }: IOnLogin) => {
    setUser(user);
    setToken(token);
  }, []);

  const onSignOut = useCallback(() => {
    setCookieValue('token', '');
    setCookieValue('user', '');

    setUser(null);
    setToken('');
  }, []);

  return {
    state: { user, token, loading },
    actions: { onLogin, onSignOut }
  };
};

export default useAuthProvider;
