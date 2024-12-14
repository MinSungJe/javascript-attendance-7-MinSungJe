import MainController from './Controller/MainController.js';
import Attendance from './Model/Attendance.js';
import loadFromPublic from './Util/loadFromPublic.js';

class App {
  AttendanceList = [];

  async run() {
    this.#init();
    const mainController = new MainController();
    await mainController.run();
  }

  #init() {
    this.#getCSVData();
    const nicknameSet = new Set(this.AttendanceList.map((data) => data.nickname));
    const nicknameList = [...nicknameSet];
    this.AttendanceList = nicknameList.map((nickname) => new Attendance(nickname));
  }

  #getCSVData() {
    const data = loadFromPublic();
    this.AttendanceList = data;
  }
}

export default App;
