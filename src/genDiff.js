import _ from 'lodash';
import { readFileSync } from 'fs';
import path from 'path';

const getPath = (filepath) => {
  const pathToFile = path.resolve(process.cwd(), filepath);
  const data = JSON.parse(readFileSync(pathToFile, 'utf-8'));
  return data;
};

const genDiff = (filepath1, filepath2) => {
  const file1 = getPath(filepath1);
  const file2 = getPath(filepath2);
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const diff = keys.reduce((acc, key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        return `${acc}  ${key}: ${file1[key]}\n`;
      }
      return `${acc}  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}\n`;
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      return `${acc}  - ${key}: ${file1[key]}\n`;
    }
    if (!_.has(file1, key) && _.has(file2, key)) {
      return `${acc}  + ${key}: ${file2[key]}\n`;
    }
    return acc;
  }, '');
  return `{\n${diff}}`;
};

export default genDiff;
