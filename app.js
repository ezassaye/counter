let buttonClicked= function(){
    console.log("it works!")
}
let addListener = function(btn){
    btn.addEventListener("clicked",buttonClicked);
}
let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll("button");
btns.forEach(addListeners);

