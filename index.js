// Generate random numbers for the dice dice.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Get dice image elements.
var diceImg1 = document.querySelector(".dice .img1");
var diceImg2 = document.querySelector(".dice .img2");

// Change dice image to corresponding random number.
diceImg1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
diceImg2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Get h1 element.
var heading = document.querySelector("h1");

// Check winner based on random numbers.
if(randomNumber1 === randomNumber2) {
    heading.innerHTML = "Draw!";
} else if(randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
} else {
    heading.innerHTML = "Player 2 Wins! 🚩"; 
}