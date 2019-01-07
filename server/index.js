const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const initWs = require('./ws')
app.use(router.routes())

const server = require('http').Server(app.callback())
initWs(server)

server.listen(8081, function () {
    console.log('server listen at port 8081')
})
