const { setu } = require('../secret/api')
const axios = require('axios').default
const { s } = require('koishi')

module.exports = ({ koishi }) => {
  koishi
    .command('setu', '好东西，但伤身体，请节制使用。', {
      minInterval: 120 * 1000,
    })
    .alias('色图')
    .action(({ session }) => {
      // axios
      //   .get(setu())
      //   .then(({ data }) => {
      //     // console.log('setu done')
      //     let img = data.toString('base64')
      //     // console.log(s('image', { url: 'base64://' + img }))
      //     session.send(s('image', { file: 'base64://' + img }))
      //   })
      //   .catch(err => {
      //     session.send('获取图片时出现问')
      //   })
      session.send(s('image', { file: setu() }))
    })
}
