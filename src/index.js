
import Icon from './images/icon2.png';
import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';
let h = home();
let m = menu();
let a = about();
let c = contact();
console.log("AYO");
const body = document.body;
const nav = document.querySelector(".nav");
const icon = document.createElement("img");
const content = document.querySelector("#content");
content.append(h);
content.append(m);
content.append(a);
content.append(c);
icon.src = Icon;
body.insertBefore(icon, nav);
icon.addEventListener("click", () => {
    displayNone();
    h.style.display = 'block';
})
function displayNone() {
    if (window.getComputedStyle(h).display !== 'none'){
         h.style.display = 'none';
    }else if (window.getComputedStyle(m).display !=='none'){
        m.style.display = 'none';
    }else if (window.getComputedStyle(a).display !== 'none'){
        a.style.display = 'none';
    }else if (window.getComputedStyle(c).display !== 'none'){
        c.style.display = 'none';
    }
}
function createNavbar() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");
    home.addEventListener("click", () => {
        displayNone();
        h.style.display = 'block';
    });
    menu.addEventListener("click", () =>{
        displayNone();
        m.style.display = 'block';
    });
     about.addEventListener("click", () =>{
        displayNone();
        a.style.display = 'block';
    });
    contact.addEventListener("click", () =>{
        displayNone();
        c.style.display = 'block';
    });
}
createNavbar();
