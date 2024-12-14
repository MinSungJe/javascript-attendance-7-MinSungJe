import loadFromPublic from '../src/Util/loadFromPublic.js';

describe('loadFromPublic 테스트', () => {
  test('csv 정보를 읽어오는 지 테스트한다.', () => {
    expect(() => {
      loadFromPublic();
    }).not.toThrow();
  });
});
