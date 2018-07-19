// vue.config.js
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/asssets'))
      .set('styles', resolve('src/assets/styles'))
  }
};