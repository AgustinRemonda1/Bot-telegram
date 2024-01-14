import { useCallback, useState } from 'react';
import { IAction, IDataset } from 'LogicServices/Shared/Types';

interface IProps {
  dataset: IDataset;
}

const useActionButton = ({ dataset }: IProps) => {
  const [click, setClick] = useState<boolean>(false);

  const onClick = useCallback(
    (action: IAction) => {
      setClick(true);
      action.onClick(dataset);
    },
    [dataset]
  );

  const onClickTooltip = useCallback((click: boolean) => {
    setClick(click);
  }, []);

  const disabled = useCallback((action: IAction): boolean => {
    if (typeof action.disabled === 'function') {
      return action.disabled(dataset);
    }
    return Boolean(action.disabled);
  }, []);

  return { click, onClickTooltip, onClick, disabled };
};

export default useActionButton;
