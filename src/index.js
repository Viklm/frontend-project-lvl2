import { readFileSync } from 'fs';
import path from 'path';
import letParse from './parsers.js';
import formDiff from './formaterdiff.js';
import makeStylish from './stylish.js';

const getFileFormat = (filepath) => path.extname(filepath);

const dataOfFile = (filepath) => {
  const pathToFile = path.resolve(process.cwd(), filepath);
  const data = readFileSync(pathToFile, 'utf-8');
  const fileFormat = getFileFormat(filepath);
  return letParse(data, fileFormat);
};

const getDifferenceOfFile = (filepath1, filepath2) => {
  const file1 = dataOfFile(filepath1);
  const file2 = dataOfFile(filepath2);
  return formDiff(file1, file2);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const diff = getDifferenceOfFile(filepath1, filepath2);
  if (format === 'stylish') return makeStylish(diff);
  return 2;
};

export default genDiff;
