/*
const fs =require("fs")
fs.readFile("1.txt","utf8",(err,data)=>{
    console.log(data)
})
*/

/*
const fs = require("fs")

fs.readFile("1.txt","utf8",(err,data)=>{
    console.log(1)
})
*/

/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

read.on("end",()=>{
    console.log("读取结束")
})
//node app
*/

/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

read.resume()

read.on("end",()=>{
    console.log("读取结束")
})
*/

/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

read.on("data",data =>{
    console.log(data)
})

read.on("end",()=>{
    console.log("读取结束")
})
*/

/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

read.setEncoding("utf8")

read.on("data",data =>{
    console.log(data)
})

read.on("end",()=>{
    console.log("读取结束")
})
*/

/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

read.setEncoding("utf8")

read.on("data",data =>{
    console.log(1)
})

read.on("end",()=>{
    console.log("读取结束")
})
*/

/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

const write = fs.createWriteStream("2.txt")

let res = ""

read.on("data",data=>{
    res +=data
})

read.on("end",()=>{
    console.log("读取结束")
})
*/


/*
const fs = require("fs")

const read = fs.createReadStream("1.txt")

const write = fs.createWriteStream("2.txt")

read.pipe(write)
*/

/*
const Readable = require("stream").Readable

const rs = new Readable

rs.push("1")
rs.push("2")
rs.push(null)

rs.pipe(process.stdout)
*/

/*
const Readable = require("stream").Readable

const rs = new Readable
rs.setEncoding("utf8")
rs.push("1")
rs.push("2")
rs.push(null)

rs.on("data",(chunk) =>{
    console.log(chunk)
})
*/

/*
const Readable = require("stream").Readable
const fs =require("fs")

const write = fs.createWriteStream("3.txt")

const rs = new Readable
rs.setEncoding("utf8")
rs.push("1")
rs.push("2")
rs.push(null)

rs.pipe(write)
*/

/*
//安装npm i -g nodemon
//nodemon app

const http =require('http')

const server = http.createServer((req,res)=>{
    res.write("向客户端返回数据")
    res.end()
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain;charset-utf-8"})
    res.write("哇撒撒")
    res.end()
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain;charset-utf-8"})
    res.write("哇撒撒")
    res.write("我爱你吗")
    res.end(".")
    res.end("!")
    console.log(1)
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    console.log(res)
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
   res.end(req.url)
})

server.listen(3000)
console.log("服务启动了")
//nodemon app
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    res.end(req.method)
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    res.end(JSON.stringify(req.headers))
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    res.end("<a href='http://www.baidu.com'>百度</a>")
})
server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')
const fs =require('fs')
const server = http.createServer((req,res)=>{
   if(req.method ==="GET"){
       switch(req.url){
           case "/":
                //index
            res.write("<h1>index</h1>")
               break;

           case "/home":
               //home
               res.write("<h1>home</h1>")
               break;

           case "/user":
               //user
               res.write("<h1>kuaile</h1>")
               break;

           default:
               //404
               res.write("<h1>404</h1>")
               break;
               res.end()
       }
   }
})
server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')
const fs =require('fs')
const server = http.createServer((req,res)=>{
    if(req.method ==="GET"){
        res.writeHead(200,{"Content-Type":"text/html;chartset=utf-8"})
        switch(req.url){
            case "/":
                //index
                res.write("<h1>index</h1>")
                break;

            case "/home":
                //home
                res.write("<h1>home</h1>")
                break;

            case "/user":
                //user
                res.write("<h1>kuaile</h1>")
                break;

            default:
                //404
                res.write("<h1>404</h1>")
                break;
                res.end()
        }
    }
})
server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain;charset-utf-8"})

    res.end(".")

    console.log(1)
})

server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')
const fs =require('fs')
const server = http.createServer((req,res)=>{
    if(req.method ==="GET"){
        if(req.url ==="/favicon.ico")return
        res.writeHead(200,{"Content-Type":"text/html;chartset=utf-8"})
        switch(req.url){
            case "/":
                //index
                fs.readFile("index.html","utf8",(err,data)=>{
                    res.write(data)
                    res.end()
                })
                break;

            case "/home":
                //home
                res.write(fs.readFileSync("home.html","utf8"))
                break;

            case "/user":
                //user
                res.write(fs.readFileSync("user.html","utf8"))
                break;

            default:
                //404
                res.write(fs.readFileSync("404.html","utf8"))
                break;
                res.end()
        }
    }
})
server.listen(3000)
console.log("服务启动了")
*/

/*
const http =require('http')
const fs =require('fs')
const server = http.createServer((req,res)=>{

    if(req.method ==="GET"){
        if(req.url ==="/favicon.ico")return
        res.writeHead(200,{"Content-Type":"text/html;chartset=utf-8"})
        switch(req.url){
            case "/":
                fs.createReadStream("index.html").pipe(res)
                break;
            case "/home":
                //home
                res.write(fs.readFileSync("home.html","utf8"))
                break;

            case "/user":
                //user
                res.write(fs.readFileSync("user.html","utf8"))
                break;

            default:
                //404
                res.write(fs.readFileSync("404.html","utf8"))
                break;
                res.end()
        }
    }
})
server.listen(3000)
console.log("服务启动了")
*/

