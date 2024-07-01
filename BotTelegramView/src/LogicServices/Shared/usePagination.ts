import { useState, useCallback } from 'react';

interface IPagination {
  page: number;
  pageSize: number;
}

const INITIAL_PAGINATION: IPagination = {
  page: 0,
  pageSize: 10
};

const usePagination = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<IPagination>(INITIAL_PAGINATION);
  const [total, setTotal] = useState<number>(0);
  const [refresh, setRefresh] = useState<boolean>(false);

  const onChangePage = useCallback(
    (page: number, pageSize: number) => {
      setPagination({ page, pageSize });
    },
    [pagination]
  );

  const onChangeTotal = useCallback((total: number) => {
    setTotal(total);
  }, []);

  const onLoading = useCallback((loading: boolean) => {
    setLoading(loading);
  }, []);

  const onRefresh = useCallback((refresh: boolean) => {
    setRefresh(refresh);
  }, []);

  return {
    state: { loading, pagination, total, refresh },
    actions: { onChangePage, onChangeTotal, onLoading, onRefresh }
  };
};

export default usePagination;
