
Page({
  data: {
   task:"D"
  },
onLoad:function(){
  var app = getApp();
  var pa= app.globalData.s1Game1+app.globalData.s1Game1;
  var s="";
  if(pa==6){
    app.globalData.s1score=100;
    s="A"
  }
  else if(pa==5||pa==4){
    app.globalData.s1score=75;
    s="B"
  }
  else if(pa==3||pa==2){
    app.globalData.s1score=50;
    s="C"
  }
  else if(pa==1||pa==0){
    app.globalData.s1score=25;
    s="D"
  }
  this.setData({
    task:s,
  }
  ) 
  
  console.log(app.globalData.s1score);
},
  goGame2:function(){
  wx.redirectTo({
    url: '../s1indexgame1/index'
  })
},
goback: function () {
  wx.redirectTo({
    url: '../zhuye/logs'
  })
 },
gopower:function(){
  wx.redirectTo({
    url: '../zhuye3/logs'
  })
}
})
