const dayE1 = document.getElementById("day")
const hourE2 = document.getElementById("hour")
const minuteE3 = document.getElementById("minute")
const secondE4 = document.getElementById("second")

/*new Date constructor..*/
const newYearTime = new Date("jan 1,2026 00:00:00").getTime()        /*to get the exact time stamp  getTime()*/

updateCountdown()                        /* as soon as the page loads this func is called*/

function updateCountdown()  {                /*this fnc handles all the countdown calculation*/
    const getCurrentTime = new Date().getTime();          /*..current time ...new Date()..keeping it empty coz it will automaticaaly takes current data of time..getTime() timestamp*/
    // console.log(getCurrentTime, newYearTime);
    const gap = newYearTime - getCurrentTime           //time remaining for new year
    // console.log(gap)

    /*calculating the exact time */
    const second = 1000                              /*1 sec= 1000 milisec*/
    const minute= 60 * second
    const hour=60 * minute
    const day=24 * hour

    /*calculating the exact number of days we have left*/
    const d = Math.floor(gap/day)          /*Math.floor gives u ans in whole number and not decimal*/
    const h = Math.floor((gap % day)/hour)         /*days ke baad jo remaining bacha woh hours main divide kardo*/
    const m = Math.floor((gap %hour)/minute)
    const s= Math.floor((gap % minute)/second)
    console.log(s)

    /*displaying the live value*/
    dayE1.innerText = d
    hourE2.innerText = h           /*hourE1 ke andar ka value ko replace kardo  iss "h" value se*/
    minuteE3.innerText = m
    secondE4.innerText = s


}

setInterval(updateCountdown,1000)      //ek fnc ko har fixed interval(1000)milisec me repeat karna