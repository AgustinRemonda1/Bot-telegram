import { useState, useEffect, useCallback } from 'react';
import { IUser } from './types';
import { getCookieValue } from 'Static/Utils/Cookies.utils';

const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = getCookieValue('user');

    user && setUser(JSON.parse(user));
  }, []);

  const onClearUser = useCallback(() => {
    setUser(null);
  }, []);

  return { user, onClearUser };
};

export default useUser;
