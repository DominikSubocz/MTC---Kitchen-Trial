let reviewIndex = 1;
const nextBtn = document.querySelector('#btn-next');
const prevBtn = document.querySelector('#btn-prev');



showReview();

function nextReview(){
    reviewIndex += 1;
    showReview();
}

function prevReview(){
    reviewIndex -= 1;
    showReview();
}

nextBtn.addEventListener("click", nextReview);
prevBtn.addEventListener("click", prevReview);


function showReview() {
    let reviews = document.querySelectorAll('.review-carousel_slide');
    let dots = document.getElementsByClassName("dot");


    if(reviewIndex < 1){
        reviewIndex = 1;
    } else if (reviewIndex > reviews.length){
        reviewIndex = 1;
    }


    let position = reviewIndex * 33;

     for(let i = 0; i < reviews.length; i++){
        reviews[i].style.cssText="opacity:0";
        dots[i].classList.remove("active-dot");
    }

    console.log(position);


    reviews[reviewIndex - 1].style.cssText="opacity:1;";
    dots[reviewIndex - 1].classList.add("active-dot");







}
