var Game = (function () {
    function Game() {
        this.Healthys = new Array();
        this.Apples = new Array();
        this.frameCounter = 0;
        this.spawnFrequency = 60;
        this.player = new Player;
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.spawnObject = function () {
        this.Healthys.push(new Healthy());
        this.Apples.push(new Apple(this));
    };
    Game.prototype.gameLoop = function () {
        this.frameCounter++;
        if (this.frameCounter > this.spawnFrequency) {
            this.spawnObject();
            this.frameCounter = 0;
        }
        this.player.move();
        this.updateElements();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.updateElements = function () {
        for (var _i = 0, _a = this.Healthys; _i < _a.length; _i++) {
            var h = _a[_i];
            if (h.removeMe) {
                var i = this.Healthys.indexOf(h);
                this.Healthys.splice(i, 1);
                console.log("verwijder bubble " + i + " array = " + this.Healthys.length);
            }
            else {
                h.update();
                if (this.utils.hasOverlap(h, this.player))
                    h.hit();
            }
        }
        for (var _b = 0, _c = this.Apples; _b < _c.length; _b++) {
            var a = _c[_b];
            if (a.removeMe) {
                var i = this.Apples.indexOf(a);
                this.Apples.splice(i, 1);
                console.log("verwijder appel " + i + " array = " + this.Apples.length);
            }
            else {
                a.update();
                if (this.utils.hasOverlap(a, this.player))
                    a.hit();
            }
        }
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.hasOverlap = function (c1, c2) {
        return !(c2.posX > c1.posX + c1.width || c2.posX + c2.width < c1.posX || c2.posY > c1.posY + c1.height || c2.posY + c2.height < c1.posY);
    };
    return Utils;
}());
var Apple = (function () {
    function Apple(g) {
        this.rightkey = 37;
        this.leftkey = 39;
        this.count = 0;
        this.game = g;
        this.removeMe = false;
        this.div = document.createElement("apple");
        document.body.appendChild(this.div);
        this.startPosition();
    }
    Apple.prototype.startPosition = function () {
        this.posX = 500;
        this.posY = -50;
        this.width = 50;
        this.height = 50;
        this.posX = (Math.random() * window.innerWidth);
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Apple.prototype.hit = function () {
        console.log("hitApple");
        this.count++;
    };
    Apple.prototype.update = function () {
        if (this.count == 1) {
            this.removeFromGame();
        }
        else if (this.posY == window.innerHeight + 200) {
            console.log("erin");
            this.removeFromGame();
        }
        else {
            this.posY += 5;
            this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        }
    };
    Apple.prototype.removeFromGame = function () {
        this.removeMe = true;
        document.body.removeChild(this.div);
    };
    return Apple;
}());
var Healthy = (function () {
    function Healthy() {
        this.rightkey = 37;
        this.leftkey = 39;
        this.count = 0;
        this.div = document.createElement("healthy");
        document.body.appendChild(this.div);
        this.startPosition();
    }
    Healthy.prototype.startPosition = function () {
        this.posX = 500;
        this.posY = -50;
        this.width = 50;
        this.height = 50;
        this.posX = (Math.random() * window.innerWidth);
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Healthy.prototype.hit = function () {
        this.count++;
    };
    Healthy.prototype.update = function () {
        this.posY += 5;
        if (this.count == 1) {
            this.removeFromGame();
        }
        if (this.count == 0 && this.posY == window.innerHeight + 200) {
            this.removeFromGame();
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Healthy.prototype.removeFromGame = function () {
        this.removeMe = true;
        document.body.removeChild(this.div);
    };
    return Healthy;
}());
var Player = (function () {
    function Player() {
        this.rightkey = 37;
        this.leftkey = 39;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        this.startPosition();
    }
    Player.prototype.startPosition = function () {
        this.posX = window.innerWidth - 130;
        this.posY = window.innerHeight - 100;
        this.width = 130;
        this.height = 110;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
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