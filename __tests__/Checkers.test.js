import { ListChecker, NumberChecker, StringChecker } from '../src/Service/Checkers.js';

describe('StringChecker 함수 객체 테스트', () => {
  test.each([
    ['민성제', false],
    ['', false],
    ['10', true],
    ['-1', true],
    ['0', true],
    ['00', true],
  ])('주어진 string이 숫자(Number)값인지 확인', (input, result) => {
    expect(StringChecker.isNumberString(input)).toBe(result);
  });

  test.each([
    ['스파게티-1', /.+-.+/, true],
    ['', /.+-.+/, false],
    ['안녕-', /.+-.+/, false],
    ['-하세요', /.+-.+/, false],
  ])('주어진 string이 정규식을 만족하는지 확인', (string, regExp, result) => {
    expect(StringChecker.isRegString(string, regExp)).toBe(result);
  });
});

describe('NumberChecker 함수 객체 테스트', () => {
  test.each([
    [10, 8, true],
    [10, 10, true],
    [10, 11, false],
  ])('주어진 숫자가 최솟값 이상인지 확인', (number, min, result) => {
    expect(NumberChecker.isMorethanMin(number, min)).toBe(result);
  });

  test.each([
    [10, 8, false],
    [10, 10, true],
    [10, 11, true],
  ])('주어진 숫자가 최댓값 이하인지 확인', (number, max, result) => {
    expect(NumberChecker.isLessthanMax(number, max)).toBe(result);
  });

  test.each([
    [10, 8, 10, true],
    [10, 10, 11, true],
    [10, 8, 9, false],
  ])('주어진 숫자가 범위 내에 있는지 확인', (number, min, max, result) => {
    expect(NumberChecker.isRangedNumber(number, min, max)).toBe(result);
  });
});

describe('ListChecker 함수 객체 테스트', () => {
  test.each([
    [['민', '성', '제'], true],
    [['민', '성', '성', '제'], false],
  ])('주어진 리스트에 중복값이 있는지 확인', (list, result) => {
    expect(ListChecker.isNoRepeatValue(list)).toBe(result);
  });

  test.each([
    [['민', '성', '제'], '민', true],
    [['민', '성', '제'], '임', false],
  ])('주어진 리스트에 특정 값이 있는지 확인', (list, value, result) => {
    expect(ListChecker.isIncludesValue(list, value)).toBe(result);
  });
});
