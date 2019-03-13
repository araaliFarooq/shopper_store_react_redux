let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_header").style.top = "0";
  } else {
    document.getElementById("nav_header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
