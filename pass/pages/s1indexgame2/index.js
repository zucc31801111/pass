// pages/game/game.js
Page({

  data: {

  },
  goGame2: function() {
    var app = getApp();
    app.globalData.s1Game2Count=1;
    wx.redirectTo({
      url: '../s1game2/game'
    })
  },
  goback: function () {
    wx.redirectTo({
      url: '../zhuye2/logs'
    })
   },
  onLoad: function (options) {

  },

})