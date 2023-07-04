import {
  join as _join,
  split as _split,
  trim as _trim,
} from "lodash-es";

/**
 * Join array as a string.
 * 
 * @param {Array} words 
 * @param {String} delimiter 
 */
export function join(words, delimiter = ",") {
  return _join(words, delimiter);
}

/**
 * Split string into words array.
 * 
 * @param {String} words 
 * @param {String} delimiter 
 */
export function split(words, delimiter = ",") {
  return _split(words, delimiter).map(w => _trim(w));
}
