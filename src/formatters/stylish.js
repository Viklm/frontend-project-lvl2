import _ from 'lodash';

const space = 4;
const symbols = {
  unchanged: ' ',
  added: '+',
  deleted: '-',
  nested: ' ',
};

const setIndent = (depth, spaces = 2) => ' '.repeat(depth * space - spaces);

const stringify = (value, depth) => {
  if (!_.isObject(value)) return value;
  return `{\n${Object.entries(value).map(([key, val]) => `${setIndent(depth)}  ${key}: ${stringify(val,
    depth + 1)}`).join('\n')}\n${setIndent(depth - 1)}  }`;
};

const makeStylish = (diff) => {
  const iter = (currentValue, depth) => {
    const makeString = (object) => {
      if (object.status === 'added') {
        return `${setIndent(depth)}${symbols[object.status]} ${object.key}: ${stringify(object.value, depth + 1)}`;
      }
      if (object.status === 'deleted') {
        return `${setIndent(depth)}${symbols.deleted} ${object.key}: ${stringify(object.value, depth + 1)}`;
      }
      if (object.status === 'unchanged') {
        return `${setIndent(depth)}${symbols.unchanged} ${object.key}: ${stringify(object.value, depth + 1)}`;
      }
      if (object.status === 'nested') {
        return `${setIndent(depth)}${symbols.nested} ${object.key}: ${iter(object.descendants, depth + 1)}`;
      }
      return `${setIndent(depth)}${symbols.deleted} ${object.key}: ${stringify(object.value1, depth + 1)}\n${setIndent(depth)}${symbols.added} ${object.key}: ${stringify(object.value2, depth + 1)}`;
    };

    const result = currentValue.map((item) => makeString(item));
    return ['{', ...result, `${setIndent(depth, space)}}`].join('\n');
  };
  return iter(diff, 1);
};

export default makeStylish;
