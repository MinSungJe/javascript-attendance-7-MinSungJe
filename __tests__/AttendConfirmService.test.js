import Attendance from '../src/Model/Attendance.js';
import AttendConfirmService from '../src/Service/AttendConfirmService.js';

describe('출석 확인 서비스 테스트', () => {
  const attendance = new Attendance('민성제');
  const attendConfirmService = new AttendConfirmService(attendance, ['민성제', '제성민']);

  test('출석 체크가 가능하다.', () => {
    attendConfirmService.addAttendTime('09:58');
    expect(() => {
      attendConfirmService.addAttendTime('09:57');
    }).toThrow('[ERROR]');
  });
});
