import { act, renderHook } from '@testing-library/react-hooks';
import useHeader from './useHeader';

const AUTH_STATE = {
  user: {
    backUserId: 1,
    userRoleId: 1,
    username: 'an username',
    firstName: 'a first name',
    lastName: 'a lastname',
    email: 'an email',
    image: 'an image'
  },
  auth: true,
  loading: false
};

jest.mock('LogicServices/Auth/Auth/useAuth', () => () => ({
  state: AUTH_STATE
}));

describe('useHeader', () => {
  it('show initial state when useHeader is initied', async () => {
    const { result } = renderHook(() => useHeader());

    const expected = {
      open: false,
      anchorEl: null,
      ...AUTH_STATE
    };

    expect(result.current.state).toEqual(expected);
  });

  it('show open in true and anchorEl with an element when onOpenMenu is used with an element', async () => {
    const { result } = renderHook(() => useHeader());

    const element = document.createElement('div');

    const expected = {
      open: true,
      anchorEl: element,
      ...AUTH_STATE
    };

    act(() => result.current.actions.onOpenMenu({ currentTarget: element }));

    expect(result.current.state).toEqual(expected);
  });

  it('show open in false and anchorEl in null when onCloseMenu is used', async () => {
    const { result } = renderHook(() => useHeader());

    const element = document.createElement('div');

    const expected = {
      open: false,
      anchorEl: null,
      ...AUTH_STATE
    };

    act(() => result.current.actions.onOpenMenu({ currentTarget: element }));

    expect(result.current.state.anchorEl).toEqual(element);
    expect(result.current.state.open).toBeTruthy();

    act(() => result.current.actions.onCloseMenu());

    expect(result.current.state).toEqual(expected);
  });
});
