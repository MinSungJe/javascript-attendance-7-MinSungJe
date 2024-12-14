import { DateTimes } from '@woowacourse/mission-utils';
import ErrorMessage from '../Constant/ErrorMessage.js';
import throwError from '../Util/throwError.js';
import { ListChecker } from './Checkers.js';
import validateTimeString from '../Util/validateTimeString.js';
import { DATE_LIST } from '../Constant/DateInfo.js';
import OutputView from '../View/OutputView.js';
import validateIsCampusOpen from '../Util/validateIsCampusOpen.js';

class AttendModifyService {
  attendance;
  day;

  constructor(attendance, nicknameList) {
    this.#validate(attendance, nicknameList);
    this.attendance = attendance;
  }

  #validate(attendance, nicknameList) {
    if (!ListChecker.isIncludesValue(nicknameList, attendance.nickname))
      throwError(ErrorMessage.NO_NICKNAME);
  }

  setDay(day) {
    this.#validateDay(day);
    this.day = day;
  }

  #validateDay(day) {
    const today = DateTimes.now();
    if (day > today.getDate()) throwError(ErrorMessage.UNABLE_MODIFY);
    const dateInfo = this.attendance.getAttendanceByDate(12, day);
    if (dateInfo.isDayOff)
      throwError(`12월 ${day}일 ${DATE_LIST[(day + 5) % 7]}요일은 등교일이 아닙니다.`);
  }

  modifyAttendance(time) {
    validateTimeString(time);
    const targetDate = this.attendance.getAttendanceByDate(12, this.day);
    validateIsCampusOpen(this.day, DATE_LIST[(this.day + 5) % 7], time);
    const prevTime = targetDate.time;
    const prevAttend = targetDate.getAttendInfo();
    targetDate.setAttendTime(time);
    OutputView.printModifyAttend(targetDate, prevTime, prevAttend);
  }
}

export default AttendModifyService;
