import { useState, useEffect, useCallback } from 'react';
import useUser from '../User/useUser';
import { getCookieValue, setCookieValue } from 'Static/Utils/Cookies.utils';
import { useRouter } from 'next/router';

const useAuth = () => {
  const { user, onClearUser } = useUser();
  const [token, setToken] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const token = getCookieValue('token');

    token && setToken(token);
  }, []);

  const onSignOut = useCallback(() => {
    setCookieValue('token', '');
    setCookieValue('user', '');
    setToken('');
    onClearUser();

    router.replace('/Auth/Login');
  }, [router, onClearUser]);

  return {
    state: { user, auth: Boolean(user && token) },
    action: { onSignOut }
  };
};

export default useAuth;
