//sroll to area of page when clicking buttons
const sections = document.querySelectorAll('section');
const navButtons = document.getElementById("nav-buttons");
const windowHeight = window.innerHeight;
const scrollIndicator = document.getElementById("scroll-indicator");
const items = document.getElementById("scroll-indicator").getElementsByTagName("li");
const contactBtns = document.querySelectorAll("button.contact-btns");
const dropdownBtns = document.getElementById("dropdown-btns");
const dropdownItems = dropdownBtns.getElementsByTagName("li");
const currentYear = new Date().getFullYear();
const year = document.getElementById("year");

year.innerHTML = currentYear;

function resetScrollIndicator() {
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove("selected");
    }
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    sections.forEach((section, i) => {
        if(section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2){
            resetScrollIndicator();
            items[i].classList.add('selected');
        }
    });
});

scrollIndicator.querySelectorAll("li").forEach((item, i) => {
    item.addEventListener("click" , () => {
        resetScrollIndicator();
        sections[i].scrollIntoView({
            behavior: "smooth"
        });
    });
});

navButtons.querySelectorAll("li").forEach((item, i) => {
    item.addEventListener("click" , () => {
        resetScrollIndicator();
        sections[i].scrollIntoView({
            behavior: "smooth"
        });  
    })
});

dropdownBtns.querySelectorAll("li").forEach((item, i) => {
    item.addEventListener("click" , () => {
        resetScrollIndicator();
        sections[i].scrollIntoView({
            behavior: "smooth"
        });
    });
});

contactBtns.forEach((btn) => {
    btn.addEventListener("click" , () => {
        resetScrollIndicator();
        window.scrollTo({
            top: 3150,
            behavior: 'smooth'
        })
    })
});

//enable hidden nav bar
const nav = document.querySelector(".nav");
let width = window.innerWidth;
let lastScrollY = window.scrollY;

window.addEventListener("scroll" , () => {
    if(width > 1000){
        console.log(width)
        if (lastScrollY < window.scrollY){
            nav.classList.add("hidden");
            dropdownMenu.classList.remove("open");
            const isOpen = dropdownMenu.classList.contains("open");
            toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark fa-3x" : "fa-solid fa-bars fa-3x";
        } else {
            nav.classList.remove("hidden");
        }
    lastScrollY = window.scrollY;
    }
});

//enable dropdown on navbar (mobile)
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtnIcon.onclick = function () {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark fa-3x" : "fa-solid fa-bars fa-3x";
}
