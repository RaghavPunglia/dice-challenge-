var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "Dice" + randomNumber1 + ".png";
var randomImageSrc = "./images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc2 = "./images/Dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYEER 2 WINS!!"
}
else {
    document.querySelector("h1").innerHTML = "GAME IS DRAWN"
}