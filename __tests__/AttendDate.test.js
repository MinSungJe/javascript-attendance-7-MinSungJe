import AttendDate from '../src/Model/AttendDate.js';

describe('AttendDate 클래스 테스트', () => {
  const testAttendDate = new AttendDate(12, 2, '월');

  test('날짜 객체에는 월, 일, 요일 정보를 담아야 한다.', () => {
    expect(() => {
      new AttendDate(12, 5, '목');
    }).not.toThrow('[ERROR]');
  });

  test.each([
    ['월', '일', 5],
    ['월', 5, '월'],
    [12, '일', '월'],
    [13, 5, '월'],
    [12, 32, '월'],
    [12, 31, 5],
    [12, 31, 5],
  ])('날짜 객체에 이상한 값이 들어오면, 오류를 낸다.', (month, day, date) => {
    expect(() => {
      new AttendDate(month, day, date);
    }).toThrow('[ERROR]');
  });

  test.each(['13:00'])('시간을 설정할 수 있다.', (time) => {
    const attendDate = new AttendDate(12, 1, '월');
    expect(() => {
      attendDate.setTime(time);
    }).not.toThrow('[ERROR]');
  });

  test.each([
    [12, 2, '월', '13:00', '출석'],
    [12, 2, '월', '13:06', '지각'],
    [12, 2, '월', '13:31', '결석'],
    [12, 2, '월', '14:00', '결석'],
    [12, 2, '화', '10:05', '출석'],
    [12, 2, '화', '10:06', '지각'],
    [12, 2, '화', '10:31', '결석'],
    [12, 2, '화', '14:31', '결석'],
  ])('시간을 설정한 경우 출석 여부를 체크할 수 있다.', (month, day, date, time, result) => {
    const attendDate = new AttendDate(month, day, date);
    attendDate.setTime(time);
    expect(attendDate.getAttendInfo()).toBe(result);
  });

  test.each([
    [12, 2, '월', '13:00', '12월 02일 월요일 13:00 (출석)'],
    [12, 2, '월', '13:06', '12월 02일 월요일 13:06 (지각)'],
    [12, 2, '월', '13:31', '12월 02일 월요일 13:31 (결석)'],
  ])('시간 정보에 대해 string으로 정리가 가능하다.', (month, day, date, time, result) => {
    const attendDate = new AttendDate(month, day, date);
    attendDate.setTime(time);
    expect(attendDate.getPrintInfo()).toBe(result);
  });
});
