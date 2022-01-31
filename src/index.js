
import Icon from './images/icon2.png';
import git from './images/github.png';
import './style.css';
import homepage from './home.js';
import menupage from './menu.js';
import contactpage from './contact.js';
let h = homepage;
let m = menupage();
let c = contactpage();
const homeBut = document.querySelector("#home");
const menuBut = document.querySelector("#menu");
const contactBut = document.querySelector("#contact");
const nav = document.querySelector(".nav");
const icon = document.createElement("img");
const content = document.querySelector("#content");
h.createHome();
content.append(h.home);
content.append(m);
content.append(c);
icon.src = Icon;
document.getElementById("header").append(icon);
icon.addEventListener("click", () => {
    displayNone();
    h.home.style.display = 'flex';
});
function displayNone() {
    if (h.home.style.display !== 'none'){
         h.home.style.display = 'none';
         h.intervalClear();
        homeBut.style.backgroundColor = "white";
    }else if (window.getComputedStyle(m).display !=='none'){
        m.style.display = 'none';
        menuBut.style.backgroundColor = "white";
    }else if (window.getComputedStyle(c).display !== 'none'){
        c.style.display = 'none';
        contactBut.style.backgroundColor = "white";
    }
}
function createNavbar() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");
    home.addEventListener("click", () => {
        displayNone();
        h.home.style.display = 'flex';
        h.intervalStart();
        homeBut.style.backgroundColor = "rgba(0,0,0,.4)";
    });
    menu.addEventListener("click", () =>{
        displayNone();
        m.style.display = 'flex';
        menuBut.style.backgroundColor = "rgba(0,0,0,.4)";
    });
    contact.addEventListener("click", () =>{
        displayNone();
        c.style.display = 'flex';
        contactBut.style.backgroundColor = "rgba(0,0,0,.4)";
    });
}
let image = document.querySelector(".footer img");
image.src = git;
createNavbar();
