import Attendance from '../src/Model/Attendance.js';
import AttendModifyService from '../src/Service/AttendModifyService.js';

describe('출석 수정 서비스 테스트', () => {
  const attendance = new Attendance('민성제');
  const attendModifyService = new AttendModifyService(attendance, ['민성제', '제성민']);

  test.each([14, 17])('출석 수정이 불가능한 경우가 있다.', (day) => {
    expect(() => {
      attendModifyService.setDay(day);
    }).toThrow('[ERROR]');
  });

  test('출석을 수정할 수 있다.', () => {
    attendModifyService.setDay(12);
    attendModifyService.modifyAttendance('09:30');

    expect(attendance.getAttendanceByDate(12, 12).getPrintInfo()).toBe(
      '12월 12일 목요일 09:30 (출석)'
    );
  });
});
