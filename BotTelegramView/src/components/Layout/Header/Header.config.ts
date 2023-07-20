import BotAction from 'Static/Assets/Images/robot.svg';
import Polls from 'Static/Assets/Images/poll-box.svg';
import UserTypes from 'Static/Assets/Images/account-group.svg';
import Subscribers from 'Static/Assets/Images/account.svg';
import Activities from 'Static/Assets/Images/clipboard-text-multiple.svg';
import Home from 'Static/Assets/Images/home.svg';
import { MenuConfigInterface } from './Header.types';

export const menuConfig = (language: any): MenuConfigInterface[] => [
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
