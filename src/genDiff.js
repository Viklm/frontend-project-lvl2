import _ from 'lodash';
import { readFileSync } from 'fs';

const letCompare = (file1, file2, keys) => {
  const result = {};
  for (const key of keys) {
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
  }
  return result;
};

const genDiff = (filepath1, filepath2) => {
  const contentOfFile1 = JSON.parse(readFileSync(filepath1));
  const contentOfFile2 = JSON.parse(readFileSync(filepath2));
  const keysOfBothFiles = [Object.keys(contentOfFile1), Object.keys(contentOfFile2)];
  const sortedKeysOfBothFiles = _.uniq(keysOfBothFiles.flat());
  return letCompare(contentOfFile1, contentOfFile2, sortedKeysOfBothFiles);
};

export default genDiff;
