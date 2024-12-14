import { DateTimes } from '@woowacourse/mission-utils';
import ErrorMessage from '../Constant/ErrorMessage.js';
import { INPUT_LIST } from '../Constant/InputConfig.js';
import { ListChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import validateIsNotDay from '../Util/validateIsNotDay.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import ConfirmController from './ConfirmController.js';

class MainController {
  async run(attendList) {
    while (true) {
      const input = await this.getUserInput();

      if (input === 'Q') break;
      OutputView.printBlank();
      if (input === '1') {
        const today = DateTimes.now();
        validateIsNotDay(today.getDate(), today.getDay());
        const confirmController = new ConfirmController();
        await confirmController.run(attendList);
      }
      if (input === '2') {
      }
    }
  }

  async getUserInput() {
    const input = await InputView.readUserInput();
    if (!ListChecker.isIncludesValue(INPUT_LIST, input)) throwError(ErrorMessage.INVALID_FORMAT);
    return input;
  }
}

export default MainController;
