import ErrorMessage from '../Constant/ErrorMessage.js';
import { INPUT_LIST } from '../Constant/InputConfig.js';
import { ListChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import InputView from '../View/InputView.js';

class MainController {
  async run() {
    while (true) {
      const input = await this.getUserInput();
      if (input === 'Q') break;
    }
  }

  async getUserInput() {
    const input = await InputView.readUserInput();
    if (!ListChecker.isIncludesValue(INPUT_LIST, input)) throwError(ErrorMessage.INVALID_FORMAT);
    return input;
  }
}

export default MainController;
