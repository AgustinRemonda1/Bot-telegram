import React, { useContext } from 'react';
import {
  Container,
  SelectFormControl,
  SelectLabel,
  SelectLabelAlert,
  LoaderContainer
} from './CustomSelect.style';
import { MenuItem, Select, CircularProgress } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { capitalize } from 'Static/Utils/FormatStrings.utils';
import { IProps } from './CustomSelect.types';

const CustomSelect = ({
  title,
  onChange,
  value,
  emptyFields,
  list,
  name,
  correction,
  disabled
}: IProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <Container correction={Boolean(correction)}>
      <SelectFormControl>
        <SelectLabel variant="subtitle1">{title}</SelectLabel>
        <Select
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
        >
          {Boolean(list.length) ? (
            list.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {capitalize(option.name)}
              </MenuItem>
            ))
          ) : (
            <LoaderContainer>
              <CircularProgress size={35} />
            </LoaderContainer>
          )}
        </Select>
        {!value && emptyFields && (
          <SelectLabelAlert variant="subtitle1">
            {language.thisFieldIsRequired}
          </SelectLabelAlert>
        )}
      </SelectFormControl>
    </Container>
  );
};

export default CustomSelect;
