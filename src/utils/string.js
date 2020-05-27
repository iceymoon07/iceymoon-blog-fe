// 获取一个字符串值在指定字符串第 n 次出现的位置(索引值)
export const find = (str, value, num) => {
  let x = str.indexOf(value);
  for (let i = 0; i < num; i++) {
    x = str.indexOf(value, x + 1);
  }
  return x;
};
