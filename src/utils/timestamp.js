export const formatDate = (timestamp) => {
    let dateObj = new Date(timestamp);
    let date = dateObj.toLocaleDateString().replace(/\//g, '-'); // 格式化日期
    let time = dateObj.toTimeString().substr(0, 8); // 格式化时间
    return {
        date: date,
        time: time
    }
}

