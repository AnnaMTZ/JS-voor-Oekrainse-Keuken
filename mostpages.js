
// Scroll to top

const toTop = document.querySelector(".to-top");
      
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
   
    }
});


// Responsive menu animation 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});





