//index.js
//获取应用实例
const app = getApp()
const moment = require('../../utils/moment.min.js')

Page({
  timer: null,
  data: {
    time: '',
    birthday: '',
    today: moment().format('YYYY-MM-DD')
  },
  calculateTime() {
    var birthday = this.data.birthday
    if (!birthday) return ''
    var time = moment().diff(moment(birthday), 'years', true)
    time = Math.round(time * 1000000000) / 1000000000
    return time.toFixed(9)
  },
  run: function () {
    var that = this
    if (!this.timer) {
      this.timer = setInterval(function () {
        if (that.data.birthday) {
          that.setData({
            time: that.calculateTime()
          })
        }
      }, 100)
    }
  },
  handleDateChange: function (event) {
    var { detail: { value } } = event
    app.setBirthday(value)
    this.setData({
      birthday: value
    })
  },
  onShow: function () {
    this.run()
  },
  onHide: function () {
    clearInterval(this.timer)
    this.timer = null
  },
  onLoad: function () {
    var birthday = app.getBirthday()
    this.setData({
      birthday: birthday
    })
    this.run()
  }
})
