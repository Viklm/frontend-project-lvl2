import genDiff from '../src/genDiff.js';

const file1 = 'file1.json';
const file2 = 'file2.json';
const actual1 = `{
  host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
const actual2 = `{
  host: hexlet.io
  + timeout: 20
  - proxy: 123.234.53.22
  - timeout: 50
  - follow: false
  + verbose: true
}`;

test('comparing two files1', () => {
  expect(genDiff(file1, file2)).toBe(actual1);
});
test('comparing two files2', () => {
  expect(genDiff(file1, file2)).not.toBe(actual2);
});
