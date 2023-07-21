// Sticky Navigation Bar
const header = document.querySelector("header");
const main = document.querySelector("main");
const stickyOffset = header.offsetTop;

function onScroll() {
    if (window.pageYOffset > stickyOffset) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", onScroll);

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}

/* ... Your existing JavaScript code ... */
