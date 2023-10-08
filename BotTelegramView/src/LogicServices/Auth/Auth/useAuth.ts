import { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './AuthContext';

const useAuth = () => {
  const { user, token, loading, actions } = useContext(AuthContext);
  const router = useRouter();

  const onSignOut = useCallback(() => {
    actions.onSignOut();

    router.replace('/Auth/Login');
  }, [router, actions]);

  return {
    state: { user, auth: Boolean(user && token), loading },
    action: { onSignOut }
  };
};

export default useAuth;
