/**
 * Menu bars and close btns
 */
let menuBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('close-btn');
let html = document.getElementsByTagName( 'html' )[0];

// Execute function on resize
window.addEventListener("resize", fixOverflow);

/**
 * If screen is wider than 1024px:
 * 
 * Remove the 'no-scroll' class to enable scrolling down
 */
function fixOverflow(){
  if(window.innerWidth > 1024){
    html.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }
}

/**
 * openMenu(): Open mobile menu:
 * 
 *  -Displays mobile menu
 *  -Disables scrolling vertically
 */
function openMenu() {
    let x = document.getElementById("mobile-menu");

    
    x.classList.remove("hide-mobile-menu");
    x.classList.add("show-mobile-menu");

    
    html.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
}

// Execute open menu function when clicked on the icon
menuBtn.addEventListener('click', openMenu);

/**
 * closeMenu(): Close mobile menu:
 * 
 *  -Hides mobile menu
 *  -Enables scrolling vertically
 */
function closeMenu() {
  let x = document.getElementById("mobile-menu");

  x.classList.add("hide-mobile-menu");
  x.classList.remove("show-mobile-menu");

  
  html.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}

// Execute close menu function when clicked on the icon
closeBtn.addEventListener('click', closeMenu);


let slideIndex = 0; // Current slide
showSlides(); // Start the slideshow



/**
 * showSlides():
 * 
 *  -Cycles through a set of slides changing their opacity.
 *  -Updates the active state of corresponding oval indicators at a set interval.
 */
function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let ovals = document.getElementsByClassName("oval");

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        ovals[i].classList.remove("active");
    }

    console.log(slideIndex);

    slides[slideIndex].style.opacity = "1";
    ovals[slideIndex].classList.add("active");

    slideIndex++; 

    setTimeout(showSlides, 8000);
}

let reviewIndex = 0; // Current Review
const nextBtns = document.querySelectorAll('#btn-next'); // Next review button
const prevBtns = document.querySelectorAll('#btn-prev'); // Previous review button
showReview(); 

function nextReview() {
    reviewIndex++; // Increment value, next slide
    showReview();
}

function prevReview() {
    reviewIndex--; // Decrement value, previous slide
    showReview();
}

// Onclick listener for multiple prev buttons
prevBtns.forEach(function(prevBtn){
    prevBtn.addEventListener("click", prevReview);

});

// Onclick listener for multiple next buttons
nextBtns.forEach(function(nextBtn){
    nextBtn.addEventListener("click", nextReview);
});


/**
 * showReview():
 * 
 *  -Display a review slide based on 'reviewIndex' value
 *  -Adds 'acvite' class to corresponding dot, to indicate which slide is currently displayed.
 */
function showReview() {
    let reviews = document.querySelectorAll('.review-carousel_slide');
    let dots = document.getElementsByClassName("dot");

    if (reviewIndex < 0) {
        reviewIndex = reviews.length - 1; // Go to last slide if below 0
    }

    if (reviewIndex >= reviews.length) {
        reviewIndex = 0; // Go to start if there are no more reviews
    }

    // Go through every review
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.opacity = "0"; // Hide review
        dots[i].classList.remove("active-dot"); 
    }

    // console.log(reviewIndex); Debug

    reviews[reviewIndex].style.opacity = "1"; // Show review
    dots[reviewIndex].classList.add("active-dot"); // Indicate which review
}


// Displays more pictures from the gallery
function viewGallery(){
  let gallery = document.getElementById("gallery");
  let galBtn = document.getElementById("gallery-btn");

  gallery.classList.remove("hidden");
  galBtn.innerHTML = "<a href='#gallery-page'>View Full Gallery</a>"; // Redirect user to gallery page if they want to see full gallery
}


