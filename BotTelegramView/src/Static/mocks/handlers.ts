import { auth } from './modules/Auth';
import { botSubsUsers } from './modules/BotSubUsers';
import { botUsers } from './modules/BotUsers';
import { commands } from './modules/Commands';
import { polls } from './modules/Poll';
import { userTypes } from './modules/UserTypes';

const handlers = [
  ...auth,
  ...botSubsUsers,
  ...botUsers,
  ...userTypes,
  ...polls,
  ...commands
];

export default handlers;
