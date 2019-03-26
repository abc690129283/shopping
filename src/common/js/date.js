// 时间戳 匹配的格式
export function formatDates(date, fmt) {
    if (/(y+)/.test(fmt)) {
        // 2016 ,  4 - 4=0    ==== $1 替换2016 ====== 2016提取指定的字符串0开始
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 月 当前时间 日 时 秒
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    // k 指向 o中的变量
    for (let k in o) {
        // 所有的变量 匹配格式
        if (new RegExp(`(${k})`).test(fmt)) {
            // 拿到o中的所有时间
            let str = o[k] + '';
            // $1==> M+...  长度都为2  则下面执行调用padLeftZero方法  $1替换方法中提取到的数值
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
function padLeftZero(str){
    // 先给所有的值加00   再提取对应的str值的长度 从而实现时间前面不足两位数 加上0
   return ('00'+str).substr(str.length);
}