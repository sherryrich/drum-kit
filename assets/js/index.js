let numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumsButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
     
       this.style.color = "#fff";
       
    });

}


// let audio = new Audio('assets/sounds/tom-1.mp3');
// audio.play();



// $0.addEventListener("click", function() {
//     console.log("i got clicked");
// });

// $0.addEventListener(input1, input2);
// function respondToClick() {
//     console.log("I got clicked");
// }


