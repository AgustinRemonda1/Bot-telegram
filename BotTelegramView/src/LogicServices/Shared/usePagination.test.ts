import { renderHook, act } from '@testing-library/react-hooks';
import usePagination from './usePagination';

describe('usePagination', () => {
  it('show initial state if dont have any changes', () => {
    const { result } = renderHook(() => usePagination());

    const expected = {
      loading: false,
      pagination: {
        page: 0,
        pageSize: 10
      },
      total: 0,
      refresh: false
    };

    expect(result.current.state).toEqual(expected);
  });

  it('page changed when use onChangePage', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.state.pagination.page).toEqual(0);

    act(() => result.current.actions.onChangePage(1, 10));

    expect(result.current.state.pagination.page).toEqual(1);
  });

  it('page size changed when use onChangePage for change page size', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.state.pagination.pageSize).toEqual(10);

    act(() => result.current.actions.onChangePage(0, 25));

    expect(result.current.state.pagination.pageSize).toEqual(25);
  });

  it('total changed when use onChangeTotal', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.state.total).toEqual(0);

    act(() => result.current.actions.onChangeTotal(100));

    expect(result.current.state.total).toEqual(100);
  });

  it('loading state changed when use onLoading', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.state.loading).toBeFalsy();

    act(() => result.current.actions.onLoading(true));

    expect(result.current.state.loading).toBeTruthy();
  });

  it('refresh state changed when use onRefresh', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.state.refresh).toBeFalsy();

    act(() => result.current.actions.onRefresh(true));

    expect(result.current.state.refresh).toBeTruthy();
  });
});
