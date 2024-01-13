import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from './AuthContext';

const useAuth = () => {
  const { user, token, loading, actions } = useAuthContext();
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
