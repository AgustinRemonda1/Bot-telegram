import { rest } from 'msw';
import { pollDataMock } from 'Static/Data';

export const polls = [
  rest.get('/api/polls', (req, res, ctx) => {
    return res(
      ctx.json({
        polls: pollDataMock,
        total: 10
      })
    );
  }),
  rest.delete('/api/poll/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'borrado'
      })
    );
  }),
  rest.put('/api/poll/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'actualizado'
      })
    );
  }),
  rest.post('/api/poll', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'creado'
      })
    );
  })
];
