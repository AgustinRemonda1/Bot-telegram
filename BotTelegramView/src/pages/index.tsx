import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/Auth/Login');
  }, []);
  return null;
};

export default Index;
