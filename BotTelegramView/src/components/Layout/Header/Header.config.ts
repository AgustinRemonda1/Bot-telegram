import BotAction from 'Static/Assets/Images/robot.svg';
import Polls from 'Static/Assets/Images/poll-box.svg';
import UserTypes from 'Static/Assets/Images/account-group.svg';
import Subscribers from 'Static/Assets/Images/account.svg';
import Activities from 'Static/Assets/Images/clipboard-text-multiple.svg';
import Home from 'Static/Assets/Images/home.svg';
import { MenuConfigInterface } from './Header.types';

export const menuConfig = (language: any): MenuConfigInterface[] => [
  {
    icon: BotAction,
    name: language.botActions,
    route: '/Dashboard/Bot-Actions'
  },
  { icon: Polls, name: language.polls, route: '/Dashboard/Polls' },
  { icon: UserTypes, name: language.userTypes, route: '/Dashboard/User-Types' },
  {
    icon: Subscribers,
    name: language.subscribers,
    route: '/Dashboard/Subscribers'
  },
  {
    icon: Activities,
    name: language.activities,
    route: '/dashboard/activities',
    permissions: ['Activities']
  }
];

export const homePageConfig = (language: any) => ({
  icon: Home,
  name: language.homepage,
  route: '/Dashboard'
});

export const langOptions = [
  { name: 'ES', value: 'ES' },
  { name: 'EN', value: 'EN' }
];
