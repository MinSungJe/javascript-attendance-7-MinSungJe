import ErrorMessage from '../Constant/ErrorMessage.js';
import { NumberChecker, StringChecker } from '../Service/Checkers.js';
import throwError from './throwError.js';

const validateTimeString = (timeString) => {
  if (!StringChecker.isRegString(timeString, /.+:.+/)) throwError(ErrorMessage.INVALID_FORMAT);
  const timeInfoList = timeString.split(':');
  if (timeInfoList.length !== 2) throwError(ErrorMessage.INVALID_FORMAT);
  if (!StringChecker.isNumberString(timeInfoList[0])) throwError(ErrorMessage.INVALID_FORMAT);
  if (!NumberChecker.isRangedNumber(Number(timeInfoList[0]), 0, 23))
    throwError(ErrorMessage.INVALID_FORMAT);
  if (!StringChecker.isNumberString(timeInfoList[1])) throwError(ErrorMessage.INVALID_FORMAT);
  if (!NumberChecker.isRangedNumber(Number(timeInfoList[1]), 0, 59))
    throwError(ErrorMessage.INVALID_FORMAT);
};

export default validateTimeString;
