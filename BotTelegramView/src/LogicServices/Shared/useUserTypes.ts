import { useState, useEffect, useMemo } from 'react';
import { fetchUserTypes } from 'RepoServices/UserTypes';
import { IUserType } from 'LogicServices/UserTypes/Types';
import { IOption } from '~/LogicServices/Shared/Types';

const useUserTypes = () => {
  const [userTypes, setUserTypes] = useState<IUserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const userTypesOptions: IOption[] = useMemo(() => {
    return userTypes.map((userType) => ({
      id: userType.userTypeId,
      name: userType.name
    }));
  }, [userTypes]);

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
    state: { loading, userTypesOptions }
  };
};

export default useUserTypes;
