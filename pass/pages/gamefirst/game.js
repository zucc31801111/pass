// pages/game/game.js
Page({
  data: {
    aswurl:"",
    pc: [],
    stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
    timer: '',//定时器名字
    countDownNum: '8',//倒计时初始值
    pageCount:1,
  },

  goGame: function() {
    let that = this; 
    clearInterval(that.data.timer);
    that.setData({
      timer:null
    })  
    var app = getApp();
    var count=app.globalData.pGame1Count;
    var ages= app.globalData.age;
        app.globalData.pGame1Count++; 
    if(ages==1){ 
      if(count==1){
        that.setData({
          pageCount: app.globalData.pGame1Count,
          countDownNum: '30',
         });
      }
      else if(count==3||count==5){
        that.setData({
          pageCount: app.globalData.pGame1Count,
          countDownNum: '25',
         });
      }
        }
        else{
          if(count==1){
            that.setData({
              pageCount: app.globalData.pGame1Count,
              countDownNum: '25',
             });
          }
          else if(count==3||count==5){
            that.setData({
              pageCount: app.globalData.pGame1Count,
              countDownNum: '20',
             });
          }
        }
         this.countDown();     
  },
  goGame2Index: function() {  
    let that = this;
    clearInterval(that.data.timer);
    that.setData({
      timer:null
    })  
    var count=0;
    var answercount=0;
    for (let i = 0; i <that.data.stys.length; i++) {
        if (that.data.stys[i].sty == 0) {
          count++
          if(that.data.pc[i].sty==1){   
            answercount++;
          }
        }
      }
      function randArr(arr) {
        for (var i = 0; i < arr.length; i++) {
            var iRand = parseInt(arr.length * Math.random());
            var temp = arr[i];
            arr[i] = arr[iRand];
            arr[iRand] = temp;
        }
        return arr;
    }
    var app = getApp();
    var ages=app.globalData.age;
    var pa= app.globalData.pGame1Count;
    if(ages==1){
      if(count==1&&answercount==count&&pa==2)
      app.globalData.pGame1++;
      if(count==2&&answercount==count&&(pa==4||pa==6))
      app.globalData.pGame1++;
    }
   else {
    if(count==2&&answercount==count&&(pa==2||pa==4))
    app.globalData.pGame1++;
    if(count==3&&answercount==count&&pa==6)
    app.globalData.pGame1++;
   }
    console.log(app.globalData.pGame1)
       if(pa<=5){
        app.globalData.pGame1Count++;

        if(ages==1){
          if(pa==2){
            var Arr = [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rJBp9J.png','sty':0, },
            { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0 },
            { id: 3, 'url': 'https://s3.ax1x.com/2021/01/05/sF8xQx.png','sty':1, },
            { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0 }, 
            { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rJBVAO.png','sty':1, },
            { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rJ0X7T.png','sty':0 }];
            var arrurl="https://s3.ax1x.com/2021/01/05/sFGJlq.png"; 
          }
          else{
            var Arr = [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rJBp9J.png','sty':0, },
            { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0 },
            { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rJBVAO.png','sty':1, },
            { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0 }, 
            { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rJDUIO.png','sty':1, },
            { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rJ0X7T.png','sty':0 }];
            var arrurl="https://s3.ax1x.com/2020/12/18/rJDtZ6.png"; 
          }
        }
        else{
          if(pa==2){
            var Arr = [{ id: 1, 'url': 'https://s3.ax1x.com/2021/01/05/sFtCwT.png','sty':0, },
            { id: 2, 'url': 'https://s3.ax1x.com/2021/01/05/sFaa0x.png','sty':0 },
            { id: 3, 'url': 'https://s3.ax1x.com/2021/01/05/sFtPTU.png','sty':1, },
            { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0 }, 
            { id: 5, 'url': 'https://s3.ax1x.com/2021/01/05/sFURFU.png','sty':1, },
            { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0 }];
            var arrurl="https://s3.ax1x.com/2021/01/05/sFJjr6.png";
          }
          else{
            var Arr = [{ id: 1, 'url': 'https://s3.ax1x.com/2021/01/05/sFtPTU.png','sty':0, },
            { id: 2, 'url': 'https://s3.ax1x.com/2021/01/05/sFaa0x.png','sty':0 },
            { id: 3, 'url': 'https://s3.ax1x.com/2021/01/05/sFURFU.png','sty':0 },
            { id: 4, 'url': 'https://s3.ax1x.com/2021/01/05/sFdZ4O.png','sty':1 }, 
            { id: 5, 'url': 'https://s3.ax1x.com/2021/01/05/sFdRxJ.png','sty':1 },
            { id: 6, 'url': 'https://s3.ax1x.com/2021/01/05/sFwDQH.png','sty':1 }];
            var arrurl="https://s3.ax1x.com/2021/01/05/sFUvSH.png";
          }
        }  
      randArr(Arr);
        that.setData({
          aswurl:arrurl,
          pc: Arr,
          pageCount: app.globalData.pGame1Count,
          countDownNum: '8',
          stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
         });
         this.countDown();
       }
       else{
        wx.redirectTo({
          url: '../indexgame2/index'
        })
  }
  },
  onLoad: function (options) {
    var app = getApp();
    app.globalData.pGame1=0;
    app.globalData.pGame1Count=1;
    var ages= app.globalData.age;
    if(ages==1){
      var Arr = [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0, },
      { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0, },
     { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rJ0X7T.png','sty':1 }, 
     { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJBp9J.png','sty':0, },];
     var arrurl="https://s3.ax1x.com/2021/01/05/sFlAKO.png";
    }
   else{
    var Arr = [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rJBVAO.png','sty':1, }, 
    { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rJDUIO.png','sty':1, },
    { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rJ0X7T.png','sty':0 }, 
    { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJBp9J.png','sty':0, },
    { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0 }, 
    { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0, }];
    var arrurl="https://s3.ax1x.com/2020/12/18/rJDtZ6.png";
   }
    function randArr(arr) {
        for (var i = 0; i < arr.length; i++) {
            var iRand = parseInt(arr.length * Math.random());
            var temp = arr[i];
            arr[i] = arr[iRand];
            arr[iRand] = temp;
        }
        return arr;
    }
    randArr(Arr);
    console.log(Arr);
    if(ages==1){
      this.setData({
        aswurl:arrurl,
        pc: Arr,
        stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
      });
    }
    else{
      this.setData({
        aswurl:arrurl,
        pc: Arr,
        stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
      });
    }
  },
  setClick: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[0].sty';
    if(that.data.stys[0].sty==0)
    that.setData({
      [age]:1
    });
   else 
    that.setData({
      [age]:0
    });
    console.log(that.data.stys)
   },
   setClick2: function (e) {
    let that = this;
    var age='stys[1].sty';
    if(that.data.stys[1].sty==0)
    that.setData({
      [age]:1
    });
    else 
    that.setData({
      [age]: 0,
    });
  },
  setClick3: function (e) {
    //点击按钮，样式改变
    let that = this;
    var age='stys[2].sty';
    if(that.data.stys[2].sty==0)
    that.setData({
      [age]: 1,
    });
    else 
    that.setData({
      [age]: 0,
    });
   },
   setClick4: function (e) {
    //点击按钮，样式改变
    let that = this;
    var age='stys[3].sty';
    if(that.data.stys[3].sty==0)
    that.setData({
      [age]: 1,
    });
    else 
    that.setData({
      [age]: 0,
    });
   
   },
   setClick5: function (e) {
    //点击按钮，样式改变
    let that = this;
    var age='stys[4].sty';
    if(that.data.stys[4].sty==0)
    that.setData({
      [age]: 1,
    });
    else 
    that.setData({
      [age]: 0,
    });
   
   },
   setClick6: function (e) {
    //点击按钮，样式改变
    let that = this;
    var age='stys[5].sty';
    if(that.data.stys[5].sty==0)
    that.setData({
      [age]: 1,
    });
    else 
    that.setData({
      [age]: 0,
    });
   
   },
  onShow: function () {
 //什么时候触发倒计时，就在什么地方调用这个函数
 this.countDown();
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    clearInterval(that.data.timer);
    that.setData({
      timer:null
    })
    that.data.timer= setInterval(function () {
        countDownNum--;
        that.setData({
          countDownNum: countDownNum
        })
        if (countDownNum<= 0) {
          clearInterval(that.data.timer);
          if(that.data.pageCount==1||that.data.pageCount==3||that.data.pageCount==5)  {
            that.goGame();
          }     
           else{
            that.goGame2Index();
           }          
        }
      }, 1000)
  },
})