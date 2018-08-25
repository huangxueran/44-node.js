/*
const http =require("http")

http.createServer((req,res)=>{
    res.end(JSON.stringify(req.url))
}).listen(3000)
//运行nodemon app
*/
/*
//安装npm i -S koa@latest
const Koa = require("koa");

const app = new Koa

//中间件1
app.use(async(ctx,next)=>{
    console.log("中间1,接受请求")

    await next()

    console.log("中间件1,响应数据")
})

//中间件2
app.use(async(ctx,next)=>{
    console.log("中间2,接受请求")

    await next()

    console.log("中间件2,响应数据")
})

//中间件3
app.use(async(ctx,next)=>{
    console.log("中间3,接受请求")

    await next()

    console.log("中间件3,响应数据")
})

app.listen(3000)
*/

/*
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    ctx.body = ctx.url
})

app.listen(3000)

*/


/*
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    ctx.body = ctx.method
})

app.listen(3000)
*/

/*
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    ctx.body = ctx.ip
})

app.listen(3000)
*/

/*
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    ctx.body = ctx.path
})

app.listen(3000)
*/

/*
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    ctx.body = ctx.query
})

app.listen(3000)
*/

/*
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    cxt.status=201
    cxt.type="text/plain"
    ctx.body="<h1>h1</h1>"
})

app.listen(3000)
*/

//npm i -g fanyi
//cnpm i -S request
//cnpm i -S superagent
const Koa =require("koa")

const app = new Koa

app.use(async (ctx,next)=>{
    request
        .get("https://www.shiguangkey.com/course/search?key="+ctx.path)
        .end((err,res)=>{
            console.log(res)
        })
    ctx.body = "正在请求"
})

app.listen(3000)