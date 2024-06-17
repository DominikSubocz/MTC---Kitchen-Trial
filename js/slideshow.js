let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display="none";
        dots[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    dots[slideIndex-1].classList.add("active");
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 5000);

}
  