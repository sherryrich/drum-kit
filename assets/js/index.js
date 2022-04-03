let numberOfDrumsButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i<numberOfDrumsButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("i got clicked");
});

}