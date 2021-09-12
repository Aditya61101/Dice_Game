//To get a random number b/w 1 to 6
var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);

// Using String Template
// document.querySelector(".img1").setAttribute(`src`,`images/dice${randomNumber1}.png`);
// document.querySelector(".img2").setAttribute(`src`,`images/dice${randomNumber2}.png`);

//Using String Concatenation
//document.querySelector(".img1").setAttribute(`src`,"images/"+"dice"+"randomNumber1"+".png");
//document.querySelector(".img2").setAttribute(`src`,"images/"+"dice"+"randomNumber2"+".png");

//Using if else statement
// For Player 1
if(randomNumber1===1)
document.querySelector(".img1").setAttribute(`src`,`images/dice1.png`);
else if(randomNumber1===2)
document.querySelector(".img1").setAttribute(`src`,`images/dice2.png`);
else if(randomNumber1===3)
document.querySelector(".img1").setAttribute(`src`,`images/dice3.png`);
else if(randomNumber1===4)
document.querySelector(".img1").setAttribute(`src`,`images/dice4.png`);
else if(randomNumber1===5)
document.querySelector(".img1").setAttribute(`src`,`images/dice5.png`);
else if(randomNumber1===6)
document.querySelector(".img1").setAttribute(`src`,`images/dice6.png`);

// For Player 2
if(randomNumber2===1)
document.querySelector(".img2").setAttribute(`src`,`images/dice1.png`);
else if(randomNumber2===2)
document.querySelector(".img2").setAttribute(`src`,`images/dice2.png`);
else if(randomNumber2===3)
document.querySelector(".img2").setAttribute(`src`,`images/dice3.png`);
else if(randomNumber2===4)
document.querySelector(".img2").setAttribute(`src`,`images/dice4.png`);
else if(randomNumber2===5)
document.querySelector(".img2").setAttribute(`src`,`images/dice5.png`);
else if(randomNumber2===6)
document.querySelector(".img2").setAttribute(`src`,`images/dice6.png`);

// To decide who is the winner
if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent="✌ Player 1 Wins";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").textContent="Player 2 Wins ✌";
else
document.querySelector("h1").textContent="Draw!";
//document.getElementsByTagName("html").reset(); 