// pages/game/game.js
Page({
  data: {
    pc: [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rYdAdU.png','sty':0, }, 
    { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rYdMsx.png','sty':0, },
    { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rYdXOx.png','sty':0 }, 
    { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rYdBef.png','sty':0, },
    { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rYdKQ1.png','sty':0 }, 
    { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rYdO61.png','sty':0, }, 
    { id: 7, 'url': 'https://s3.ax1x.com/2020/12/18/rYdwOP.png','sty':0, }, 
    { id: 8, 'url': 'https://s3.ax1x.com/2020/12/18/rYdnzR.png','sty':0, }, 
    { id: 9, 'url': 'https://s3.ax1x.com/2020/12/18/rYD3jA.png','sty':0, },  
    { id: 10, 'url': 'https://s3.ax1x.com/2020/12/18/rYdLlR.png','sty':1, }, ],
    pc2: [{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rYdAdU.png','sty':0, }, 
    { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rYdMsx.png','sty':0, },
    { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rYdXOx.png','sty':0 }, 
    { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rYdBef.png','sty':0, },
    { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rYdKQ1.png','sty':0 }, 
    { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rYdO61.png','sty':0, }, 
    { id: 7, 'url': 'https://s3.ax1x.com/2020/12/18/rYdwOP.png','sty':0, }, 
    { id: 8, 'url': 'https://s3.ax1x.com/2020/12/18/rYdnzR.png','sty':0, }, 
    { id: 9, 'url': 'https://s3.ax1x.com/2020/12/18/rYD3jA.png','sty':0, },  
    { id: 10, 'url': 'https://s3.ax1x.com/2020/12/18/rYdLlR.png','sty':1, }, ],
   stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
    timer: '',//定时器名字
    countDownNum: '20',//倒计时初始值
    pageCount:1,  
  },
 
  goGame2:function() {  
    let that = this;
    clearInterval(that.data.timer);
    that.setData({
      timer:null
    })  
    var answercount=0;
    for (let i = 0; i <that.data.stys.length; i++) {
        if (that.data.stys[i].sty == 0) {
          if(that.data.pc2[i].sty==1){   
            answercount++;
          }
        }
      }
    var app = getApp();
    var pa= app.globalData.pGame2Count;
    if(answercount!=0)
    app.globalData.pGame2++;
    console.log(app.globalData.pGame2)
       if(pa<=2){
         var Arr=[{ id: 1, 'url': 'https://s3.ax1x.com/2020/12/18/rYdAdU.png','sty':0, }, 
         { id: 2, 'url': 'https://s3.ax1x.com/2020/12/18/rYdMsx.png','sty':0, },
         { id: 3, 'url': 'https://s3.ax1x.com/2020/12/18/rYdXOx.png','sty':0 }, 
         { id: 8, 'url': 'https://s3.ax1x.com/2020/12/18/rYdnzR.png','sty':0, }, 
         { id: 9, 'url': 'https://s3.ax1x.com/2020/12/18/rYD3jA.png','sty':0, }, 
         { id: 5, 'url': 'https://s3.ax1x.com/2020/12/18/rYdKQ1.png','sty':0 }, 
         { id: 6, 'url': 'https://s3.ax1x.com/2020/12/18/rYdO61.png','sty':0, }, 
         { id: 7, 'url': 'https://s3.ax1x.com/2020/12/18/rYdwOP.png','sty':0, },  
         { id: 10, 'url': 'https://s3.ax1x.com/2020/12/18/rYdLlR.png','sty':1, },
         { id: 4, 'url': 'https://s3.ax1x.com/2020/12/18/rYdBef.png','sty':0, },  ];
        function randArr(arr) {
          for (var i = 0; i < arr.length; i++) {
              var iRand = parseInt(arr.length * Math.random());
              var temp = arr[i];
              arr[i] = arr[iRand];
              arr[iRand] = temp;
          }
          return arr;
      }
      //测试：
      randArr(Arr);
        app.globalData.pGame2Count++;
        console.log(app.globalData.pGame2Count)
        that.setData({
          pc2: Arr,
          pageCount: app.globalData.pGame1Count,
          countDownNum: '15',
          stys:[{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1},{'sty':1}],
         });
         this.countDown();
       }
       else{
        wx.redirectTo({
          url: '../game/game'
        })
  }
  
  },

  onLoad: function (options) {
    var app = getApp();
    app.globalData.pGame2=0;
    app.globalData.pGame2Count=1;
    var ages= app.globalData.age;
    if(ages==1){
      this.setData({
        countDownNum: '20',
      });
    }
    else{
      this.setData({
        countDownNum: '15',
      });
    }
    
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
    that.data.timer= setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        if (countDownNum<= 0) {
          clearInterval(that.data.timer);
           that.goGame2();
        }
      }, 1000)
  },

  onUnload: function () {
    var that =this;
    //清除计时器  即清除setInter
    clearInterval(that.data.timer)
  },
  setClick: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[0].sty';
    if(that.data.stys[0].sty==1){
      that.setData({
        [age]:0
      });
       for(let i=0;i<that.data.stys.length;i++){
         if(i!=0){
          var age2='stys[' + i +'].sty';
          that.setData({
            [age2]:1
          });
         }     
    } 
   }
    console.log(that.data.stys)
   },
   setClick2: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[1].sty';
    if(that.data.stys[1].sty==1){
      that.setData({
        [age]:0
      });
       for(let i=0;i<that.data.stys.length;i++){
         if(i!=1){
          var age2='stys[' + i +'].sty';
          that.setData({
            [age2]:1
          });
         }     
    } 
    }
    console.log(that.data.stys)
   },
   setClick3: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[2].sty';
    if(that.data.stys[2].sty==1){
      that.setData({
        [age]:0
      });
       for(let i=0;i<that.data.stys.length;i++){
         if(i!=2){
          var age2='stys[' + i +'].sty';
          that.setData({
            [age2]:1
          });
         }     
    } 
    }
    console.log(that.data.stys)
   },
   setClick4: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[3].sty';
    if(that.data.stys[3].sty==1){
      that.setData({
        [age]:0
      });
       for(let i=0;i<that.data.stys.length;i++){
         if(i!=3){
          var age2='stys[' + i +'].sty';
          that.setData({
            [age2]:1
          });
         }     
    } 
    }
   
    console.log(that.data.stys)
   },
   setClick5: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[4].sty';
    if(that.data.stys[4].sty==1)
   {
    that.setData({
      [age]:0
    });
     for(let i=0;i<that.data.stys.length;i++){
       if(i!=4){
        var age2='stys[' + i +'].sty';
        that.setData({
          [age2]:1
        });
       }     
  } 
   }
    console.log(that.data.stys)
   },
   setClick6: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[5].sty';
    if(that.data.stys[5].sty==1)
    {
      that.setData({
        [age]:0
      });
       for(let i=0;i<that.data.stys.length;i++){
         if(i!=5){
          var age2='stys[' + i +'].sty';
          that.setData({
            [age2]:1
          });
         }     
    } 
    }
    console.log(that.data.stys)
   },
   setClick7: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[6].sty';
    if(that.data.stys[6].sty==1)
   {
    that.setData({
      [age]:0
    });
     for(let i=0;i<that.data.stys.length;i++){
       if(i!=6){
        var age2='stys[' + i +'].sty';
        that.setData({
          [age2]:1
        });
       }     
  } 
   }
    console.log(that.data.stys)
   },
   setClick8: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[7].sty';
    if(that.data.stys[7].sty==1)
   {
    that.setData({
      [age]:0
    });
     for(let i=0;i<that.data.stys.length;i++){
       if(i!=7){
        var age2='stys[' + i +'].sty';
        that.setData({
          [age2]:1
        });
       }     
  } 
   }
    console.log(that.data.stys)
   },
   setClick9: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[8].sty';
    if(that.data.stys[8].sty==1)
   {
    that.setData({
      [age]:0
    });
     for(let i=0;i<that.data.stys.length;i++){
       if(i!=8){
        var age2='stys[' + i +'].sty';
        that.setData({
          [age2]:1
        });
       }     
  } 
   }
    console.log(that.data.stys)
   },
   setClick10: function (e) {
    //点击按钮，样式改变
    var that = this;
    var age='stys[9].sty';
    if(that.data.stys[9].sty==1)
   {
    that.setData({
      [age]:0
    });
     for(let i=0;i<that.data.stys.length;i++){
       if(i!=9){
        var age2='stys[' + i +'].sty';
        that.setData({
          [age2]:1
        });
       }     
  } 
   }
   },
})