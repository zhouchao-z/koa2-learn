/**
 * @description 配置环境变量
 * @author huanshui
 */


const env = process.env.NODE_ENV;

module.exports = {
  isDev: env === 'dev',
  notDev: env !== 'dev',
  isProd: env === 'production',
  notProd: env !== 'production'
}