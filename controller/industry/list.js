// const axios = require('axios')
const axios = require('../../service/axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

const getIndustryTrend = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/industrynews.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getCompanyTrend = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/companys/list2.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getProductTrend = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/products/list2.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getTenderTrend = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/zhaobiao/list2.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

module.exports = {
  getIndustryTrend,
  getCompanyTrend,
  getProductTrend,
  getTenderTrend
}
