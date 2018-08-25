/*
const assert = require("assert")

assert(true,"如果第一个参数的布尔值不为true,这个字符串就是报错信息")
*/

/*
const assert = require("assert")

assert.ok(true,"如果第一个参数的布尔值不为true,这个字符串就是报错信息");
*/

/*
const assert = require("assert")

assert.ok(0.1+0.2 ===0.3,"如果第一个参数的布尔值不为true,这个字符串就是报错信息");
//不等于他会报错
*/

/*
const assert = require("assert")

assert.equal(1,true,"如果第一个参数的布尔值不为true,这个字符串就是报错信息");
*/

/*
const assert = require("assert")

assert.deepEqual({a:1},{a:1},"如果第一个参数的布尔值不为true,这个字符串就是报错信息");
*/

/*
const assert = require("assert")

assert.deepEqual({a:'1'},{a:1},"如果第一个参数的布尔值不为true,这个字符串就是报错信息");
*/

/*
const assert = require("assert")
try {
    assert.deepEqual({a: '1'}, {a: 1}, "如果第一个参数的布尔值不为true,这个字符串就是报错信息");
}catch(error){
    console.log(1)
}
*/

/*
const crypto =require("crypto")
const KEY = "fenyushuaibi"

console.log(crypto.getHashes())

*/
/*
const crypto =require("crypto")
const KEY = "fenyushuaibi"
const obj = crypto.createHash("md5")
obj.update(KEY)
const password = obj.digest()
console.log(password)
*/
/*
const crypto =require("crypto")
const KEY = "fenyushuaibi"
const obj = crypto.createHash("md5")
obj.update(KEY)
const password = obj.digest("hex")
console.log(password)
*/

/*
const crypto =require("crypto")
const KEY = "fenyushua11ibi"+552455
const obj = crypto.createHash("md5")
obj.update(KEY)
const password = obj.digest("hex")
console.log(password)
*/

/*
//fs模块
const fs = require("fs")

fs.readFileSync("./1.txt",function (err,data) {
    console.log(err)
})
*/

/*
//fs模块  异步
const fs = require("fs")

fs.readFileSync("./1.txt",function (err,data) {
    console.log(data)
})

console.log(1)
*/

/*
//fs模块  同步
const fs = require("fs")

fs.readFile("./1.txt",function (err,data) {
    console.log(data)
})

console.log(1)
*/

/*
//fs模块  同步
const fs = require("fs")

fs.readFile("./1.txt",function (err,data) {
    console.log(err)
})

console.log(1)
*/

/*
//fs模块  同步
const fs = require("fs")

fs.readFile("./1.txt","utf8",function (err,data) {
    if(err)return
    console.log(data)
})

console.log(1)
*/

/*
const fs = require("fs")

const fn = async()=> {
    const data = await new Promise((resolve, reject) => {
        fs.readFile("./1.txt", "utf8", (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
    console.log(data)
}
*/

/*
const fs = require("fs")

const fn = async()=> {
    const data = await new Promise((resolve, reject) => {
        fs.readFile("./1.txt", "utf8", (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
    console.log(data)
}
console.log(1)
fn()
console.log(2)
*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.writeFile("./2.txt",data,err=>{
    if(err)throw err
    console.log("写入文件2.txt成功")
})
*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.writeFile("./2.txt",data,err=>{
    if(err)throw err
    console.log("写入文件2.txt成功")
})
fs.writeFileSync("./3.txt",data)
//执行node app
*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.exists("./2.txt",exists=> {
    console.log( exists)
})
*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.exists("./5.txt",exists=> {
    console.log( exists)
})
*/

/*
const fs = require("fs")

const data = "快乐我我我"

console.log(fs.existsSync("./1.txt"))
 */

/*
const fs = require("fs")

const data = "快乐我我我"

console.log(fs.existsSync("./node/"))
*/

/*
const fs = require("fs")

const data = "快乐我我我"
fs.writeFileSync("./node/1.txt","数据")
*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.mkdir("./test",(...r) =>{
    console.log(r)
})

*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.readdir("./node",(err,data)=>{
    console.log(data)
})
*/

/*
const fs = require("fs")

const data = "快乐我我我"

fs.readdir("./node",(err,data)=>{
    console.log(data)
})
*/


/*
const fs = require("fs")

const data = "快乐我我我"
const stat = fs.statSync("./node")

console.log(stat)
*/

/*
const fs = require("fs")

const data = "快乐我我我"
const stat = fs.statSync("./node")
console.log(stat.isDirectory())
*/

/*
const fs = require("fs")

const data = "快乐我我我"
const stat = fs.statSync("./node/1.txt")
console.log(stat.isDirectory())
*/

/*
const fs = require("fs")

const data = "快乐我我我"
const stat = fs.statSync("./node/")
console.log(stat.isFile())
*/

const fs = require("fs")

const data = "快乐我我我"

fs.watchFile("./node/1.txt",(c,p)=>{
    console.log(p)
    console.log(c)
})

fs.writeFileSync("./node/1.txt","快乐")