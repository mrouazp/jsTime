
var h1 = document.getElementsByTagName('h1')[0],
    str = document.getElementById('str'),
    stp = document.getElementById('stp'),
    clr = document.getElementById('clr'),
    sec = 0, min = 0, hours = 0,
    sw;

function starTime() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
        (min ? (min > 9 ? min : "0" + min) : "00") + ":" +
        (sec > 9 ? sec : "0" + sec);

    timer();
}
function timer() {
    sw = setTimeout('starTime()', 1000);
}
timer();


/* Старт */
str.onclick = timer;

/* Стоп */
stp.onclick = function() {
    clearTimeout(sw);
}

/* Кнопка сброса */
clr.onclick = function() {
    h1.textContent = "00:00:00";
    sec = 0; min = 0; hours = 0;
}