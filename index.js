var addZero = function(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
};


var now = new Date(); //dataオブジェクトのインスタンスを作る
var seconds = now.getSeconds(); //秒を取得する
seconds = addZero(seconds); //addZeroファンクションを利用

var minutes = now.getMinutes(); //分を取得
minutes = addZero(minutes); //addZeroファンクションを利用

var hours = now.getHours(); //時を取得する
hours = addZero(hours); //addZeroファンクションを利用

document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;