import { rest } from 'msw';

export const polls = [
  rest.get('/api/polls', (req, res, ctx) => {
    const pageSize = req.url.searchParams.get('pageSize');
    const toNumber = Number(pageSize);

    const question = {
      pollQuestionId: 1,
      pollId: 1,
      question: 'question',
      description: 'description',
      typeQuestion: 'question',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const questions = new Array(10).fill(question);

    const poll = {
      pollId: 1,
      name: 'hola',
      description: 'manola',
      userTypeId: 1,
      userType: {
        userTypeId: 1,
        type: 'user',
        description: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      questions,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const polls = new Array(toNumber).fill(poll);

    return res(
      ctx.json({
        polls,
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
