var Game = (function () {
    function Game() {
        this.Healthys = new Array();
        this.frameCounter = 0;
        this.spawnFrequency = 60;
        this.player = new Player;
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.spawnObject = function () {
        this.Healthys.push(new Healthy());
    };
    Game.prototype.gameLoop = function () {
        this.frameCounter++;
        if (this.frameCounter > this.spawnFrequency) {
            this.spawnObject();
            this.frameCounter = 0;
            console.log(this.frameCounter);
        }
        this.player.move();
        for (var i = 0; i < this.Healthys.length; i++) {
            this.Healthys[i].update();
        }
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Healthy = (function () {
    function Healthy() {
        this.posX = 500;
        this.posY = 20;
        this.rightkey = 37;
        this.leftkey = 39;
        this.div = document.createElement("healthy");
        document.body.appendChild(this.div);
        this.posX = (Math.random() * window.innerWidth);
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
    Healthy.prototype.update = function () {
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