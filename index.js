// Detects if a button has been clicked
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML; // assigns the letter of the button clicked to the variable

        makeSound(buttonInnerHTML); // this basically sends in the value of te button that was pressed to the makeSound function incase they don't press a key

    });
}

// Detects if a key on the keyboard has been pressed

document.addEventListener("keydown", function (event){ // listens for a key to be pressed and wen it is pressed the function calls te makeSound function

    makeSound(event.key) // event.key tells us which keyboard key was pressed

});



function makeSound(key) {

    switch (key) { //checks throug which key was pressed to play the relevant sound
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log("Can't do that");
            break;
    }


};