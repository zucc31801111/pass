// pages/game/game.js
Page({
  data: {
   score:0,
   task:"D"
  },
onLoad:function(){
  var app = getApp();
  var pa= app.globalData.s1Game1+app.globalData.s1Game1;
  var s="";
  app.globalData.s1score=pa;
  console.log(app.globalData.s1score)
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
  
})