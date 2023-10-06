import { rest } from 'msw';
import { commandsDataMock } from 'Static/Data';

export const commands = [
  rest.get('/api/bot-commands', (req, res, ctx) => {
    const pageSize = req.url.searchParams.get('pageSize');
    const page = req.url.searchParams.get('page');
    const pageSizeNumber = Number(pageSize);
    const pageNumber = Number(page) + 1;

    const startNumber =
      pageNumber === 1 ? 0 : pageNumber > 2 ? pageNumber * 10 : 10;

    return res(
      ctx.json({
        commands: commandsDataMock.slice(
          startNumber,
          pageSizeNumber * pageNumber
        ),
        total: commandsDataMock.length
      })
    );
  }),
  rest.get('/api/bot-commands/all', (req, res, ctx) => {
    return res(
      ctx.json({
        commands: commandsDataMock
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
