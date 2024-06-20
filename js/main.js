let menuBtn = document.getElementById('menu-btn');
let html = document.getElementsByTagName( 'html' )[0];

window.addEventListener("resize", fixOverflow);

function fixOverflow(){
  if(window.innerWidth > 1024){
    html.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  }
}

function openMenu() {
    let x = document.getElementById("mobile-menu");

    
    x.classList.remove("hide-mobile-menu");
    x.classList.add("show-mobile-menu");

    
    html.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
}

menuBtn.addEventListener('click', openMenu);


function closeMenu() {
  let x = document.getElementById("mobile-menu");

  x.classList.add("hide-mobile-menu");
  x.classList.remove("show-mobile-menu");

  
  html.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}





