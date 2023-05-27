import {
  RED_ALERT,
  YELLOW,
  WHITE,
  SUTIL_GRAY,
  ORANGE
} from 'Static/Styles/Colors.index';

const actionTypes = {
  delete: 'delete',
  view: 'view',
  download: 'download',
  edit: 'edit'
};

export const getColorWithType = (type: string, disabled: boolean) => {
  if (disabled) {
    return SUTIL_GRAY;
  } else if (type === actionTypes.delete) {
    return RED_ALERT;
  } else if (type === actionTypes.view || type === actionTypes.download) {
    return YELLOW;
  } else if (type === actionTypes.edit) {
    return ORANGE;
  }
  return WHITE;
};
