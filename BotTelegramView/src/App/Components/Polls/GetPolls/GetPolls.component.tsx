import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje';
import GetPollsContent from './GetPolls.content';
import { GetPollProps } from './GetPolls.interface';


const GetPolls = ({ polls, total, sucess, fetching, getPollsRequest, clearPollStates}: GetPollProps) => {
  const { language } = useContext(LanguageContext);
  
  useEffect(()=>{
    const requestOptions = {
      params: { page: 0, pageSize: 10 }
    };

    getPollsRequest(requestOptions);
  },[])

  const handleChangePage = async (page:number, pageSize:number) => {
    const requestOptions = {
      params: { page, pageSize }
    };

    await getPollsRequest(requestOptions)
  }

  return (
    <GetPollsContent
      language={language}
      handleChangePage={handleChangePage}
      polls={polls}
      total={total}
      fetching={fetching}
    />
  )
}

export default GetPolls;