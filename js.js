var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navpar").classList.remove("hidden");
  } else {
    document.querySelector(".navpar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}











