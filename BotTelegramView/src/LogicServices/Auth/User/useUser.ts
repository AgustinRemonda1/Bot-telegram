import { useState, useEffect } from 'react';
import { IUser } from './types';
import { getCookieValue } from 'Static/Utils/Cookies.utils';

const useUser = () => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const user = getCookieValue('user');
    user && setUser(JSON.parse(user));
  }, []);

  return { user };
};

export default useUser;
