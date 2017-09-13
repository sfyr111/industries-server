const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/test', function (req, res, next) {
  res.send(req.body)
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