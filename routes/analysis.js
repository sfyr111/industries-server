const express = require('express')
const router = express.Router()

const { getAnalysisPlan, createAnalysisPlan, deleteAnalysisPlan, getRecommendAnalysisPlan, modifyPlan, getChart0 } = require('../controller/industry/analysis')

/**
 * /analysis
 */
router.post('/plan/insert.do', createAnalysisPlan)
router.delete('/plan/delete.do', deleteAnalysisPlan)
router.get('/plan/get.do', getAnalysisPlan)
router.patch('/plan/modify.do', modifyPlan)
router.get('/recommendPlan/get.do', getRecommendAnalysisPlan)
router.get('/chart0.do', getChart0) // 数据时间趋势图

module.exports = router
