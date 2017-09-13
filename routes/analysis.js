const express = require('express')
const router = express.Router()

const { getAnalysisPlan, createAnalysisPlan, deleteAnalysisPlan, getRecommendAnalysisPlan } = require('../controller/industry/analysis')

/**
 * /analysis
 */
router.post('/plan/insert.do', createAnalysisPlan)
router.delete('/plan/delete.do', deleteAnalysisPlan)
router.get('/plan/get.do', getAnalysisPlan)
router.get('/recommendPlan/get.do', getRecommendAnalysisPlan)

module.exports = router
