import { rest } from 'msw';
import { commandTypesDataMock } from 'Static/Data';

export const commandTypes = [
  rest.get('/api/command-types', (req, res, ctx) => {
    return res(
      ctx.json({
        commandTypes: commandTypesDataMock,
        total: 10
      })
    );
  })
];
