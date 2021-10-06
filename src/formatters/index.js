import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJson from './json.js';

const formatDiff = (diff, formatName) => {
  if (formatName === 'plain') return makePlain(diff);
  if (formatName === 'json') return makeJson(diff);
  return makeStylish(diff);
};

export default formatDiff;
