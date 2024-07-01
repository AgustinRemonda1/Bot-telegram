import { useCallback } from 'react';
import { useRouter } from 'next/router';

const useAppRouter = () => {
  const router = useRouter();

  const onChangeRoute = useCallback(
    (route: string) => {
      router.replace(route);
    },
    [router]
  );

  return { onChangeRoute };
};

export default useAppRouter;
