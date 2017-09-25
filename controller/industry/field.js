const axios = require('axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

const getHotNews = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/hotnews.do`, qs.stringify(req.query))
  console.log(JSON.stringify(req.query))
  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getCompanyClassifyAndList = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/companys/gettagANDlist1.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getProductsClassifyAndList = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/products/getANDlist1.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getTenderClassifyAndList = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/zhaobiao/getANDlist1.do`, qs.stringify(req.query))

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
  getHotNews,
  getCompanyClassifyAndList,
  getProductsClassifyAndList,
  getTenderClassifyAndList
}
