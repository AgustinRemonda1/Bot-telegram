import { styled } from '@mui/material/styles';
import StepConnector, {
  stepConnectorClasses
} from '@mui/material/StepConnector';
import { ORANGE } from 'Static/Styles/Colors.index';

export const LibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg,${ORANGE} 0%,${ORANGE} 50%,${ORANGE} 100%)`
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg,${ORANGE} 0%,${ORANGE} 50%,${ORANGE} 100%)`
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1
  }
}));
