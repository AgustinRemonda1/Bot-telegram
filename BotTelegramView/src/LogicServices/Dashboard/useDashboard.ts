import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ICommand } from 'LogicServices/Commands/Types';
import { ISurvey } from 'LogicServices/Surveys/Types';
import { fetchStatistics } from 'RepoServices/Statistics';
import { fetchCommands, refreshCommand } from 'RepoServices/Commands';
import { fetchSurveys } from 'RepoServices/Surveys';
import { IStatistics } from './Types';

const INITIAL_STATISTICS = {
  totalCommands: 0,
  totalSubscribers: 0,
  newLastAdmission: 0,
  totalSurveys: 0
};

const useDashboard = () => {
  const [statistics, setStatistics] = useState<IStatistics>(INITIAL_STATISTICS);
  const [commands, setCommands] = useState<ICommand[]>([]);
  const [surveys, setSurveys] = useState<ISurvey[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const PARAMS = { page: 0, pageSize: 3 };
      const statistics = await fetchStatistics();
      const commands = await fetchCommands(PARAMS);
      const surveys = await fetchSurveys(PARAMS);

      if (
        statistics !== 'error' &&
        commands !== 'error' &&
        surveys !== 'error'
      ) {
        setStatistics(statistics);
        setCommands(commands.commands);
        setSurveys(surveys.surveys);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const onRefreshCommands = useCallback(async () => {
    await refreshCommand();
  }, []);

  const onRedirectBotActions = useCallback(() => {
    router.replace('Dashboard/Bot-Actions');
  }, [router]);

  const onRedirectSurvey = useCallback(() => {
    router.replace('Dashboard/Surveys');
  }, [router]);

  return {
    state: { statistics, commands, surveys, loading },
    actions: { onRedirectBotActions, onRedirectSurvey, onRefreshCommands }
  };
};

export default useDashboard;
