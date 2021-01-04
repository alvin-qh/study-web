import _ from 'lodash';

/**
 * Join array as a string.
 * 
 * @param {Array} words 
 * @param {String} delimiter 
 */
export function join(words, delimiter = ',') {
  return _.join(words, delimiter);
}
