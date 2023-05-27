import { rest } from 'msw';

export const commands = [
  rest.get('/api/bot-commands', (req, res, ctx) => {
    const pageSize = req.url.searchParams.get('pageSize');
    const toNumber = Number(pageSize);

    const command = {
      botCommandId: 1,
      commandTypeId: 1,
      name: 'hola',
      telCommand: 'hola',
      description: 'manola',
      status: true,
      userTypeId: 1,
      userType: {
        userTypeId: 1,
        type: 'user',
        description: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      botResponses: {},
      commandType: {
        commandTypesId: 1,
        type: 'user',
        description: 'user'
      },
      botNestedCommands: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const commands = new Array(toNumber).fill(command);

    return res(
      ctx.json({
        commands,
        total: 10
      })
    );
  }),
  rest.delete('/api/bot-command/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'borrado'
      })
    );
  }),
  rest.put('/api/bot-command/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'actualizado'
      })
    );
  }),
  rest.post('/api/bot-command', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'creado'
      })
    );
  })
];
