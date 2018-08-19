// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndicatorDots: true,
    swiperAutoplay: false,
    swiperInterval: 100,
    swiperDuration: 2000,
    swiperCurrentIndex: 0,
    swiperImgUrls: [
      '../img/banner/banner1.jpg',
      '../img/banner/banner2.jpg',
      '../img/banner/banner3.jpg'
    ],
    contactNumber: 19859180244,
    contactAddress: "常州CBD",
    listProducts: [{
      id: 0,
      imgPath: '../img/product/product1.jpg',
        title: "冰瓷牙",
        summary: "冰瓷牙采用一对一私人订制，颠覆传统美牙工艺",
      },
      {
        id: 1,
        imgPath: '../img/product/product3.jpg',
        title: "冰瓷牙",
        summary: "美国专利技术 六大优势 让牙齿美出新高度",
      }
    ],
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

  swiperChanged: function(e) { //轮播图发生改变
    this.setData({
      swiperCurrentIndex: e.detail.current
    })
  },

  swiperItemClick: function(e) {
    /*视频赞不提供，没有免费托管的服务器
    wx.showToast({
      title: this.data.swiperCurrentIndex + "",
    })
    wx.navigateTo({
      url: 'introduce_video?' + this.data.swiperCurrentIndex,
    })*/
  },

  goCompanyMap: function(e) {
    wx.openLocation({
      latitude: 31.841076, // 纬度，范围为-90~90，负数表示南纬
      longitude: 119.97746, // 经度，范围为-180~180，负数表示西经
      scale: 28, // 缩放比例          
    })
  },

  callMe: function(e) {
    wx.makePhoneCall({
      phoneNumber: '19859180244' //仅为示例，并非真实的电话号码
    })
  },

  productItemClick: function(e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: 'produce_item?id=' + index,
    })
  },
})