import cookie from "cookiejs";

/**
 * 设置cookie
 *
 * @param {String} name
 * @param {String} value
 */
function setCookie(name, value) {
  cookie(name, value, 12);
}

/**
 * 获取cookie
 *
 * @param {String} name
 * @returns
 */
function getCookie(name) {
  return cookie(name);
}

/**
 * 删除cookie
 *
 * @param {String} name
 */
function delCookie(name) {
  cookie.remove(name);
}

/**
 * 清空cookies
 *
 */
function clearCookie() {
  cookie(null);
}

export { setCookie, getCookie, clearCookie, delCookie };
