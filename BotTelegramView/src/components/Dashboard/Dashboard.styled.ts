import styled from '@emotion/styled';
import { BLACK, GOOGLE_BLUE, WHITE, BLUE } from 'Static/Styles/Colors.index';
import {
  Button,
  Card,
  Container,
  createTheme,
  CircularProgress
} from '@mui/material';

interface IDashboardContainer {
  open: boolean;
}

const theme = createTheme();

export const DashboardContainer = styled.div<IDashboardContainer>`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  flex-grow: 1;
  width: ${({ open }) => (open ? '78%' : '93%')};
  height: 100%;
  min-height: 30vh;
  margin-left: ${({ open }) => (open ? '300px' : '80px')};
  overflow-x: hidden;
  transition: ${({ open }) =>
    open &&
    theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })};
`;

export const Content = styled(Container)`
  display: flex;
  justify-items: center;
  justify-content: enter;
  margin-top: ${theme.spacing(12)};
  width: 100%;
  max-width: 1265px;
  transition: ${theme.transitions.create(['margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })};
  flex-direction: column;
`;

export const SectionContainer = styled.div`
  width: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  & div {
    margin-bottom: 20px;
  }
  ,
  & div:last-child {
    marginright: 0px;
  }
`;

export const StatisticCard = styled(Card)`
  margin-right: 30px;
  width: 100%;
`;

export const DashboardButton = styled(Button)`
  float: right;
  padding: 8px 18px;
  background: ${GOOGLE_BLUE};
  color: ${WHITE};
  box-shadow: none;
  margin: 20px 0px;
  &:hover {
    background: ${BLUE};
  }
`;

export const IconContainer = styled.span`
  position: relative;
  top: 4px;
  right: 5px;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 22%;
`;

export const Loader = styled(CircularProgress)`
  z-index: 1;
`;
//export const useStyles = makeStyles(theme => ({
//  root: {
//    display: 'flex',
//    alignItems: 'center',
//    justifyItems: 'center',
//    margin: '0 auto',
//    flexGrow: 1,
//    width: '93%',
//    height: '100%',
//    minHeight: '30vh',
//    marginLeft: '80px',
//    overflowX: 'hidden'
//  },
//  rootShift: {
//    marginLeft: '300px',
//    width: '78%',
//    transition: theme.transitions.create(['margin'], {
//      easing: theme.transitions.easing.sharp,
//      duration: theme.transitions.duration.leavingScreen,
//    }),
//  },
//  container: {
//    display: 'flex',
//    justifyItems: 'center',
//    justifyContent: 'center',
//    marginTop: theme.spacing(12),
//    width: '100%',
//    maxWidth: '1265px',
//    transition: theme.transitions.create(['margin'], {
//      easing: theme.transitions.easing.sharp,
//      duration: theme.transitions.duration.leavingScreen,
//    }),
//    flexDirection: "column",
//  },
//  title: {
//    color: BLACK
//  },
//  cardContainer: {
//    width: '100%',
//    display: "flex",
//    marginBottom: "20px",
//    "& div":{
//      marginBottom: "20px"
//    },
//    "& div:last-child":{
//      marginRight: '0px'
//    }
//  },
//  cardContainerShift: {
//  },
//  card: {
//    marginRight: "30px",
//    width: '100%'
//  },
//  subContainer:{
//    width: '100%'
//  },
//  buttonStyle:{
//    float: 'right',
//    padding: '8px 18px',
//    background: GOOGLE_BLUE,
//    color: WHITE,
//    boxShadow: 'none',
//    margin: "20px 0px",
//    '&:hover': {
//      background: BLUE
//    }
//  },
//  spanIcon: {
//    position: 'relative',
//    top: '4px',
//    right: '5px'
//  },
//  loader: {
//    zIndex: 1,
//  },
//  loaderContainer: {
//    position: 'absolute',
//    top: '22%',
//  },
//}))
