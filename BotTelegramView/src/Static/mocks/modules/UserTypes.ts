import { rest } from 'msw';

export const userTypes = [
  rest.get('/api/user-types', (req, res, ctx) => {
    const userType = {
      userTypeId: 1,
      type: 'user',
      description: 'user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const userTypes = new Array(3).fill(userType);

    return res(
      ctx.json({
        userTypes,
        total: 10
      })
    );
  })
];
