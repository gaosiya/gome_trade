const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const fs = require('fs')
const app = new Koa()
const Router = require('koa-router')
const staticPath = './'
app.use(static(
  path.join( __dirname,  staticPath)
))
let list = fs.readFileSync('./db.json')
let detail = new Router()
// post请求
detail.post('/shopowner/withdrawCash/v1/transactionRecord', ( ctx )=>{
  ctx.body = list.comments
})

// get路由
let page = new Router()
page.get('/404', ( ctx )=>{
  ctx.body = '404 page!'
}).get('/shopowner/withdrawCash/v1/transactionCodelist', ( ctx )=>{
  ctx.body = list.news
})

// 装载所有子路由
let router = new Router()
router.use('/', detail.routes(), detail.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
//app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})