import { useCallback, useState } from 'react';

interface IProps {
  dataset: any;
}

const useActionButton = ({ dataset }: IProps) => {
  const [click, setClick] = useState<boolean>(false);

  const onClick = useCallback(
    (action: any) => {
      setClick(true);
      action.onClick(dataset);
    },
    [dataset]
  );

  const onClickTooltip = useCallback((click: boolean) => {
    setClick(click);
  }, []);

  const disabled = useCallback((action: any): boolean => {
    if (typeof action.disabled === 'function') {
      return action.disabled(dataset);
    }
    return action.disabled;
  }, []);

  return { click, onClickTooltip, onClick, disabled };
};

export default useActionButton;
