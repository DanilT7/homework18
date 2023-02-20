const buttonEl = document.querySelector('button');
const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = 'images/image1.png';

function getImage(e) {
    e.preventDefault();
    num = Math.floor(Math.random() * 9) + 1;
    imgEl.src = `images/image${num}.png`;
    imgEl.alt = `image${num}`;
}

buttonEl.addEventListener('click', getImage);
