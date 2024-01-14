import { renderHook, act } from '@testing-library/react-hooks';
import useCheckAction from './useCheckAction';

const onChange = jest.fn((id: number) => {});

describe('useCheckAction', () => {
  it('show check in false when useCheckAction is initied with check in false', async () => {
    const { result } = renderHook(() =>
      useCheckAction({ check: false, onChange, id: 1 })
    );

    expect(result.current.checked).toBeFalsy();
  });

  it('show check in true when useCheckAction is initied with check in false', async () => {
    const { result } = renderHook(() =>
      useCheckAction({ check: true, onChange, id: 1 })
    );

    expect(result.current.checked).toBeTruthy();
  });

  it('show onChange is called with id 1 when onChangeCheckbox is used', async () => {
    const { result } = renderHook(() =>
      useCheckAction({ check: false, onChange, id: 1 })
    );

    act(() => result.current.onChangeCheckbox());

    expect(onChange).toBeCalled();
    expect(onChange).lastCalledWith(1);
  });
});
