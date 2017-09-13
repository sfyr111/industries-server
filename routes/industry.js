const express = require('express')
const router = express.Router()

const { getUserSettings, saveUserSettings, getIndustryList, getCompanyList } = require('../controller/industry/user')
const { getIndustryTrend, getCompanyTrend, getProductTrend, getTenderTrend } = require('../controller/industry/list')
const { getProductClassify, getTenderClassify, getIndustryClassify, getCompanyClassify } = require('../controller/industry/classify')
const { getCompanyRanking, getCompanyRankingChart, getProductsRanking, getProductsRankingChart } = require('../controller/industry/rank')
const { getHotNews, getCompanyClassifyAndList, getProductsClassifyAndList, getTenderClassifyAndList } = require('../controller/industry/field')

/**
 * usersettings
 */
router.get('/industrys.do', getIndustryList)
router.get('/companys/get.do', getCompanyList)
router.get('/usersettings/get.do', getUserSettings)

router.post('/usersettings/save.do', saveUserSettings)

/**
 * home page field
 */
router.get('/hotnews.do', getHotNews)
router.get('/zhaobiao/getANDlist1.do', getTenderClassifyAndList)
router.get('/products/getANDlist1.do', getProductsClassifyAndList)
router.get('/companys/gettagANDlist1.do', getCompanyClassifyAndList)

/**
 * home page rank
 */
router.get('/companys/chart1.do', getCompanyRanking)
router.get('/products/chart1.do', getProductsRanking)
router.get('/companys/chart2.do', getCompanyRankingChart)
router.get('/products/chart2.do', getProductsRankingChart)

/**
 * discovery page list
 */
router.get('/industrynews.do', getIndustryTrend)
router.get('/zhaobiao/list2.do', getTenderTrend)
router.get('/companys/list2.do', getCompanyTrend)
router.get('/products/list2.do', getProductTrend)

/**
 * discovery page classify
 */
router.get('/zhaobiao/get.do', getTenderClassify)
router.get('/products/get.do', getProductClassify)
router.get('/industrystag.do', getIndustryClassify)
router.get('/companys/gettag.do', getCompanyClassify)

module.exports = router
