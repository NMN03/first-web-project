var randomNumber=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
if(randomNumber===1)
document.querySelector(".img1").setAttribute("src","images/dice1.png");
else if(randomNumber===2)
document.querySelector(".img1").setAttribute("src","images/dice2.png");
else if(randomNumber===3)
document.querySelector(".img1").setAttribute("src","images/dice3.png");
else if(randomNumber===4)
document.querySelector(".img1").setAttribute("src","images/dice4.png");
else if(randomNumber===5)
document.querySelector(".img1").setAttribute("src","images/dice5.png");
else
document.querySelector(".img2").setAttribute("src","images/dice6.png");
if(randomNumber2===1)
document.querySelector(".img2").setAttribute("src","images/dice1.png");
else if(randomNumber2===2)
document.querySelector(".img2").setAttribute("src","images/dice2.png");
else if(randomNumber2===3)
document.querySelector(".img2").setAttribute("src","images/dice3.png");
else if(randomNumber2===4)
document.querySelector(".img2").setAttribute("src","images/dice4.png");
else if(randomNumber2===5)
document.querySelector(".img2").setAttribute("src","images/dice5.png");
else
document.querySelector(".img2").setAttribute("src","images/dice6.png");
if(randomNumber===randomNumber2)
document.querySelector("h1").innerHTML="Draw";
else if(randomNumber>randomNumber2)
document.querySelector("h1").innerHTML="Player1 Wins";
else
document.querySelector("h1").innerHTML="Player2 Wins";
setTimeout(function(){
  document.querySelector("h1").innerHTML="Refresh Me";
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
},3000)
