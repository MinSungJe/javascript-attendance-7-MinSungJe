import validateTimeString from '../src/Util/validateTimeString.js';

describe('validateTimeString 함수 테스트', () => {
  test.each(['', '24:00', ':', ':0', '0:', '23:61'])(
    '올바르지 않은 시간 값이 들어오면 오류를 낸다.',
    (input) => {
      expect(() => {
        validateTimeString(input);
      }).toThrow('[ERROR]');
    }
  );
});
