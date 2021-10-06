import _ from 'lodash';

const symbols = {
  unchanged: ' ',
  added: '+',
  removed: '-',
  nested: ' ',
};
const indent = 4;
const setIndent = (depth, spaces = 2) => ' '.repeat(depth * indent - spaces);

const stringify = (value, depth) => {
  if (!_.isObject(value)) return value;
  return `{\n${Object.entries(value).map(([key, val]) => `${setIndent(depth)}  ${key}: ${stringify(val,
    depth + 1)}`).join('\n')}\n${setIndent(depth - 1)}  }`;
};

const makeStylish = (difference) => {
  const make = (object, depth) => {
    switch (object.status) {
      case 'added':
      case 'removed':
      case 'unchanged':
        return `${setIndent(depth)}${symbols[object.status]} ${object.key}: ${stringify(object.value, depth + 1)}`;
      case 'updated':
        return `${setIndent(depth)}${symbols.removed} ${object.key}: ${stringify(object.value1,
          depth + 1)}\n${setIndent(depth)}${symbols.added} ${object.key}: ${stringify(object.value2, depth + 1)}`;
      case 'nested':
        return `${setIndent(depth)}${symbols.nested} ${object.key}: {\n${object.descendants
          .map((element) => make(element, depth + 1)).join('\n')}\n  ${setIndent(depth)}}`;
      default:
        throw new Error('Unknown status.');
    }
  };
  return `{\n${difference.map((object) => make(object, 1)).join('\n')}\n}`;
};

export default makeStylish;
