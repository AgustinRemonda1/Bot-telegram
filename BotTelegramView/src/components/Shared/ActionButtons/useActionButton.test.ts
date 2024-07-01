import { renderHook, act } from '@testing-library/react-hooks';
import useActionButton from './useActionButton';
import { IAction, IDataset } from 'LogicServices/Shared/Types';

const disabled = jest.fn((dataset: IDataset) => Boolean(dataset.some));

const onClick = jest.fn((dataset: IDataset) => dataset);

const action: IAction = {
  id: 'one',
  type: 'edit',
  title: 'a title',
  icon: 'icon',
  onClick
};

describe('useActionButton', () => {
  it('show click in false when useActionButton is initied', async () => {
    const { result } = renderHook(() => useActionButton({ dataset: {} }));

    expect(result.current.click).toBeFalsy();
  });

  it('show click in true when onClickTooltip is used with param in true', async () => {
    const { result } = renderHook(() => useActionButton({ dataset: {} }));

    act(() => result.current.onClickTooltip(true));
    expect(result.current.click).toBeTruthy();
  });

  it('show action onClick is called when onClick is used', async () => {
    const { result } = renderHook(() =>
      useActionButton({ dataset: { some: 'some' } })
    );

    act(() => result.current.onClick(action));

    expect(action.onClick).toBeCalled();
    expect(action.onClick).lastCalledWith(
      expect.objectContaining({ some: 'some' })
    );
    expect(result.current.click).toBeTruthy();
  });

  it('show click in false when onClickTooltip is used with false param after onClick used', async () => {
    const { result } = renderHook(() => useActionButton({ dataset: {} }));

    act(() => result.current.onClick(action));
    expect(result.current.click).toBeTruthy();

    act(() => result.current.onClickTooltip(false));
    expect(result.current.click).toBeFalsy();
  });

  it('show disabled in false when disabled is used and does not meet requirements', async () => {
    const { result } = renderHook(() => useActionButton({ dataset: {} }));

    expect(result.current.disabled({ ...action, disabled })).toBeFalsy();
    expect(disabled).toBeCalled();
  });

  it('show disabled in true when disabled is used and does meet requirements', async () => {
    const { result } = renderHook(() =>
      useActionButton({ dataset: { some: 'some' } })
    );

    expect(result.current.disabled({ ...action, disabled })).toBeTruthy();
    expect(disabled).toBeCalled();
    expect(action.onClick).toBeCalledWith(
      expect.objectContaining({ some: 'some' })
    );
  });
});
