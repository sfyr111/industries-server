const axios = require('axios')

let tokenMap = new Map()

axios.defaults.withCredentials = true

axios.interceptors.request.use(function (config) {
  // let token = getName('userToken', config.data)
  // if (tokenMap.has(token)) {
  //   let cookie = tokenMap.get(token)
  //   console.log(cookie.substr(0, 43))
  //   config.headers.common['Cookie'] = cookie.substr(0, 43)
  // }
  // var cookie = 'JSESSIONID=E3EC0A683483CE946E849C378C42F1A2'
  // console.log(cookie)
  // config.headers.common['Cookie'] = cookie
  config.headers.common['Connection'] = 'keep-alive'
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  let token = response.headers.usertoken
  let cookie = response.headers['set-cookie'][0]
  if (!tokenMap.has(token)) {
    tokenMap.set(token, cookie)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

const getName = function (name, url) {
  name = name.replace(/[[\]]/g, '\\$&')
  // name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp(name + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

module.exports = axios
