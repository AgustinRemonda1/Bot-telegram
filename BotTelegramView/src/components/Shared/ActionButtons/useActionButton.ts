import { useCallback, useState } from 'react';
import { IDataset } from '~/LogicServices/Shared/Types';

interface IProps {
  dataset: IDataset;
}

const useActionButton = ({ dataset }: IProps) => {
  const [click, setClick] = useState<boolean>(false);

  const onClick = useCallback(
    (action: IDataset) => {
      setClick(true);
      action.onClick(dataset);
    },
    [dataset]
  );

  const onClickTooltip = useCallback((click: boolean) => {
    setClick(click);
  }, []);

  const disabled = useCallback((action: IDataset): boolean => {
    if (typeof action.disabled === 'function') {
      return action.disabled(dataset);
    }
    return action.disabled;
  }, []);

  return { click, onClickTooltip, onClick, disabled };
};

export default useActionButton;
