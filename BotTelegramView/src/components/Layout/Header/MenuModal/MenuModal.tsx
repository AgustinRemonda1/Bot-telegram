import React, { useContext } from 'react';
import { ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { menuConfig } from '../Header.config';
import { ReactSVG } from 'react-svg';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import WithRequiredPermission from 'components/HOC/WithRequiredPermission';
import { IMenuConfig } from '../Header.types';
import useMenuModal from './useMenuModal';
import {
  MenuModalContainer,
  StyledDrawer,
  Toolbar,
  StyledIconButton,
  StyledIcon,
  OptionList
} from './MenuModal.styled';

const MenuModal = () => {
  const theme = useTheme();
  const { language } = useContext(LanguageContext);
  const { open, onCloseDrawer, onChangeRoute } = useMenuModal();

  return (
    <MenuModalContainer open={open}>
      <StyledDrawer variant="permanent" open={open}>
        <Toolbar>
          <StyledIconButton onClick={onCloseDrawer}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </StyledIconButton>
        </Toolbar>
        <OptionList open={open}>
          {menuConfig(language).map((item: IMenuConfig, index: number) => (
            <WithRequiredPermission
              requiredPermission={item.permissions}
              key={`menu options ${index}`}
            >
              <ListItem button onClick={() => onChangeRoute(item.route)}>
                <ListItemIcon>
                  <StyledIcon>
                    <ReactSVG src={item.icon} />
                  </StyledIcon>
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </WithRequiredPermission>
          ))}
        </OptionList>
      </StyledDrawer>
    </MenuModalContainer>
  );
};

export default MenuModal;
