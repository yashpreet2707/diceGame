
var player1 = prompt("What is Player 1 name?");
var player2 = prompt("What is Player 2 name?");

document.querySelectorAll("p")[0].innerHTML = player1 ;
document.querySelectorAll("p")[1].innerHTML = player2 ;


var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ;
var randomDiceImage1 = randomNumber1 + ".png" ;
var randomImageSource1 = "./images/" + randomDiceImage1 ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1 ) ;

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;
var randomDiceImage2 = randomNumber2 + ".png" ;
var randomImageSource2 = "./images/" + randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2 ) ;


if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = player1 + " is the winner 🥳" ;
}
else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = player2 + " is the winner 🥳" ;
}
else {
    document.querySelector("h1").innerHTML = "DRAW" ;
}