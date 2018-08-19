// pages/home/produce_item.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listProducts: [{
        id: 0,
        imgPath: '../img/product/product1.jpg',
        title: "冰瓷牙",
        summary: "冰瓷牙采用一对一私人订制，颠覆传统美牙工艺",
        detail: "冰瓷牙的原理\n\n冰瓷牙贴面什么原理，就是顾客先做咬模牙印，每个顾客都是量身定做，取好牙模印，需要运到厂家打造、后我们直接在牙模上进行设计、做型、打磨、抛光、然后用微波炉加热分离使小瓷牙达到最高硬度、然后就可以先放在客户口腔内看效果、客户满意了、就可以进行粘接。节省了时间。冰瓷牙采用一对一私人订制，颠覆传统美牙工艺。"
      },
      {
        id: 1,
        imgPath: '../img/product/product3.jpg',
        title: "冰瓷牙",
        summary: "美国专利技术 六大优势 让牙齿美出新高度",
        detail: "美国专利技术 六大优势 让牙齿美出新高度\n\n轻松：患者无需磨牙，患者无痛无不适 。\n超薄：超薄可至0.1 - 0.2mm，无异物感，如牙齿的隐形眼镜。\n超硬：硬度可达500mpa，不着色，永久美白。\n快捷：1-2个小时即可完成全口修复。\n美观：好莱坞美白色，通透靓丽，年轻健康。\n可逆：不需要时微波震荡即可卸除，原牙无损伤。"
      },
    ],
    currentItem: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
        currentItem: this.data.listProducts[options.id]
      }),
      wx.setNavigationBarTitle({
        title: this.data.currentItem.title
      })
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

  }
})