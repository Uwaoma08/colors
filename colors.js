const clickMe = document.querySelector('button')
const redBg = document.getElementById('red-bg-main')
const hex = document.querySelector('.span')


const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    redBg.style.backgroundColor = '#' + randomColor
    hex.textContent = randomColor
}

clickMe.addEventListener("click", setBg);
setBg();
