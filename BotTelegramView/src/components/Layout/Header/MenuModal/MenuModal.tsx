import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { menuConfig, homePageConfig } from '../Header.config';
import { ReactSVG } from 'react-svg';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import WithRequiredPermission from 'components/HOC/WithRequiredPermissions';
import { MenuConfigInterface } from '../Header.types';
import useMenuModal from './useMenuModal';
import {
  MenuModalContainer,
  StyledDrawer,
  Toolbar,
  StyledIconButton,
  StyledDivider,
  StyledIcon,
  HomePageList
} from './MenuModal.styled';

const MenuModal = ({}) => {
  const theme = useTheme();
  const { language } = useContext(LanguageContext);
  const homepage = homePageConfig(language);
  const { open, onCloseDrawer, onChangeRoute } = useMenuModal();

  return (
    <MenuModalContainer>
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
        {open && <StyledDivider />}
        <List>
          {menuConfig(language).map(
            (item: MenuConfigInterface, index: number) => (
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
            )
          )}
        </List>
        <HomePageList>
          <ListItem button onClick={() => onChangeRoute(homepage.route)}>
            <ListItemIcon>
              <StyledIcon>
                <ReactSVG src={homepage.icon} />
              </StyledIcon>
            </ListItemIcon>
            <ListItemText primary={homepage.name} />
          </ListItem>
        </HomePageList>
      </StyledDrawer>
    </MenuModalContainer>
  );
};

export default MenuModal;
