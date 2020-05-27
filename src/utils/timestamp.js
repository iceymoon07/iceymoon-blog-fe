// 格式化后端传来的时间戳字符串
export const formatDate = timestamp => {
  let dateObj = new Date(timestamp);
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  month++;
  if (month < 10) {
    month = "0" + month;
  }
  let day = dateObj.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let date = year + "-" + month + "-" + day; // 格式化日期
  let time = dateObj.toTimeString().substr(0, 8); // 格式化时间
  return {
    date: date,
    time: time
  };
};
