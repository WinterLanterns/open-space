// dark mode
function darkM() {
  var darkMode = document.querySelector("section");
  darkMode.classList.toggle("dark-mode");
  var lightOn = document.querySelector(".light-bulb");
  lightOn.classList.toggle("bulb-off");
  var tvImg = document.querySelector(".tv-img");
  tvImg.classList.toggle("tv-black");
}
