import { IUser } from './interface';

interface Error {
  kind: 'Error';
  message: string;
}

interface NotFound {
  kind: 'NotFound';
}

interface Success {
  kind: 'Success';
  user: IUser;
}

export type UserRepoResponse = Error | NotFound | Success;
export type UserSetResponse = Error | Success;

export interface UserRepo {
  get: () => UserRepoResponse;
}
