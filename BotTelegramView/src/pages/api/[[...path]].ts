import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = { api: { bodyParser: false } };

console.log(`FINANCE_GROUP_API: ${process.env.FINANCE_GROUP_API}`);

export default createProxyMiddleware({
  timeout: 90000,
  target: '/',
  logLevel: 'debug',
  pathRewrite: {
    '/api/login': '',
    '/api/bot-users': ''
  },
  router: {
    '/api/login': process.env.BOT_API,
    '/api/bot-users': process.env.BOT_API
  }
});
