const axios = require('axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

const getProductClassify = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/products/get.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getTenderProductsClassify = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/zhaobiao/get.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getTenderCompanyClassify = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/zhaobiao/get2.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getIndustryClassify = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/industrystag.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getCompanyClassify = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/companys/gettag.do`, qs.stringify(req.query))

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
  getProductClassify,
  getTenderProductsClassify,
  getIndustryClassify,
  getCompanyClassify,
  getTenderCompanyClassify
}
