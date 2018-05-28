/*document.cookie = "name=soyou";
document.cookie = "color=blue";
console.log(document.cookie);*/

/* cookie 설정하기 */
var setCookie = function (name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + '/path=/';
};

setCookie('name', 'soyou', 7); // name=soyou 7일 뒤 만료됨
setCookie('color', 'blue', 7);

/* cookie 얻기 */

var getCookie = function (name) {
    var value = document.cookie.math('(^|; ?' + name + '=([^;]*)(;|$)');

    return value ? value[2] : null;
};

/* cookie 삭제 */

var deleteCookie = function (name) {
    document.cookie = name + '=; expires=thu, 01 Jan 1970 00:00:01 GMT'
};
// deleteCookie('name')