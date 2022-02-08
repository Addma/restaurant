import wings from './images/wings.png';
import chicken from './images/grilled-chicken.jpg';
import ribs from './images/ribs.jpg';
import fries from './images/fries.jpg';

const timer = 3000;
let i = 0;
const circles = [];
const imgs = [wings, chicken, ribs, fries];
const imgDiv = document.createElement('div');
const home = document.createElement('div');
let interval;
let mapDiv;

function slider() {
    if (i >= imgs.length - 1) {
            i = 0;
            imgDiv.style.backgroundImage = `url(${imgs[i]})`;
            circles[i].style.backgroundColor = 'white';
            circles[circles.length - 1].style.backgroundColor = 'black';
        } else {
            circles[i].style.backgroundColor = 'black';
            imgDiv.style.backgroundImage = `url(${imgs[++i]})`;
            circles[i].style.backgroundColor = 'white';
        }
}
function fourDiv() {
    const wrap = document.createElement('div');
    wrap.classList.add('home-wrap');
    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFour = document.createElement('div');
    divOne.classList.add('section');
    divTwo.classList.add('red', 'section');
    divThree.classList.add('section');
    divFour.classList.add('red', 'section');
    const divOneTxt = document.createTextNode('Serving Barrie for over 28 years');
    divOne.append(divOneTxt);
    const divTwoTxt = document.createTextNode('Delivery free over $30 before tax (Cash only)');
    divTwo.style.color = 'white';
    divTwo.append(divTwoTxt);
    const divThreeTxt = document.createTextNode('Call us at: ');
    const divThreeTxt2 = document.createTextNode('123-456-7890');
    mapDiv = document.createElement('div');
    mapDiv.classList.add('map');
    divThree.append(divThreeTxt, document.createElement('br'), divThreeTxt2);
    divFour.append(mapDiv);
    wrap.append(divOne, divTwo, divThree, divFour);
    return wrap;
}
function createHome() {
    home.classList = 'home';
    const imgSlider = document.createElement('div');
    imgDiv.classList.add('images');
    imgSlider.classList.add('slider');
    interval = setInterval(slider, timer);
    const imgNav = document.createElement('div');
    const next = document.createElement('button');
    next.addEventListener('click', () => {
        slider();
        interval = clearInterval(interval);
        interval = setInterval(slider, timer);
    });
    const prev = document.createElement('button');
    prev.addEventListener('click', () => {
        if (i == 0) {
            circles[i].style.backgroundColor = 'black';
            i = imgs.length - 1;
            imgDiv.style.backgroundImage = `url(${imgs[i]})`;
            circles[i].style.backgroundColor = 'white';
        } else {
            circles[i].style.backgroundColor = 'black';
            imgDiv.style.backgroundImage = `url(${imgs[--i]})`;
            circles[i].style.backgroundColor = 'white';
        }
        interval = clearInterval(interval);
        interval = setInterval(slider, timer);
    });
    next.innerText = ' >> ';
    prev.innerText = ' << ';
    next.classList.add('right');
    prev.classList.add('left');
    imgNav.classList.add('imgnav');
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circleDiv');
    let ind = 0;
    imgs.forEach(() => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        if (ind == 0) { circle.style.backgroundColor = 'white'; }
        circles[ind++] = circle;
        circleDiv.append(circle);
    });
    imgNav.append(prev, circleDiv, next);
    imgSlider.append(imgDiv, imgNav);
    home.append(imgSlider, fourDiv());
}
function intervalClear() {
    clearInterval(interval);
}
function intervalStart() {
    interval = setInterval(slider, timer);
}
export default {
 createHome, slider, home, intervalClear, intervalStart,
};
