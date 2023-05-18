export function checkInt(value: any) {
  if (!/^\d+$/.test(value)) {
    throw new Error('需要数字');
  }
  return parseInt(value, 10);
}

/**
 * 检查出最大值
 */
export function checkMax(...args: any[]) {
  return Math.max(...args.flat());
}
/**
 * 检查出最小值
 */
export function checkMin(...args: any[]) {
  return Math.min(...args.flat());
}
