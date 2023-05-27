import { useUser as useUserCore } from './useUser';
export * from './UserRepo.type';
export * from './Permissions.type';
export * from './interface';
import { UserCookieRepo } from 'RepoServices/User';

export const useUser = () => useUserCore({ userRepo: UserCookieRepo() });
