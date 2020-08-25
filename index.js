var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var player1 = randomNumber1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var player2 = randomNumber2;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//compare section:

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "Player 1 won 😎";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 won 😎";
} else {
  document.querySelector("h1").innerHTML = "Match draw 🤷‍♂️";
}
