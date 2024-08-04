/**
 * 返回 `fn` 参数表示函数立即执行的结果
 *
 * @param fn 要执行的函数
 * @returns `fn` 函数执行结果
 */
export const factory = <R>(fn: () => R): R => fn();

/**
 * 立即执行 `fn` 参数表示的函数
 *
 * @param fn 要执行的函数
 */
export const exec = (fn: () => void): void => { fn(); };

/**
 * 通过 `fn` 表示的转换函数, 将原始对象转为目标对象
 *
 * @param obj 原始对象
 * @param fn 转换函数
 * @returns 目标对象
 */
export const objectMap = <T, R>(obj: T, fn: (val: T) => R): R => fn(obj);

/**
 * 创建防抖函数
 *
 * @param fn 要执行的实际目标函数
 * @param delay 防抖延迟毫秒数
 * @returns 防抖函数
 */
export const debounceRun = <Fn extends (...args: any) => any>(
  fn: Fn, delay: number = 300
): (...args: Parameters<Fn>) => void => {
  // 定义定时器句柄
  let timer: ReturnType<typeof setTimeout> | null = null;

  // 返回执行函数, 当重复调用时, 只重新开始计时, 而非直接调用函数
  return (...args: Parameters<Fn>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), delay);
  };
};
