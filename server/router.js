const Router = require('koa-router')
const router = new Router()

router.post('/', (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  ctx.set(
    'Access-Control-Allow-Headers', 'X-Device-Id,App-Id,Channel-Id,App-Version,X-User-Id,Network,Location,X-Auth,X-IP,X-Source-Url,X-Current-Url,Content-Type,X-Requested-With,X-client,Mobile-Operator')
  ctx.body = JSON.stringify({ a: '1' })
})

module.exports = router
