import { rest } from 'msw';

export const botUsers = [
  rest.get('/api/bot-users', (req, res, ctx) => {
    const botUser = {
      botUserId: 12132123,
      userTypeId: 1,
      guaraniUserId: 1,
      telUserId: 123123123,
      telLastName: 'hola',
      telFirstName: 'manola',
      telUsername: 'XD',
      guaraniUser: {
        guaraniUserId: 1,
        dni: 123123123,
        email: 'asdasd',
        profile: 'asdasdas',
        phoneNumber: 123123123
      },
      userType: {
        userTypeId: 1,
        type: 'user',
        description: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };

    const botUsers = new Array(10).fill(botUser);

    return res(
      ctx.json({
        botUsers,
        total: 10
      })
    );
  })
];
