import { useState, useEffect } from 'react';
import { fetchUserTypes } from 'RepoServices/UserTypes';
import { IUserType } from '../Types';

const useListing = () => {
  const [userTypes, setUserTypes] = useState<IUserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getUserTypes = async () => {
      const response = await fetchUserTypes();

      if (response !== 'error') {
        setUserTypes(response.userTypes);
      }
      setLoading(false);
    };
    getUserTypes();
  }, []);

  return {
    state: { loading, userTypes }
  };
};

export default useListing;
