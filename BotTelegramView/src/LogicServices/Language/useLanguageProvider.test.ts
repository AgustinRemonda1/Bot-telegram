import { act, renderHook } from '@testing-library/react-hooks';
import useLanguageProvider from './useLanguageProvider';
import { language } from 'Static/Lang/Lang.lang';

const getCookieValue = jest.fn((value: string) => 'ES');
const setCookieValue = jest.fn((name: string, value: string) => value);

jest.mock('Static/Utils/Cookies.utils', () => ({
  getCookieValue: (value: string) => getCookieValue(value),
  setCookieValue: (name: string, value: string) => setCookieValue(name, value)
}));

describe('useLanguageProvider', () => {
  it('show initial state when useLanguageProvider is initied', async () => {
    const { result } = renderHook(() => useLanguageProvider());

    expect(result.current.lang).toBe('ES');
    expect(result.current.language).toEqual(language.ES);
  });

  it('show getCookieValue is called when useLanguageProvider is initied', async () => {
    const {} = renderHook(() => useLanguageProvider());

    expect(getCookieValue).toBeCalled();
    expect(getCookieValue).lastCalledWith('lang');
  });

  it('show as language changed when onChangeLanguage is used with the preferred language', async () => {
    const { result } = renderHook(() => useLanguageProvider());

    act(() =>
      result.current.onChangeLanguage({
        target: { name: 'language', value: 'EN' }
      })
    );

    expect(result.current.lang).toBe('EN');
    expect(result.current.language).toEqual(language.EN);
  });

  it('show setCookieValue is called when onChangeLanguage is used with the preferred language', async () => {
    const { result } = renderHook(() => useLanguageProvider());

    act(() =>
      result.current.onChangeLanguage({
        target: { name: 'language', value: 'EN' }
      })
    );

    expect(setCookieValue).toBeCalled();
    expect(setCookieValue).lastCalledWith('lang', 'EN');
  });
});
