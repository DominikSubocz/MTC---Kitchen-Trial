let slideIndex = 1;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let ovals = document.getElementsByClassName("oval");

    
    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.opacity="0";
        ovals[i].classList.remove("active");
    }

    slideIndex++;


    ovals[slideIndex-1].classList.add("active");
    slides[slideIndex-1].style.opacity="1";
    
    setTimeout(showSlides, 8000);

}
  