import { decodeJwt } from 'jose';

export const getUser = (token: string) => {
  const result = decodeJwt(token);
  return {
    backUserId: result.backUserId as number,
    userRoleId: result.userRoleId as number,
    username: result.username as string,
    firstName: result.firstName as string,
    lastName: result.lastName as string,
    email: result.email as string,
    image: result.image as string
  };
};
