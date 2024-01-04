import { useState, useEffect, useCallback } from 'react';
import { language } from 'Static/Lang/Lang.lang';
import { setCookieValue, getCookieValue } from 'Static/Utils/Cookies.utils';
import { IEvent } from '../Shared/Types';

const useLanguageProvider = () => {
  const { ES, EN } = language;
  const [languageProvider, setLanguageProvider] = useState(ES);
  const [lang, setLang] = useState('ES');

  useEffect(() => {
    const lang = getCookieValue('lang');

    setLang(String(lang));
  }, []);

  useEffect(() => {
    lang && setCookieValue('lang', lang);

    switch (lang) {
      case 'ES':
        setLanguageProvider(ES);
        break;
      case 'EN':
        setLanguageProvider(EN);
        break;
      default:
        setLanguageProvider(ES);
    }
  }, [lang]);

  const onChangeLanguage = useCallback((e: IEvent): void => {
    setLang(e.target.value);
  }, []);

  return { lang, onChangeLanguage, language: languageProvider };
};

export default useLanguageProvider;
