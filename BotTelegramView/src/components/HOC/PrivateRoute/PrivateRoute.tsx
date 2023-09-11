import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import useAuth from '~/LogicServices/Auth/Auth/useAuth';
import { getCookieValue } from '~/Static/Utils/Cookies.utils';

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  //  const router = useRouter();
  //  useEffect(() => {
  //    const token = getCookieValue('token');
  //
  //    !token && router.replace('/Auth/Login');
  //  }, []);
  return <>{children}</>;
};

export default PrivateRoute;
