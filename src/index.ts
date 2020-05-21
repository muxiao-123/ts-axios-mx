import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
/**
 *
 *
 * @param {AxiosRequestConfig} config
 */
function axios (config: AxiosRequestConfig): void {
  // TODO
  xhr(config)
}

export default axios