import _ from 'lodash';

const formDiff = (data1, data2) => {
  const calculateDiff = (node1, node2, key) => {
    if (!_.has(node1, key)) return { key, status: 'added', value: node2[key] };
    if (!_.has(node2, key)) return { key, status: 'removed', value: node1[key] };
    if (_.isObject(node1[key]) && _.isObject(node2[key])) return { key, status: 'nested', descendants: formDiff(node1[key], node2[key]) };
    if (node1[key] === node2[key]) return { key, status: 'unchanged', value: node1[key] };
    return {
      key, status: 'updated', value1: node1[key], value2: node2[key],
    };
  };

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  return keys.map((key) => calculateDiff(data1, data2, key));
};

export default formDiff;
