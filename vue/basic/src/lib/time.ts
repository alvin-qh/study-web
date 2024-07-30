export const formatNumber = (n: number, opts?: Intl.NumberFormatOptions): string => {
  opts = {
    useGrouping: false,
    minimumIntegerDigits: 2,
    ...opts ?? {}
  };
  return n.toLocaleString('zh-CN', opts);
};

/**
 * 计算所给时间 (或当前时间) 的字符串形式
 *
 * @returns 指定时间的字符串形式
 */
export const formatDate = (date?: Date): string => {
  if (!date) {
    date = new Date();
  }

  const year = date.getFullYear();
  const month = formatNumber(date.getMonth() + 1);
  const day = formatNumber(date.getDate());

  const hour = formatNumber(date.getHours());
  const min = formatNumber(date.getMinutes());
  const sec = formatNumber(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};
