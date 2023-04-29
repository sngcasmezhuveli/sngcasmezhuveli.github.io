var $ = document.getElementById.bind(document)
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
    var top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

    if (top > 5) {
        //when scrolling starts
        $('site-title').className = "site-title site-title-collapsed"
       $('site-header-background').className = "site-header-background sh-collapsed"
    }
    else {
        //User has scrolled back to the top
        $('site-title').className = "site-title site-title-expanded"
        $('site-header-background').className = "site-header-background sh-expanded"

    }
}
document.addEventListener("scroll", function () {
    setNav();
})