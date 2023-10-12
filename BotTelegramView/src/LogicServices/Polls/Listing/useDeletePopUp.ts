import useDelete, { IProps } from 'LogicServices/Shared/useDeletePopUp';
import { deletePoll } from 'RepoServices/Polls';

export default ({ onRefresh }: Pick<IProps, 'onRefresh'>) => {
  return useDelete({ onRefresh, deleteById: deletePoll });
};
