import { renderHook, act } from '@testing-library/react-hooks';
import useTable from './useTable';

const onChangePage = jest.fn((page: number, pageSize: number) => {});
const onRefreshTable = jest.fn((refresh: boolean) => {});

const INITIAL_PROPS = {
  dataset: [],
  loader: false,
  onChangePage,
  onRefreshTable,
  refreshTable: false
};

describe('useTable', () => {
  it('show initial state when useTable is initied', async () => {
    const { result } = renderHook(() => useTable(INITIAL_PROPS));

    const expected = {
      page: 0,
      rowsPerPage: 10,
      rowsPerPageOptions: [10, 15, 25, 50, 100],
      withPagination: true,
      emptyRows: 10
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show 5 empty rows when useTable is initied with 5 datasets', async () => {
    const { result } = renderHook(() =>
      useTable({ ...INITIAL_PROPS, dataset: new Array(5).fill(null) })
    );

    expect(result.current.state.emptyRows).toEqual(5);
  });

  it('show page in 1 when page is changed', async () => {
    const { result } = renderHook(() => useTable(INITIAL_PROPS));

    act(() =>
      result.current.actions.onPageChange(
        { target: { name: '', value: '' } },
        1
      )
    );
    expect(result.current.state.page).toEqual(1);
  });

  it('show page in 3 when page is changed', async () => {
    const { result } = renderHook(() => useTable(INITIAL_PROPS));

    act(() =>
      result.current.actions.onPageChange(
        { target: { name: '', value: '' } },
        3
      )
    );
    expect(result.current.state.page).toEqual(3);
  });

  it('show rows per page in 25 and 25 empty rows when change rows per page without datasets', async () => {
    const { result } = renderHook(() => useTable(INITIAL_PROPS));

    const expected = {
      page: 0,
      rowsPerPage: 25,
      rowsPerPageOptions: [10, 15, 25, 50, 100],
      withPagination: true,
      emptyRows: 25
    };

    act(() =>
      result.current.actions.onRowsPerPageChange({
        target: { name: '', value: '25' }
      })
    );
    expect(result.current.state).toEqual(expected);
  });

  it('show page in 0 when rows per page are changed', async () => {
    const { result } = renderHook(() => useTable(INITIAL_PROPS));

    const expected = {
      page: 0,
      rowsPerPage: 25,
      rowsPerPageOptions: [10, 15, 25, 50, 100],
      withPagination: true,
      emptyRows: 25
    };

    act(() =>
      result.current.actions.onPageChange(
        { target: { name: '', value: '' } },
        3
      )
    );
    expect(result.current.state.page).toEqual(3);
    act(() =>
      result.current.actions.onRowsPerPageChange({
        target: { name: '', value: '25' }
      })
    );
    expect(result.current.state).toEqual(expected);
  });

  it('show onChange is called when onPageChange and onRowsPerPageChange are used', async () => {
    const { result } = renderHook(() => useTable(INITIAL_PROPS));

    act(() =>
      result.current.actions.onPageChange(
        { target: { name: '', value: '' } },
        3
      )
    );
    act(() =>
      result.current.actions.onRowsPerPageChange({
        target: { name: '', value: '25' }
      })
    );

    expect(onChangePage).toBeCalled();
  });

  it('show onRefreshTable is called when useTable is initied with refreshTable param in true', async () => {
    const {} = renderHook(() =>
      useTable({ ...INITIAL_PROPS, refreshTable: true })
    );

    expect(onRefreshTable).toBeCalled();
  });
});
