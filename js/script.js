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

// Question & Answers
function randomAnswers(max_number) {
  return Math.round(Math.random() * max_number);
}
let button = document.querySelector(".enterButton");
let answer = document.querySelector(".ansText");

button.addEventListener("click", function () {
  let randomNum = randomAnswers(19);
  let answerResult = "";

  // random answers

  if (randomNum == 0) {
    answerResult = "My reply is NO!";
  } else if (randomNum == 1) {
    answerResult = "Don't count on it";
  } else if (randomNum == 2) {
    answerResult = "My sources say no";
  } else if (randomNum == 3) {
    answerResult = "Very doubtful";
  } else if (randomNum == 4) {
    answerResult = "Outlook not so good";
  } else if (randomNum == 5) {
    answerResult = "Better not tell you now";
  } else if (randomNum == 6) {
    answerResult = "Cannot predict now";
  } else if (randomNum == 7) {
    answerResult = "Ask again later";
  } else if (randomNum == 8) {
    answerResult = "Reply hazy try again";
  } else if (randomNum == 9) {
    answerResult = "Concentrate and ask again";
  } else if (randomNum == 10) {
    answerResult = "Outlook good";
  } else if (randomNum == 11) {
    answerResult = "Most likely";
  } else if (randomNum == 12) {
    answerResult = "Signs point to YES!";
  } else if (randomNum == 13) {
    answerResult = "As I see it, yes";
  } else if (randomNum == 14) {
    answerResult = "YES!";
  } else if (randomNum == 15) {
    answerResult = "You may rely on it";
  } else if (randomNum == 16) {
    answerResult = "Without a doubt";
  } else if (randomNum == 17) {
    answerResult = "Yes, definitely";
  } else if (randomNum == 19) {
    answerResult = "It is decidedly so";
  } else {
    answerResult = "It is certain";
  }
  function answers() {
    answer.innerHTML = answerResult;
  }
  // let eyeBall = document.querySelector(".enterButton");
  // enterB.classList.toggle("enterDbutton");

  // timed answer

  setTimeout(function () {
    answers();
  }, 3000);
});

// typewriter

var i = 0;
let text = ["Yes or No Questions!"];
let speed = 150;

typeWriter = () => {
  document.querySelector(".questHeading").innerHTML = text[0].substring(0, i);
  if (i++ != text[0].length) setTimeout(typeWriter, speed);
};
window.addEventListener("load", typeWriter);
