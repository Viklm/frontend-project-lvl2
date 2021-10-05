import _ from 'lodash';

const getValue = (value) => {
  if (_.isObjectLike(value)) return '[complex value]';
  if (typeof value === 'string') return `'${value}'`;
  return value;
};

const makePlain = (difference) => {
  const make = (object, parent = '') => {
    switch (object.status) {
      case 'nested':
        return  object.descendants.map((element) => make(element, `${parent + object.key}.`)).filter((elem) => elem !== null).join('\n');
      case 'changed':
        return `Property '${parent}${object.key}' was ${object.status}. From ${getValue(object.value1)} to ${getValue(object.value2)}`;
      case 'deleted':
        return `Property '${parent}${object.key}' was ${object.status}.`;
      case 'added':
        return `Property '${parent}${object.key}' was ${object.status} with value: ${getValue(object.value)}`;
      case 'unchanged':
        return null; 
    }
  };
  return `${difference.map((object) => make(object)).join('\n')}`;
};

export default makePlain;
