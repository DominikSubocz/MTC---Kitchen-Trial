let reviewIndex = 0;
const nextBtns = document.querySelectorAll('#btn-next');
const prevBtns = document.querySelectorAll('#btn-prev');
showReview();

function nextReview() {
    reviewIndex++;
    showReview();
}

function prevReview() {
    reviewIndex--;
    showReview();
}

prevBtns.forEach(function(prevBtn){
    prevBtn.addEventListener("click", prevReview);

});

nextBtns.forEach(function(nextBtn){
    nextBtn.addEventListener("click", nextReview);
});

function showReview() {
    let reviews = document.querySelectorAll('.review-carousel_slide');
    let dots = document.getElementsByClassName("dot");

    if (reviewIndex < 0) {
        reviewIndex = reviews.length - 1;
    }

    if (reviewIndex >= reviews.length) {
        reviewIndex = 0;
    }

    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.opacity = "0";
        dots[i].classList.remove("active-dot");
    }

    // console.log(reviewIndex); Debug

    reviews[reviewIndex].style.opacity = "1";
    dots[reviewIndex].classList.add("active-dot");
}
