import { createContext } from 'react';
import { IUser } from '../User';

export interface IOnLogin {
  token: string;
  user: IUser;
}

export interface IAuthContext {
  user?: IUser | null;
  token?: string;
  actions: {
    onLogin: ({ user, token }: IOnLogin) => void;
    onSignOut: () => void;
  };
}

export const AuthContext = createContext<IAuthContext>({
  actions: { onLogin: ({ user, token }) => {}, onSignOut: () => {} }
});
