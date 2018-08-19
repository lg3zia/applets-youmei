// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listNews: [{
      id: 0,
      imgPath: '../img/news/news1.jpg',
      title: "价格三千和价格一万的牙齿矫正区别在哪？",
      summary: "",
    },
    {
      id:1,
      imgPath: '../img/news/news2.jpg',
      title:"牙齿美白三种方法：冷光美白、烤瓷牙美白和贴面美白 →→最佳选择是贴面美白中的冰瓷牙（全瓷贴面）",
      summary:""
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  newsItemClick: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: 'news_item?id=' + index,
    })
  },
})