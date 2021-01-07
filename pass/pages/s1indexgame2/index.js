// pages/game/game.js
Page({

  data: {

  },
  goGame2: function() {
    var app = getApp();
    app.globalData.s1Game2Count=1;
    wx.navigateTo({
      url: '../s1game2/game'
    })
  },

  onLoad: function (options) {

  },

})