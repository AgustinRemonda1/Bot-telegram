import { useCallback, useEffect, useMemo, useState } from 'react';
import { IEvent } from 'LogicServices/Shared/Types';
import {
  getExtension,
  blobToBase64,
  convertBase64ToBlobAndDownload,
  convertBase64ToBlob
} from './utils';

interface IProps {
  value: string | number | null;
  fileValues?: {
    filename: string;
    extension: string;
  };
  fileTargets?: {
    file: string;
    extension: string;
  };
  onChange: (e: IEvent) => void;
}

const useFileInput = ({ value, fileValues, fileTargets, onChange }: IProps) => {
  const [file, setFile] = useState<File>();
  const [extension, setExtension] = useState<string>('');

  const filename = useMemo(() => {
    return fileValues && fileValues.filename + fileValues.extension;
  }, [fileValues]);

  useEffect(() => {
    if (value && !file) {
      convertBase64ToBlob(String(value), (file) =>
        setFile(new File([file], ''))
      );
    }
  }, [file, value]);

  useEffect(() => {
    if (extension && !fileValues?.extension) {
      onChange({
        target: { name: String(fileTargets?.extension), value: extension }
      });
    }
  }, [extension, onChange, fileTargets, fileValues]);

  const changeFileExtension = useCallback(
    (file: File) => {
      const extension = getExtension(file.name);
      setExtension(extension);
    },
    [fileTargets]
  );

  const changeFileToBase64 = useCallback(
    (file: File, target: string) => {
      const setFileBase64 = async (fileString: string) => {
        await onChange({
          target: { name: target, value: fileString }
        });
      };
      blobToBase64(file, setFileBase64);
    },
    [onChange, fileTargets]
  );

  const onChangeFile = useCallback(
    async (e) => {
      const file: File = e.target.files[0];
      if (fileTargets) {
        await changeFileToBase64(file, fileTargets.file);
        changeFileExtension(file);
        setFile(file);
      }
    },
    [fileTargets, changeFileToBase64, changeFileExtension]
  );

  const onDownloadFile = useCallback(async () => {
    if (fileValues && value)
      convertBase64ToBlobAndDownload({
        fileBase64: String(value),
        ...fileValues
      });
  }, [value, fileValues]);

  return {
    state: { file, filename },
    actions: { onChangeFile, onDownloadFile }
  };
};

export default useFileInput;
