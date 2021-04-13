// Gallery slideshow 8 (Salades)

var slideIndex8 = 1;
showSlides8(slideIndex8);

// Next/previous controls
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}

// Thumbnail image controls
function currentSlide8(n) {
  slideIndex8 = n
  showSlides8(n);
}
function showSlides8(n) {
  var slides = document.getElementsByClassName("mySlides8");
  showSlidesGeneric(n, slides, slideIndex8);
} 


// Gallery slideshow 7 (Soupen en Borsh)

var slideIndex7 = 1;
showSlides7(slideIndex7);

// Next/previous controls
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

// Thumbnail image controls
function currentSlide7(n) {
  slideIndex7 = n
  showSlides7(n);
}
function showSlides7(n) {
  var slides = document.getElementsByClassName("mySlides7");
  showSlidesGeneric(n, slides, slideIndex7);
} 


// Gallery slideshow 1 (voor en bij)

var slideIndex21 = 1;
showSlides21(slideIndex21);

// Next/previous controls
function plusSlides21(n) {
  showSlides21(slideIndex21 += n);
}

// Thumbnail image controls
function currentSlide21(n) {
  slideIndex21 = n
  showSlides21(n);
}
function showSlides21(n) {
  var slides = document.getElementsByClassName("mySlides21");
  showSlidesGeneric(n, slides, slideIndex21);
} 


// Gallery slideshow 2 (hoofdgerechten)

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  slideIndex1 = n
  showSlides1(n);
}


function showSlides1(n) {
  var slides = document.getElementsByClassName("mySlides1");
  showSlidesGeneric(n, slides, slideIndex1);
} 


// Gallery slideshow 5 (desserts and drankjes)

var slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
  slideIndex5 = n
  showSlides5(n);
}

function showSlides5(n) {
  var slides5 = document.getElementsByClassName("mySlides5");
  showSlidesGeneric(n, slides5, slideIndex5);
} 


// Gallery slideshow 4 (pannenkoeken en cakes)

var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  slideIndex = n
  showSlides4(n);
}

function showSlides4(n) {
  var slides = document.getElementsByClassName("mySlides4");
  showSlidesGeneric(n, slides, slideIndex4);
} 


// Main function


// function showSlidesGeneric(n, slides, dots, slideIndex) {
//   var i;

//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//   slides[slideIndex -1].style.display = "block";

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" dotActive", "");
//     }
//     dots[slideIndex-1].className += "dotActive";
// };


function showSlidesGeneric(n, slides, slideIndex) {
  var i;

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex -1].style.display = "block";

};

// MOBILE ______________________________________________________________________________________________________________

// Script for a mobile version


// Gallery slideshow 2 (Salades)

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
  console.log('it works');
}

// Thumbnail image controls
function currentSlide2(n) {
  slideIndex2 = n
  showSlides2(n);
}


function showSlides2(n) {
  var slides = document.getElementsByClassName("mySlides2");

  showSlidesGeneric(n, slides, slideIndex2);
  
} 


// Gallery slideshow 17 (Soupen en borsh)

var slideIndex17 = 1;
showSlides17(slideIndex17);

// Next/previous controls
function plusSlides17(n) {
  showSlides17(slideIndex17 += n);
}

// Thumbnail image controls
function currentSlide17(n) {
  slideIndex17 = n
  showSlides17(n);
}


function showSlides17(n) {
  var slides = document.getElementsByClassName("mySlides17");
  showSlidesGeneric(n, slides, slideIndex17);
} 


// Gallery slideshow 16 (voor en bij)

var slideIndex16 = 1;
showSlides16(slideIndex16);

// Next/previous controls
function plusSlides16(n) {
  showSlides16(slideIndex16 += n);
  console.log('works')
}

// Thumbnail image controls
function currentSlide16(n) {
  slideIndex16 = n
  showSlides16(n);
}

function showSlides16(n) {
  var slides = document.getElementsByClassName("mySlides16");
  showSlidesGeneric(n, slides, slideIndex16);
} 

// Gallery slideshow 15 (Hoofdgerechten)

var slideIndex15 = 1;
showSlides15(slideIndex15);

// Next/previous controls
function plusSlides15(n) {
  showSlides15(slideIndex15 += n);
}

// Thumbnail image controls
function currentSlide15(n) {
  slideIndex15 = n
  showSlides15(n);
}


function showSlides15(n) {
  var slides = document.getElementsByClassName("mySlides15");
  showSlidesGeneric(n, slides, slideIndex15);
} 

// Gallery slideshow 18 (Varenyky & pyrizhky)

var slideIndex18 = 1;
showSlides18(slideIndex18);

// Next/previous controls
function plusSlides18(n) {
  showSlides18(slideIndex18 += n);
}

// Thumbnail image controls
function currentSlide18(n) {
  slideIndex18 = n
  showSlides18(n);
}

function showSlides18(n) {
  var slides = document.getElementsByClassName("mySlides18");
  showSlidesGeneric(n, slides, slideIndex18);
} 


// Gallery slideshow 19 (Pannenkoeken en Cakes)

var slideIndex19 = 1;
showSlides19(slideIndex19);

// Next/previous controls
function plusSlides19(n) {
  showSlides19(slideIndex19 += n);
}

// Thumbnail image controls
function currentSlide19(n) {
  slideIndex19 = n
  showSlides19(n);
}

function showSlides19(n) {
  var slides = document.getElementsByClassName("mySlides19");
  showSlidesGeneric(n, slides, slideIndex19);
} 


// Gallery slideshow 5 (desserts and drankjes)

var slideIndex20 = 1;
showSlides20(slideIndex20);

// Next/previous controls
function plusSlides20(n) {
  showSlides20(slideIndex20 += n);
}

// Thumbnail image controls
function currentSlide20(n) {
  slideIndex20 = n
  showSlides20(n);
}

function showSlides20(n) {
  var slides = document.getElementsByClassName("mySlides20");
  showSlidesGeneric(n, slides,  slideIndex20);
} 




