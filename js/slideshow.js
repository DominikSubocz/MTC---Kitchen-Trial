let slideIndex = 1;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let ovals = document.getElementsByClassName("oval");

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display="none";
        ovals[i].classList.remove("active");
    }

    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    }

    ovals[slideIndex-1].classList.add("active");
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 5000);

}
  