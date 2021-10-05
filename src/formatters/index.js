import makeStylish from './stylish.js';
import makePlain from './plain.js';

const formatDiff = (diff, formatName) => {
  if (formatName === 'plain') return makePlain(diff);
  return makeStylish(diff);
};

export default formatDiff;
