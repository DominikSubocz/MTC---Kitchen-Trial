let slideIndex = 0;
// showSlides();

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