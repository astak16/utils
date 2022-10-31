/**
 * 判断 value 是否是空
 */
const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export default isVoid;
