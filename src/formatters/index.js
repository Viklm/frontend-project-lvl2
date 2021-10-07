import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJson from './json.js';

const formatDiff = (diff, formatName) => {
  switch (formatName) {
    case 'plain':
      return makePlain(diff);
    case 'json':
      return makeJson(diff);
    case 'stylish':
      return makeStylish(diff);
    default:
      throw new Error('Unknown format.');
  }
};

export default formatDiff;
