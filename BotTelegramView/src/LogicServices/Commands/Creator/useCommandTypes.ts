import { useState, useEffect, useMemo } from 'react';
import { fetchCommandTypes } from 'RepoServices/CommandTypes';
import { IOption } from '~/LogicServices/Shared/Types';
import { ICommandTypes } from '../Types';

const useCommandTypes = () => {
  const [commandTypes, setCommandTypes] = useState<ICommandTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const commandTypesOptions: IOption[] = useMemo(() => {
    return commandTypes.map((commandType) => ({
      id: commandType.commandTypeId || 0,
      name: commandType.name || ''
    }));
  }, [commandTypes]);

  useEffect(() => {
    setLoading(true);
    const getCommandTypes = async () => {
      const response = await fetchCommandTypes();

      if (response !== 'error') {
        setCommandTypes(response.commandTypes);
      }
      setLoading(false);
    };
    getCommandTypes();
  }, []);

  return {
    state: { loading, commandTypesOptions }
  };
};

export default useCommandTypes;
