
Page({
  data: {
  
  },
  goback: function () {
    wx.redirectTo({
      url: '../zhuye2/logs'
    })
   },
  goGame1: function() {
    var app = getApp();
    app.globalData.s1Game1Count=1;
    wx.redirectTo({
      url: '../s1game1/game'
    })
  },
  onLoad: function (options) {

  },

})