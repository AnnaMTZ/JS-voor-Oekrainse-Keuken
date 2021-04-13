//Fade in Text - only for the front page and recept pages - the pics with big photos on their landing

window.addEventListener('load', function () {
    const fadeText = document.getElementById('fadeInText');
    const chevronDown = document.querySelector('.fa-chevron-down');
       fadeText.style.opacity = "1";
       chevronDown.classList.add("chevronDownOnload");
     });


// Changing the menubar onscroll - only for the front page and recept pages - the pics with big photos on their landing


const menuSection = document.querySelector('.myVideo');
const menuItself = document.querySelector('.only');
const logoImage = document.querySelector('.logoImg')
const logoAlphaImg = document.querySelector('.logoAplha')
const chevronDown = document.querySelector('.fa-chevron-down');

const menuObserverOptions = {
    rootMargin: "-50px",
    root: null, // it is the viewport
    threshold: 0,
};

const menuObserver = new IntersectionObserver(function(entries, menuObserver) {
entries.forEach(entry => {

    if (!entry.isIntersecting) {
        menuItself.classList.add('menuDarkBg');
    logoImage.style.display = "block";
    logoAlphaImg.style.display = "none";
    chevronDown.style.display = "none";

    } else {
        menuItself.classList.remove('menuDarkBg');
        logoImage.style.display = "none";
        logoAlphaImg.style.display = "block";
        chevronDown.style.display = "block";
    }
})
}, 
menuObserverOptions);

menuObserver.observe(menuSection);


// Parallax - only for the front page and recipe pages - the pics with big photos on their landing

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.jumbotronMedia');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * -.5 + 'px)';
});


window.addEventListener('scroll', function () {
    const parallaxRec = document.querySelector('.jumbotronRecMedia');
    let scrollRecPosition = window.pageYOffset;
    parallaxRec.style.transform = 'translateY(' + scrollRecPosition * -.3 + 'px)';
});




