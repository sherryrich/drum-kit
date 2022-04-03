let numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "#fff";
        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                let tom1 = new Audio('assets/sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio('assets/sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio('assets/sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio('assets/sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                let snare = new Audio('assets/sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                let crash = new Audio('assets/sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                let kick = new Audio('assets/sounds/kick-bass.mp3');
                kick.play();
                break;

            default: console.log(buttonInnerHTML);
        }


    });

}

//this.style.color = "#fff";



// $0.addEventListener("click", function() {
//     console.log("i got clicked");
// });

// $0.addEventListener(input1, input2);
// function respondToClick() {
//     console.log("I got clicked");
// }


