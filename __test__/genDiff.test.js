import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const fileFormats = ['json', 'yml'];
const formatters = ['stylish', 'plain'];

const stylish = readFile('expect-stylish');
const plain = readFile('expect-plain');
const output = { stylish, plain };
const argumentsOfTest = formatters.flatMap((format) => (
  fileFormats.map((fileFormat) => [fileFormat, format])
));

test.each(argumentsOfTest)('%s format files difference with %s output format', (fileFormat, format) => {
  const file1 = getFixturePath(`file1.${fileFormat}`);
  const file2 = getFixturePath(`file2.${fileFormat}`);
  expect(genDiff(file1, file2, format)).toBe(output[format]);
});
