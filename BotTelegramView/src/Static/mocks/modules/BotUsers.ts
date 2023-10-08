import { rest } from 'msw';
import { botUsersDataMock } from 'Static/Data';

export const botUsers = [
  rest.get('/api/bot-users', (req, res, ctx) => {
    return res(
      ctx.json({
        botUsers: botUsersDataMock,
        total: 10
      })
    );
  })
];
