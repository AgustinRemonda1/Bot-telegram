import { rest } from 'msw';

export const botStatistics = [
  rest.get('/api/bot-statistics', (req, res, ctx) => {
    return res(
      ctx.json({
        totalCommands: 20,
        totalSubscribers: 50,
        newLastAdmission: 12,
        totalPolls: 10
      })
    );
  })
];
