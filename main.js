let openNavClick = document.querySelector(".nav-slider");
let closeNavClick = document.querySelector(".close-nav-slider");
navSliderSection = document.querySelector(".nav-slider-section");
let closeLink = document.querySelectorAll(".nav-links");
openNavClick.onclick = function() {
  navSliderSection.classList.remove("closeNav");
  navSliderSection.classList.add("openNav");
};
closeNavClick.onclick = closeNav;
closeLink.forEach(link => {
  link.onclick = closeNav;
});
function closeNav() {
  navSliderSection.classList.remove("openNav");
  navSliderSection.classList.add("closeNav");
}
