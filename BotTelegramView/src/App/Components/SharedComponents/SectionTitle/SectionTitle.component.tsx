import React, { useContext } from 'react';
import clsx from 'clsx';
import { useStyles } from './SectionTitle.style';
import { 
  Typography, 
  Box,
  IconButton 
} from '@material-ui/core';
import { ModalControllerContext } from '../../../HOC/ModalController.hoc';
import AddIcon from '@material-ui/icons/Add';
import { SectionTitleInterface } from './SectionTitle.interface';

const SectionTitle = ({titleLabel, correctionLabel, action}: SectionTitleInterface) => {
  const { isOpenDrawer } = useContext(ModalControllerContext);

  const { 
    subtitle, 
    title, 
    underline, 
    container, 
    containerWithModalOpen, 
    underlineWithModalOpen, 
    titleAndUnderlineContainer,
    correction,
    addIcon,
    buttonAction,
    underlineWithAction,
    underlineWithActionAndModalOpen
  } = useStyles();

  return(
    <div className={clsx(container, {
      [containerWithModalOpen]: isOpenDrawer
    })}
    >
      <div className={titleAndUnderlineContainer}>
        <Typography 
          variant="h4" 
          gutterBottom
          className={clsx(title, {
            [correction]: correctionLabel
          })}
        >
          <Box 
            fontWeight={700} 
            m={1} 
          >
            {titleLabel}
          </Box>
        </Typography>
        <Box className={clsx(underline, {
            [underlineWithModalOpen]: isOpenDrawer,
            [underlineWithAction]: action,
            [underlineWithActionAndModalOpen]: isOpenDrawer && action
          })}
        />
        { action && 
          <IconButton className={buttonAction}>
            <AddIcon className={addIcon} onClick={action}/>
          </IconButton>
        }
      </div>
    </div>
  )
}

export default SectionTitle; 