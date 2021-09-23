import _ from 'lodash';
import { readFileSync } from 'fs';

const letCompare = (file1, file2, keys) => {
  const result = {};
  keys.map((key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        result[key] = file1[key];
      }
      if (file1[key] !== file2[key]) {
        result[`- ${key}`] = file1[key];
        result[`+ ${key}`] = file2[key];
      }
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      result[`- ${key}`] = file1[key];
    }
    if (!_.has(file1, key) && _.has(file2, key)) {
      result[`+ ${key}`] = file2[key];
    }
  });
  return result;
};

const genDiff = (filepath1, filepath2) => {
  const contentOfFile1 = JSON.parse(readFileSync(filepath1));
  const contentOfFile2 = JSON.parse(readFileSync(filepath2));
  const sortedKeysOfBothFiles = _.union(Object.keys(contentOfFile1), Object.keys(contentOfFile2));
  return letCompare(contentOfFile1, contentOfFile2, sortedKeysOfBothFiles);
};

export default genDiff;
