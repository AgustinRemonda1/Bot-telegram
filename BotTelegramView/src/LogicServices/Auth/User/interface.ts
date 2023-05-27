export interface IUser {
  back_user_id: number;
  user_role_id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface Error {
  kind: 'Error';
  message: string;
}

interface Ready {
  kind: 'Ready';
  user: IUser;
}

interface Loading {
  kind: 'Loading';
}

export type UserState = Error | Ready | Loading;
