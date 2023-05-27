import { useState, useEffect, useCallback } from 'react';

interface IProps {
  dataset: any;
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
    (event: any, newPage: number) => {
      setPage(newPage);
      onChangePage && onChangePage(newPage, rowsPerPage);
    },
    [onChangePage]
  );

  const onRowsPerPageChange = useCallback(
    (event: any) => {
      onChangePage && onChangePage(0, event.target.value);
      setRowsPerPage(event.target.value);
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
