import { auth } from './modules/Auth';
import { botSubsUsers } from './modules/BotSubUsers';
import { botUsers } from './modules/BotUsers';
import { commands } from './modules/Commands';
import { polls } from './modules/Poll';
import { botStatistics } from './modules/Statistics';
import { userTypes } from './modules/UserTypes';

const handlers = [
  ...auth,
  ...botSubsUsers,
  ...botUsers,
  ...userTypes,
  ...polls,
  ...commands,
  ...botStatistics
];

export default handlers;
