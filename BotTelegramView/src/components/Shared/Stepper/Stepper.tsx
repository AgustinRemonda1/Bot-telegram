import React, { FC } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { LibConnector } from './Stepper.styled';
import StepIcon from './StepIcon';
import { IIconsSteps } from './StepIcon/StepIcon.types';

interface IProps {
  steps: string[];
  activeStep: number;
  icons: IIconsSteps;
}

const StyledStepper: FC<IProps> = ({ steps, activeStep, icons }) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<LibConnector />}
      style={{ width: '135%' }}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel
            StepIconComponent={(props) => <StepIcon {...props} icons={icons} />}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StyledStepper;
