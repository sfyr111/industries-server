const express = require('express')
const router = express.Router()

const { getDetail, getSearch, saveCollectArticles, deleteCollectArticles, getCollectArticles, judgeCollectArticles } = require('../controller/industry/comb')

/**
 * comb
 */
router.get('/detail.do', getDetail)
router.get('/search.do', getSearch)
router.post('/bookmark/save.do', saveCollectArticles)
router.post('/bookmark/del.do', deleteCollectArticles)
router.get('/bookmark/get.do', getCollectArticles)
router.get('/bookmark/marked.do', judgeCollectArticles)

module.exports = router
