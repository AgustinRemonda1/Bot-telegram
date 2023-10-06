import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import useAuth from 'LogicServices/Auth/Auth/useAuth';
import { getCookieValue } from '~/Static/Utils/Cookies.utils';

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const router = useRouter();
  const { state } = useAuth();

  useEffect(() => {
    !state.auth && router.replace('/Auth/Login');
  }, [state.auth]);
  return <>{children}</>;
};

export default PrivateRoute;
