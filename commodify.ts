/**
 * 千分位，保留小数部分
 */
const commodify = (n: string | number) => {
  const integerReg = /\d{1,3}(?=(\d{3})+$)/g;
  const decimalReg = /^(\d+)((\.\d+)?)$/;
  return n
    .toString()
    .replace(
      decimalReg,
      (s, s1: string, s2: string) => s1.replace(integerReg, "$&,") + s2
    );
};

/**
 * Tips
 * Number.prototype.toLocaleString() 方法返回这个数字在特定语言环境下的表示字符串
 * 文档：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 */
