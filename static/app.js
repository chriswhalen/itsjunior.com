
const a =()=> document.querySelectorAll('a').forEach((tag)=> tag.setAttribute('target', '_blank'))

const bg =()=> document.querySelector('body').style.background = `hsla(${Math.random()*255}, 60%, 20%, 1)`

setInterval(bg, 10000)

document.addEventListener('DOMContentLoaded', a)
document.addEventListener('DOMContentLoaded', bg)
