import React, { useContext } from 'react';
import { IconButton, MenuItem } from '@mui/material';
import {
  AppBarContainer,
  AvatarContainer,
  AvatarImage,
  BotIcon,
  DropdownMenu,
  MenuButton,
  MenuContainer,
  SelectContainer,
  SubTitle,
  Title,
  TitleAndIcon,
  UserName
} from './AppBar.styled';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import SelectOptions from 'components/Shared/SelectOptions';
import { langOptions } from '../Header.config';
import { ReactSVG } from 'react-svg';
import BotLogo from 'Static/Assets/Icons/logo-bot.svg';
import { IUser } from 'LogicServices/Auth/User';
import useAppBar from './useAppBar';
import { IEvent } from '../Header.types';

interface IProps {
  props: {
    user?: IUser;
    open: boolean;
    anchorEl: Element | null;
  };
  actions: {
    onOpenMenu: (event: IEvent) => void;
    onCloseMenu: () => void;
  };
}

const AppBar = ({ props, actions }: IProps) => {
  const { lang, language, onChangeLanguage } = useContext(LanguageContext);
  const {
    state,
    actions: { onOpenDrawer, onSignOut }
  } = useAppBar(actions);

  return (
    <AppBarContainer open={state.open}>
      <MenuContainer>
        <MenuButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpenDrawer}
          edge="start"
          open={state.open}
        >
          <MenuIcon />
        </MenuButton>
        <SubTitle component="div">
          <TitleAndIcon fontWeight={600} fontSize={28}>
            <BotIcon>
              <ReactSVG src={BotLogo.src} />
            </BotIcon>
            <Title>{language.botTelegramBackOffice.toUpperCase()}</Title>
          </TitleAndIcon>
        </SubTitle>
      </MenuContainer>
      <AvatarContainer>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={actions.onOpenMenu}
          color="inherit"
        >
          <AvatarImage src={props.user && props.user.image} />
          <ArrowDropDownIcon />
        </IconButton>
        <DropdownMenu
          id="menu-appbar"
          anchorEl={props.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={props.open}
          onClose={actions.onCloseMenu}
        >
          <UserName>{props.user ? props.user.username : null}</UserName>
          <MenuItem onClick={onSignOut}>{language.signOut}</MenuItem>
          <SelectContainer>
            <SelectOptions
              onChange={onChangeLanguage}
              value={lang}
              listOptions={langOptions}
            />
          </SelectContainer>
        </DropdownMenu>
      </AvatarContainer>
    </AppBarContainer>
  );
};

export default AppBar;
