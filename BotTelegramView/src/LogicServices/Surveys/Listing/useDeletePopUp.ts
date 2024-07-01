import useDelete, { IProps } from 'LogicServices/Shared/useDeletePopUp';
import { deleteSurvey } from 'RepoServices/Surveys';

export default ({ onRefresh }: Pick<IProps, 'onRefresh'>) => {
  return useDelete({ onRefresh, deleteById: deleteSurvey });
};
