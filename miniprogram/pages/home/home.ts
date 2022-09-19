// pages/home/home.ts
import { dayMonth, dayWeek } from '../../utils/util'
import { lunarCalendar } from '../../utils/lunar'

const date: Date = new Date()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: date.getFullYear(), // 年
    month: date.getMonth(), // 月
    date: date.getDate(), // 日
    dayMonth: 0, // 每个月有多少天
    weekList: ['日', '一', '二', '三', '四', '五', '六'], // 周几
    dailyDetailAll: [], // 详细描述信息
    dayWeekNum: 0, // 每月首日是星期几
    dayItemWidth: 0 // 日期每一项的宽度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const monthNum: number = dayMonth(this.data.year, this.data.month)
    const dailyDetailAll: object[] = [] // 每天的详细信息

    for (let i = 0; i < monthNum; i++) {
      const dailyDetai: object = lunarCalendar.solar2lunar(
        this.data.year,
        this.data.month + 1,
        i + 1
      ) as object

      dailyDetai.todayDate = i + 1 // 添加每天的日期
      dailyDetailAll.push(dailyDetai)
    }

    this.setData({
      dayMonth: dayMonth(this.data.year, this.data.month), // 每个月有多少天
      dailyDetailAll, // 详细描述信息
      dayWeekNum: dayWeek(this.data.year, this.data.month) // // 每月首日是星期几
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})