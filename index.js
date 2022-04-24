export default function getDate() {
    var h = new Date().getHours();
    var m = new Date().getMinutes()
    var s = new Date().getSeconds();
    var ms = new Date().getMilliseconds()
    if(s < 10) {
        s = '0'+s
    }
    if(m < 10) {
        m = '0'+m
    }
    if(h < 10) {
        h = '0'+h
    }
    var date = h+":"+m+":"+s
    return date;
}