import fs from 'fs';

const loadFromPublic = () => {
  return loadFileSync('./public/attendances.csv');
};

const loadFileSync = (path) => {
  const data = fs.readFileSync(path, 'utf8');
  const rows = data.trim().split('\n');
  const headers = rows[0].trim('\r').split(',');

  return createDataArray(headers, rows.slice(1));
};

const createDataArray = (headers, body) => {
  return body.map((row) => {
    const values = row.split(',');
    return createObjectFromRow(values, headers);
  });
};

const createObjectFromRow = (values, headers) => {
  return headers.reduce((acc, header, index) => {
    acc[header] = parseValue(values[index]);
    return acc;
  }, {});
};

const parseValue = (value) => {
  const trimmedValue = value.trim('\r');
  if (trimmedValue === 'null') return null;
  if (!isNaN(trimmedValue)) return Number(trimmedValue);
  return trimmedValue;
};

export default loadFromPublic;
