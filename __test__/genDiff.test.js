import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff for json file', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(readFile('expect'));
});

test('gendiff for yaml file', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(readFile('expect'));
});
