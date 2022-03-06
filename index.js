let randomNumber1;
let randomNumber2;
let newImageSource1;
let originalImageSource1;
let newImageSource2;
let originalImageSource2;
let headerText;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
newImageSource1 = "./images/dice" + randomNumber1 + ".png"
newImageSource2 = "./images/dice" + randomNumber2 + ".png"

originalImageSource1 = document.querySelectorAll("img")[0];
originalImageSource1.setAttribute("src", newImageSource1)

originalImageSource2 = document.querySelectorAll("img")[1];
originalImageSource2.setAttribute("src", newImageSource2)

// headerText = document.querySelectorAll("h1")[0];

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 Wins!"
}
if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins! 🚩"
}
if (randomNumber1 == randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML = "Draw!"
}

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);
