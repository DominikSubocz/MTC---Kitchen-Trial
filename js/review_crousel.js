let reviewIndex = 0;
showReview();

function nextReview(){
    reviewIndex +=1;
    showReview();
}

function prevReview(){
    reviewIndex -=1;
    showReview();

}

function showReview() {
    let i;
    let reviews = document.getElementsByClassName("review");
    let dots = document.getElementsByClassName("dot");

    for(let i = 0; i < reviews.length; i++){
        reviews[i].style.display="none";
        dots[i].classList.remove("active-dot");
    }

    if (reviewIndex == reviews.length){
        reviewIndex = 0;
    } else if (reviewIndex < 0){
        reviewIndex = reviews.length - 1;
    }

    // console.log(reviewIndex + "" + reviews.length); Debug

    reviews[reviewIndex].style.display="flex";
    dots[reviewIndex].classList.add("active-dot");



}
