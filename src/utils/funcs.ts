/**
 * 小写首字母
 * @param {string} str
 */
export function toCamel(str = '') {
  if (!str) return '';
  const [first = ''] = str;
  return first.toLowerCase() + str.slice(1);
}
