// pages/game/game.js
Page({

  data: {
   score:0,
   task:"D"
  },
onLoad:function(){
  var app = getApp();
  var pa= app.globalData.pGame1+app.globalData.pGame1;
  var s="";
  if(pa==6){
    s="A"
  }
  else if(pa==5||pa==4){
    s="B"
  }
  else if(pa==3||pa==2){
    s="C"
  }
  else if(pa==1||pa==0){
    s="D"
  }
  this.setData({
    score:pa,
    task:s,
  }
  ) 
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})