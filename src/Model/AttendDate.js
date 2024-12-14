import { DATE_LIST, WEEKDAY_LIST } from '../Constant/DateInfo.js';
import ErrorMessage from '../Constant/ErrorMessage.js';
import { ListChecker, NumberChecker, StringChecker } from '../Service/Checkers.js';
import parseDateNumber from '../Util/parseDateNumber.js';
import throwError from '../Util/throwError.js';
import validateTimeString from '../Util/validateTimeString.js';

class AttendDate {
  month;
  day;
  date;
  isDayOff = false;
  time = '--:--';

  constructor(month, day, date) {
    this.#validate(month, day, date);
    this.month = month;
    this.day = day;
    this.date = date;
    this.#setIsDayOff();
  }

  #validate(month, day, date) {
    if (!NumberChecker.isRangedNumber(month, 1, 12)) throwError(ErrorMessage.INVALID_INPUT);
    if (!NumberChecker.isRangedNumber(day, 1, 31)) throwError(ErrorMessage.INVALID_INPUT);
    if (!ListChecker.isIncludesValue(DATE_LIST, date)) throwError(ErrorMessage.INVALID_INPUT);
  }

  #setIsDayOff() {
    if (!ListChecker.isIncludesValue(WEEKDAY_LIST, this.date)) this.isDayOff = true;
    if (this.day === 25) this.isDayOff = true;
  }

  setTime(timeString) {
    validateTimeString(timeString);
    this.time = timeString;
  }

  getAttendInfo() {
    if (this.time === '--:--') return '결석';
    const [hour, minute] = this.time.split(':').map(Number);
    const { ruleHour, ruleMinute } = this.#getAttendRuleTime();
    if (hour > ruleHour || (hour === ruleHour && minute > ruleMinute + 30)) return '결석';
    if (hour === ruleHour && minute > ruleMinute + 5) return '지각';
    return '출석';
  }

  getPrintInfo() {
    return `${parseDateNumber(this.month)}월 ${parseDateNumber(this.day)}일 ${this.date}요일 ${
      this.time
    } (${this.getAttendInfo()})`;
  }

  #getAttendRuleTime() {
    if (this.date === '월') return { ruleHour: 13, ruleMinute: 0 };
    else return { ruleHour: 10, ruleMinute: 0 };
  }
}

export default AttendDate;
