import { format, addDays, parseISO, isAfter, subDays, differenceInDays, compareAsc, differenceInMinutes } from 'date-fns';

// 格式化日期
export const formatDate = (type) => {
  let time = '';
  switch (type) {
    case 'yyyy-MM-dd':
      time = format(new Date(), 'yyyy-MM-dd');
      break;
    case 'yyyy-MM-dd HH:mm':
      time = format(new Date(), 'yyyy-MM-dd HH:mm');
      break;
    case 'yyyy-MM-dd HH:mm:ss':
      time = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
      break;
    case 'MM-dd HH:mm':
      time = format(new Date(), 'MM-dd HH:mm');
      break;
    case 'HH:mm:ss':
      time = format(new Date(), 'HH:mm:ss');
      break;
    default:
      time = format(new Date(), 'yyyy-MM-dd');
      break;
  }
  return time;
};

// 是否是今日
export const isToday = (date) => {
  return format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
};

//明天的日期
export const calToday = (d1, n) => {
  //  TODO:验证d1 d2合法?
  return addDays(d1, n);
};

// 判断日期1是否在日期2之后 --boolean
export const isDateAfter = (date1, date2) => {
  return isAfter(date1, date2);
};

// 获取传入日期n天以前的日期
export const dateBefore = (date, n) => {
  return subDays(date, n);
};

// 计算两个时间之间相差的天数
export const differenceDays = (d1, d2) => {
  return differenceInDays(d1, d2);
};

// 格式是 天 若date1大于date2,则返回1;若date1小于date2则返回-1,相等则返回0
export const compareDif2d = (d1, d2) => {
  return compareAsc(d1, d2);
};

// 2个 根据 小时:分钟 计算差值 判断是否过期
export const compareDif2m = (d1, d2) => {
  const n1 = parseISO(d1);
  const n2 = parseISO(d2);
  return differenceInMinutes(n1, n2);
};
