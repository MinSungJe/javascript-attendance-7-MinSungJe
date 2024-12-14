import { DateTimes } from '@woowacourse/mission-utils';
import ErrorMessage from '../Constant/ErrorMessage.js';
import { INPUT_LIST } from '../Constant/InputConfig.js';
import { ListChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import validateIsNotDay from '../Util/validateIsNotDay.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import ConfirmController from './ConfirmController.js';
import ModifyController from './ModifyController.js';

class MainController {
  async run(attendList) {
    while (true) {
      const input = await this.getUserInput();
      OutputView.printBlank();

      if (input === 'Q') break;
      if (input === '1') {
        const today = DateTimes.now();
        validateIsNotDay(today.getDate(), today.getDay());
        const confirmController = new ConfirmController();
        await confirmController.run(attendList);
      }
      if (input === '2') {
        const modifyController = new ModifyController();
        await modifyController.run(attendList);
      }
      if (input === '3') {
        OutputView.printMessage('미구현');
      }
      if (input === '4') {
        OutputView.printMessage('미구현');
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
