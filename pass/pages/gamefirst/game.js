// pages/game/game.js
Page({
  data: {
    pc: [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rJBVAO.png','sty':1, }, { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rJDUIO.png','sty':1, },
    { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rJ0X7T.png','sty':0 }, { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJBp9J.png','sty':0, },
    { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0 }, { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0, }],
   stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
    timer: '',//定时器名字
    countDownNum: '10',//倒计时初始值
    pageCount:1,  
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
  goGame: function() {
    let that = this; 
    clearInterval(that.data.timer);
    that.setData({
      timer:null
    })  
    var app = getApp();
        app.globalData.pGame1Count++;  
        that.setData({
          pageCount: app.globalData.pGame1Count,
          countDownNum: '15',
         });
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
    var app = getApp();
    var pa= app.globalData.pGame1Count;
    if(count==2&&answercount==count)
    app.globalData.pGame1++;
    console.log(app.globalData.pGame1)
       if(pa<=5){
        app.globalData.pGame1Count++;
        that.setData({
          pc: [ { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rJBp9J.png','sty':0, },
    { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rJBFnx.png','sty':0 },{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rJBVAO.png','sty':1, },
    { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rJVP9s.png','sty':0 }, { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rJDUIO.png','sty':1, },
    { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rJ0X7T.png','sty':0 }],
          pageCount: app.globalData.pGame1Count,
          countDownNum: '10',
          stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
         });
       }
       else{
        wx.redirectTo({
          url: '../indexgame2/index'
        })
  }
  this.countDown();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     });
  },

  /**
   * 生命周期函数--监听页面显示
   */
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
    that.data.timer= setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
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
/**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var that =this;
    //清除计时器  即清除setInter
    clearInterval(that.data.timer)
  },
    /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
})