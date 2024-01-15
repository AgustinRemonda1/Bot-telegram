import { act, renderHook } from '@testing-library/react-hooks';
import useMenuModal from './useMenuModal';

const replace = jest.fn((route: string) => {});
const setOpenState = jest.fn((open: boolean) => {});

jest.mock('components/HOC/ModalController', () => ({
  useModalControllerContext: () => ({
    isOpenDrawer: false,
    setOpenState
  })
}));

jest.mock('next/router', () => ({
  useRouter: () => ({ replace })
}));

describe('useMenuModal', () => {
  it('show open in false when useMenuModal is initied', async () => {
    const { result } = renderHook(() => useMenuModal());

    expect(result.current.open).toBeFalsy();
  });

  it('show replace is called when onChangeRoute is used with route param', async () => {
    const { result } = renderHook(() => useMenuModal());

    act(() => result.current.onChangeRoute('/route'));

    expect(replace).toBeCalled();
    expect(replace).lastCalledWith('/route');
  });

  it('show setOpenState is called when onCloseDrawer is used', async () => {
    const { result } = renderHook(() => useMenuModal());

    act(() => result.current.onCloseDrawer());

    expect(setOpenState).toBeCalled();
    expect(setOpenState).lastCalledWith(false);
  });
});
