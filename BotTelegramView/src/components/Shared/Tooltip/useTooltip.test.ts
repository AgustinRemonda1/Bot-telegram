import { renderHook, act } from '@testing-library/react-hooks';
import useTooltip from './useTooltip';

const onClick = jest.fn((click: boolean) => {});

describe('useTooltip', () => {
  it('show open in false when useTooltip is initied', async () => {
    const { result } = renderHook(() => useTooltip({ click: false, onClick }));

    expect(result.current.open).toBeFalsy();
  });

  it('show open in true when onOpenTooltip is used', async () => {
    const { result } = renderHook(() => useTooltip({ click: false, onClick }));

    act(() => result.current.onOpenTooltip());

    expect(result.current.open).toBeTruthy();
  });

  it('show open in true when onCloseTooltip is used', async () => {
    const { result } = renderHook(() => useTooltip({ click: false, onClick }));

    act(() => result.current.onOpenTooltip());

    expect(result.current.open).toBeTruthy();

    act(() => result.current.onCloseTooltip());

    expect(result.current.open).toBeFalsy();
  });

  it('show onClick is called when click is "true"', async () => {
    const {} = renderHook(() => useTooltip({ click: true, onClick }));

    expect(onClick).toBeCalled();
    expect(onClick).lastCalledWith(false);
  });
});
