// const axios = require('axios')
const axios = require('../../service/axios')
const qs = require('qs')
const { url, ERR_OK } = require('../../config/config')

// let cookie = ''

// axios.interceptors.request.use(function (config) {
//   // config.headers.cookie = cookie
//   // console.log(config.headers)
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
//
// axios.interceptors.response.use(function (response) {
//   console.log('-----------')
//   console.log(response.headers['set-cookie'][0])
//   // console.log(response.data.resp.obj.userToken)
//   console.log('-----------')
//   return response
// }, function (error) {
//   return Promise.reject(error)
// })

const getUserSettings = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/usersettings/get.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

const saveUserSettings = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/usersettings/save.do`, qs.stringify(req.body))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      obj: data.resp.obj
    })
  }
}

const getIndustryList = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/industrys.do`, qs.stringify(req.query))

  if (data.resp.code !== ERR_OK) {
    throw new Error('response error')
  } else {
    res.json({
      code: 0,
      list: [data.resp.list[1]] // 只返回信息安全
    })
  }
}

const getCompanyList = async function (req, res, next) {
  const { data } = await axios.post(`${url}/industries/industry/companys/get.do`, qs.stringify(req.query))

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
  getUserSettings,
  saveUserSettings,
  getIndustryList,
  getCompanyList
}
