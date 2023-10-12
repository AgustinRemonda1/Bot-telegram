import useDelete, { IProps } from 'LogicServices/Shared/useDeletePopUp';
import { deleteCommand } from 'RepoServices/Commands';

export default ({ onRefresh }: Pick<IProps, 'onRefresh'>) => {
  return useDelete({ onRefresh, deleteById: deleteCommand });
};
