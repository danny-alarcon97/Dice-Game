var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random # between 1 - 6

var randomDiceImg = `dice${randomNumber1}.jpg`; // dice1.jpg - dice2.jpg

var randomImgSrc = `img/randomDiceImg`; // img/dice1.jpg - img/dice6.jpg

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);
