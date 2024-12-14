import Attendance from '../src/Model/Attendance.js';
import AttendShowService from '../src/Service/AttendShowService.js';

describe('출석 정보 보기 서비스 테스트', () => {
  const attendance = new Attendance('민성제');
  const attendShowService = new AttendShowService(attendance, ['민성제', '제성민']);
  test('미구현', () => {});
});
