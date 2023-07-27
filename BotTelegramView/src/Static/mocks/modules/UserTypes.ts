import { rest } from 'msw';
import { userTypesDataMock } from 'Static/Data';

export const userTypes = [
  rest.get('/api/user-types', (req, res, ctx) => {
    return res(
      ctx.json({
        userTypes: userTypesDataMock,
        total: 10
      })
    );
  })
];
