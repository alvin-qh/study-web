import "../../css/common/common.less";
import moment from "moment";

// 时间格式字符串
const DATETIME_FORMAT = "YYYY年MM月DD日 HH:mm:ss";

export const times = {
  /**
   * 获取当前时间的字符串形式
   * 
   * @returns {string} 当前时间的格式化结果字符串
   */
  nowString() {
    return moment().format(DATETIME_FORMAT);
  }
}

/**
 * 如果当前页面具备 `id="app"` 且 `app:name` 属性和参数 `name` 相等时, 调用 `cb` 参数表示的回调函数
 * 
 * @param {string} name 如果该参数值和元素的 `app:name` 属性相等, 则调用 `cb` 参数
 * @param {Function} cb 回调函数
 */
export function execute(name, cb) {
  const app = document.getElementById("app");
  if (app) {
    const role = app.getAttribute("app:name");
    if (role === name) {
      cb();
    }
  }
}
