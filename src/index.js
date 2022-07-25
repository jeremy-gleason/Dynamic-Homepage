import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact-us.js';

const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

function clearContent() {
    const content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

loadHome();

homeTab.addEventListener('click', function(e) {
    if (!homeTab.classList.contains("selected")) {
        clearContent();
        loadHome();
        let selected = document.querySelector(".selected");
        selected.classList.remove("selected");
        homeTab.classList.add("selected");
    }

});

menuTab.addEventListener('click', function(e) {
    if (!menuTab.classList.contains("selected")) {
        clearContent();
        loadMenu();
        let selected = document.querySelector(".selected");
        selected.classList.remove("selected");
        menuTab.classList.add("selected");
    }

});

contactTab.addEventListener('click', function(e) {
    if (!contactTab.classList.contains("selected")) {
        clearContent();
        loadContact();
        let selected = document.querySelector(".selected");
        selected.classList.remove("selected");
        contactTab.classList.add("selected");
    }

});