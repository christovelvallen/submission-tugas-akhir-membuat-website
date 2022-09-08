const nav = document.getElementById("nav");
const navMenu = document.getElementById("navMenu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const btnOpenBioDetails = document.getElementById("btnOpenBioDetails");
const bioDetails = document.getElementById("bioDetails");

// box shadow navigation aktiv pada saat window di scroll
window.onscroll = function () {
    let scrollOn = window.pageYOffset;
    if (scrollOn > 20) {
        nav.style.backgroundColor = "var(--white)";
        nav.style.boxShadow = "0 4px 20px rgb(0, 0, 0, 0.2)";
        nav.style.transition = "200ms";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
    }
};

// navigation dan hamburger menu untuk mobile
hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hamburgerMenuActive");
    navMenu.classList.toggle("navMenuActive");
});

// bio details aktiv pada saat di klik
btnOpenBioDetails.addEventListener("click", function () {
    bioDetails.classList.toggle("bioDetailsActive");
});
