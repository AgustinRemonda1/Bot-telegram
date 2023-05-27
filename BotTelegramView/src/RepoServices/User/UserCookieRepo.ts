import { UserRepo, Permission } from 'LogicServices/Auth/User';
import { decodeJwt } from 'jose';
import Cookie from 'js-cookie';

const COOKIE_NAME = 'X-FVG-TOKEN-CORS';

export const UserCookieRepo = (): UserRepo => {
  return {
    get() {
      try {
        const cookie = Cookie.get(COOKIE_NAME);
        if (!cookie) return { kind: 'Error', message: 'No hay token jwt' };
        const result = decodeJwt(cookie);
        return {
          kind: 'Success',
          user: {
            fullname: result.name as string,
            id: result.email as string,
            permissions: result.permissions as Permission[]
          }
        };
      } catch (err: any) {
        return { kind: 'Error', message: `${err.message}` };
      }
    }
  };
};

export default UserCookieRepo;
