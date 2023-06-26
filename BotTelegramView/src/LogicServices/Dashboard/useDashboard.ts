import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ICommand } from 'LogicServices/Commands/Types';
import { IPoll } from 'LogicServices/Polls/Types';
import { fetchStatistics } from 'RepoServices/Statistics';
import { fetchCommands, refreshCommand } from 'RepoServices/Commands';
import { fetchPolls } from 'RepoServices/Polls';
import { IStatistics } from './Types';

const INITIAL_STATISTICS = {
  totalCommands: 0,
  totalSubscribers: 0,
  newLastAdmission: 0,
  totalPolls: 0
};

const useDashboard = () => {
  const [statistics, setStatistics] = useState<IStatistics>(INITIAL_STATISTICS);
  const [commands, setCommands] = useState<ICommand[]>([]);
  const [polls, setPolls] = useState<IPoll[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const PARAMS = { page: 0, pageSize: 3 };
      const statistics = await fetchStatistics();
      const commands = await fetchCommands(PARAMS);
      const polls = await fetchPolls(PARAMS);

      if (statistics !== 'error' && commands !== 'error' && polls !== 'error') {
        setStatistics(statistics);
        setCommands(commands.commands);
        setPolls(polls.polls);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const onRefreshCommands = useCallback(async () => {
    await refreshCommand();
  }, []);

  const onRedirectBotActions = useCallback(() => {
    router.replace('dashboard/bot-actions');
  }, [router]);

  const onRedirectPoll = useCallback(() => {
    router.replace('dashboard/polls');
  }, [router]);

  return {
    state: { statistics, commands, polls, loading },
    actions: { onRedirectBotActions, onRedirectPoll, onRefreshCommands }
  };
};

export default useDashboard;
