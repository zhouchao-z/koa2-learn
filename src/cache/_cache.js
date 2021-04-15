/**
 * @description 连接 redis 
 * @author huanshui
 */

const { REDIS_CONF } = require('../conf/db');
const redis = require('redis');
const client = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
client.on('error', (err) => {
  console.log('redis连接错误');
})

/**
 * 
 * @param {string} key 
 * @param {string} value 
 * @param {string} timeout 过期时间
 */
function set(key, value, timeout) {
  if(typeof value == 'object') {
    value = JSON.stringify(value);
  }
  client.set(key, value);
  client.expire(key, timeout);
}

/**
 * 
 * @param {string} 获取redis中某个key的值
 */
function get(key) {
  new Promise((resolve, reject) => {
    client.get(key, (err, val) => {
      if(err) {
        reject(err);
      } else {
        resolve(val);
      }
    })
  })
}