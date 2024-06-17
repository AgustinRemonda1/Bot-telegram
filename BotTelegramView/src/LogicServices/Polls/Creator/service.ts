import { updatePoll, createPoll, fetchPoll } from 'RepoServices/Polls';
import { IPoll } from '../Types';

export const savePoll = async (poll: IPoll, update: boolean) => {
  const response = update ? await updatePoll(poll) : await createPoll(poll);

  if (response !== 'error') {
    return response;
  }
};

export const getPoll = async (id: number) => {
  const response = await fetchPoll(id);

  if (response !== 'error') {
    return response.poll;
  }
};
