import { rest } from 'msw';

export const auth = [
  rest.post('/api/login', (req, res, ctx) => {
    return res(
      ctx.json({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiYWNrX3VzZXJfaWQiOjEsInVzZXJSb2xlSWQiOjEsInVzZXJuYW1lIjoidXNlcm5hbWUiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6ImVtYWlsIiwiaW1hZ2UiOiJodHRwczovL2NvbmNlcHRvLmRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL3ByZWhpc3RvcmlhMi1lMTUzOTAyNTc5ODk1NC5qcGcifQ.r40QGQ1ZpmNvf7Ibok6sC9q-JTT7uJcYNnjeDA2PLEw'
      })
    );
  })
];
