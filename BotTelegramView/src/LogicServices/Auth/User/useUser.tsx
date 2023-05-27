import { useEffect, useState } from 'react';
import { UserCookieRepo } from 'RepoServices/User';
import { UserState } from './interface';
import { UserRepo } from './UserRepo.type';

interface Config {
  userRepo: UserRepo;
}

export const useUser = (config: Config): UserState => {
  // @todo: show error notifications
  const [state, setState] = useState<UserState>({ kind: 'Loading' });
  useEffect(() => {
    const result = config.userRepo.get();
    switch (result.kind) {
      case 'Success':
        setState({ kind: 'Ready', user: result.user });
        break;
      case 'NotFound':
        setState({ kind: 'Error', message: 'Usuario no encontrado' });
        break;
      case 'Error':
        // maybe redirect to login, or show a blank screen, we cant load any data this way
        setState({ kind: 'Error', message: result.message });
        break;
    }
  }, []);
  return state;
};
