const axios = require('axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

const createAnalysisPlan = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/analysisPlan/insert.do`, qs.stringify(req.body))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      msg: '创建成功'
    })
  }
}

const getAnalysisPlan = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/analysisPlan/get.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const getRecommendAnalysisPlan = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/analysisPlan/recomend.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const deleteAnalysisPlan = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/analysisPlan/delete.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      msg: '删除成功'
    })
  }
}

module.exports = {
  getAnalysisPlan,
  createAnalysisPlan,
  deleteAnalysisPlan,
  getRecommendAnalysisPlan
}
