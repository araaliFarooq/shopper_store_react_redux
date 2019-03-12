<<<<<<< HEAD
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
=======
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
>>>>>>> Add user login functionality [Finishes #164522002]
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_header").style.top = "0";
  } else {
    document.getElementById("nav_header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
