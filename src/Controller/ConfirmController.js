import AttendConfirmService from '../Service/AttendConfirmService.js';
import InputView from '../View/InputView.js';
import { ListChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import ErrorMessage from '../Constant/ErrorMessage.js';
import OutputView from '../View/OutputView.js';

class ConfirmController {
  async run(attendList) {
    const attendConfirmService = await this.getConfirmService(attendList);
    const timeInput = await InputView.readTime();
    OutputView.printBlank();
    attendConfirmService.addAttendTime(timeInput);
    OutputView.printBlank();
  }

  async getConfirmService(attendList) {
    const input = await InputView.readNickname();
    const nicknameList = attendList.map((attendance) => attendance.nickname);
    this.#validateNickname(input, nicknameList);
    const attendance = attendList.find((attendance) => (attendance.nickname = input));
    const attendConfirmService = new AttendConfirmService(attendance, nicknameList);
    return attendConfirmService;
  }

  #validateNickname(nickname, nicknameList) {
    if (!ListChecker.isIncludesValue(nicknameList, nickname)) throwError(ErrorMessage.NO_NICKNAME);
  }
}

export default ConfirmController;
