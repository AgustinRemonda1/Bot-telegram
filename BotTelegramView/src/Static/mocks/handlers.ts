import { auth } from './modules/Auth';
import { botSubsUsers } from './modules/BotSubUsers';
import { botUsers } from './modules/BotUsers';
import { commands } from './modules/Commands';
import { surveys } from './modules/Survey';
import { botStatistics } from './modules/Statistics';
import { userTypes } from './modules/UserTypes';
import { commandTypes } from './modules/CommandTypes';

const handlers = [
  ...auth,
  ...botSubsUsers,
  ...botUsers,
  ...userTypes,
  ...surveys,
  ...commands,
  ...botStatistics,
  ...commandTypes
];

export default handlers;
