// 声明一个字符串常量约束变量
export type Method = 'get' | 'GET'
  | 'put' | 'PUT'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'patch' | 'PATCH'

/**
 *公用配置
 *
 * @export
 * @interface AxiosRequestConfig
 */
export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  params?: any,
  data?: any
}