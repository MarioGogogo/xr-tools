import { format, addDays, isAfter, subDays, differenceInDays } from ' date-fns';

// 今日日期格式
const today = (format) => {
  switch (format) {
    case 'yyyy-MM-dd':
      format(new Date(), 'yyyy-MM-dd');
      break;
    case 'yyyy-MM-dd HH:mm:ss':
      format(new Date(), 'yyyy-MM-dd HH:mm:ss');
      break;
    case 'HH:mm:ss':
      format(new Date(), 'HH:mm:ss');
      break;
    default:
      break;
  }
};

// 是否是今日
const isToday = (date) => {
  return format(date, 'yyyy-MM-dd');
};

const calToday = (d1, d2) => {
  //  TODO:验证d1 d2合法?
  return addDays(d1, d2);
};

// 判断日期1是否在日期2之后 --boolean
const isDateAfter = (date1, date2) => {
  return isAfter(date1, date2);
};

// 获取传入日期n天以前的日期
const dateBefore = (date, n) => {
  return subDays(date, n);
};

// 计算两个时间之间相差的天数
const differenceDays = (d1, d2) => {
  return differenceInDays(d1, d2);
};
export default {
  isToday,
  today,
  isDateAfter,
  calToday,
  dateBefore,
  differenceDays,
};
