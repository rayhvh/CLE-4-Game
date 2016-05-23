var Game1 = (function () {
    function Game1() {
        this.Startmenu = new Startmenu;
    }
    return Game1;
}());
var Game = (function () {
    function Game() {
        this.player = new Player;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.player.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
    new Game1();
});
var Startmenu = (function () {
    function Startmenu() {
        this.div = document.createElement("Start");
        document.body.appendChild(this.div);
    }
    return Startmenu;
}());
var Player = (function () {
    function Player() {
        this.posX = 500;
        this.posY = 500;
        this.rightkey = 37;
        this.leftkey = 39;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.rightkey:
                this.upSpeed = 5;
                break;
            case this.leftkey:
                this.downSpeed = 5;
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.rightkey:
                this.upSpeed = 0;
                break;
            case this.leftkey:
                this.downSpeed = 0;
                break;
        }
    };
    Player.prototype.move = function () {
        this.posX = this.posX - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
    };
    return Player;
}());
//# sourceMappingURL=main.js.map