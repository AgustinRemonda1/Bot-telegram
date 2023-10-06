import React, { ReactNode } from 'react';
import { AuthContext, useAuthProvider } from 'LogicServices/Auth';

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: IProps) => {
  const { state, actions } = useAuthProvider();

  return (
    <AuthContext.Provider value={{ ...state, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
