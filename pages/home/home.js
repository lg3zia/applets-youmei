// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 100,
    duration: 3000,
    currentIndex: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    img_hot: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533233681024&di=a01631dbd72137ac84afad4b6c2439f9&imgtype=0&src=http%3A%2F%2Fwww.qncye.com%2Fhtml%2Fimages%2Fdianzhi.jpg',
    contact_number: 19859180244,
    contact_address: "常州CBD",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  goCompanyMap: function(e) {
    wx.openLocation({
      latitude: 31.841076, // 纬度，范围为-90~90，负数表示南纬
      longitude: 119.97746, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例          
    })
  },
  callme: function(e) {
    wx.makePhoneCall({
      phoneNumber: '19859180244' //仅为示例，并非真实的电话号码
    })
  },
  swiperChanged: function (e) {//轮播图发生改变
    this.setData({
      currentIndex: e.detail.current
    })
  },
  swiperItemClick: function (e) {
    wx.showToast({
      title: this.data.currentIndex + "",
    })
  },

})