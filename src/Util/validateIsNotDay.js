import throwError from './throwError.js';
import { DATE_LIST, WEEKDAY_LIST } from '../Constant/DateInfo.js';
import { ListChecker } from '../Service/Checkers.js';

const validateIsNotDay = (day) => {
  if (!ListChecker.isIncludesValue(WEEKDAY_LIST, DATE_LIST[(day + 5) % 7]) || day === 25)
    throwError(`12월 ${day}일 ${DATE_LIST[(day + 5) % 7]}요일은 등교하는 날이 아닙니다.`);
};

export default validateIsNotDay;
