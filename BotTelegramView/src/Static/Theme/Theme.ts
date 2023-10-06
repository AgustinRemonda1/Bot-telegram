import { createTheme } from '@mui/material';
import {
  GRAY,
  SUTIL_GRAY,
  WHITE,
  DARK_GRAY,
  LIGHT_BLUE,
  ORANGE,
  LIGHT_ORANGE,
  DARK_ORANGE
} from 'Static/Styles/Colors.index';

export const theme = createTheme({
  palette: {
    primary: {
      light: LIGHT_ORANGE,
      main: ORANGE,
      dark: DARK_ORANGE,
      contrastText: WHITE
    }
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: WHITE,
          '&:nth-of-type(odd)': {
            backgroundColor: GRAY
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          padding: '5px 0px 5px 22px'
        },
        head: {
          color: WHITE,
          borderBottom: '1px solid ' + SUTIL_GRAY,
          backgroundColor: LIGHT_BLUE,
          padding: '10px 0px 10px 22px'
        },
        body: {
          borderBottom: '1px solid ' + SUTIL_GRAY
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          '&::before': {
            backgroundColor: DARK_GRAY
          }
        },
        popper: {
          marginTop: '-13px'
        },
        tooltip: {
          color: WHITE,
          backgroundColor: DARK_GRAY
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'none'
        }
      }
    }
  }
});
