
let sec = 0
let min = 0
let hr = 0
let interval

function twoDg(digit) {
    if (digit<10) {
        return('0'+digit)
    } else {
        return(digit)
    }
}
function start() {
    interval = setInterval(watch, 1000)
}
function stop() {
    clearInterval(interval)
}
function reset() {
    clearInterval(interval)
    sec=0
    min=0
    document.querySelector('#watch').innerHTML = '00:00:00'
}
function watch() {
    sec++
    if (sec==60) {
        min++
        sec=0
        if(min==60) {
            min=0
            hr++
        }
    }
    document.querySelector('#watch').innerText = twoDg(hr) + ':' + twoDg(min) + ':' +  twoDg(sec)
}