import styled from '@emotion/styled';
import { LIGHT_ORANGE, ORANGE } from 'Static/Styles/Colors.index';
import { Avatar, Button } from '@mui/material';

export const AvatarImage = styled(Avatar)`
  width: 175px;
  height: 175px;
  border: 3px ${ORANGE} solid;
`;

export const ChangePasswordButton = styled(Button)`
  margin-top: 5px;
  padding: 2px 10px;

  &:hover {
    background: none;
    color: ${LIGHT_ORANGE};
  }
`;
