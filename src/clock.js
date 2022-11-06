const dateClock = document.querySelector("#clock-date");
const hourElement = document.querySelector("#clock-hour");
const minuteElement = document.querySelector("#clock-minute");
const secondElement = document.querySelector("#clock-second");
const blinkElement = document.querySelectorAll("#clock-blink");
const twoZeroPad = (num) => String(num).padStart(2, "0");

monthMap = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

let blink = false;

setInterval(function () {
    const now = new Date();
    const hour = twoZeroPad(now.getHours());
    const minute = twoZeroPad(now.getMinutes());
    const second = twoZeroPad(now.getSeconds());
    const day = twoZeroPad(now.getDate());
    const month = monthMap[now.getMonth()];
    const year = now.getFullYear();
    dateClock.innerHTML = `${month} ${day}, ${year}`;
    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondElement.innerHTML = second;
    if (blink) {
        for (b of blinkElement) {
            b.style.color = "gray";
        }
        blink = false;
    } else {
        for (b of blinkElement) {
            b.style.color = "black";
        }
        blink = true;
    }
}, 1000);
