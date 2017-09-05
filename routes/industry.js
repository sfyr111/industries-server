const express = require('express')
const router = express.Router()

const { getUserSettings, saveUserSettings, getIndustryList, getCompanyList } = require('../controller/industry/user')
const { getHotNews, getCompanyClassifyAndList, getProductsClassifyAndList, getTenderClassifyAndList } = require('../controller/industry/field')
const { getCompanyRanking, getCompanyRankingChart, getProductsRanking, getProductsRankingChart } = require('../controller/industry/rank')
const { getIndustryTrend, getCompanyTrend, getProductTrend, getTenderTrend } = require('../controller/industry/list')
const { getProductClassify, getTenderClassify, getIndustryClassify, getCompanyClassify } = require('../controller/industry/classify')

/**
 * usersettings
 */
router.get('/usersettings/get.do', getUserSettings)
router.post('/usersettings/save.do', saveUserSettings)
router.get('/industrys.do', getIndustryList)
router.get('/companys/get.do', getCompanyList)

/**
 * home page field
 */
router.get('/hotnews.do', getHotNews)
router.get('/companys/gettagANDlist1.do', getCompanyClassifyAndList)
router.get('/products/getANDlist1.do', getProductsClassifyAndList)
router.get('/zhaobiao/getANDlist1.do', getTenderClassifyAndList)

/**
 * home page rank
 */
router.get('/companys/chart1.do', getCompanyRanking)
router.get('/companys/chart2.do', getCompanyRankingChart)
router.get('/products/chart1.do', getProductsRanking)
router.get('/products/chart2.do', getProductsRankingChart)

/**
 * discovery page list
 */
router.get('/industrynews.do', getIndustryTrend)
router.get('/companys/list2.do', getCompanyTrend)
router.get('/products/list2.do', getProductTrend)
router.get('/zhaobiao/list2.do', getTenderTrend)

/**
 * discovery page classify
 */
router.get('/products/get.do', getProductClassify)
router.get('/zhaobiao/get.do', getTenderClassify)
router.get('/industrystag.do', getIndustryClassify)
router.get('/companys/gettag.do', getCompanyClassify)

module.exports = router
