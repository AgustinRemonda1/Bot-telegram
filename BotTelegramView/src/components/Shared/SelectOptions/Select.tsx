import React from 'react';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import { StyledSelect } from './Select.styles';
import { IProps } from './Select.types';
import { IEvent } from '~/LogicServices/Shared/Types';

const SelectOptions = ({ title, listOptions, onChange, value }: IProps) => {
  return (
    <FormControl>
      {title && <InputLabel>{title}</InputLabel>}
      <StyledSelect
        value={value}
        onChange={(e) => onChange({ target: e.target as IEvent['target'] })}
      >
        {listOptions.map((option, i) => (
          <MenuItem value={option.value} key={i}>
            {option.name}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default SelectOptions;
