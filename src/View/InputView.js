import { Console } from '@woowacourse/mission-utils';
import Comment from '../Constant/Comment.js';

const InputView = {
  async readSomething() {
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
