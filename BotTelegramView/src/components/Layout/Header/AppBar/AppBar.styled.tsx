import styled from '@emotion/styled';
import { WHITE } from 'Static/Styles/Colors.index';
import { Menu, Avatar, Typography, Box } from '@mui/material';

export const DRAWER_WIDTH = 300;

export const AppBarContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

interface IMenuButton {
  open: boolean;
  edge: string;
}

export const MenuButton = styled.div<IMenuButton>`
  margin-right: 30px;
  display: ${({ open }) => open && 'none'};
`;

interface ISubTitle {
  component: string;
}

export const SubTitle = styled(Typography)<ISubTitle>`
  margin-top: 4px;
`;

export const TitleAndIcon = styled(Box)`
  display: flex;
`;

export const BotIcon = styled.div`
  position: relative;
  top: 1px;
`;

export const AvatarImage = styled(Avatar)`
  width: 35px;
  height: 35px;
  border: 3px ${WHITE} solid;
`;

export const DropdownMenu = styled(Menu)`
  margin-top: 50px;
`;

export const UserName = styled.div`
  padding: 5px 15px;
`;

export const SelectContainer = styled.div`
  padding: 0px 15px;
`;
