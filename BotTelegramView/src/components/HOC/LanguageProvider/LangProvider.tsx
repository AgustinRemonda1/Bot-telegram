import React, { ReactNode } from 'react';
import { LanguageContext } from 'Static/Lang/Lang.lang';
import useLanguageProvider from 'LogicServices/Language';

interface IProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: IProps) => {
  const { lang, onChangeLanguage, language } = useLanguageProvider();

  return (
    <LanguageContext.Provider
      value={{
        lang,
        onChangeLanguage,
        language
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
