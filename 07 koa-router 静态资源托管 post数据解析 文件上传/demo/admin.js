/*
exports.root = async (ctx) => {
  ctx.body = "index"
}
exports.home = async (ctx) => {
  ctx.body ="home"
}
exports.user = async (ctx) => {
  ctx.body = "user"
}
*/

/*
exports.root = async (ctx) => {
    ctx.body = "<h1>index-router</h1>"
}
exports.home = async (ctx) => {
    ctx.body ="<h1>home-router</h1>"
}
exports.user = async (ctx) => {
    ctx.body = "<h1>user-router</h1>"
}

*/

const fs = require('fs')

exports.root = async (ctx) => {
    ctx.body = fs.readFileSync("index.html", 'utf8')
}
exports.home = async (ctx) => {
    ctx.body = fs.readFileSync("home.html", 'utf8')
}
exports.user = async (ctx) => {
    ctx.body = fs.readFileSync("user.html", 'utf8')
}