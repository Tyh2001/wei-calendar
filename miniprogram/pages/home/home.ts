// pages/home/home.ts
import { dayMonth, dayWeek, addPrefix } from '../../utils/util'
import { lunarCalendar } from '../../utils/lunar'
import type { kunarInterface } from '../../_interface/lunar'

const date: Date = new Date()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: date.getFullYear(), // 年
    month: date.getMonth() + 1, // 月
    date: date.getDate(), // 日
    dayMonth: 0, // 每个月有多少天
    weekList: ['日', '一', '二', '三', '四', '五', '六'] as const, // 周几
    dailyDetailAll: [] as kunarInterface[], // 详细描述信息
    dayWeekNum: 0, // 每月首日是星期几
    detailDate: '' // 详细日期
  },

  // 上个月
  prevMonth() {
    if (this.data.month > 1) {
      this.data.month--
      this.calendarLoad()
      return
    }
    this.data.year--
    this.data.month = 12
    this.calendarLoad()
  },

  // 返回今天
  goTaday() {
    this.data.month = date.getMonth() + 1
    this.data.year = date.getFullYear()
    this.data.date = date.getDate()
    this.calendarLoad()
  },

  // 下个月
  nextMoth() {
    if (this.data.month < 12) {
      this.data.month++
      this.calendarLoad()
      return
    }
    this.data.year++
    this.data.month = 1
    this.calendarLoad()
  },

  // 初始化渲染
  calendarLoad() {
    const monthNum: number = dayMonth(this.data.year, this.data.month) // 获取这个月有多少天
    const dailyDetailAll: kunarInterface[] = [] // 每天的详细信息

    for (let i = 0; i < monthNum; i++) {
      const dailyDetai: kunarInterface = lunarCalendar.solar2lunar(
        this.data.year,
        this.data.month,
        i + 1
      ) as kunarInterface

      dailyDetai.todayDate = i + 1 // 添加每天的日期

      // 周年日
      if (this.data.month === 8 && dailyDetai.todayDate === 15) {
        dailyDetai.festival = '周年日'
      }

      // 甜甜生日
      if (this.data.month === 9 && dailyDetai.todayDate === 17) {
        dailyDetai.festival = '甜甜生日'
      }

      // 维维生日
      if (this.data.month === 10 && dailyDetai.todayDate === 18) {
        dailyDetai.festival = '维维生日'
      }
      dailyDetailAll.push(dailyDetai)
    }

    this.setData({
      dayMonth: dayMonth(this.data.year, this.data.month), // 每个月有多少天
      dailyDetailAll, // 详细描述信息
      dayWeekNum: dayWeek(this.data.year, this.data.month), // 每月首日是星期几
      detailDate: `${this.data.year}年 ${addPrefix(this.data.month)}月 ${addPrefix(this.data.date)}日` // 详细信息
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.calendarLoad()
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