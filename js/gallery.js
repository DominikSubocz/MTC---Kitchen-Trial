
function viewGallery(){
    let gallery = document.getElementById("gallery");
    let galBtn = document.getElementById("gallery-btn");

    gallery.classList.remove("hidden");
    galBtn.innerHTML = "<a href='#gallery-page'>View Full Gallery</a>";
}