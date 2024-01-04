import BotAction from 'Static/Assets/Icons/robot.svg';
import Polls from 'Static/Assets/Icons/poll-box.svg';
import UserTypes from 'Static/Assets/Icons/account-group.svg';
import Subscribers from 'Static/Assets/Icons/account.svg';
import Activities from 'Static/Assets/Icons/clipboard-text-multiple.svg';
import Home from 'Static/Assets/Icons/home.svg';
import { IMenuConfig } from './Header.types';
import { ILanguage } from 'Static/Lang/Lang.lang';

export const menuConfig = (language: ILanguage): IMenuConfig[] => [
  {
    icon: Home.src,
    name: language.homepage,
    route: '/Dashboard'
  },
  {
    icon: BotAction.src,
    name: language.botActions,
    route: '/Dashboard/Bot-Actions'
  },
  { icon: Polls.src, name: language.polls, route: '/Dashboard/Polls' },
  {
    icon: UserTypes.src,
    name: language.userTypes,
    route: '/Dashboard/User-Types'
  },
  {
    icon: Subscribers.src,
    name: language.subscribers,
    route: '/Dashboard/Subscribers'
  },
  {
    icon: Activities.src,
    name: language.activities,
    route: '/dashboard/activities',
    permissions: ['Activities']
  }
];

export const langOptions = [
  { name: 'ES', value: 'ES' },
  { name: 'EN', value: 'EN' }
];
