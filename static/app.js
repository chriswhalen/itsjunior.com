
const bg =()=> document.querySelector('body').style.background = `hsla(${Math.random()*255}, 60%, 20%, 1)`

setInterval(bg, 10000)

document.addEventListener('DOMContentLoaded', bg)
