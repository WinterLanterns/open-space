// dark mode
function darkM() {
  let darkMode = document.querySelector("section");
  darkMode.classList.toggle("dark-mode");
  let lightOn = document.querySelector(".light-bulb");
  lightOn.classList.toggle("bulb-off");
  let tvImg = document.querySelector(".tv-img");
  tvImg.classList.toggle("tv-black");
  let questText = document.querySelector("textarea");
  questText.classList.toggle("questbText");
  let questImg = document.querySelector(".tape");
  questImg.classList.toggle("tapeDark");
  let enterB = document.querySelector(".enterButton");
  enterB.classList.toggle("enterDbutton");
}
