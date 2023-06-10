export function formatTime(detail:Date){
    var year = new Date(detail).getFullYear()
    var month = (new Date(detail).getMonth() + 1) >= 10 ? (new Date(detail).getMonth() + 1) : '0' + (new Date(detail).getMonth() + 1)
    var date = new Date(detail).getDate() >= 10 ? new Date(detail).getDate() : '0' + new Date(detail).getDate()
    var getHours = new Date(detail).getHours() >= 10 ? new Date(detail).getHours() : '0' + new Date(detail).getHours()
    var getMinutes = new Date(detail).getMinutes() >= 10 ? new Date(detail).getMinutes() : '0' + new Date(detail).getMinutes()
    var getSeconds = new Date(detail).getSeconds() >= 10 ? new Date(detail).getSeconds() : '0' + new Date(detail).getSeconds()
    var data = year + '-' + month + '-' + date + ' ' + getHours + ':' + getMinutes + ':' + getSeconds
    return data
}