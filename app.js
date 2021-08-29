const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const audays = document.getElementById('au-days');
const auhours = document.getElementById('au-hours');
const auminutes = document.getElementById('au-minutes');
const auseconds = document.getElementById('au-seconds');

const curent = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${curent + 1} 00:00:00`);
const midAutumnTime = new Date(`September 21 2021 00:00:00`);

function updateCountdowntime(){
    const currentTime = new Date();
    var diff = newYearTime - currentTime;

    var d = Math.floor(diff / 1000 / 60 / 60 / 24);
    var h = Math.floor(diff / 1000 / 60 / 60) % 24;
    var m = Math.floor(diff / 1000 / 60) % 60;
    var s = Math.floor(diff / 1000) % 60;

    console.log(d);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    diff = midAutumnTime - currentTime;
    d = Math.floor(diff / 1000 / 60 / 60 / 24);
    h = Math.floor(diff / 1000 / 60 / 60) % 24;
    m = Math.floor(diff / 1000 / 60) % 60;
    s = Math.floor(diff / 1000) % 60;

    audays.innerHTML = d;
    auhours.innerHTML = h < 10 ? '0' + h : h;
    auminutes.innerHTML = m < 10 ? '0' + m : m;
    auseconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(updateCountdowntime, 1000);

const background = ["background.jpg","background1.jpg","background2.jpg","background3.jpg"];
const body = document.getElementsByTagName('body');

function changeBackground(){
    const random = Math.floor(Math.random() * background.length);
    var t = background[random]
    body[0].style.background = 'url(./img/' + t + ')';
}
setInterval(changeBackground,5000);