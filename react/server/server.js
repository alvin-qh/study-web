const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  ctx.headers = {
    'Content-Type': 'application/json',
    ...ctx.headers
  }
  await next();
});

router.get('/', async (ctx, next) => {
  ctx.body = JSON.stringify({
    message: 'Hello'
  });
});

app.use(router.routes());

app.listen(9090);
