
Page({
  data: {
  
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