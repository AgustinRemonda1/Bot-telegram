import styled from '@emotion/styled';
import { WHITE } from 'Static/Styles/Colors.index';
import { Menu, Avatar, Typography, Box } from '@mui/material';
import { DRAWER_WIDTH } from '../Header.styled';

interface IProps {
  open: boolean;
}

export const AppBarContainer = styled.div<IProps>`
  display: flex;
  width: 100%;
  padding-left: ${({ open }) => open && `${DRAWER_WIDTH}px`};
`;

export const MenuContainer = styled.div`
  display: flex;
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
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 6px 15px 6px 0;
  padding: 5px 12px;
  display: ${({ open }) => open && 'none'};

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 100%;
  }

  & svg {
    fill: ${WHITE};
  }
`;

interface ISubTitle {
  component: string;
}

export const SubTitle = styled(Typography)<ISubTitle>`
  margin-top: 10px;
`;

export const TitleAndIcon = styled(Box)`
  display: flex;
  color: ${WHITE};
  & div {
    margin: 0 2px 0 5px;
  }
`;

export const Title = styled.span`
  margin-top: 1px;
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
