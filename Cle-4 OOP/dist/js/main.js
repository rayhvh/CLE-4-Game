var Game1 = (function () {
    function Game1() {
        this.Startmenu = new Startmenu;
    }
    return Game1;
}());
var Game = (function () {
    function Game() {
        this.player = new Player;
        this.Healthy = new Healthy;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.player.move();
        this.Healthy.auto();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game1();
    var start = document.getElementsByTagName("start");
    window.addEventListener("click", clicked);
});
function clicked() {
    new Game();
}
var Startmenu = (function () {
    function Startmenu() {
        this.div = document.createElement("Start");
        document.body.appendChild(this.div);
    }
    return Startmenu;
}());
var Healthy = (function () {
    function Healthy() {
        var _this = this;
        this.posX = 500;
        this.posY = 20;
        this.rightkey = 37;
        this.leftkey = 39;
        this.div = document.createElement("healthy");
        document.body.appendChild(this.div);
        this.posX = (Math.random() * window.innerWidth);
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        requestAnimationFrame(function () { return _this.auto(); });
    }
    Healthy.prototype.auto = function () {
        this.posY++;
        if (this.posY == window.innerHeight) {
            document.body.removeChild(this.div);
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Healthy;
}());
var Player = (function () {
    function Player() {
        this.posX = window.innerWidth - 130;
        this.posY = window.innerHeight - 100;
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