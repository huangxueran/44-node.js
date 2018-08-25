/*
//先下载cnpm insatall koa --save
const Koa = require('Koa');
console.log(Koa);
//在后台输出node app
*/

/*
const Koa = require('Koa');
const app =  new Koa;
console.log(app);
//在后台输出node app
*/

/*
const Koa = require('Koa');
const app = new Koa

app.use(async (ctx)=>{
    ctx.body = "这是后台返回的数据";
})
app.listen(3000);


//cnpm install koa-router --save-dev
*/

/*
const EventEmitter = require('event').EventEmitter;

const myEmitter = new EventEmitter;

const fn = ()=>{
    console.log("这是某个一部的回调函数")
};
//这里有一个异步操作
setTimeout(()=>{
    //一部由结果
    myEmitter.emit("someEvents")
},2000);

myEmitter.on("someEvent",fn);
*/

/*
const EventEmitter = require('event').EventEmitter;

const myEmitter = new EventEmitter;

const fn = ()=>{
    console.log("这是某个一部的回调函数")
};
//这里有一个异步操作
setTimeout(()=>{
    //一部由结果
    myEmitter.emit("liliang")
},2000);

myEmitter.on("liliang",fn)
myEmitter.on("liliang",()->{
    console.log("li1")
})

*/
/*
const EventEmitter = require("events").EventEmitter;

const myEmitter = new EventEmitter;
function Fn() {
    this.name = name
}

Fn.propotype.__protype__ = EventEmitter.prototype;

const obj = new Fn("大帅逼");

obj.on("fy",function(){
    console.log(this)
});

setTimeout(()=>{
    obj.emit("fy")
},1000);
*/

/*
const EventEmitter = require("events").EventEmitter;

const myEmitter = new EventEmitter;
myEmitter.on("newListener",function () {
    console.log("myEmitter绑定了一个新的事件监听")
})

myEmittere.on("fy",()=>{
    console.log(1)
})
myEmittere.on("fy",()=>{
    console.log(2)
})
*/

/*
const EventEmitter = require("events").EventEmitter;

const myEmitter = new EventEmitter;

myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners())

myEmittere.on("fy",()=>{
    console.log(1)
})
myEmittere.on("fy",()=>{
    console.log(2)
})

console.log(myEmitter.listener("fy"))

*/

/*
const EventEmitter = require("events").EventEmitter;

const myEmitter = new EventEmitter;

myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners())

myEmittere.on("fy",()=>{
    console.log(1)
})
myEmittere.on("fy",()=>{
    console.log(2)
})

myEmitter.emit("fy");

*/

/*
const EventEmitter = require("events").EventEmitter;

const myEmitter = new EventEmitter;

myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners())

myEmittere.on("fy",()=>{
    console.log(1)
})
myEmittere.on("fy",()=>{
    console.log(2)
})
myEmittere.on("fy",()=>{
    console.log(3)
})
myEmittere.on("fy",()=>{
    console.log(4)
})
myEmittere.on("fy",()=>{
    console.log(5)
})
myEmittere.on("fy",()=>{
    console.log(6)
})
myEmittere.on("fy",()=>{
    console.log(7)
})
myEmittere.on("fy",()=>{
    console.log(2)
})
myEmittere.on("fy",()=>{
    console.log(8)
})
myEmittere.on("fy",()=>{
    console.log(9)
})

myEmittere.on("fy",()=>{
    console.log(11)
})
myEmitter.emit("fy");
*/

/*
const  path = require("path")

console.log(__dirname);
*/

/*
const  path = require("path")

console.log(path.join("a","b"))
*/
/*
const  path = require("path")

console.log(path.join("a","b","c"))
*/

/*
const  path = require("path")

console.log(path.join("a","./b","./c"))
*/

/*
const  path = require("path")

console.log(path.join("a","./b","~"))
*/

/*
const  path = require("path")
console.log(path.resolve("a"))
*/

/*
const  path = require("path")
console.log(path.resolve(__dirname,"./test"))
*/

/*
const  path = require("path")
console.log(path.resolve(__dirname,"./test","a"))
*/

/*
const  path = require("path")
console.log(path.parse(__filename))
*/

const  path = require("path")
console.log(path.parse(__filename).base)
