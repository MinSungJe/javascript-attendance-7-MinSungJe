import { DateTimes } from '@woowacourse/mission-utils';
import ErrorMessage from '../Constant/ErrorMessage.js';
import throwError from '../Util/throwError.js';
import validateTimeString from '../Util/validateTimeString.js';
import { ListChecker } from './Checkers.js';
import OutputView from '../View/OutputView.js';
import { DATE_LIST } from '../Constant/DateInfo.js';

class AttendConfirmService {
  attendance;

  constructor(attendance, nicknameList) {
    this.#validate(attendance, nicknameList);
    this.attendance = attendance;
  }

  #validate(attendance, nicknameList) {
    if (!ListChecker.isIncludesValue(nicknameList, attendance.nickname))
      throwError(ErrorMessage.NO_NICKNAME);
  }

  addAttendTime(time) {
    validateTimeString(time);
    const today = DateTimes.now();
    this.#validateDay(today.getDate());
    const attendDate = this.attendance.getAttendanceByDate(today.getMonth() + 1, today.getDate());
    if (attendDate.time !== '--:--') throwError(ErrorMessage.ALREADY_ATTEND);
    attendDate.setAttendTime(time);
    OutputView.printConfirmAttend(attendDate);
  }

  #validateDay(day) {
    const today = DateTimes.now();
    if (day > today.getDate()) throwError(ErrorMessage.UNABLE_MODIFY);
    const dateInfo = this.attendance.getAttendanceByDate(12, day);
    if (dateInfo.isDayOff)
      throwError(`12월 ${day}일 ${DATE_LIST[(day + 5) % 7]}요일은 등교하는 날이 아닙니다.`);
  }
}

export default AttendConfirmService;
