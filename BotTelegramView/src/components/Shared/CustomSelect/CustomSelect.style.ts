import styled from '@emotion/styled';
import { BLACK, RED_ALERT } from 'Static/Styles/Colors.index';
import { Typography, FormControl, MenuItem } from '@mui/material';

interface IPropsContainer {
  correction: boolean;
}

export const Container = styled.div<IPropsContainer>`
  width: ${({ correction }) => (!correction ? '255px' : '92%')};
`;

export const SelectFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 20px;
`;

export const SelectLabel = styled(Typography)`
  display: flex;
  flex-direction: column;
  color: ${BLACK};
`;

export const SelectLabelAlert = styled(Typography)`
  font-size: 15px;
  color: ${RED_ALERT};
`;

export const LoaderContainer = styled(MenuItem)`
  display: flex;
  justify-content: center;
`;
