import { DateTimes } from '@woowacourse/mission-utils';
import ErrorMessage from '../Constant/ErrorMessage.js';
import throwError from '../Util/throwError.js';
import validateTimeString from '../Util/validateTimeString.js';
import { ListChecker } from './Checkers.js';

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
    const attendDate = this.attendance.getAttendanceByDate(today.getMonth() + 1, today.getDate());
    if (attendDate.time !== '--:--') throwError(ErrorMessage.ALREADY_ATTEND);
    attendDate.setAttendTime(time);
  }
}

export default AttendConfirmService;
