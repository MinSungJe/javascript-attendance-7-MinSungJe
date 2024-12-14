import Attendance from '../src/Model/Attendance.js';

describe('Attendance 클래스 테스트', () => {
  const attendance = new Attendance('민성제');

  test.each([''])('잘못된 입력에 대해 오류를 낸다.', (input) => {
    expect(() => {
      new Attendance(input);
    }).toThrow('[ERROR]');
  });

  test('현재 시각을 기준으로 적당한 양의 날짜 객체를 생성한다.', () => {
    expect(attendance.dateList.length).toBe(14);
  });
});
