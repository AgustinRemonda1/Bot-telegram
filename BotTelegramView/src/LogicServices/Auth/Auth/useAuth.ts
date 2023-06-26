import { useState, useEffect, useCallback } from 'react';
import useUser from '../User/useUser';
import { getCookieValue, setCookieValue } from 'Static/Utils/Cookies.utils';
import { useRouter } from 'next/router';

const useAuth = () => {
  const { user } = useUser();
  const [token, setToken] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const token = getCookieValue('token');

    token && setToken(token);
  }, []);

  const onSignOut = useCallback(() => {
    setCookieValue('token', '');
    setCookieValue('user', '');

    router.replace('/Auth/Login');
  }, [router]);

  return {
    state: { user, auth: Boolean(user && token) },
    action: { onSignOut }
  };
};

export default useAuth;
