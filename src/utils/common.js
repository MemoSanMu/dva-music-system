import Cookies from "js-cookie";

/**
 * @name: getCookies
 * @test: test font
 * @msg: 获取cookie
 * @param {*} key
 * @return {*}
 */
const getCookies = key => Cookies.get(key) && JSON.parse(Cookies.get(key));

/**
 * @name: transformation
 * @test: test font
 * @msg: 转换数字为对应的值
 * @param {*} value 对应的值
 * @param {*} num 可传进行装换的单位数 列 1000 10000 一千 一万
 * @return {*}
 */
const transformation = (value, num) => (value && (value / num).toFixed()) || "";

/**
 * @name: handleIconFont
 * @test: test font
 * @msg: handle iconfong classname
 * @param {*} iconName
 * @return {*}
 */
const handleIconFont = iconName => `icon iconfont icon-${iconName}`;

/**
 * @name: handleZeroFilling
 * @test: test font
 * @msg: 处理补零
 * @param {*} num
 * @return {*}
 */
const handleZeroFilling = num => (num < 10 ? `0${num}` : num);

const handleBackPage = ({ history: { goBack } }) => goBack();

/**
 * 防抖函数
 * @param {*} cb 回调函数 Funciton
 * @param {} delay 延迟数 Number
 * @param {} immediate 是否立即执行 Boolean
 */
function debounce(cb, delay = 400, immediate = false) {
  let timer = null;
  return function (...args) {
    const _that = this;
    if (timer) clearTimeout(timer); // 执行器执行中清空它，使它不再执行。
    if (immediate) {
      // 立即执行回调
      const callNow = !timer; // 初次进入函数，timer为null 取反则为true
      timer = setTimeout(function () {
        // 设定执行器，执行完毕后赋空 执行器。
        timer = null;
      }, delay);
      callNow && cb.apply(_that, args); // 第一次取反为true 则立即行。
    } else {
      timer = setTimeout(function () {
        timer = null;
        cb.apply(_that, args);
      }, delay);
    }
  };
}

/**
 * 节流函数
 * @param {*} cb 回调函数 Funciton
 * @param {} delay 延迟数 Number
 */
function throttle(cb, delay = 400) {
  let timer = null;
  return function (...args) {
    const _that = this;
    if (timer) return; // 执行器存在 直接不予执行后续代码
    timer = setTimeout(function () {
      // 设定执行器
      clearTimeout(timer);
      timer = null;
      cb.apply(_that, args);
    }, delay);
  };
}

export { getCookies, transformation, handleIconFont, handleZeroFilling, handleBackPage, debounce, throttle };
