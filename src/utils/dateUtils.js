
/**
 * 格式化日期
*/
export function formateDate (time) {
  if (!time) return '';
  let date = new Date(time)

  let week;
  if (date.getDay() === 0) { week = "天" };
  if (date.getDay() === 1) { week = "一" };
  if (date.getDay() === 2) { week = "二" };
  if (date.getDay() === 3) { week = "三" };
  if (date.getDay() === 4) { week = "四" };
  if (date.getDay() === 5) { week = "五" };
  if (date.getDay() === 6) { week = "六" };

  let str1 = getDouble(date.getHours()) + ':' + getDouble(date.getMinutes()) + ':' + getDouble(date.getSeconds());

  let str2 = (date.getMonth() + 1) + '月' + date.getDate() + '日 周' + week

  return [str1, str2]
}

/**
 * 优化时间
 * */
function getDouble (num) {
  return num < 10 ? '0' + num : num;
}