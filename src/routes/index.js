const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: true
  })
})

router.get('/profile/:username', async (ctx, next) => {
  const { username } = ctx.params
  ctx.body = `<h2>hello world<h2>`
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
