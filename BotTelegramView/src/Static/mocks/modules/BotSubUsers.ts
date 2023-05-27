import { rest } from 'msw';

export const botSubsUsers = [
  rest.get('/api/bot-subs-users', (req, res, ctx) => {
    const botSubUser = {
      userId: 1,
      dni: 419881322,
      firstName: 'hola',
      lastName: 'manola',
      dateSubscribe: new Date(),
      userType: {
        userTypeId: 1,
        type: 'user',
        description: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      verified: true
    };

    const botSubsUsers = new Array(10).fill(botSubUser);

    return res(
      ctx.json({
        botSubsUsers,
        total: 10
      })
    );
  })
];
