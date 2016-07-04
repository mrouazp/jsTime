function trim(string) { return string.replace (/\s/g, " ").replace(/(^\s)$/g, ''); }
var init=0;
var startDate;
var clocktimer;

function clearFields() {
    init = 0;
    clearTimeout(clocktimer);
    document.clockform.clock.value='00:00:00';
    }

function clearALL() {
    clearFields();
    document.getElementById('marker').innerHTML = '';
}

function startTIME() {
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
    if (init==1) document.clockform.clock.value = h + ':' + m + ':' + s;
    clocktimer = setTimeout("startTIME()",10);
}

function findTIME() {
    if (init==0) {
        startDate = new Date();
        startTIME();
        init=1;
    }
    else {
        var str = trim(document.clockform.starter.id);
        document.getElementById('marker').innerHTML = (str+': ') +
            document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
        clearFields();
    }
}
