import { renderHook } from '@testing-library/react-hooks';
import { useUser } from './useUser';

describe('useUser', () => {
  it('its ready when get user succeeds', () => {
    const mockedRepo = { get: jest.fn() };
    mockedRepo.get.mockReturnValue({
      kind: 'Success',
      user: { permission: ['admin'] }
    });

    const { result } = renderHook(() => useUser({ userRepo: mockedRepo }));
    const { current } = result;

    expect(current.kind === 'Ready').toBe(true);
  });
});
