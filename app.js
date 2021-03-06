const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const comb = require('./routes/comb')
const index = require('./routes/index')
const industry = require('./routes/industry')
const analysis = require('./routes/analysis')

// const session = require('express-session')
// const redis = require('redis')
// const RedisStore = require('connect-redis')(session)

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH')
  res.header('Access-Control-Allow-Credentials', true) // 可以带cookies
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

// app.use(session({
//   store: new RedisStore({host: '127.0.0.1', port: 6379}),
//   secret: 'keyboard cat',
//   cookie: {
//     maxAge: 30 * 1000
//   }
// }))
// app.get('/vi', function (req, res, next) {
//   console.log(req.session)
//   if (!req.session.isVisit) {
//     req.session.isVisit++
//     res.json({
//       visit: req.session.isVisit
//     })
//     // return next(new Error('oh no')) // handle error
//   }
//   req.session.isVisit = 1
//   res.json({
//     visit: req.session.isVisit
//   })
//   // otherwise continue
// })

// view engine setup
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/comb', comb)
app.use('/industry', industry)
app.use('/analysis', analysis)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
