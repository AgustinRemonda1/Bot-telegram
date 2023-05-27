import { useState, useEffect, useCallback } from 'react';
import { IProps } from './CheckAction';

const useCheckAction = ({ check, onChange, id }: IProps) => {
  const [checked, setChecked] = useState<boolean>(check);

  useEffect(() => {
    setChecked(check);
  }, [check]);

  const onChangeCheckbox = useCallback(() => {
    onChange(id);
  }, [id]);

  return { checked, onChangeCheckbox };
};

export default useCheckAction;
