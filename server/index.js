const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const ws = require('./ws')
app.use(router.routes())

const server = require('http').Server(app.callback())
ws.init(server)

server.listen(8081)
