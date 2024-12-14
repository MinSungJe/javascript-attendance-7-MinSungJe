import { Console } from '@woowacourse/mission-utils';
import parseDateNumber from '../Util/parseDateNumber.js';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printBlank() {
    Console.print('');
  },

  printConfirmAttend(targetDate) {
    Console.print(
      `${parseDateNumber(targetDate.month)}월 ${parseDateNumber(targetDate.day)}일 ${
        targetDate.date
      }요일 ${targetDate.time} (${targetDate.getAttendInfo()})`
    );
  },

  printModifyAttend(targetDate, prevTime, prevAttend) {
    Console.print(
      `${parseDateNumber(targetDate.month)}월 ${parseDateNumber(
        targetDate.day
      )}일 ${parseDateNumber(targetDate.date)}요일 ${prevTime} (${prevAttend}) -> ${
        targetDate.time
      } (${targetDate.getAttendInfo()}) 수정 완료!`
    );
  },
};

export default OutputView;
