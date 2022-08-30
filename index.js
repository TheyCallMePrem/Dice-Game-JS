var randomNumber1= 1 + Math.floor(Math.random() * 6);
var randomNumber2= 1 + Math.floor(Math.random() * 6);


var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");
// document.querySelectorAll("img")[0].setAttribute("src", "images\dice6.png");
// document.querySelectorAll("img")[1].setAttribute("src", "images\dice6.png");
var s1 = "dice" +  randomNumber1+ ".png"
var s2 = "dice" +  randomNumber2+ ".png"

document.querySelectorAll("img")[0].setAttribute("src", s1);
document.querySelectorAll("img")[1].setAttribute("src", s2);

var heading= document.querySelector("h1");
if(randomNumber1>randomNumber2){
    heading.innerHTML = "Player 1 wins!";
}

else if(randomNumber1<randomNumber2){
    heading.innerHTML = "Player 2 wins!";
}
else{
    heading.innerHTML = "It's a draw!";S

}
// alert(img1);
// var els=document.getElementsByClassName("dice")[0];
// els.setAttribute("dice"+ randomNumber1 + ".png");
 
