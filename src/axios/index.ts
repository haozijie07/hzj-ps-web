import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface CustomRequestConfig extends AxiosRequestConfig {
  showLoading?: boolean // 是否显示加载
  retryCount?: number // 重试次数
}

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API || '', // 配置基础 URL
    timeout: 10000, // 超时时间
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // 请求拦截器
  instance.interceptors.request.use(
    (config: CustomRequestConfig) => {
      // 显示加载动画
      if (config.showLoading) {
        console.log('显示加载动画')
      }

      // 动态添加 Token
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  // 响应拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 隐藏加载动画
      console.log('隐藏加载动画')

      // 根据业务处理返回数据
      if (response.data.code !== 200) {
        console.error(response.data.message || '未知错误')
        return Promise.reject(response.data)
      }
      return response.data
    },
    (error) => {
      const config = error.config as CustomRequestConfig

      // 重试机制
      if (config.retryCount && config.retryCount > 0) {
        config.retryCount -= 1
        return instance(config)
      }

      // 全局错误处理
      if (error.response) {
        switch (error.response.status) {
          case 401:
            console.error('未授权，请重新登录')
            break
          case 403:
            console.error('拒绝访问')
            break
          case 404:
            console.error('请求地址出错')
            break
          case 500:
            console.error('服务器内部错误')
            break
          default:
            console.error('其他错误', error.response.status)
        }
      } else {
        console.error('网络错误或请求超时')
      }
      return Promise.reject(error)
    },
  )

  return instance
}

// 创建单例实例
const axiosInstance = createAxiosInstance()

export const get = <T = any>(
  url: string,
  params?: object,
  config?: CustomRequestConfig,
): Promise<T> => {
  return axiosInstance.get(url, { params, ...config })
}

export const post = <T = any>(
  url: string,
  data?: object,
  config?: CustomRequestConfig,
): Promise<T> => {
  return axiosInstance.post(url, data, config)
}

export const put = <T = any>(
  url: string,
  data?: object,
  config?: CustomRequestConfig,
): Promise<T> => {
  return axiosInstance.put(url, data, config)
}

export const del = <T = any>(url: string, config?: CustomRequestConfig): Promise<T> => {
  return axiosInstance.delete(url, config)
}

export default axiosInstance
