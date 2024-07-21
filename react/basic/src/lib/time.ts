/**
 * 格式化给定的数字
 *
 * @param n 数字
 * @param opts 格式化选项
 * @returns 字符串形式的数字
 */
export function formatNumber(n: number, opts?: Intl.NumberFormatOptions): string {
  opts = {
    useGrouping: false,
    minimumIntegerDigits: 2,
    ...opts ?? {}
  };
  return n.toLocaleString('zh-CN', opts);
}

/**
 * 计算所给时间 (或当前时间) 的字符串形式
 *
 * @returns 指定时间的字符串形式
 */
export function formatDate(date?: Date): string {
  if (!date) {
    date = new Date();
  }
  const part1 = `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(date.getDate())}`;
  // eslint-disable-next-line max-len
  const part2 = `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}:${formatNumber(date.getSeconds())}`;
  return `${part1} ${part2}`;
}
