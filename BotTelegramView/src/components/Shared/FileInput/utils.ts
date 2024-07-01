export const getExtension = (filename: string) => {
  const filenameSplitted = filename.split('.');
  const extension = filenameSplitted[filenameSplitted.length - 1];

  return '.' + extension;
};

type setStringBase64 = (string: string) => void;

export const blobToBase64 = async (
  blob: File,
  setStringBase64: setStringBase64
) => {
  const reader = new FileReader();

  reader.onload = () => {
    const base64data = reader.result;
    setStringBase64(String(base64data));
  };

  reader.readAsDataURL(blob);
};

export const downloadFile = (blob: Blob, name: string = 'file.jpg') => {
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = blobUrl;
  link.download = name;

  document.body.appendChild(link);

  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );

  document.body.removeChild(link);
};

interface IConvertBase64ToBlob {
  fileBase64: string;
  filename: string;
  extension: string;
}

export const convertBase64ToBlob = (
  fileBase64: string,
  callback: (file: Blob) => void
) => {
  fetch(fileBase64)
    .then((res) => res.blob())
    .then((blob) => callback(blob));
};

export const convertBase64ToBlobAndDownload = ({
  fileBase64,
  filename,
  extension
}: IConvertBase64ToBlob) => {
  convertBase64ToBlob(fileBase64, (blob) =>
    downloadFile(blob, filename + extension)
  );
};
