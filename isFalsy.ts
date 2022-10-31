/**
 * 判断 value 是否为 falsy
 */
const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export default isFalsy;
