import React, { useContext } from 'react';
import {
  Container,
  InputFormControl,
  InputLabel,
  InputLabelAlert
} from './CustomInput.styles';
import { TextField } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { IProps } from './CustomInput.types';

const CustomInput = ({
  title,
  onChange,
  value,
  emptyFields,
  name,
  correction,
  disabled,
  multiline
}: IProps) => {
  const { language } = useContext(LanguageContext);

  return (
    <Container correction={Boolean(correction)}>
      <InputFormControl>
        <InputLabel variant="subtitle1">{title}</InputLabel>
        <TextField
          onChange={onChange}
          name={name}
          value={value}
          disabled={disabled}
          multiline={Boolean(multiline)}
        />
        {!value && emptyFields && (
          <InputLabelAlert variant="subtitle1">
            {language.thisFieldIsRequired}
          </InputLabelAlert>
        )}
      </InputFormControl>
    </Container>
  );
};

export default CustomInput;
