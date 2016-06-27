/**
 * Created by Ruslan on 27.06.2016.
 */
var oneSec = setInterval(myClock, 1000);
function myClock() {
    var t = new Date();
    document.getElementById("time").innerHTML = t.toLocaleTimeString();
}
var init=0;
var startDate;
var clocktimer;

function clearAll() {
    init = 0;
    document.stopWatch.sec.value='00:00:00';
}

function starTime() {
    var thisDate = new Date();
    var t = thisDate.getTime() - startDate.getTime();
    t = Math.floor (t/1000);
    var s = t%60; t-=s;
    t = Math.floor (t/60);
    var m = t%60; t-=m;
    t = Math.floor (t/60);
    var h = t%60;
    if (h<10) h='0'+h;
    if (m<10) m='0'+m;
    if (s<10) s='0'+s;

    if (init == 1) document.stopWatch.sec.value = h + ':' + m + ':' + s ;
    clocktimer = setTimeout('starTime()',10);
}

function swButton() {
    if (init == 0) {
        startDate = new Date();
        starTime();
        init = 1;
    }
    else stpbutton.onclick = function() {
            clearTimeout(clocktimer);
        }
}