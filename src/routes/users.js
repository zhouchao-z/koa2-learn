const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/person', async (ctx, next) => {
  const { username, age } = ctx.request.body;
  ctx.body = {
    username,
    age
  }
})

module.exports = router
