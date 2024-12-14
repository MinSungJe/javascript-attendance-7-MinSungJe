import MainController from './Controller/MainController.js';
import Attendance from './Model/Attendance.js';
import loadFromPublic from './Util/loadFromPublic.js';

class App {
  attendanceList = [];

  async run() {
    this.#init();
    const mainController = new MainController();
    await mainController.run(this.attendanceList);
  }

  #init() {
    this.#getCSVData();
    const nicknameSet = new Set(this.attendanceList.map((data) => data.nickname));
    const nicknameList = [...nicknameSet];
    this.attendanceList = nicknameList.map((nickname) => new Attendance(nickname));
  }

  #getCSVData() {
    const data = loadFromPublic();
    this.attendanceList = data;
  }
}

export default App;
