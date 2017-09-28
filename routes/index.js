const express = require('express')
const router = express.Router()
const axios = require('../service/axios')
const qs = require('qs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/test', function (req, res, next) {
  res.send('ok')
})

router.post('/test', function (req, res, next) {
  res.send(req.body)
})

// router.get('/zha', function (req, res, next) {
//   var arr = []
//   // for (var i = 0; i < 1000; i++) {
//   //
//   // }
//   Promise.all()
// })

router.get('/session', function (req, res, next) {
  axios.get('http://192.168.114.10:8080/demo2/servlet01', qs.stringify(req.query))
    .then(data => {
      console.log(data.headers)
      console.log(data.data)
      res.json(data.data)
    })
  // ;(async () => {
  //   const data = await axios.get('http://192.168.114.10:8080/demo2/servlet01', qs.stringify(req.query))
  //   return {
  //     data: data.data
  //   }
  // })()
  //   .then(data => {
  //     console.log(data.data)
  //   })
  //   .catch(e => console.log(e))
})

/**
 * rasa
 */
router.post('/data', function (req, res, next) {
  res.json({
    data: {
      'rasa_nlu_data': {
        'common_examples': [
          {
            'text': 'hey',
            'intent': 'greet',
            'entities': []
          },
          {
            'text': 'howdy',
            'intent': 'greet',
            'entities': []
          }
        ]
      }
    },
    path: '/relative/path'
  })
})

router.post('/save', function (req, res, next) {
  console.log(JSON.stringify(req.body))
})

module.exports = router
