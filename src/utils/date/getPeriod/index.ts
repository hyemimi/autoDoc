import { CURRENT_YEAR,currentMonth,currentDay } from '../getToday';

const getPeriod = (joiningDate : string) => {

  /** 입사일자 */
  if (typeof(joiningDate) === 'undefined') {
    return;
  }
  const date1 = new Date(Number(joiningDate?.slice(0,4)),Number(joiningDate?.slice(5,8)) - 1, Number(joiningDate?.slice(9,11)));
  /** 현재날짜 */
  //const { :currentYear, currentMonth, currentDay } = getToday();
  const date2 = new Date(Number(CURRENT_YEAR),Number(currentMonth) - 1,Number(currentDay));

  /** 재직기간 계산 */
  const diff = Number(date2) - Number(date1);
  let monthDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let yearDiff = 0;
  if (monthDiff >= 13) {
    yearDiff = Math.floor(monthDiff / 12);
    monthDiff = Math.abs(monthDiff - (yearDiff * 12));
  }

  const yearPeriod = yearDiff < 1 ? '' : '' + yearDiff + '년';
  const monthPeriod = monthDiff < 1 ? '' : monthDiff + '개월' ;

  return yearPeriod + monthPeriod ;

};

export default getPeriod; 
