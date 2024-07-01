import React, { ReactNode, useContext } from 'react';
import useAuth from 'LogicServices/Auth/Auth/useAuth';
import EmptyPage from 'components/Shared/EmptyPage/EmptyPage';
import LockIcon from '@mui/icons-material/Lock';
import LoadingPage from 'components/Shared/LoadingPage';
import { LanguageContext } from 'Static/Lang/Lang.lang';

interface IProps {
  children: ReactNode;
}

const PageGuard = ({ children }: IProps) => {
  const { state } = useAuth();
  const { language } = useContext(LanguageContext);

  return (
    <>
      {state.auth && !state.loading ? (
        children
      ) : !state.auth && !state.loading ? (
        <EmptyPage
          icon={<LockIcon />}
          title={language.permissionDenied}
          message={language.signInToViewThisPage}
        />
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default PageGuard;
