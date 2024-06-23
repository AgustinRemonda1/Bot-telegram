import React, { FC, useContext } from 'react';
import {
  Container,
  InputLabel,
  InputFormControl,
  InputLabelAlert,
  UploadInput,
  ButtonUploadFile,
  FileInputContainer
} from './FileInput.styled';
import useFileInput from './useFileInput';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import { IEvent } from 'LogicServices/Shared/Types';

export interface IProps {
  title: string;
  onChange: (e: IEvent) => void;
  value: string | number | null;
  name: string;
  fileValues?: {
    filename: string;
    extension: string;
  };
  fileTargets?: {
    file: string;
    extension: string;
  };
  emptyFields?: null | string | number | boolean;
  correction?: boolean;
}

const FileInput: FC<IProps> = ({
  title,
  name,
  value,
  fileValues,
  fileTargets,
  onChange,
  emptyFields,
  correction
}) => {
  const { state, actions } = useFileInput({
    value,
    fileValues,
    fileTargets,
    onChange
  });
  const { language } = useContext(LanguageContext);

  return (
    <Container correction={Boolean(correction)}>
      <InputFormControl>
        <InputLabel variant="subtitle1">{title}</InputLabel>
        <FileInputContainer>
          <UploadInput
            type="file"
            id="file-input"
            name={name}
            onChange={actions.onChangeFile}
          />
          <InputLabel variant="subtitle1">
            <ButtonUploadFile htmlFor="file-input">
              seleccionar archivo
            </ButtonUploadFile>
          </InputLabel>
          <InputLabel variant="subtitle1">
            {state.file ? state.filename : 'No hay archivos seleccionados'}
          </InputLabel>
        </FileInputContainer>
        {!value && emptyFields && (
          <InputLabelAlert variant="subtitle1">
            {language.thisFieldIsRequired}
          </InputLabelAlert>
        )}
      </InputFormControl>
    </Container>
  );
};

export default FileInput;
