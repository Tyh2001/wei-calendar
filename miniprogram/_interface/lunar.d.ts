export interface kunarInterface {
  Animal: string // 生肖
  IDayCn: string // 农历日期
  IMonthCn: string // 当前月份
  constellation: string // 星座
  todayDate: number
  Term: string | null
  cDay: number
  cMonth: number
  cYear: number
  date: string
  festival: string | null // 节日
  gzDay: string
  gzMonth: string
  gzYear: string
  isLeap: boolean
  isTerm: boolean
  isToday: boolean
  lDay: number
  lMonth: number
  lYear: number
  lunarDate: string
  lunarFestival: null
  nWeek: number
  ncWeek: string // 星期
}
