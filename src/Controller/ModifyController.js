import AttendConfirmService from '../Service/AttendConfirmService.js';
import InputView from '../View/InputView.js';
import { ListChecker, StringChecker } from '../Service/Checkers.js';
import throwError from '../Util/throwError.js';
import ErrorMessage from '../Constant/ErrorMessage.js';
import OutputView from '../View/OutputView.js';
import AttendModifyService from '../Service/AttendModifyService.js';

class ModifyController {
  async run(attendList) {
    const modifyService = await this.getModifyService(attendList);
    const day = await this.getDay();
    modifyService.setDay(day);
    const time = await InputView.readModifyTime();
    OutputView.printBlank();
    modifyService.modifyAttendance(time);
    OutputView.printBlank();
  }

  async getModifyService(attendList) {
    const nickName = await InputView.readNickname();
    const nicknameList = attendList.map((attendance) => attendance.nickname);
    this.#validateNickname(nickName, nicknameList);
    const attendance = attendList.find((attendance) => (attendance.nickname = nickName));
    const attendModifyService = new AttendModifyService(attendance, nicknameList);
    return attendModifyService;
  }

  async getDay() {
    const dayInput = await InputView.readDay();
    if (!StringChecker.isNumberString(dayInput)) throwError(ErrorMessage.INVALID_FORMAT);
    return Number(dayInput);
  }

  #validateNickname(nickname, nicknameList) {
    if (!ListChecker.isIncludesValue(nicknameList, nickname)) throwError(ErrorMessage.NO_NICKNAME);
  }
}

export default ModifyController;
