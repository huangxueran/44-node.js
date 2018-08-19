//这些都是单独的
/*
setImmediate(()=>{
    console.log(1)
})

console.log(2)
*/

/*
Promise.resolve("1")
    .then(res=>{
        console.log(res)
    })

console.log(2)
在后台输出 node 03-nodejs
*/

/*
process.nextTick(()=>{
    console.log(1)
})

console.log(2)
在后台输出 node 03-nodejs
*/

/*
process.nextTick(()=>{
    console.log("nextTick 1")
})

process.nextTick(()=>{
    console.log("nextTick 2")
})
在后台输出 node 03-nodejs
*/

/*
process.nextTick(()=>{
    console.log("nextTick 1")
})


process.nextTick(()=>{
    console.log("nextTick 2")
})

setImmediate(()=>{
    console.log("immedidate 1")
})
*/

/*
process.nextTick(()=>{
    console.log("nextTick 1")
})


process.nextTick(()=>{
    console.log("nextTick 2")
})

setImmediate(()=>{
    console.log("immedidate 1")
    process.nextTick(()=>{
        console.log("nextTick 3")
    })
})

setImmediate(()=>{
    console.log("immedidate 2")
})

console.log("正常同步代码 1")
在后台输出 node 03-nodejs
*/

/*
process.nextTick(()=>{
    console.log("1")
})


process.nextTick(()=>{
    console.log("2")
})

setImmediate(()=>{
    console.log("3")
    process.nextTick(()=>{
        console.log("4")
    })
})

setImmediate(()=>{
    console.log("5")
})

setImmediate(function () {
    console.log(8)
},0)

process.nextTick(()=>{
    console.log(7)
})

console.log("6")  //1
//6 1 2 7 8 3 5 4

macro-task: script(全部的代码) setImmediate setTimeout
setImmediate I/O

micro-task: process.nextTick Promise

while (true){
    第一步:script(全部的代码)
}
*/


/*
Promise.resolve("1").then(res=>console.log(res))

process.nextTick(()=>{
    console.log(2)
})

setTimeout(()=>{
    console.log(3)
},0);

console.log(4)

// macro-task:script 定时器
// micro-task: process.nextTick Promise
// 4 2 1 3
*/

/*
setInterval(function () {
    console.log(1)
},0)

setTimeout(()=>{
    console.log(3)
},0);
*/

/*
let timer = null
setTimeout(()=>{
    console.log(3)
},0);

timer = setInterval(function () {
    console.log(1)
    clearInterval(timer)
})
*/

setImmediate(()=>{
    console.log(2)
})
setTimeout(()=>{
    console.log(3)
},0);
/*
while(true){

      }
事件观察者
idle观察者>I/O时间观察者>check观察者
nextTick>Promise.then>setTimeout>setImmedidate
*/

