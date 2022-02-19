var randomPlayer1= Math.floor(Math.random()*6 + 1);
var randomPlayer1Source="dice"+randomPlayer1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomPlayer1Source);
var randomPlayer2= Math.floor(Math.random()*6 + 1);
var randomPlayer2Source="dice"+randomPlayer2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomPlayer2Source);

if (randomPlayer1>randomPlayer2) {
    document.querySelector('h1').innerHTML="Player 1 wins!!!";
} else if (randomPlayer1<randomPlayer2) {
    document.querySelector('h1').innerHTML="Player 2 wins!!!";
}else{
    document.querySelector('h1').innerHTML=" it's a Draw";
}
    
