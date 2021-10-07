import yaml from 'js-yaml';

const letParse = (data, format) => {
  switch (format) {
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    case 'json':
    case 'JSON':
      return JSON.parse(data);
    default:
      throw new Error('Unknown format.');
  }
};

export default letParse;
