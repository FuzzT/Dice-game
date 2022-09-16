var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumberImage = "dice" + randomNumber1 + ".png"

var randomNumberImageSource = "images/" + randomNumberImage 

document.querySelectorAll("img")[0].setAttribute("src",randomNumberImageSource)

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomNumberImageSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src",randomNumberImageSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🥳 Player1 wins!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " Player2 wins! 🥳 "
}
else{
    document.querySelector("h1").innerHTML = " Draw 🥱"
}