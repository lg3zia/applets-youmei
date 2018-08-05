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
      'https://thumbnail0.baidupcs.com/thumbnail/7057f83ba94ea1d5e96230da3438ec12?fid=1913150091-250528-410965644799515&time=1533456000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-gMcx9f5GjD50RdnBRw9U%2BtiQ5wg%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5025759159262381584&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      'https://thumbnail0.baidupcs.com/thumbnail/96269b78bf20adea16d9b30fc63ec342?fid=1913150091-250528-249915975916087&time=1533456000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-IpOjbP9%2FrbvzUr3MhMPz49UoymM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5025785132563268471&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      'https://thumbnail0.baidupcs.com/thumbnail/4205d6b78c034950c3a68f807112d2ef?fid=1913150091-250528-728351915268436&time=1533456000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-9qhFbG2Tv40IULoPR3dfaHxAzTQ%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5025794342760298255&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video'
    ],
    img_hot: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533233681024&di=a01631dbd72137ac84afad4b6c2439f9&imgtype=0&src=http%3A%2F%2Fwww.qncye.com%2Fhtml%2Fimages%2Fdianzhi.jpg',
    contactNumber: 19859180244,
    contactAddress: "常州CBD",
    listProducts: [{
      id: 0,
      imgPath: 'https://thumbnail0.baidupcs.com/thumbnail/e00f6f174f69b5618e20a45397b08b0f?fid=1913150091-250528-634709536241375&time=1533459600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-RurU%2BLcNf22Cah47VT8cvf5bPQU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5026409622566650616&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        title: "冰瓷牙",
        summary: "冰瓷牙采用一对一私人订制，颠覆传统美牙工艺",
      },
      {
        id: 1,
        imgPath: 'https://thumbnail0.baidupcs.com/thumbnail/084a063efdc63f7441b7d2538547f65c?fid=1913150091-250528-823501868467663&time=1533459600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-XYY7rZRUnhfxSDQE97BTCGMOJVM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5026423855656756338&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        title: "冰瓷牙2",
        summary: "美国专利技术 六大优势 让牙齿美出新高度",
      },
      {
        id: 2,
        imgPath: 'https://thumbnail0.baidupcs.com/thumbnail/6342b4676e8183f60d90f42e0edc3b2d?fid=1913150091-250528-837059148017529&time=1533459600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-B714ra2KlmQ8dCSD6g2PX94IIt4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5026482203277711785&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
        title: "冰瓷牙3",
        summary: "我是summary",
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