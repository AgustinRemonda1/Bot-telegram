import { useState, useEffect, useCallback } from 'react';
import { IDataset, IEvent } from 'LogicServices/Shared/Types';

interface IProps {
  dataset: IDataset[];
  loader: boolean;
  onChangePage?: (page: number, pageSize: number) => void;
  onRefreshTable?: (refresh: boolean) => void;
  refreshTable?: boolean;
}

const useTable = ({
  dataset,
  loader,
  onChangePage,
  refreshTable,
  onRefreshTable
}: IProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rowsPerPageOptions = [10, 15, 25, 50, 100];
  const withPagination = Boolean(onChangePage);
  const emptyRows = !loader ? rowsPerPage - dataset.length : 0;

  useEffect(() => {
    if (refreshTable && onRefreshTable) {
      setPage(0);
      onChangePage && onChangePage(0, rowsPerPage);
      onRefreshTable(false);
    }
  }, [refreshTable, onRefreshTable]);

  const onPageChange = useCallback(
    (event: IEvent, newPage: number) => {
      setPage(newPage);
      onChangePage && onChangePage(newPage, rowsPerPage);
    },
    [onChangePage]
  );

  const onRowsPerPageChange = useCallback(
    ({ target }: IEvent) => {
      const value = Number(target.value);
      onChangePage && onChangePage(0, value);
      setRowsPerPage(value);
      setPage(0);
    },
    [onChangePage]
  );

  return {
    state: { page, rowsPerPage, rowsPerPageOptions, withPagination, emptyRows },
    actions: { onPageChange, onRowsPerPageChange }
  };
};

export default useTable;
