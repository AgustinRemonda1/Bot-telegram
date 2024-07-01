import { rest } from 'msw';
import { surveyDataMock } from 'Static/Data';

export const surveys = [
  rest.get('/api/survey/:id', (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.json({
        survey: surveyDataMock.find((survey) => survey.surveyId === Number(id))
      })
    );
  }),
  rest.get('/api/surveys', (req, res, ctx) => {
    return res(
      ctx.json({
        surveys: surveyDataMock,
        total: 10
      })
    );
  }),
  rest.delete('/api/survey/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'borrado'
      })
    );
  }),
  rest.put('/api/survey/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'actualizado'
      })
    );
  }),
  rest.post('/api/survey', (req, res, ctx) => {
    return res(
      ctx.json({
        message: 'creado'
      })
    );
  })
];
