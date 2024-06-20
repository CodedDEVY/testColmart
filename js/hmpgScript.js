const buyBttn = document.querySelector('.buyBttn')
const sellBttn = document.querySelector('.sellBttn')
const buySect = document.querySelector('.buySect')
const sellSect = document.querySelector('.sellSect')

if (buyBttn && sellBttn && buySect && sellSect) {
    buyBttn.addEventListener('click', () => {
        buySect.style.display = "flex";
        sellSect.style.display = "none";
        buyBttn.style.backgroundImage = 'linear-gradient(#063b74, #011933)'
        buyBttn.style.color = 'white'
        sellBttn.style.backgroundImage = 'linear-gradient(white, white)'
        sellBttn.style.color = '#063b74'
    });

    sellBttn.addEventListener('click', () => {
        buySect.style.display = "none";
        sellSect.style.display = "flex";
        buyBttn.style.backgroundImage = 'linear-gradient(white, white)'
        buyBttn.style.color = '#063b74'
        sellBttn.style.backgroundImage = 'linear-gradient(#063b74, #011933)'
        sellBttn.style.color = 'white'
    });
} else {
    console.error('One or more elements are missing.');
}