import { styled } from '@mui/material/styles';
import { ORANGE } from '~/Static/Styles/Colors.index';
ORANGE;
interface ILibStepProps {
  ownerState: { completed?: boolean; active?: boolean };
}

export const LibStepIconRoot = styled('div')<ILibStepProps>(
  ({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage: `linear-gradient( ${ORANGE} 0%, ${ORANGE} 50%, ${ORANGE} 100%)`,
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
    }),
    ...(ownerState.completed && {
      backgroundImage: `linear-gradient( ${ORANGE} 0%, ${ORANGE} 50%, ${ORANGE} 100%)`
    })
  })
);
