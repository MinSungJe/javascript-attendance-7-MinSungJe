import ErrorMessage from '../Constant/ErrorMessage.js';
import { NumberChecker } from '../Service/Checkers.js';
import throwError from './throwError.js';

const validateIsCampusOpen = (day, date, time) => {
  if (day === 25) throwError(ErrorMessage.NOT_TIME);
  if (date === '토' || date === '일') throwError(ErrorMessage.NOT_TIME);
  const [hour, minute] = time.split(':').map(Number);
  if (
    !NumberChecker.isRangedNumber(hour, 8, 23) ||
    (hour == 23 && NumberChecker.isMorethanMin(minute, 0))
  )
    throwError(ErrorMessage.NOT_TIME);
};

export default validateIsCampusOpen;
