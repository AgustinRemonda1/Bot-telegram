import { rest } from 'msw';

export const auth = [
  rest.post('/api/login', (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          back_user_id: 1,
          user_role_id: 1,
          username: 'username',
          first_name: 'first name',
          last_name: 'last name',
          email: 'email',
          image: ''
        },
        token: 'asdasdasdasd'
      })
    );
  })
];
