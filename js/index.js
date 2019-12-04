var addZero = function(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
};

document.getElementById('start_stop').addEventListener('click', function() {
    var start = new Date();

    document.getElementById('timer').innerHTML = start.getTime();
});