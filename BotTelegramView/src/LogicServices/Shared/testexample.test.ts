import { renderHook, act } from '@testing-library/react-hooks';
import {
  plans,
  selected
} from 'components/Financial/Creator/Expiration/Expiration.data';
import useFinanceGroupEditor from './useFinanceGroupEditor';

//@todo: move tests for group draft and useValidator to their own modules
describe('useFinanceGroupEditor', () => {
  const groupMock = {
    name: 'super',
    categories: ['1'],
    comission: 1,
    observation: 'some observation',
    origin: 'Argentina',
    plans: ['123'],
    sellers: {
      ids: ['123'],
      all: false
    },
    validity: {
      from: new Date('2020-01-01'),
      to: new Date('2020-01-01')
    }
  };

  xit('returns an empty state', () => {
    const { result } = renderHook(() => useFinanceGroupEditor());

    expect(result.current.state).toEqual({
      errors: null,
      group: {
        sellers: {
          all: false,
          ids: []
        },
        categories: [],
        plans: [],
        validity: {
          from: new Date(),
          to: new Date()
        }
      },
      groupResponse: {
        actions: {
          setError: () => jest.fn(),
          setSuccess: () => jest.fn()
        },
        state: {
          error: null,
          success: null
        }
      }
    });
  });

  xit('initializes with a group when created with an id', async () => {
    const expected = groupMock;
    const GetFinanceGroup = jest.fn().mockResolvedValue(expected);
    const { result, waitForNextUpdate } = renderHook(() =>
      useFinanceGroupEditor({ id: '1', GetFinanceGroup })
    );

    await waitForNextUpdate();

    expect(result.current.state.group).toEqual(expected);
  });

  it('changes validity.from to lowest date when plan selection changes', () => {
    const { result } = renderHook(() => useFinanceGroupEditor({ plans }));
    act(() => result.current.actions.onPlansChange(['2a']));

    expect(result.current.state.group.validity?.from).toEqual(new Date());
  });

  describe('onNameChange', () => {
    it('updates state.name when called', () => {
      const { result } = renderHook(() => useFinanceGroupEditor());
      act(() => result.current.actions.onNameChange('super'));

      expect(result.current.state.group.name).toBe('super');
    });
  });

  describe('onComissionChange', () => {
    it('updates state.group.comission when called', () => {
      const { result } = renderHook(() => useFinanceGroupEditor());
      act(() => result.current.actions.onComissionChange(1));

      expect(result.current.state.group.comission).toBe(1);
    });
  });

  describe('onSubmit', () => {
    it('shows errors when group is empty', () => {
      const { result } = renderHook(() => useFinanceGroupEditor());
      act(() => {
        result.current.actions.onSubmit();
      });
      expect(result.current.state.errors).toEqual({
        categories: 'Seleccione al menos 1 categoría',
        comission: 'Proporcione una comisión',
        name: 'Proporcione un nombre',
        origin: 'Seleccione un origen',
        sellers: 'Seleccione al menos 1 seller',
        plans: 'Seleccione al menos 1 plan',
        validity: undefined
      });
    });

    it('show error on validity when date is lower than min date', () => {
      const { result } = renderHook(() => useFinanceGroupEditor({ plans }));
      act(() => {
        result.current.actions.onPlansChange(selected);
      });
      act(() => {
        result.current.actions.onValidityChange({
          from: new Date('2020-03-21'), // 1 day less than plan 2a
          to: new Date('2021-03-25')
        });
      });
      act(() => {
        result.current.actions.onSubmit();
      });
      expect(result.current.state.errors?.validity).toEqual(
        'La vigencia indicada se encuentra fuera del rango definido para los planes'
      );
    });

    it('does not shows error on validity when date is higher than min date', () => {
      const { result } = renderHook(() => useFinanceGroupEditor({ plans }));
      act(() => {
        result.current.actions.onPlansChange(selected);
      });
      act(() => {
        result.current.actions.onValidityChange({
          from: new Date('2021-03-22'),
          to: new Date('2021-03-22')
        });
      });
      act(() => {
        result.current.actions.onSubmit();
      });
      expect(result.current.state.errors?.validity).toEqual(
        'La vigencia indicada se encuentra fuera del rango definido para los planes'
      );
    });

    it('does not apply validation when called without min and max', () => {
      const { result } = renderHook(() => useFinanceGroupEditor());
      act(() => {
        result.current.actions.onValidityChange({
          from: new Date('2021-03-22'),
          to: new Date('2021-03-22')
        });
      });
      act(() => {
        result.current.actions.onSubmit();
      });
      expect(result.current.state.errors?.validity).toEqual(
        'La vigencia indicada se encuentra fuera del rango definido para los planes'
      );
    });

    it('updates the groups when setters are called', () => {
      const { result } = renderHook(() => useFinanceGroupEditor());
      const newDate = new Date();
      act(() =>
        result.current.actions.onCategoriesChange([
          { id: '1', name: 'Category 1' }
        ])
      );
      act(() => result.current.actions.onComissionChange(1));
      act(() => result.current.actions.onNameChange('super'));
      act(() =>
        result.current.actions.onObservationsChange('some observation')
      );
      act(() =>
        result.current.actions.onOriginChange({
          label: 'Argentina',
          value: 'Argentina'
        })
      );
      act(() => result.current.actions.onPlansChange(['123']));
      act(() =>
        result.current.actions.onSellersChange({ ids: ['123'], all: false })
      );
      act(() =>
        result.current.actions.onValidityChange({ from: newDate, to: newDate })
      );

      act(() => {
        result.current.actions.onSubmit();
      });
      expect(result.current.state.group).toEqual({
        name: 'super',
        categories: [
          {
            id: '1',
            name: 'Category 1'
          }
        ],
        comission: 1,
        observation: 'some observation',
        origin: {
          label: 'Argentina',
          value: 'Argentina'
        },
        plans: ['123'],
        sellers: {
          ids: ['123'],
          all: false
        },
        validity: {
          from: newDate,
          to: newDate
        }
      });
    });

    xit('saves the group when error is null', async () => {
      const expected = groupMock;
      const GetFinanceGroup = jest.fn().mockResolvedValue(expected);
      const SaveFinanceGroup = jest.fn().mockResolvedValue(true);
      const { result, waitForNextUpdate } = renderHook(() =>
        useFinanceGroupEditor({ id: '1', GetFinanceGroup, SaveFinanceGroup })
      );
      await waitForNextUpdate();

      act(() => result.current.actions.onSubmit());

      expect(SaveFinanceGroup).toHaveBeenCalledWith(groupMock);
    });
  });
});
