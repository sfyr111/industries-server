// const axios = require('axios')
const axios = require('../../service/axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

const getCompanyRanking = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/companys/chart1.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getCompanyRankingChart = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/companys/chart2.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

const getProductsRanking = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/products/chart1.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getProductsRankingChart = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/products/chart2.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

module.exports = {
  getCompanyRanking,
  getCompanyRankingChart,
  getProductsRanking,
  getProductsRankingChart
}
