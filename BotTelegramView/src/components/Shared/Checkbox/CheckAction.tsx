import React from 'react';
import { Checkbox } from '@mui/material';
import useCheckAction from './useCheckAction';

export interface IProps {
  check: boolean;
  id: number;
  onChange: (id: number) => void;
}

const CheckAction = (props: IProps) => {
  const { checked, onChangeCheckbox } = useCheckAction(props);

  return <Checkbox onChange={onChangeCheckbox} checked={checked} />;
};

export default CheckAction;
