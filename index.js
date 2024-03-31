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
        window.scrollTo({
            top: i * windowHeight + 30,
            behavior: 'smooth'
        })
    });
});

navButtons.querySelectorAll("li").forEach((item, i) => {
    item.addEventListener("click" , () => {
        resetScrollIndicator();
        window.scrollTo({
            top: i*windowHeight + 30,
            behavior: 'smooth'
        })    
    })
});

dropdownBtns.querySelectorAll("li").forEach((item, i) => {
    item.addEventListener("click" , () => {
        resetScrollIndicator();
        window.scrollTo({
            top: i * windowHeight + 30,
            behavior: 'smooth'
        })
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
let lastScrollY = window.scrollY;

window.addEventListener("scroll" , () => {
    if (lastScrollY < window.scrollY){
        nav.classList.add("hidden");
        dropdownMenu.classList.remove("open");
        const isOpen = dropdownMenu.classList.contains("open");
        toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark fa-3x" : "fa-solid fa-bars fa-3x";
    } else {
        nav.classList.remove("hidden");
    }

    lastScrollY = window.scrollY;
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

/* CONTACT FORM */
function sendEmail() {
    emailjs.init("Eshar"); // Initialize EmailJS with your user ID
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form data
    var formData = {
        fname: document.getElementById('fName').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value
    };

    // Send email
    emailjs.send("service_pi9uvc4", "template_wrurd02", formData)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Your message has been sent!');
          document.getElementById('contact-form').reset(); // Reset the form
        }, function(error) {
            console.error('Email sending failed:', error);
            alert('Oops! Something went wrong.');
        });
    });
};