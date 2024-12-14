import ErrorMessage from '../Constant/ErrorMessage.js';
import throwError from '../Util/throwError.js';
import { ListChecker } from './Checkers.js';
import OutputView from '../View/OutputView.js';

class AttendShowService {
  attendance;

  constructor(attendance, nicknameList) {
    this.#validate(attendance, nicknameList);
    this.attendance = attendance;
  }

  #validate(attendance, nicknameList) {
    if (!ListChecker.isIncludesValue(nicknameList, attendance.nickname))
      throwError(ErrorMessage.NO_NICKNAME);
  }

  showAttendance() {
    this.attendance.dateList.forEach((date) => {
      OutputView.printMessage(`${date.getPrintInfo()}`);
    });
  }
}

export default AttendShowService;
