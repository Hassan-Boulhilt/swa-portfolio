// Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const btnLine = document.querySelector(".btn-line");
const menuBrand = document.querySelector(".menu-brand");
const naveItems = document.querySelectorAll(".nav-items");
// Set Initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu); 
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBrand.classList.add("show");
        naveItems.forEach(item=>item.classList.add("show"))
        // Set state menu
        showMenu = true

    } else {
    
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBrand.classList.remove("show");
        naveItems.forEach(item=>item.classList.remove("show"))
        // Set state menu
        showMenu = false

    }
}