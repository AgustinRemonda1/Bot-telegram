import React, { useContext } from 'react';
import { ModalControllerContext } from 'components/HOC/ModalController';
import { Box } from '@mui/material';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import {
  PopUpActions,
  PopUpContent,
  PopUpHeader
} from 'components/Shared/PopUpComponents';
import { IProps } from './DeletePopUp.types';
import {
  PopUpContainer,
  StyledDialog,
  Text,
  ButtonDecline,
  ButtonAccept
} from './DeletePopUp.styles';

const DeletePopUp = ({ open, onClose, onDelete }: IProps) => {
  const { isOpenDrawer } = useContext(ModalControllerContext);
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <StyledDialog
        onClose={onClose}
        aria-labelledby="pop-up-of-delete"
        open={open}
        correction={Boolean(isOpenDrawer)}
      >
        <PopUpContainer>
          <PopUpHeader id="pop-up-of-delete" onClose={onClose}>
            {language.deleteRegistry.toUpperCase()}
          </PopUpHeader>
          <PopUpContent>
            <Text gutterBottom>
              <Box fontWeight={600} fontSize={16}>
                {language.areYouSureYouWantToDeleteThisRegistry.toUpperCase()}
              </Box>
            </Text>
          </PopUpContent>
          <PopUpActions>
            <ButtonDecline autoFocus onClick={onClose}>
              <Box fontWeight={600} fontSize={18}>
                {language.no}
              </Box>
            </ButtonDecline>
            <ButtonAccept autoFocus onClick={onDelete}>
              <Box fontWeight={600} fontSize={18}>
                {language.yes}
              </Box>
            </ButtonAccept>
          </PopUpActions>
        </PopUpContainer>
      </StyledDialog>
    </div>
  );
};

export default DeletePopUp;
