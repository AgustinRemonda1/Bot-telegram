import styled from '@emotion/styled';
import { BLACK } from 'Static/Styles/Colors.index';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)`
  margin-top: 0px !important;
  & div {
    color: ${BLACK};
  }
  & svg {
    fill: ${BLACK};
  }
`;
