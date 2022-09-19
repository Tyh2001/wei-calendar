// 获取每个月多少天
export const dayMonth = (year: number, month: number): number => {
  if (month !== 2) {
    const months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const
    return months[month - 1]
  }
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28
}

// 计算当月的第一天是周几，返回需要该空出的格数
export const dayWeek = (year: number, month: number): number => {
  const firstDayWeek: number = new Date(`${year}/${month}/1`).getDay()
  return firstDayWeek === 0 ? 0 : firstDayWeek
}

// 给数字前面加 0
export const addPrefix = (num: number): string => {
  return num > 9 ? num.toString() : `0${num}`
}
