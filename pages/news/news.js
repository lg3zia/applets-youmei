// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listNews: [{
      id: 0,
      imgPath: 'https://thumbnail0.baidupcs.com/thumbnail/e00f6f174f69b5618e20a45397b08b0f?fid=1913150091-250528-634709536241375&time=1533459600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-RurU%2BLcNf22Cah47VT8cvf5bPQU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=5026409622566650616&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      title: "价格三千和价格一万的牙齿矫正区别在哪？",
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