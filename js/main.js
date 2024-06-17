
function openMenu() {
    let x = document.getElementById("mobile-menu");
    let html = document.getElementsByTagName( 'html' )[0];

    x.classList.remove("hide-mobile-menu");
    x.classList.add("show-mobile-menu");

    
    html.classList.add("no-scroll");
    document.body.classList.add("no-scroll");
}

function closeMenu() {
  let x = document.getElementById("mobile-menu");
  let html = document.getElementsByTagName( 'html' )[0];

  x.classList.add("hide-mobile-menu");
  x.classList.remove("show-mobile-menu");

  
  html.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}





