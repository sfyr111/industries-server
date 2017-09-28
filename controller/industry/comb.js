// const axios = require('axios')
const axios = require('../../service/axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

const getDetail = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/comb/detail.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

const getSearch = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/comb/search.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const saveCollectArticles = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/comb/bookmark/save.do`, qs.stringify(req.body))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

const deleteCollectArticles = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/comb/bookmark/del.do`, qs.stringify(req.body))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

const getCollectArticles = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/comb/bookmark/get.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: data.resp.list
    })
  }
}

const judgeCollectArticles = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/comb/bookmark/marked.do`, qs.stringify(req.query))

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
  getDetail,
  getSearch,
  getCollectArticles,
  saveCollectArticles,
  judgeCollectArticles,
  deleteCollectArticles
}
