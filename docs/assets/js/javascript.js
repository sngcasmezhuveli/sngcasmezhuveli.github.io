var $ = document.getElementById.bind(document);
/*
function showNav() {
    $('side-nav').style.zIndex = "7"
    $('side-nav').style.opacity = "1"
    //$('side-nav').style.left = "0"
    $('dimmer').style.animationName = "showanim"
    $('side-nav').style.transform = "translate(0vw)"
    document.body.style.overflow = "hidden"
    document.body.height = "100%"
}
function hideNav() {

   // $('side-nav').style.left = "-70vw"
   $('side-nav').style.transition = "transform 0.5s ease-in-out"
   $('side-nav').style.transform = "translateX(-70vw)"
   
    $('dimmer').style.animationName = "hideanim"
    document.body.style.overflow = "scroll"
    document.body.height = ""

}
*/
function setNav() {
  var top =
    (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

  if (top > 5) {
    //when scrolling starts
    $("site-title").className = "site-title site-title-collapsed";
    $("site-header-background").className = "site-header-background sh-collapsed";
    $("site-header-vignette").className = "site-header-vignette sv-collapsed";
   
  } else {
    //User has scrolled back to the top
    $("site-title").className = "site-title site-title-expanded";
    $("site-header-background").className =
      "site-header-background sh-expanded";
      $("site-header-vignette").className = "site-header-vignette sv-expanded";
  }
}
document.addEventListener("scroll", function () {
  setNav();
});
document.addEventListener("DOMContentLoaded", function () {
  $("nav-button").addEventListener("click", function () {
    let sideNav = $("right");
    let menuIcon = $("menu-icon")
    let menuCloseIcon = $("menu-close-icon")
    if (sideNav.className == "right sn-expand") {
      sideNav.className = "right sn-collapse";
      menuIcon.style.display = "block"
      menuCloseIcon.style.display = "none"
    } else {
      sideNav.className = "right sn-expand";
      menuIcon.style.display = "none"
      menuCloseIcon.style.display = "block"
    }
  });

  let contactForm = $('contact-form');
  if(contactForm){
    
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      Email.send({
        SecureToken : "ce13e120-37e5-4916-8bc5-4c0ac9a9ec70",
        To : 'lafleurvioletblog@gmail.com',
        From : "sngcasmcf@gmail.com",
        Subject : "Quick query",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
      
    })
  }
});
