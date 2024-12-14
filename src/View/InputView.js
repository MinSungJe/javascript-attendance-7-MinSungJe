import { Console, DateTimes } from '@woowacourse/mission-utils';
import Comment from '../Constant/Comment.js';
import parseDateNumber from '../Util/parseDateNumber.js';
import { DATE_LIST } from '../Constant/DateInfo.js';

const InputView = {
  async readUserInput() {
    const today = DateTimes.now();
    Console.print(
      `오늘은 ${parseDateNumber(today.getMonth() + 1)}월 ${parseDateNumber(today.getDate())}일 ${
        DATE_LIST[(today.getDate() + 5) % 7]
      }요일입니다. 기능을 선택해 주세요.`
    );
    const input = await Console.readLineAsync(Comment.INPUT);
    return input;
  },
  async readNickname() {
    const input = await Console.readLineAsync(Comment.NICKNAME_INPUT);
    return input;
  },
  async readTime() {
    const input = await Console.readLineAsync(Comment.TIME_INPUT);
    return input;
  },
};

export default InputView;
