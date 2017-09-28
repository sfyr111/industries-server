// const axios = require('axios')
const axios = require('../../service/axios')
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

const modifyPlan = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/analysisPlan/update.do`, qs.stringify(req.body))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      msg: '成功'
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

const getChart0 = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/analysis/chart0.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    const list = data.resp.list.map(item => {
      const data = item.datas[0].data
      item.data = data
      delete item.datas
      return item
    })
    res.json({
      code: 0,
      obj: {
        bars: list,
        times: data.resp.obj
      }
    })
  }
}

module.exports = {
  getChart0,
  modifyPlan,
  getAnalysisPlan,
  createAnalysisPlan,
  deleteAnalysisPlan,
  getRecommendAnalysisPlan
}
