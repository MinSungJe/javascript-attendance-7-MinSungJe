import { DateTimes } from '@woowacourse/mission-utils';
import ErrorMessage from '../Constant/ErrorMessage.js';
import { NumberChecker, StringChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import validateTimeString from '../Util/validateTimeString.js';
import AttendDate from './AttendDate.js';
import { DATE_LIST } from '../Constant/DateInfo.js';

class Attendance {
  nickname;
  dateList = [];

  constructor(nickname) {
    this.#validate(nickname);
    this.nickname = nickname;
    this.#createDateList();
  }

  #validate(nickname) {
    if (nickname === '' || nickname === undefined) throwError(ErrorMessage.INVALID_INPUT);
  }

  #createDateList() {
    const today = DateTimes.now();
    for (let day = 1; day <= today.getDate(); day++) {
      this.dateList = [...this.dateList, new AttendDate(12, day, this.#getDate(day))];
    }
  }

  //   #validateCSVInput(input) {
  //     if (!StringChecker.isRegString(input, /.+,.+/)) throwError(ErrorMessage.INVALID_INPUT);
  //     const [nickname, datetime] = input.split(',');
  //     this.#validateDatetime(datetime);
  //     this.nickname = nickname;
  //   }

  #getDate(day) {
    return DATE_LIST[(day + 5) % 7];
  }

  #validateDatetime(datetime) {
    const dateTimeInfo = datetime.split(' ');
    if (dateTimeInfo.length !== 2) throwError(ErrorMessage.INVALID_INPUT);
    const [date, time] = dateTimeInfo;

    if (!StringChecker.isRegString(date, /.+-.+-.+/)) throwError(ErrorMessage.INVALID_INPUT);
    const [year, month, day] = date.split('-');
    if (Number(year) !== 2024) throwError('현재는 2024년 12월만 서비스 가능합니다.');
    if (Number(month) !== 12) throwError('현재는 2024년 12월만 서비스 가능합니다.');
    if (!NumberChecker.isRangedNumber(day, 1, 31)) throwError(ErrorMessage.INVALID_INPUT);

    if (validateTimeString(time)) throwError(ErrorMessage.INVALID_INPUT);
  }
}

export default Attendance;
