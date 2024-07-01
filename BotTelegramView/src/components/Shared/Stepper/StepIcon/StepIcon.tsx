import React, { FC } from 'react';
import { StepIconProps } from '@mui/material/StepIcon';
import { LibStepIconRoot } from './StepIcon.styled';
import { IIconsSteps } from './StepIcon.types';

interface IProps extends StepIconProps {
  icons: IIconsSteps;
}

const LibStepIcon: FC<IProps> = ({
  active,
  completed,
  className,
  icons,
  icon
}) => {
  return (
    <LibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </LibStepIconRoot>
  );
};

export default LibStepIcon;
