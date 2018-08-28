/*
const Router = require('koa-router')
const admin = require('./admin')
const router = new Router


router.get('/', admin.root)
router.get('/home', admin.home)
router.get('/user', admin.user)


module.exports = router
*/

/*
const Router = require('koa-router')
const admin = require('./admin')
const router = new Router


router.get('/', admin.root)
router.get('/home', admin.home)
router.get('/user', admin.user)


module.exports = router
*/

const Router = require('koa-router')
const admin = require('./admin')
const router = new Router


router.get('/', admin.root)
router.get('/home', admin.home)
router.get('/user', admin.user)
router.post("/postDateShow",async ctx =>{
  ctx.body=ctx.request.body
})

module.exports = router