/*
    "http://localhost/path" GET POST
    CTX.PATH = /path
    ctx.method

    if("/path" === ctx.path && ctx.method ==="GET"){
    //响应
    }else{
        //什么都不干
        }
     npm i -S koa koa-router
     npm init -y
     get 查找
     post 增加
     put 修改
     delete 删除
 */

/*
const Koa = require('koa')
const Router = require('koa-router')

const  app = new Koa
const router = new Router

router.get("/",async (ctx,next)=>{
    console.log("接受根路由的get请求 --》 中间件1")
    await  next()
    console.log("中间件1 响应请求")
},async (ctx,next) =>{
    console.log("接受根路由的get请求 --》 中间件2")
    await  next()
    console.log("中间件2 响应请求")
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000)
*/

/*
const Koa = require('koa')
const Router = require('koa-router')

const  app = new Koa
const router = new Router

router.get("/",async (ctx,next)=> {
    console.log("接受根路由的get请求 --》 中间件1")
    await next()
    console.log("中间件1 响应请求")
})

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
    */

/*
const Koa = require('koa')
const Router = require('koa-router')

const  app = new Koa
const router = new Router

router.get("/",async (ctx,next)=> {
    ctx.body = "<h1>index</h1>"
})

router.get("/home",async (ctx,next)=> {
    ctx.body = "<h1>home</h1>"
})

router.get("/user",async (ctx,next)=> {
    ctx.body = "<h1>user</h1>"
})
app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
*/


/*
const Koa = require("koa")
const router = require('./router')

const app = new Koa

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
    */

/*
const Koa = require("koa")
const router = require('./router')

const app = new Koa

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)
    */

//npm i -S koa-body
//npm i -S @koa/cors@2 --save

const Koa = require("koa")
const router = require('./router')
const static = require('koa-static')
const koaBody = require("koa-body")
const cors = require('@koa/cors');
const { join } = require('path')

const app = new Koa

app
    .use(static(join(__dirname, "static")))
    .use(koaBody())

app.use(cors())

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000)