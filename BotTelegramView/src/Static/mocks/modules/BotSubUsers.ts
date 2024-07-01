import { rest } from 'msw';
import { botSubsUserDataMock } from 'Static/Data';

export const botSubsUsers = [
  rest.get('/api/bot-subs-users', (req, res, ctx) => {
    return res(
      ctx.json({
        botSubsUsers: botSubsUserDataMock,
        total: 10
      })
    );
  })
];
