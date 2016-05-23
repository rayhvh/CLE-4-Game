/// <reference path="health/game.ts" />

window.addEventListener("load", function() {
    new Game1();
    var start = document.getElementsByTagName("start");
    window.addEventListener("click", clicked);
    
});

function clicked() {
    new Game();
        
}