var ramdomNumber1=Math.floor(Math.random()*6);
var ramdomNumber2=Math.floor(Math.random()*6);

var randomImage=new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");


document.querySelector(".img2").setAttribute('src',randomImage[ramdomNumber2]);
document.querySelector(".img1").setAttribute('src',randomImage[ramdomNumber1]);

if (ramdomNumber1===ramdomNumber2){
  document.querySelector("h1").innerHTML="Draw!"
}else
if(ramdomNumber1<ramdomNumber2){

document.querySelector("h1").innerHTML="Player 2 Wins!"
}else{
  document.querySelector("h1").innerHTML="Play 1 Wins!"
}
