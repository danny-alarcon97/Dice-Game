var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random # between 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc = `img/dice${randomNumber1}.jpg`; // img/dice1.jpg - img/dice6.jpg
var randomImgSrc2 = `img/dice${randomNumber2}.jpg`;

var image1 = document.getElementById("img1").setAttribute("src", randomImgSrc);
var image2 = document.getElementById("img2").setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "It's a Tie!";
}
