import axios from 'axios'
import { STORAGE_TOKEN_KEY } from './file'

export interface Res {
  code: number
  data: object
  rows: object[]
  total: number
  msg: string
}

const request = axios.create({ baseURL: '/test-api' })

request.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = localStorage.getItem(STORAGE_TOKEN_KEY)
    return config
  },
  error => Promise.reject(error),
)

let isExpired = false
request.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      const res = response.data
      if (res.code >= 200 && res.code < 300) {
        if (res.total)
          res.total = Number(res.total)
        return res
      }
      else if (res.code === 401) {
        if (!isExpired) {
          isExpired = true
          console.log('登录过期')
        }
      }
      else {
        console.log(res.msg)
        return Promise.reject(res)
      }
    }
    else {
      console.log(response.data.msg)
      return Promise.reject(response)
    }
  },
  (error) => {
    console.log(error.message)
    return Promise.reject(error)
  },
)

interface reqParams {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: any
  data?: any
  headers?: object
}

export default function (config: reqParams): Promise<Res> {
  return request(config)
}
