//app.js
App({
  onLaunch: function () {
    var birthday = this.getBirthday()
    this.globalData.birthday = birthday
  },
  getBirthday: function () {
    return wx.getStorageSync('birthday') || ''
  },
  setBirthday: function (birthday) {
    wx.setStorageSync('birthday', birthday)
    this.globalData.birthday = birthday
  },
  globalData: {
    birthday: ''
  }
})